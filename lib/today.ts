import { cacheLife } from "next/cache";
import { DEMO_WORKOUT, type Workout } from "@/data/workouts";
import { loadProgramme } from "./programme";

// Date du jour à l'heure de Paris, au format AAAA-MM-JJ.
export function parisToday(now = new Date()): string {
  return new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(now);
}

const daysBetween = (from: string, to: string) => Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);

// Fenêtre décidée : aujourd'hui et les 3 jours précédents, jamais en avance.
export function inWindow(date: string, today: string): boolean {
  const days = daysBetween(date, today);
  return days >= 0 && days <= 3;
}

// Libellé d'onglet : « Aujourd'hui », « Hier », sinon « Sam. 31 ».
function dayLabel(date: string, today: string): string {
  const days = daysBetween(date, today);
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Hier";
  const d = new Date(`${date}T12:00:00Z`);
  const weekday = d.toLocaleDateString("fr-FR", { weekday: "short", timeZone: "UTC" });
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${d.getUTCDate()}`;
}

export type RecentWorkout = { workout: Workout; label: string; isToday: boolean };

// Séances consultables sur l'accueil, de la plus récente à la plus ancienne (J à J-3, sans les
// jours de repos), sinon la séance d'exemple. Recalculées toutes les heures.
export async function getRecentWorkouts(): Promise<RecentWorkout[]> {
  "use cache";
  cacheLife("hours");
  const today = parisToday();
  const recent = loadProgramme()
    .filter((w) => inWindow(w.date, today))
    .reverse()
    .map((workout) => ({ workout, label: dayLabel(workout.date, today), isToday: workout.date === today }));
  return recent.length ? recent : [{ workout: DEMO_WORKOUT, label: "Exemple", isToday: false }];
}
