"use server";

import { revalidatePath } from "next/cache";
import { createLoginLink, requireCoach } from "@/lib/auth";
import { createAthlete, getUser } from "@/lib/users";

export type CreateState = { error?: string; ok?: string };

export async function addAthlete(_: CreateState, form: FormData): Promise<CreateState> {
  await requireCoach();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  if (name.length < 2) return { error: "Indique le prénom et le nom." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Adresse e-mail invalide." };
  const { user, error } = await createAthlete(email, name);
  if (error) return { error };
  revalidatePath("/coach");
  return { ok: `${user!.name} est ajouté.` };
}

// Lien de connexion à transmettre soi-même à l'athlète (e-mail, message), valable 20 minutes.
export async function athleteLoginLink(athleteId: string): Promise<{ link?: string; error?: string }> {
  await requireCoach();
  const athlete = await getUser(athleteId);
  if (!athlete || athlete.role !== "athlete") return { error: "Athlète introuvable." };
  const link = await createLoginLink(athlete.email);
  return link ? { link } : { error: "Impossible de créer le lien." };
}
