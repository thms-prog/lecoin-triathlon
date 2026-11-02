import type { WorkoutBlock } from "@/data/workouts";

// Lecture des blocs d'une séance, partagée par le hero et la séance détaillée.

// Grande valeur d'intensité (ex. "75%" ou la fourchette écrite "55-65%") + son unité (ex. "FTP").
export function intensity(block: WorkoutBlock): { value: string; unit: string } | null {
  const unit = block.ftp ? "FTP" : block.vma ? "VMA" : block.css ? "CSS" : block.rpe ? "RPE" : null;
  if (!unit) return null;
  if (block.label) return { value: block.label, unit };
  const ratio = block.ftp ?? block.vma ?? block.css;
  return { value: ratio ? `${Math.round(Number(ratio) * 100)}%` : block.rpe!, unit };
}

// Intensité en pourcentage pour dessiner le profil ; le RPE /10 est ramené sur 100.
export function percent(block: WorkoutBlock): number | null {
  const ratio = block.ftp ?? block.vma ?? block.css;
  if (ratio) return Math.round(Number(ratio) * 100);
  if (block.rpe) return Number(block.rpe) * 10;
  return null;
}

// Durée en minutes ; une distance de nage compte 1 minute pour 50 m (base 2'00/100 m).
export function minutes(block: WorkoutBlock): number | null {
  if (block.note) return null;
  if (block.min) return block.min;
  if (block.meters) return block.meters / 50;
  return null;
}

// Quantité affichée dans la liste : « 10' », « 1h30 », « 400 m ».
export function quantityLabel(block: WorkoutBlock): string {
  if (block.meters) return block.meters >= 1000 ? `${(block.meters / 1000).toLocaleString("fr-FR")} km` : `${block.meters} m`;
  if (!block.min) return "—";
  if (block.min < 1) return `${Math.round(block.min * 60)}''`;
  const m = Math.round(block.min);
  return m >= 60 ? `${Math.floor(m / 60)}h${m % 60 ? String(m % 60).padStart(2, "0") : ""}` : `${m}'`;
}
