// Bibliothèque des entraînements du jour, indexée par date ISO.
// Format repris du Club Tri-Lab (src/Data/Club) : une séance = des blocs,
// chaque bloc peut porter une intensité (FTP, VMA, CSS) et un RPE.

export type Discipline = "swim" | "bike" | "run";

export interface WorkoutBlock {
  text: string;
  ftp?: string;
  vma?: string;
  css?: string;
  rpe?: string;
}

export interface Workout {
  date: string;
  discipline: Discipline;
  title: string;
  duration: string;
  image: string;
  summary: string;
  blocks: WorkoutBlock[];
}

export const DISCIPLINE_LABEL: Record<Discipline, string> = {
  swim: "Nage",
  bike: "Vélo",
  run: "Course",
};

export const WORKOUTS: Workout[] = [
  {
    date: "2026-09-02",
    discipline: "bike",
    title: "Faible cadence 4×5'",
    duration: "~1h",
    image: "/demo/hero-velo.jpg",
    summary:
      "Séance de force : 55-60 rpm assis, ça doit tirer dans les jambes, pas dans les poumons. Faisable au home trainer ou dehors.",
    blocks: [
      { text: "10' échauffement progressif, cadence normale", ftp: "0.60" },
      { text: "4×5' assis, 55-60 rpm · sensation de force dans les jambes, pas d'essoufflement", ftp: "0.75", rpe: "6" },
      { text: "3' récupération cadence libre entre chaque bloc", ftp: "0.55" },
      { text: "10' retour au calme", ftp: "0.60" },
      { text: "Option extérieur : mêmes blocs sur une montée régulière, gros braquet, assis à 55-60 rpm", rpe: "6" },
    ],
  },
];

// Démo : on affiche toujours la séance d'exemple. Plus tard, on cherchera
// la séance dont la date correspond au jour courant.
export function getTodayWorkout(): Workout {
  return WORKOUTS[0];
}
