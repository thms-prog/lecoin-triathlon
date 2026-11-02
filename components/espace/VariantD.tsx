"use client";

import { useState } from "react";
import type { Workout } from "@/data/workouts";
import IntensityProfile from "@/components/home/IntensityProfile";
import { intensity, quantityLabel } from "@/components/home/intensity";
import { ATHLETE, FORM, SPORT_COLOR, SPORT_LABEL, WEEKS, WEEK_STATUS, compliance, daysToRace, type CoachAthlete } from "@/lib/demo-espace";
import { FormChart, VolumeChart } from "./charts";
import { AlertPill, Avatar, DAY_SHORT, SportDot, StatusPill, TestCards, Thread, sortedAthletes } from "./parts";
import { ValidateToday } from "./VariantB";
import { Dial, Rail } from "./VariantC";

// TEMP /variantes — D : la synthèse validée par Thomas.
// Athlète : aperçu de C (jauge + rails), semaine de C cliquable avec le détail de la séance,
// cadre à 3 onglets de B (forme / volume / tests), échanges avec le coach juste dessous.
// Coach : messagerie de B ; ouvrir un athlète montre son aperçu, sa semaine et la conversation.

const TODAY = WEEK_STATUS.findIndex((s) => s.status === "today");

function Overview({ ctl, atl, tsb, reg, race, raceSub = "avant l'objectif", title }: { ctl: number; atl: number; tsb: number; reg: number; race: string; raceSub?: string; title: string }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(0,129,143,0.22),transparent_65%)] p-6 md:p-8">
      <p className="eyebrow text-center text-accent">{title}</p>
      <div className="mt-5 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          <Rail label="Forme" value={String(ctl)} sub="moyenne 42 jours" />
          <Rail label="Fatigue" value={String(atl)} sub="moyenne 7 jours" />
        </div>
        <div>
          <Dial value={tsb} size={240} />
          <p className="eyebrow mt-3 text-center text-muted">Fraîcheur du jour</p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:justify-items-end lg:text-right">
          <Rail label="Course" value={race} sub={raceSub} />
          <Rail label="Régularité" value={`${reg}%`} sub="séances validées, 4 sem." />
        </div>
      </div>
    </section>
  );
}

