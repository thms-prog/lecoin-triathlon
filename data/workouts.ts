// Séances du jour. Le vrai programme s'écrit en texte dans data/programme/ (voir FORMAT.md)
// et est lu par lib/programme.ts ; la séance ci-dessous sert d'exemple tant qu'il est vide.
// Une séance = des blocs, chaque bloc peut porter une intensité (FTP, VMA, CSS) et un RPE.

export type Discipline = "swim" | "bike" | "run";

export interface WorkoutBlock {
  text: string;
  ftp?: string;
  vma?: string;
  css?: string;
  rpe?: string;
  // Fourchette affichée telle qu'écrite (« 55-65% »), l'intensité ci-dessus en est le milieu.
  label?: string;
  // Durée en minutes, ou distance en mètres (natation).
  min?: number;
  meters?: number;
  // Répétition (« 4 × [5' | 3'] ») : une ligne dans la liste, un segment par barre du profil.
  segments?: WorkoutBlock[];
  // Consigne sans durée (ex. option extérieur), absente du profil.
  note?: boolean;
}

export interface Workout {
  date: string;
  discipline: Discipline;
  title: string;
  duration: string;
  summary: string;
  blocks: WorkoutBlock[];
}

export const DISCIPLINE_LABEL: Record<Discipline, string> = {
  swim: "Nage",
  bike: "Vélo",
  run: "Course",
};

// Image du hero par discipline : le programme du mois n'a pas à fournir d'image par séance.
export const DISCIPLINE_HERO: Record<Discipline, string> = {
  swim: "/images/hero/nage.jpg",
  bike: "/images/hero/velo.jpg",
  run: "/images/hero/course.jpg",
};

// Séance d'exemple, affichée tant qu'aucune séance du programme ne tombe dans la fenêtre J à J-3.
const work = { text: "assis 55-60 rpm", min: 5, ftp: "0.75" };
const rest = { text: "récup cadence libre", min: 3, ftp: "0.55" };
export const DEMO_WORKOUT: Workout = {
  date: "2026-09-02",
  discipline: "bike",
  title: "Faible cadence 4×5'",
  duration: "1h",
  summary:
    "Séance de force : 55-60 rpm assis, ça doit tirer dans les jambes, pas dans les poumons. Faisable au home trainer ou dehors.",
  blocks: [
    { text: "échauffement progressif, cadence normale", min: 10, ftp: "0.60" },
    {
      text: "4 × [5' 75% FTP assis 55-60 rpm + 3' 55% FTP récup cadence libre] · sensation de force dans les jambes, pas d'essoufflement",
      min: 32,
      ftp: "0.75",
      rpe: "6",
      segments: [work, rest, work, rest, work, rest, work, rest],
    },
    { text: "retour au calme", min: 10, ftp: "0.60" },
    { text: "Option extérieur : mêmes blocs sur une montée régulière, gros braquet, assis à 55-60 rpm", note: true },
  ],
};
