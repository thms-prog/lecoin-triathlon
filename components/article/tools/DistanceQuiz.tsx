"use client";
import Link from "next/link";
import { useState } from "react";

// « Quel format te correspond ? », repris de Tri-Lab (même barème), au design du site.
// Le résultat mène au calculateur de temps plutôt qu'aux anciens générateurs de plans Tri-Lab.

type Exp = "debutant" | "intermediaire" | "confirme";
type Heures = "<3" | "3-5" | "5-7" | "7-10" | ">10";
type Budget = "petit" | "moyen" | "gros";
type Code = "XS" | "S" | "M" | "L" | "XL";

const EXPERIENCES: { value: Exp; label: string; icon: string }[] = [
  { value: "debutant", label: "Débutant", icon: "🌱" },
  { value: "intermediaire", label: "Intermédiaire", icon: "⚡" },
  { value: "confirme", label: "Confirmé", icon: "🏆" },
];

const HEURES: { value: Heures; label: string }[] = [
  { value: "<3", label: "Moins de 3h" },
  { value: "3-5", label: "3 à 5h" },
  { value: "5-7", label: "5 à 7h" },
  { value: "7-10", label: "7 à 10h" },
  { value: ">10", label: "Plus de 10h" },
];

const BUDGETS: { value: Budget; label: string; icon: string }[] = [
  { value: "petit", label: "Petit", icon: "💶" },
  { value: "moyen", label: "Moyen", icon: "💶💶" },
  { value: "gros", label: "Gros", icon: "💶💶💶" },
];

const PLAN_NAMES: Record<Code, string> = {
  XS: "Découverte (XS)",
  S: "Sprint",
  M: "Olympique",
  L: "Half Ironman (70.3)",
  XL: "Ironman",
};

// Score « capacité à encaisser de la distance » : plus c'est haut, plus le format est long.
const HEURES_PTS: Record<Heures, number> = { "<3": 0, "3-5": 3, "5-7": 5, "7-10": 7, ">10": 9 };
const EXP_PTS: Record<Exp, number> = { debutant: 0, intermediaire: 2, confirme: 4 };
const BUDGET_PTS: Record<Budget, number> = { petit: 0, moyen: 1, gros: 2 };

function computeResult(exp: Exp, h: Heures, budget: Budget): { code: Code; sub: string } {
  const score = HEURES_PTS[h] + EXP_PTS[exp] + BUDGET_PTS[budget];

  let code: Code;
  if (score <= 2) code = "XS";
  else if (score <= 5) code = "S";
  else if (score <= 8) code = "M";
  else if (score <= 11) code = "L";
  else code = "XL";

  const subs: Record<Code, string> = {
    XS: "Format découverte (400 m / 10 km / 2,5 km) : une première ligne d'arrivée sans y passer tes semaines.",
    S:
      exp === "confirme"
        ? "Court et intense : peu de volume, mais le bon terrain pour aller chercher la perf."
        : "Le meilleur compromis pour une première vraie course : accessible et complet.",
    M: "Le format olympique : un vrai défi qui reste gérable avec ta semaine d'entraînement.",
    L:
      exp === "debutant"
        ? "Ambitieux avec ce volume, mais jouable si l'objectif est de finir."
        : "Le 70.3 est à ta portée ; la gestion de l'effort et de la nutrition devient clé.",
    XL:
      exp === "confirme"
        ? "Le défi ultime, et tu as le profil pour viser une vraie performance."
        : "L'Ironman est atteignable avec ce volume, sur un objectif « finir ».",
  };
  return { code, sub: subs[code] };
}

function PillGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string; icon?: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            value === opt.value ? "border-accent bg-accent text-fg" : "border-line text-muted hover:border-accent/60 hover:text-fg"
          }`}
        >
          {opt.icon && <span className="mr-1.5">{opt.icon}</span>}
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function DistanceQuiz() {
  const [exp, setExp] = useState<Exp | null>(null);
  const [heures, setHeures] = useState<Heures | null>(null);
  const [budget, setBudget] = useState<Budget | null>(null);

  const result = exp && heures && budget ? computeResult(exp, heures, budget) : null;

  return (
    <div className="neon my-10 rounded-3xl bg-panel p-5 md:p-8">
      <p className="eyebrow text-accent">Simulateur</p>
      <p className="heading mt-1 text-xl text-fg md:text-2xl">Quel format te correspond ?</p>
      <p className="mt-2 mb-6 text-sm text-muted">Réponds à 3 questions pour obtenir ton format conseillé.</p>

      <div className="space-y-5">
        <div>
          <p className="eyebrow mb-2 text-[0.65rem] text-muted">1. Ton expérience</p>
          <PillGroup options={EXPERIENCES} value={exp} onChange={setExp} />
        </div>
        <div>
          <p className="eyebrow mb-2 text-[0.65rem] text-muted">2. Temps disponible par semaine</p>
          <PillGroup options={HEURES} value={heures} onChange={setHeures} />
        </div>
        <div>
          <p className="eyebrow mb-2 text-[0.65rem] text-muted">3. Budget course</p>
          <PillGroup options={BUDGETS} value={budget} onChange={setBudget} />
        </div>
      </div>

      {result && (
        <div className="mt-6 flex animate-[fadeIn_.4s_ease-out] flex-col justify-between gap-4 rounded-2xl border border-accent/60 bg-bg/60 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-[0.65rem] text-accent">Format conseillé</p>
            <p className="heading mt-1 text-xl text-fg">{PLAN_NAMES[result.code]}</p>
            <p className="mt-1 text-sm text-muted">{result.sub}</p>
          </div>
          <Link
            href="/blog/calculateur-temps-triathlon"
            className="heading shrink-0 rounded-full bg-accent px-5 py-3 text-center text-xs text-fg shadow-[0_0_24px_rgba(0,129,143,0.6)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.8)]"
          >
            Combien de temps pour le finir ? →
          </Link>
        </div>
      )}
    </div>
  );
}
