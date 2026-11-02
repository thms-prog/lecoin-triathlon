"use server";

import { redirect } from "next/navigation";
import { consumeLoginToken, createLoginLink, logout, tooManyLoginRequests } from "@/lib/auth";
import { sendLoginEmail } from "@/lib/email";

export type LoginState = { message?: string; error?: string; devLink?: string };

// Demande de lien. Même réponse que l'e-mail existe ou non : on ne révèle pas qui a un compte.
export async function requestLoginLink(_: LoginState, form: FormData): Promise<LoginState> {
  const email = String(form.get("email") ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Adresse e-mail invalide." };
  if (await tooManyLoginRequests(email)) return { error: "Trop de demandes. Réessaie dans 10 minutes." };

  const link = await createLoginLink(email);
  const generic = { message: "Si un compte existe pour cette adresse, un lien de connexion vient d'y être envoyé. Il est valable 20 minutes." };
  if (!link) return generic;
  // En développement, le lien s'affiche directement (pas d'e-mail).
  if (process.env.NODE_ENV !== "production") return { ...generic, devLink: link };
  await sendLoginEmail(email, link);
  return generic;
}

export async function confirmLogin(form: FormData): Promise<void> {
  const user = await consumeLoginToken(String(form.get("t") ?? ""));
  if (!user) redirect("/connexion?erreur=lien");
  redirect(user.role === "coach" ? "/coach" : "/espace");
}

export async function signOut(): Promise<void> {
  await logout();
  redirect("/connexion");
}
