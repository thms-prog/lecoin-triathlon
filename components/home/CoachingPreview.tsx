"use client";

import { useState } from "react";
import type { Workout } from "@/data/workouts";
import { FormChart, VolumeChart } from "@/components/espace/charts";
import { Dial, Rail } from "@/components/espace/gauges";
import { ATHLETE, FORM, SPORT_COLOR, SPORT_LABEL, WEEKS, WEEK_STATUS, compliance, daysToRace } from "@/lib/demo-espace";

// Aperçu de l'espace coaché (design validé, variante D) avec des données d'exemple :
// jauge de fraîcheur et mesures, semaine en ligne de temps, courbes, message du coach.
const DAYS = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];
const TABS = ["Forme", "Volume"] as const;

export default function CoachingPreview({ week }: { week: Workout[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Forme");
  const now = FORM[FORM.length - 1];

  return (
    <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="text-xs text-muted">
          <span className="text-fg">{ATHLETE.name}</span> · 70.3 Aix
        </p>
        <span className="eyebrow rounded-full border border-white/10 px-2.5 py-1 text-[0.6rem] text-muted">Exemple</span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {/* PC : jauge au centre, mesures de part et d'autre. */}
        <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-2 sm:grid">
          <div className="space-y-3">
            <Rail label="Forme" value={String(now.ctl)} sub="42 jours" />
            <Rail label="Fatigue" value={String(now.atl)} sub="7 jours" />
          </div>
          <Dial value={now.tsb} size={150} />
          <div className="space-y-3">
            <Rail label="Course" value={`J-${daysToRace}`} sub="70.3" align="right" />
            <Rail label="Régularité" value={`${compliance}%`} sub="4 semaines" align="right" />
          </div>
        </div>
        {/* Smartphone : jauge, puis les 4 mesures sur deux colonnes (rien ne déborde). */}
        <div className="sm:hidden">
          <Dial value={now.tsb} size={150} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Rail label="Forme" value={String(now.ctl)} sub="42 jours" />
            <Rail label="Course" value={`J-${daysToRace}`} sub="70.3" />
            <Rail label="Fatigue" value={String(now.atl)} sub="7 jours" />
            <Rail label="Régularité" value={`${compliance}%`} sub="4 semaines" />
          </div>
        </div>

        <ol className="relative grid grid-cols-6 gap-1 rounded-2xl bg-bg/50 px-1 py-3">
          <span className="absolute inset-x-[9%] top-[1.35rem] h-px bg-white/10" aria-hidden />
          {week.map((w, i) => {
            const st = WEEK_STATUS[i].status;
            return (
              <li key={w.date} className="relative text-center">
                <span
                  className={`relative mx-auto block size-4 rounded-full border-2 ${
                    st === "today" ? "border-[#3fe0ec] bg-accent shadow-[0_0_14px_rgba(63,224,236,.8)]" : st === "done" ? "border-[#3fe0ec] bg-[#3fe0ec]" : st === "missed" ? "border-crit bg-bg" : "border-white/20 bg-bg"
                  }`}
                  aria-label={st}
                />
                <span className="mt-1.5 block text-[0.65rem] text-muted">{DAYS[i]}</span>
                <span className="mt-0.5 flex items-center justify-center gap-1 text-[0.65rem] text-fg">
                  <span className="size-1.5 rounded-full" style={{ background: SPORT_COLOR[w.discipline] }} />
                  <span className="hidden sm:inline">{SPORT_LABEL[w.discipline]}</span>
                </span>
              </li>
            );
          })}
        </ol>

        <div className="hidden md:block">
          <div role="tablist" className="mb-3 flex gap-2">
            {TABS.map((t) => (
              <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className="flex-1 text-left">
                <span className={`block h-0.5 rounded-full ${tab === t ? "bg-[#3fe0ec]" : "bg-white/10"}`} />
                <span className={`heading mt-1.5 block text-xs ${tab === t ? "text-fg" : "text-muted"}`}>{t}</span>
              </button>
            ))}
          </div>
          {tab === "Forme" ? <FormChart points={FORM} height={170} /> : <VolumeChart weeks={WEEKS} height={160} />}
        </div>

        <div className="hidden gap-2.5 md:flex">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-[0.6rem] font-bold text-fg">TC</span>
          <p className="rounded-2xl bg-accent/15 px-3 py-2 text-sm text-fg">
            Bien géré ce mercredi. Je décale le vélo à vendredi et je raccourcis samedi.
          </p>
        </div>
      </div>
    </div>
  );
}
