"use client";

import { useState } from "react";
import type { Workout } from "@/data/workouts";
import IntensityProfile from "@/components/home/IntensityProfile";
import { ATHLETE, FORM, SPORT_LABEL, WEEKS, WEEK_STATUS, compliance, daysToRace } from "@/lib/demo-espace";
import { FormChart, Ring, VolumeChart } from "./charts";
import { AlertPill, Avatar, DAY_SHORT, SportDot, StatusPill, TestCards, Thread, freshness, sortedAthletes } from "./parts";

// TEMP /variantes — B « Ma semaine » : l'action d'abord (valider sa séance), les graphiques ensuite.

export function ValidateToday() {
  const [rpe, setRpe] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  if (sent) return <p className="mt-4 rounded-xl bg-accent/15 px-3 py-2 text-sm text-fg">✓ Séance validée · RPE {rpe}. Ton coach est prévenu.</p>;
  return (
    <div className="mt-4 space-y-3">
      <div>
        <p className="mb-1.5 text-xs text-muted">Ressenti (RPE)</p>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRpe(n)}
              className={`size-7 rounded-full border text-xs font-semibold transition ${rpe === n ? "border-accent bg-accent text-fg" : "border-white/15 text-muted hover:text-fg"}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
      <textarea rows={2} placeholder="Un mot pour ton coach (facultatif)" className="w-full resize-none rounded-xl border border-white/10 bg-bg/60 px-3 py-2 text-sm text-fg placeholder:text-muted-2" />
      <div className="flex gap-2">
        <button type="button" disabled={!rpe} onClick={() => setSent(true)} className="heading flex-1 rounded-full bg-accent py-2.5 text-xs text-fg shadow-[0_0_20px_rgba(0,129,143,0.6)] transition disabled:opacity-40">
          Séance faite
        </button>
        <button type="button" className="heading rounded-full border border-white/15 px-4 py-2.5 text-xs text-muted hover:text-fg">Pas faite</button>
      </div>
    </div>
  );
}

const TABS = ["Forme", "Volume", "Tests"] as const;

export function AthleteB({ week }: { week: Workout[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Forme");
  const now = FORM[FORM.length - 1];
  const fresh = freshness(now.tsb);
  const todayIndex = WEEK_STATUS.findIndex((s) => s.status === "today");

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-accent">Semaine 12 · bloc force et base</p>
          <p className="heading mt-1 text-2xl text-fg md:text-3xl">Jeudi, c&apos;est nage</p>
          <p className="mt-1 text-sm text-muted">
            {ATHLETE.goal} · <span className="text-fg">J-{daysToRace}</span> · fraîcheur <span className={fresh.cls}>{fresh.label.toLowerCase()}</span>
          </p>
        </div>
        <Ring value={compliance} size={88} label="régularité" />
      </header>

      {/* Les 6 jours en cartes qu'on fait glisser ; aujourd'hui en grand, avec la validation. */}
      <div className="-mx-5 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
        {week.map((w, i) => {
          const st = WEEK_STATUS[i];
          const today = i === todayIndex;
          return (
            <article
              key={w.date}
              className={`shrink-0 snap-start rounded-3xl p-4 ${today ? "neon w-80 bg-panel md:w-96" : "w-56 border border-white/10 bg-panel/70"} ${st.status === "missed" ? "opacity-70" : ""}`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs text-muted">{DAY_SHORT[i]} {Number(w.date.slice(8))} nov.</p>
                <StatusPill status={st.status} />
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted"><SportDot sport={w.discipline} />{SPORT_LABEL[w.discipline]} · {w.duration}</p>
              <p className={`mt-1 font-semibold text-fg ${today ? "heading text-lg" : "line-clamp-2 text-sm"}`}>{w.title}</p>
              <div className="mt-3"><IntensityProfile workout={w} height={today ? 56 : 32} /></div>
              {st.comment && !today && <p className="mt-3 line-clamp-2 text-xs text-muted">« {st.comment} »</p>}
              {st.rpe && <p className="mt-2 text-xs text-muted">RPE {st.rpe}/10</p>}
              {today && <ValidateToday />}
            </article>
          );
        })}
      </div>

      <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <div role="tablist" className="mb-5 flex gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className="flex-1 text-left"
            >
              <span className={`block h-0.5 rounded-full ${tab === t ? "bg-[#3fe0ec]" : "bg-white/10"}`} />
              <span className={`heading mt-2 block text-sm ${tab === t ? "text-fg" : "text-muted"}`}>{t}</span>
            </button>
          ))}
        </div>
        {tab === "Forme" && <FormChart points={FORM} />}
        {tab === "Volume" && <VolumeChart weeks={WEEKS} />}
        {tab === "Tests" && <TestCards />}
      </section>

      <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <h2 className="eyebrow mb-4 text-muted">Échanges avec ton coach</h2>
        <Thread />
      </section>
    </div>
  );
}

export function CoachB({ week }: { week: Workout[] }) {
  const athletes = sortedAthletes();
  const [sel, setSel] = useState(0);
  const a = athletes[sel];
  const fresh = freshness(a.tsb);
  return (
    <div className="grid gap-5 lg:grid-cols-[22rem_1fr]">
      <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-3">
        <p className="eyebrow px-2 pt-2 pb-3 text-muted">À traiter en premier</p>
        <ul className="space-y-1">
          {athletes.map((x, i) => (
            <li key={x.name}>
              <button
                type="button"
                onClick={() => setSel(i)}
                className={`flex w-full items-start gap-3 rounded-2xl p-3 text-left transition ${i === sel ? "bg-accent/15 ring-1 ring-accent/50" : "hover:bg-white/5"}`}
              >
                <Avatar initials={x.initials} />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-fg">{x.name}</span>
                    {x.alerts.length > 0 && <span className="size-2 rounded-full bg-[#3fe0ec]" aria-label="à traiter" />}
                  </span>
                  <span className="block truncate text-xs text-muted">{x.last}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="min-w-0 space-y-5">
        <div className="rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Avatar initials={a.initials} size={44} />
              <div>
                <p className="heading text-xl text-fg">{a.name}</p>
                <p className="text-sm text-muted">{a.goal}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">{a.alerts.map((k) => <AlertPill key={k} kind={k} />)}</div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-bg/50 p-3"><p className="text-xs text-muted">Régularité</p><p className="text-xl font-semibold text-fg">{a.compliance}%</p></div>
            <div className="rounded-2xl bg-bg/50 p-3"><p className="text-xs text-muted">Forme</p><p className="text-xl font-semibold text-fg">{a.ctl}</p></div>
            <div className="rounded-2xl bg-bg/50 p-3"><p className="text-xs text-muted">Fraîcheur</p><p className={`text-xl font-semibold ${fresh.cls}`}>{fresh.label}</p></div>
          </div>
          <div className="mt-5 grid grid-cols-6 gap-1.5">
            {week.map((w, i) => (
              <div key={w.date} className="rounded-xl bg-bg/50 p-2 text-center">
                <p className="text-[0.65rem] text-muted">{DAY_SHORT[i]}</p>
                <span className="mx-auto mt-1 block w-fit"><SportDot sport={w.discipline} /></span>
                <p className="mt-1 text-xs" aria-label={WEEK_STATUS[i].status}>
                  {{ done: "✓", missed: "✕", today: "●", upcoming: "○" }[WEEK_STATUS[i].status]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
          <h2 className="eyebrow mb-4 text-muted">Conversation</h2>
          <Thread />
          <div className="mt-4 flex gap-2">
            <input placeholder={`Répondre à ${a.name.split(" ")[0]}…`} className="min-w-0 flex-1 rounded-full border border-white/10 bg-bg/60 px-4 py-2.5 text-sm text-fg placeholder:text-muted-2" />
            <button type="button" className="heading rounded-full bg-accent px-5 text-xs text-fg">Envoyer</button>
          </div>
        </div>
      </section>
    </div>
  );
}
