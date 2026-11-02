"use client";

import type { Workout } from "@/data/workouts";
import { ATHLETE, FORM, SPORT_COLOR, SPORT_LABEL, WEEKS, WEEK_STATUS, compliance, daysToRace } from "@/lib/demo-espace";
import { FormChart, Sparkline, VolumeChart } from "./charts";
import { AlertPill, Avatar, DAY_SHORT, TestCards, Thread, freshness, sortedAthletes } from "./parts";

// TEMP /variantes — C « Mission control » : une jauge centrale, des rails de mesures, un rendu néon.

// Jauge en demi-cercle de la fraîcheur, de −30 (fatigué) à +25 (frais).
function Dial({ value, size = 280, compact = false }: { value: number; size?: number; compact?: boolean }) {
  const min = -30;
  const max = 25;
  const r = size / 2 - 14;
  const cx = size / 2;
  const cy = size / 2;
  const angle = (v: number) => Math.PI * (1 - (Math.max(min, Math.min(max, v)) - min) / (max - min));
  const pt = (v: number, rr = r) => [cx + rr * Math.cos(angle(v)), cy - rr * Math.sin(angle(v))];
  const arc = (a: number, b: number) => {
    const [x1, y1] = pt(a);
    const [x2, y2] = pt(b);
    return `M${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2}`;
  };
  const [nx, ny] = pt(value, r - (compact ? 10 : 22));
  const fresh = freshness(value);
  return (
    <div className="mx-auto" style={{ width: size }}>
      <svg viewBox={`0 0 ${size} ${size / 2 + 8}`} width={size} aria-label={`Fraîcheur ${value}, ${fresh.label}`} role="img">
        <path d={arc(min, max)} fill="none" stroke="#0a333a" strokeWidth={compact ? 6 : 10} strokeLinecap="round" />
        <path d={arc(min, value)} fill="none" stroke="#3fe0ec" strokeWidth={compact ? 6 : 10} strokeLinecap="round" style={{ filter: "drop-shadow(0 0 8px rgba(63,224,236,.7))" }} />
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#e8edf3" strokeWidth="2" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={compact ? 3 : 5} fill="#e8edf3" />
      </svg>
      {/* La valeur sous le pivot de l'aiguille, jamais dessous. */}
      {!compact && (
        <div className="mt-3 text-center">
          <p className="text-5xl font-semibold text-fg">{value > 0 ? `+${value}` : value}</p>
          <p className={`eyebrow mt-1 ${fresh.cls}`}>{fresh.label}</p>
        </div>
      )}
    </div>
  );
}

const Rail = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div className="border-l-2 border-[#3fe0ec]/60 pl-4">
    <p className="eyebrow text-[0.65rem] text-muted">{label}</p>
    <p className="text-2xl font-semibold text-fg">{value}</p>
    <p className="text-xs text-muted">{sub}</p>
  </div>
);

export function AthleteC({ week }: { week: Workout[] }) {
  const now = FORM[FORM.length - 1];
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(0,129,143,0.22),transparent_65%)] p-6 md:p-10">
        <p className="eyebrow text-center text-accent">{ATHLETE.name} · {ATHLETE.goal}</p>
        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
            <Rail label="Forme" value={String(now.ctl)} sub="moyenne 42 jours" />
            <Rail label="Fatigue" value={String(now.atl)} sub="moyenne 7 jours" />
          </div>
          <div>
            <Dial value={now.tsb} />
            <p className="eyebrow mt-4 text-center text-muted">Fraîcheur du jour</p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:justify-items-end lg:text-right">
            <Rail label="Course" value={`J-${daysToRace}`} sub="16 mai 2027" />
            <Rail label="Régularité" value={`${compliance}%`} sub="séances validées, 4 sem." />
          </div>
        </div>
      </section>

      {/* La semaine en ligne de temps : un point par jour, relié, statut et sport. */}
      <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <h2 className="eyebrow mb-5 text-muted">Semaine en cours</h2>
        <ol className="relative grid grid-cols-6 gap-2">
          <span className="absolute inset-x-[8%] top-[0.6rem] h-px bg-white/10" aria-hidden />
          {week.map((w, i) => {
            const st = WEEK_STATUS[i].status;
            return (
              <li key={w.date} className="relative text-center">
                <span
                  className={`relative mx-auto block size-5 rounded-full border-2 ${st === "today" ? "animate-pulse border-[#3fe0ec] bg-accent shadow-[0_0_16px_rgba(63,224,236,.8)]" : st === "done" ? "border-[#3fe0ec] bg-[#3fe0ec]" : st === "missed" ? "border-crit bg-bg" : "border-white/20 bg-bg"}`}
                  aria-label={st}
                />
                <p className="mt-2 text-xs text-muted">{DAY_SHORT[i]}</p>
                <p className="mt-1 flex items-center justify-center gap-1 text-[0.7rem] text-fg">
                  <span className="size-1.5 rounded-full" style={{ background: SPORT_COLOR[w.discipline] }} />
                  <span className="hidden sm:inline">{SPORT_LABEL[w.discipline]}</span>
                </p>
                <p className="mt-1 hidden text-[0.7rem] leading-snug text-muted md:line-clamp-2">{w.title}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <h2 className="eyebrow mb-4 text-muted">Forme et fatigue · 12 semaines</h2>
        <FormChart points={FORM} height={240} />
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
          <h2 className="eyebrow mb-4 text-muted">Volume réalisé vs prévu</h2>
          <VolumeChart weeks={WEEKS} />
        </section>
        <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
          <h2 className="eyebrow mb-4 text-muted">Tests</h2>
          <TestCards className="sm:grid-cols-1" />
        </section>
      </div>

      <section className="min-w-0 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <h2 className="eyebrow mb-4 text-muted">Échanges avec ton coach</h2>
        <Thread />
      </section>
    </div>
  );
}

export function CoachC() {
  const athletes = sortedAthletes();
  return (
    <div className="space-y-5">
      <header>
        <p className="heading text-xl text-fg md:text-2xl">Vue d&apos;ensemble</p>
        <p className="text-sm text-muted">Les athlètes qui demandent ton attention s&apos;allument.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {athletes.map((a) => {
          const hot = a.alerts.length > 0;
          return (
            <article key={a.name} className={`rounded-3xl bg-panel p-5 ${hot ? "neon" : "border border-white/10"}`}>
              <div className="flex items-center gap-3">
                <Avatar initials={a.initials} />
                <div className="min-w-0">
                  <p className="font-semibold text-fg">{a.name}</p>
                  <p className="truncate text-xs text-muted">{a.goal}</p>
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div className="w-32">
                  <Dial value={a.tsb} size={128} compact />
                  <p className={`-mt-1 text-center text-xs font-semibold ${freshness(a.tsb).cls}`}>{freshness(a.tsb).label}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted">Volume · 8 sem.</p>
                  <Sparkline values={a.loads} width={110} height={34} />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-muted"><span>Régularité</span><span className="text-fg">{a.compliance}%</span></div>
                <div className="mt-1 h-1.5 rounded-full bg-[#0a333a]"><div className="h-full rounded-full bg-[#3fe0ec]" style={{ width: `${a.compliance}%` }} /></div>
              </div>
              <div className="mt-4 flex min-h-6 flex-wrap gap-1.5">
                {hot ? a.alerts.map((k) => <AlertPill key={k} kind={k} />) : <span className="text-xs text-muted">Rien à signaler</span>}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
