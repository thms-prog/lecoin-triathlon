"use client";

import type { Workout } from "@/data/workouts";
import IntensityProfile from "@/components/home/IntensityProfile";
import {
  ATHLETE, COACH_ATHLETES, SPORT_COLOR, SPORT_LABEL, TESTS, THREAD, WEEK_STATUS, fmtPace,
  type CoachAthlete, type SessionStatus,
} from "@/lib/demo-espace";
import { Sparkline } from "./charts";

// TEMP /variantes : briques communes aux 3 variantes de l'espace client.

export const DAY_SHORT = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];

const STATUS: Record<SessionStatus, { icon: string; label: string; cls: string }> = {
  done: { icon: "✓", label: "Validée", cls: "border-[#3fe0ec]/40 text-[#3fe0ec]" },
  missed: { icon: "✕", label: "Manquée", cls: "border-crit/50 text-crit" },
  today: { icon: "●", label: "Aujourd'hui", cls: "border-accent bg-accent text-fg" },
  upcoming: { icon: "○", label: "À venir", cls: "border-white/15 text-muted" },
};

export function StatusPill({ status }: { status: SessionStatus }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold ${s.cls}`}>
      <span aria-hidden>{s.icon}</span>
      {s.label}
    </span>
  );
}

export function SportDot({ sport }: { sport: Workout["discipline"] }) {
  return <span className="size-2 shrink-0 rounded-full" style={{ background: SPORT_COLOR[sport] }} aria-hidden />;
}

// Liste des 6 séances de la semaine : profil, statut, ressenti.
export function WeekList({ week, compact = false }: { week: Workout[]; compact?: boolean }) {
  return (
    <ol className="divide-y divide-white/5">
      {week.map((w, i) => {
        const st = WEEK_STATUS[i];
        return (
          <li key={w.date} className={`flex items-center gap-3 py-3 ${st.status === "today" ? "-mx-3 rounded-xl bg-accent/10 px-3" : ""}`}>
            <span className="w-9 shrink-0 text-xs text-muted">{DAY_SHORT[i]}</span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-xs text-muted">
                <SportDot sport={w.discipline} />
                {SPORT_LABEL[w.discipline]} · {w.duration}
                {st.rpe && <span>· RPE {st.rpe}</span>}
              </p>
              <p className="truncate text-sm font-semibold text-fg">{w.title}</p>
            </div>
            {!compact && (
              <div className="hidden w-28 shrink-0 sm:block">
                <IntensityProfile workout={w} height={28} />
              </div>
            )}
            <StatusPill status={st.status} />
          </li>
        );
      })}
    </ol>
  );
}

export function Thread({ max = THREAD.length }: { max?: number }) {
  return (
    <ul className="space-y-3">
      {THREAD.slice(-max).map((m, i) => (
        <li key={i} className={`flex gap-2.5 ${m.from === "coach" ? "flex-row-reverse text-right" : ""}`}>
          <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold ${m.from === "coach" ? "bg-accent text-fg" : "bg-white/10 text-fg"}`}>
            {m.from === "coach" ? "TC" : ATHLETE.initials}
          </span>
          <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.from === "coach" ? "bg-accent/15" : "bg-white/5"}`}>
            <p className="text-fg">{m.text}</p>
            <p className="mt-1 text-[0.65rem] text-muted">{m.at}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Tests : dernière valeur, écart depuis le premier test, courbe.
export function TestCards({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {Object.values(TESTS).map((t) => {
        const first = t.points[0].v;
        const last = t.points[t.points.length - 1].v;
        const gain = t.better === "up" ? last - first : first - last;
        const show = (v: number) => (t.label === "CSS" ? `${fmtPace(v)}` : `${v}`);
        return (
          <div key={t.label} className="rounded-2xl border border-white/10 bg-bg/50 p-4">
            <p className="eyebrow text-[0.65rem] text-muted">{t.label}</p>
            <div className="mt-1 flex items-end justify-between gap-2">
              <p className="text-2xl font-semibold text-fg">
                {show(last)} <span className="text-xs font-normal text-muted">{t.unit}</span>
              </p>
              <Sparkline values={t.points.map((p) => (t.better === "up" ? p.v : -p.v))} width={72} height={30} />
            </div>
            <p className="mt-1 text-xs text-[#3fe0ec]">
              ▲ {t.label === "CSS" ? `${gain} s` : `${+gain.toFixed(1)} ${t.unit}`} <span className="text-muted">depuis août</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

const ALERT: Record<CoachAthlete["alerts"][number], { icon: string; label: string; cls: string }> = {
  comment: { icon: "💬", label: "Commentaire à lire", cls: "border-accent/60 text-[#3fe0ec]" },
  missed: { icon: "⚠", label: "Séances manquées", cls: "border-warn/60 text-warn" },
  fatigue: { icon: "▼", label: "Fatigue élevée", cls: "border-crit/60 text-crit" },
};

export function AlertPill({ kind }: { kind: CoachAthlete["alerts"][number] }) {
  const a = ALERT[kind];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold ${a.cls}`}>
      <span aria-hidden>{a.icon}</span>
      {a.label}
    </span>
  );
}

export const freshness = (tsb: number) =>
  tsb <= -20 ? { label: "Fatigué", cls: "text-crit" } : tsb < -5 ? { label: "En charge", cls: "text-warn" } : tsb <= 10 ? { label: "Équilibré", cls: "text-[#3fe0ec]" } : { label: "Frais", cls: "text-[#3fe0ec]" };

// Athlètes triés par urgence : alertes d'abord.
export const sortedAthletes = () => [...COACH_ATHLETES].sort((a, b) => b.alerts.length - a.alerts.length || a.compliance - b.compliance);

export function Avatar({ initials, size = 36 }: { initials: string; size?: number }) {
  return (
    <span className="flex shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-fg ring-1 ring-white/10" style={{ width: size, height: size }}>
      {initials}
    </span>
  );
}
