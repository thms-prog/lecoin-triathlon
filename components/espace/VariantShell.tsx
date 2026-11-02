"use client";

import Link from "next/link";
import { useState } from "react";
import type { Workout } from "@/data/workouts";
import { AthleteA, CoachA } from "./VariantA";
import { AthleteB, CoachB } from "./VariantB";
import { AthleteC, CoachC } from "./VariantC";

// TEMP /variantes : bascule Athlète / Coach et navigation entre les 3 variantes.
const NAMES = { a: "Tableau de bord", b: "Ma semaine", c: "Mission control" } as const;
export type VariantKey = keyof typeof NAMES;

export default function VariantShell({ v, week }: { v: VariantKey; week: Workout[] }) {
  const [view, setView] = useState<"athlete" | "coach">("athlete");
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 md:px-12 md:py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          <Link href="/variantes" className="text-muted hover:text-accent">Variantes</Link>
          <span className="text-muted-2">/</span>
          {(Object.keys(NAMES) as VariantKey[]).map((k) => (
            <Link key={k} href={`/variantes/${k}`} className={`rounded-full px-3 py-1 ${k === v ? "bg-accent text-fg" : "text-muted hover:text-fg"}`}>
              {k.toUpperCase()} · {NAMES[k]}
            </Link>
          ))}
        </nav>
        <div role="tablist" className="flex rounded-full border border-white/10 bg-panel p-1">
          {(["athlete", "coach"] as const).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={view === k}
              onClick={() => setView(k)}
              className={`heading rounded-full px-4 py-1.5 text-xs transition ${view === k ? "bg-accent text-fg" : "text-muted hover:text-fg"}`}
            >
              {k === "athlete" ? "Vue athlète" : "Vue coach"}
            </button>
          ))}
        </div>
      </div>
      {v === "a" && (view === "athlete" ? <AthleteA week={week} /> : <CoachA />)}
      {v === "b" && (view === "athlete" ? <AthleteB week={week} /> : <CoachB week={week} />)}
      {v === "c" && (view === "athlete" ? <AthleteC week={week} /> : <CoachC />)}
    </main>
  );
}
