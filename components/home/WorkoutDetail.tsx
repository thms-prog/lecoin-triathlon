"use client";

import { useState } from "react";
import { DISCIPLINE_LABEL, type Workout } from "@/data/workouts";
import IntensityProfile from "./IntensityProfile";
import { intensity, minutes } from "./intensity";
import Section from "./Section";

// Profil d'intensité façon Zwift en grand (largeur = durée, hauteur = intensité), liste des blocs
// dessous ; survoler une barre ou une ligne met l'autre en évidence.
export default function WorkoutDetail({ workout }: { workout: Workout }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="seance" eyebrow={`Séance détaillée · ${DISCIPLINE_LABEL[workout.discipline]}`} title={workout.title}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.7fr] md:gap-16">
        <div>
          <p className="leading-relaxed text-muted">{workout.summary}</p>
          <p className="mt-6 text-sm font-semibold tracking-widest text-muted-2 uppercase">Durée {workout.duration}</p>
        </div>

        <div>
          <div className="rounded-3xl border border-white/10 bg-panel/60 p-5 md:p-6">
            <div className="mb-3 flex justify-between text-xs text-muted">
              <span>Intensité</span>
              <span>Temps →</span>
            </div>
            <IntensityProfile workout={workout} height={160} showScale active={active} onActive={setActive} />
          </div>

          <ol className="mt-4">
            {workout.blocks.map((block, i) => {
              const value = intensity(block);
              const min = minutes(block);
              const on = active === i;
              return (
                <li
                  key={i}
                  onPointerEnter={() => setActive(i)}
                  onPointerLeave={() => setActive(null)}
                  className={`grid grid-cols-[3rem_6rem_1fr] items-baseline gap-3 rounded-xl px-3 py-3 transition md:grid-cols-[4rem_8rem_1fr] ${on ? "bg-white/5" : ""}`}
                >
                  <span className="text-sm text-muted-2 tabular-nums">{min ? `${min}'` : "—"}</span>
                  <span className={`heading tabular-nums transition ${on ? "text-[#3fe0ec]" : "text-accent"}`}>
                    {value ? `${value.value} ${value.unit}` : "—"}
                  </span>
                  <div>
                    <p className="leading-relaxed text-fg">{block.text}</p>
                    {block.rpe && value?.unit !== "RPE" && <p className="mt-1 text-sm text-muted-2">RPE {block.rpe}/10</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
