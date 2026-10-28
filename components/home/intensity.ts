import type { WorkoutBlock } from "@/data/workouts";

// Lecture des blocs d'une séance, partagée par le hero et la séance détaillée.

// Grande valeur d'intensité (ex. "75%") + son unité (ex. "FTP").
export function intensity(block: WorkoutBlock): { value: string; unit: string } | null {
  if (block.ftp) return { value: `${Math.round(Number(block.ftp) * 100)}%`, unit: "FTP" };
  if (block.vma) return { value: `${Math.round(Number(block.vma) * 100)}%`, unit: "VMA" };
  if (block.css) return { value: `${Math.round(Number(block.css) * 100)}%`, unit: "CSS" };
  if (block.rpe) return { value: block.rpe, unit: "RPE" };
  return null;
}

// Intensité en pourcentage pour dessiner le profil ; le RPE /10 est ramené sur 100.
export function percent(block: WorkoutBlock): number | null {
  const ratio = block.ftp ?? block.vma ?? block.css;
  if (ratio) return Math.round(Number(ratio) * 100);
  if (block.rpe) return Number(block.rpe) * 10;
  return null;
}

// Durée lue dans le texte du bloc : « 4×5' » → 20, « 10' » → 10.
// Provisoire : le vrai programme devra porter une durée par bloc.
export function minutes(block: WorkoutBlock): number | null {
  const reps = block.text.match(/(\d+)\s*[×x]\s*(\d+)'/);
  if (reps) return Number(reps[1]) * Number(reps[2]);
  const single = block.text.match(/(\d+)'/);
  return single ? Number(single[1]) : null;
}
