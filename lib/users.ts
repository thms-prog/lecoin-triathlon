import "server-only";
import { randomUUID } from "node:crypto";
import { store } from "./store";

// Comptes de l'espace client (voir docs/espace-client.md).

export type Role = "coach" | "athlete";

// D'où viennent les séances de l'athlète : écrites par le coach, ou un programme de 8 semaines
// posé sur ses dates à partir de son jour de départ (tier 1, après la V1).
export type Plan = { kind: "coaching" } | { kind: "programme"; programme: string; start: string };

export type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
  plan?: Plan;
  createdAt: string;
};

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

// Le coach est désigné par configuration (COACH_EMAILS, séparés par des virgules), pas en base :
// impossible de devenir coach en modifiant ses propres données.
export function isCoachEmail(email: string): boolean {
  const list = (process.env.COACH_EMAILS ?? "").split(",").map(normalizeEmail).filter(Boolean);
  return list.includes(normalizeEmail(email));
}

export async function getUser(id: string): Promise<User | null> {
  return store.get<User>(`user:${id}`);
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const id = await store.get<string>(`user-by-email:${normalizeEmail(email)}`);
  return id ? getUser(id) : null;
}

async function createUser(email: string, name: string, role: Role, plan?: Plan): Promise<User> {
  const user: User = { id: randomUUID(), email: normalizeEmail(email), name: name.trim(), role, plan, createdAt: new Date().toISOString() };
  await store.set(`user:${user.id}`, user);
  await store.set(`user-by-email:${user.email}`, user.id);
  if (role === "athlete") await store.sadd("athletes", user.id);
  return user;
}

// Compte coach créé à sa première connexion.
export async function ensureCoach(email: string): Promise<User> {
  return (await getUserByEmail(email)) ?? createUser(email, "Coach", "coach");
}

export async function createAthlete(email: string, name: string): Promise<{ user?: User; error?: string }> {
  if (await getUserByEmail(email)) return { error: "Un compte existe déjà avec cet e-mail." };
  if (isCoachEmail(email)) return { error: "Cet e-mail est celui du coach." };
  return { user: await createUser(email, name, "athlete", { kind: "coaching" }) };
}

export async function listAthletes(): Promise<User[]> {
  const ids = await store.smembers("athletes");
  const users = await Promise.all(ids.map(getUser));
  return users.filter((u): u is User => u !== null).sort((a, b) => a.name.localeCompare(b.name, "fr"));
}
