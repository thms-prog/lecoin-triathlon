"use client";

import type { Workout } from "@/data/workouts";
import { ATHLETE, FORM, WEEKS, compliance, daysToRace } from "@/lib/demo-espace";
import { FormChart, Ring, Sparkline, VolumeChart } from "./charts";
import { AlertPill, Avatar, TestCards, Thread, WeekList, freshness, sortedAthletes } from "./parts";

// TEMP /variantes — A « Tableau de bord » : une grille riche en données, tout visible d'un coup.

const Card = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <section className={`min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6 ${className}`}>
    <h2 className="eyebrow mb-4 text-muted">{title}</h2>
    {children}
  </section>
);

export function AthleteA({ week }: { week: Workout[] }) {
  const now = FORM[FORM.length - 1];
  const fresh = freshness(now.tsb);
  const thisWeek = WEEKS[WEEKS.length - 1];
  const sum = (r: Record<string, number>) => Object.values(r).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar initials={ATHLETE.initials} size={44} />
          <div>
            <p className="heading text-xl text-fg md:text-2xl">Bonjour Julie</p>
            <p className="text-sm text-muted">{ATHLETE.goal}</p>
          </div>
        </div>
        <span className="neon rounded-full bg-panel px-4 py-2 text-sm text-fg">
          <span className="heading text-[#3fe0ec]">J-{daysToRace}</span> avant la course
        </span>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="neon rounded-3xl bg-panel p-5">
          <p className="eyebrow text-muted">Forme</p>
          <p className="mt-1 text-5xl font-semibold text-fg">{now.ctl}</p>
          <p className="mt-1 text-xs text-muted">+{now.ctl - FORM[FORM.length - 29].ctl} en 4 semaines</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-panel p-5">
          <p className="eyebrow text-muted">Fraîcheur</p>
          <p className="mt-1 text-3xl font-semibold text-fg">{now.tsb > 0 ? `+${now.tsb}` : now.tsb}</p>
          <p className={`mt-1 text-xs font-semibold ${fresh.cls}`}>{fresh.label}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-panel p-5">
          <p className="eyebrow text-muted">Régularité · 4 sem.</p>
          <p className="mt-1 text-3xl font-semibold text-fg">{compliance}%</p>
          <p className="mt-1 text-xs text-muted">des séances validées</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-panel p-5">
          <p className="eyebrow text-muted">Cette semaine</p>
          <p className="mt-1 text-3xl font-semibold text-fg">
            {Math.floor(sum(thisWeek.done) / 60)}h{String(sum(thisWeek.done) % 60).padStart(2, "0")}
          </p>
          <p className="mt-1 text-xs text-muted">sur {Math.floor(sum(thisWeek.planned) / 60)}h{String(sum(thisWeek.planned) % 60).padStart(2, "0")} prévues</p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card title="Forme et fatigue · 12 semaines" className="lg:col-span-2">
          <FormChart points={FORM} />
        </Card>
        <Card title="Ta semaine">
          <WeekList week={week} compact />
        </Card>
        <Card title="Volume réalisé vs prévu" className="lg:col-span-2">
          <VolumeChart weeks={WEEKS} />
        </Card>
        <Card title="Régularité">
          <div className="flex items-center gap-5">
            <Ring value={compliance} label="validées" />
            <p className="text-sm text-muted">
              Sur les 4 dernières semaines, <span className="text-fg">{compliance} %</span> des séances prévues ont été faites.
              Au-dessus de 85 %, la progression suit.
            </p>
          </div>
        </Card>
        <Card title="Tests" className="lg:col-span-2">
          <TestCards />
        </Card>
        <Card title="Échanges avec ton coach">
          <Thread max={2} />
        </Card>
      </div>
    </div>
  );
}

export function CoachA() {
  const athletes = sortedAthletes();
  const alerts = athletes.reduce((s, a) => s + a.alerts.length, 0);
  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="heading text-xl text-fg md:text-2xl">Tes athlètes</p>
          <p className="text-sm text-muted">{athletes.length} actifs · {alerts} points d&apos;attention</p>
        </div>
      </header>
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-panel">
        <div className="hidden grid-cols-[2fr_1fr_0.7fr_1fr_1fr_1.4fr] gap-4 border-b border-white/10 px-5 py-3 text-xs text-muted lg:grid">
          <span>Athlète</span><span>Régularité</span><span>Forme</span><span>Fraîcheur</span><span>Volume · 8 sem.</span><span>À traiter</span>
        </div>
        <ul className="divide-y divide-white/5">
          {athletes.map((a) => {
            const fresh = freshness(a.tsb);
            return (
              <li key={a.name} className="grid gap-3 px-5 py-4 transition hover:bg-white/[0.03] lg:grid-cols-[2fr_1fr_0.7fr_1fr_1fr_1.4fr] lg:items-center lg:gap-4">
                <div className="flex items-center gap-3">
                  <Avatar initials={a.initials} />
                  <div className="min-w-0">
                    <p className="font-semibold text-fg">{a.name}</p>
                    <p className="truncate text-xs text-muted">{a.goal}</p>
                  </div>
                </div>
                <div>
                  <div className="h-1.5 rounded-full bg-[#0a333a]">
                    <div className="h-full rounded-full bg-[#3fe0ec]" style={{ width: `${a.compliance}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-muted">{a.compliance}% validées</p>
                </div>
                <p className="text-sm text-fg"><span className="text-muted lg:hidden">Forme </span>{a.ctl}</p>
                <p className="text-sm"><span className={`font-semibold ${fresh.cls}`}>{fresh.label}</span> <span className="text-muted">{a.tsb > 0 ? `+${a.tsb}` : a.tsb}</span></p>
                <Sparkline values={a.loads} width={96} height={28} />
                <div className="flex flex-wrap items-center gap-1.5">
                  {a.alerts.length ? a.alerts.map((k) => <AlertPill key={k} kind={k} />) : <span className="text-xs text-muted">Rien à signaler</span>}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
