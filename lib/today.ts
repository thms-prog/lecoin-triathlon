import { cacheLife } from "next/cache";
import { DEMO_WORKOUT, type Workout } from "@/data/workouts";
import { loadProgramme } from "./programme";

// Date du jour à l'heure de Paris, au format AAAA-MM-JJ.
export function parisToday(now = new Date()): string {
  return new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(now);
}

// Fenêtre décidée : aujourd'hui et les 3 jours précédents, jamais en avance.
export function inWindow(date: string, today: string): boolean {
  const days = (Date.parse(today) - Date.parse(date)) / 86_400_000;
  return days >= 0 && days <= 3;
}

// Séance affichée sur l'accueil : celle du jour, sinon la plus récente des 3 derniers jours
// (jour de repos), sinon la séance d'exemple. Recalculée toutes les heures.
export async function getTodayWorkout(): Promise<Workout> {
  "use cache";
  cacheLife("hours");
  const today = parisToday();
  const recent = loadProgramme().filter((w) => inWindow(w.date, today));
  return recent.at(-1) ?? DEMO_WORKOUT;
}
