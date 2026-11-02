import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { store } from "./store";
import { ensureCoach, getUser, getUserByEmail, isCoachEmail, normalizeEmail, type User } from "./users";

// Couche d'accès de l'espace client : liens magiques, sessions, contrôle des rôles.
// Les jetons ne sont jamais stockés en clair : seule leur empreinte SHA-256 est en base.

const LOGIN_TTL = 20 * 60; // lien valable 20 minutes, une seule fois
const SESSION_TTL = 90 * 24 * 3600; // 90 jours, prolongés à chaque visite
const COOKIE = "lt_session";

const hash = (token: string) => createHash("sha256").update(token).digest("hex");
const newToken = () => randomBytes(32).toString("base64url");

export const siteUrl = () => process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

// Lien de connexion pour un compte existant (ou l'e-mail du coach). null si l'e-mail est inconnu.
export async function createLoginLink(email: string): Promise<string | null> {
  const clean = normalizeEmail(email);
  const user = isCoachEmail(clean) ? await ensureCoach(clean) : await getUserByEmail(clean);
  if (!user) return null;
  const token = newToken();
  await store.set(`login:${hash(token)}`, { userId: user.id }, LOGIN_TTL);
  return `${siteUrl()}/connexion/lien?t=${token}`;
}

// Limitation des demandes de lien : 5 par e-mail et par 10 minutes.
export async function tooManyLoginRequests(email: string): Promise<boolean> {
  return (await store.incr(`rl:login:${normalizeEmail(email)}`, 600)) > 5;
}

// Consomme le jeton (usage unique) et ouvre une session. Renvoie l'utilisateur, ou null si le lien
// est invalide, expiré ou déjà utilisé.
export async function consumeLoginToken(token: string): Promise<User | null> {
  const key = `login:${hash(token)}`;
  const entry = await store.get<{ userId: string }>(key);
  if (!entry) return null;
  await store.del(key);
  const user = await getUser(entry.userId);
  if (!user) return null;
  const session = newToken();
  await store.set(`session:${hash(session)}`, { userId: user.id }, SESSION_TTL);
  (await cookies()).set(COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL,
  });
  return user;
}

export async function logout(): Promise<void> {
  const jar = await cookies();
  const session = jar.get(COOKIE)?.value;
  if (session) await store.del(`session:${hash(session)}`);
  jar.delete(COOKIE);
}

// Utilisateur connecté, ou null. Lit le cookie : à appeler derrière <Suspense>.
export async function getCurrentUser(): Promise<User | null> {
  // Lecture propre à la requête (cookie, expirations comparées à l'heure courante).
  await connection();
  const session = (await cookies()).get(COOKIE)?.value;
  if (!session) return null;
  const key = `session:${hash(session)}`;
  const entry = await store.get<{ userId: string }>(key);
  if (!entry) return null;
  const user = await getUser(entry.userId);
  if (!user) return null;
  // Session glissante : chaque visite repousse l'expiration côté serveur.
  await store.set(key, entry, SESSION_TTL);
  return user;
}

// Garde-fous à appeler en tête de chaque page et de chaque action protégée.
export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) redirect("/connexion");
  return user;
}

export async function requireCoach(): Promise<User> {
  const user = await requireUser();
  if (user.role !== "coach") redirect("/espace");
  return user;
}

export async function requireAthlete(): Promise<User> {
  const user = await requireUser();
  if (user.role !== "athlete") redirect("/coach");
  return user;
}