// Semaine en ligne de temps (variante C), chaque jour cliquable.
function WeekTimeline({ week, selected, onSelect }: { week: Workout[]; selected: number; onSelect: (i: number) => void }) {
  return (
    <ol className="relative grid grid-cols-6 gap-1">
      <span className="absolute inset-x-[8%] top-[1.35rem] h-px bg-white/10" aria-hidden />
      {week.map((w, i) => {
        const st = WEEK_STATUS[i].status;
        const on = i === selected;
        return (
          <li key={w.date}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-pressed={on}
              className={`relative w-full rounded-2xl px-1 py-3 text-center transition ${on ? "bg-accent/15 ring-1 ring-accent/60" : "hover:bg-white/5"}`}
            >
              <span
                className={`relative mx-auto block size-5 rounded-full border-2 ${
                  st === "today" ? "animate-pulse border-[#3fe0ec] bg-accent shadow-[0_0_16px_rgba(63,224,236,.8)]" : st === "done" ? "border-[#3fe0ec] bg-[#3fe0ec]" : st === "missed" ? "border-crit bg-bg" : "border-white/20 bg-bg"
                }`}
                aria-label={st}
              />
              <span className="mt-2 block text-xs text-muted">{DAY_SHORT[i]}</span>
              <span className="mt-1 flex items-center justify-center gap-1 text-[0.7rem] text-fg">
                <span className="size-1.5 rounded-full" style={{ background: SPORT_COLOR[w.discipline] }} />
                <span className="hidden sm:inline">{SPORT_LABEL[w.discipline]}</span>
              </span>
              <span className="mt-1 hidden text-[0.7rem] leading-snug text-muted md:line-clamp-2">{w.title}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

// Détail de la séance du jour choisi : profil, blocs, et selon le statut, validation ou retour de l'athlète.
function SessionDetail({ workout, index, canValidate }: { workout: Workout; index: number; canValidate: boolean }) {
  const st = WEEK_STATUS[index];
  return (
    <div key={workout.date} className="mt-4 animate-[fadeIn_.3s_ease-out] rounded-3xl border border-white/10 bg-bg/50 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs text-muted">
            <SportDot sport={workout.discipline} />
            {DAY_SHORT[index]} {Number(workout.date.slice(8))} nov. · {SPORT_LABEL[workout.discipline]} · {workout.duration}
          </p>
          <p className="heading mt-1 text-lg text-fg md:text-xl">{workout.title}</p>
        </div>
        <StatusPill status={st.status} />
      </div>
      {workout.summary && <p className="mt-2 text-sm text-muted">{workout.summary}</p>}
      <div className="mt-4"><IntensityProfile workout={workout} height={72} /></div>
      <ol className="mt-3 divide-y divide-white/5">
        {workout.blocks.map((b, i) => {
          const v = intensity(b);
          return (
            <li key={i} className="grid grid-cols-[3.5rem_5.5rem_1fr] items-baseline gap-2 py-2 text-sm">
              <span className="text-muted tabular-nums">{quantityLabel(b)}</span>
              <span className="heading text-accent">{v ? `${v.value} ${v.unit}` : "—"}</span>
              <span className="text-fg">{b.text}</span>
            </li>
          );
        })}
      </ol>
      {st.status === "today" && canValidate && <ValidateToday />}
      {(st.rpe || st.comment) && st.status !== "today" && (
        <div className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-sm">
          {st.rpe && <p className="text-fg">Ressenti : RPE {st.rpe}/10</p>}
          {st.comment && <p className="text-muted">« {st.comment} »</p>}
        </div>
      )}
    </div>
  );
}

function Week({ week, canValidate }: { week: Workout[]; canValidate: boolean }) {
  const [sel, setSel] = useState(TODAY);
  return (
    <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-4 md:p-6">
      <h2 className="eyebrow mb-3 text-muted">Semaine en cours · touche un jour pour voir la séance</h2>
      <WeekTimeline week={week} selected={sel} onSelect={setSel} />
      <SessionDetail workout={week[sel]} index={sel} canValidate={canValidate} />
    </section>
  );
}

const TABS = ["Forme", "Volume", "Tests"] as const;

function Charts() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Forme");
  return (
    <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
      <div role="tablist" className="mb-5 flex gap-2">
        {TABS.map((t) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className="flex-1 text-left">
            <span className={`block h-0.5 rounded-full ${tab === t ? "bg-[#3fe0ec]" : "bg-white/10"}`} />
            <span className={`heading mt-2 block text-sm ${tab === t ? "text-fg" : "text-muted"}`}>{t}</span>
          </button>
        ))}
      </div>
      {tab === "Forme" && <FormChart points={FORM} />}
      {tab === "Volume" && <VolumeChart weeks={WEEKS} />}
      {tab === "Tests" && <TestCards />}
    </section>
  );
}

function Chat({ to }: { to: string }) {
  return (
    <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
      <h2 className="eyebrow mb-4 text-muted">Conversation</h2>
      <Thread />
      <div className="mt-4 flex gap-2">
        <input placeholder={`Écrire à ${to}…`} className="min-w-0 flex-1 rounded-full border border-white/10 bg-bg/60 px-4 py-2.5 text-sm text-fg placeholder:text-muted-2" />
        <button type="button" className="heading rounded-full bg-accent px-5 text-xs text-fg">Envoyer</button>
      </div>
    </section>
  );
}

export function AthleteD({ week }: { week: Workout[] }) {
  const now = FORM[FORM.length - 1];
  return (
    <div className="space-y-5">
      <Overview ctl={now.ctl} atl={now.atl} tsb={now.tsb} reg={compliance} race={`J-${daysToRace}`} title={`${ATHLETE.name} · ${ATHLETE.goal}`} />
      <Week week={week} canValidate />
      <Charts />
      <Chat to="ton coach" />
    </div>
  );
}

export function CoachD({ week }: { week: Workout[] }) {
  const athletes = sortedAthletes();
  const [sel, setSel] = useState(0);
  const a: CoachAthlete = athletes[sel];
  return (
    <div className="grid gap-5 lg:grid-cols-[20rem_1fr]">
      <section className="min-w-0 self-start rounded-3xl border border-white/10 bg-panel p-3 lg:sticky lg:top-20">
        <p className="eyebrow px-2 pt-2 pb-3 text-muted">Messages · à traiter en premier</p>
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

      <div key={a.name} className="min-w-0 space-y-5">
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
        <Overview ctl={a.ctl} atl={a.ctl - a.tsb} tsb={a.tsb} reg={a.compliance} race={a.goal.split("·")[1]?.trim() ?? ""} raceSub={a.goal.split("·")[0].trim()} title="Aperçu" />
        <Week week={week} canValidate={false} />
        <Chat to={a.name.split(" ")[0]} />
      </div>
    </div>
  );
}
