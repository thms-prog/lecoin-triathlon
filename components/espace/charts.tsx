"use client";

import { useState, type ReactNode } from "react";
import { SPORTS, SPORT_COLOR, SPORT_LABEL, type FormPoint, type WeekVolume } from "@/lib/demo-espace";

// TEMP /variantes : graphiques de l'espace client, partagés par les 3 variantes.
// Règles dataviz : traits 2 px, barres ≤ 24 px à bout arrondi, grille 1 px discrète,
// texte en couleurs de texte (jamais celle de la série), info-bulle au survol.

const GRID = "#233047";
const MUTED = "#8ca0b4";
const ACCENT = "#3fe0ec";
const FATIGUE = "#5f7495";

const shortDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", { day: "numeric", month: "short", timeZone: "UTC" });
const fmtH = (min: number) => `${Math.floor(min / 60)}h${String(Math.round(min % 60)).padStart(2, "0")}`;

function Tooltip({ left, children }: { left: string; children: ReactNode }) {
  return (
    <div
      className="pointer-events-none absolute z-10 min-w-36 -translate-x-1/2 -translate-y-full rounded-xl border border-white/10 bg-bg/95 px-3 py-2 text-xs shadow-xl backdrop-blur"
      style={{ left, top: -8 }}
    >
      {children}
    </div>
  );
}

function Row({ color, label, value, line = false }: { color: string; label: string; value: string; line?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-0.5">
      <span className="flex items-center gap-2 text-muted">
        <span className={line ? "h-0.5 w-3 rounded" : "size-2 rounded-sm"} style={{ background: color }} />
        {label}
      </span>
      <span className="font-semibold text-fg tabular-nums">{value}</span>
    </div>
  );
}

// Forme (moyenne 42 j) et fatigue (moyenne 7 j) : réticule vertical qui suit le pointeur.
export function FormChart({ points, height = 220 }: { points: FormPoint[]; height?: number }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 640;
  const pad = { l: 28, r: 84, t: 12, b: 24 };
  const max = Math.ceil(Math.max(...points.flatMap((p) => [p.ctl, p.atl])) / 20) * 20;
  const x = (i: number) => pad.l + (i / (points.length - 1)) * (W - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - v / max) * (height - pad.t - pad.b);
  const path = (k: "ctl" | "atl") => points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p[k]).toFixed(1)}`).join("");
  const area = `${path("ctl")}L${x(points.length - 1)},${y(0)}L${x(0)},${y(0)}Z`;
  const last = points[points.length - 1];
  const ticks = [0, max / 2, max];
  const months = points.filter((p, i) => i === 0 || p.date.slice(5, 7) !== points[i - 1].date.slice(5, 7));
  const h = hover !== null ? points[hover] : null;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${height}`}
        className="w-full touch-none"
        role="img"
        aria-label={`Forme ${last.ctl}, fatigue ${last.atl}, fraîcheur ${last.tsb}`}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const px = ((e.clientX - r.left) / r.width) * W;
          const i = Math.round(((px - pad.l) / (W - pad.l - pad.r)) * (points.length - 1));
          setHover(Math.max(0, Math.min(points.length - 1, i)));
        }}
        onPointerLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="form-wash" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.18" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
        </defs>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke={GRID} strokeWidth="1" />
            <text x={pad.l - 6} y={y(t) + 3} textAnchor="end" fontSize="10" fill={MUTED} className="tabular-nums">{t}</text>
          </g>
        ))}
        {months.map((m) => (
          <text key={m.date} x={x(points.indexOf(m))} y={height - 6} fontSize="10" fill={MUTED}>
            {new Date(`${m.date}T12:00:00Z`).toLocaleDateString("fr-FR", { month: "short", timeZone: "UTC" })}
          </text>
        ))}
        <path d={area} fill="url(#form-wash)" />
        <path d={path("atl")} fill="none" stroke={FATIGUE} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path("ctl")} fill="none" stroke={ACCENT} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 6px rgba(63,224,236,.55))" }} />
        {/* Libellés directs en bout de courbe (2 séries), en couleur de texte. */}
        <circle cx={x(points.length - 1)} cy={y(last.ctl)} r="4" fill={ACCENT} stroke="#121923" strokeWidth="2" />
        <circle cx={x(points.length - 1)} cy={y(last.atl)} r="4" fill={FATIGUE} stroke="#121923" strokeWidth="2" />
        <text x={x(points.length - 1) + 10} y={y(last.ctl) + (last.ctl >= last.atl ? -2 : 10)} fontSize="11" fill="#e8edf3">Forme {last.ctl}</text>
        <text x={x(points.length - 1) + 10} y={y(last.atl) + (last.atl > last.ctl ? -2 : 10)} fontSize="11" fill={MUTED}>Fatigue {last.atl}</text>
        {h && hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={pad.t} y2={height - pad.b} stroke="#e8edf3" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx={x(hover)} cy={y(h.ctl)} r="4" fill={ACCENT} stroke="#121923" strokeWidth="2" />
            <circle cx={x(hover)} cy={y(h.atl)} r="4" fill={FATIGUE} stroke="#121923" strokeWidth="2" />
          </g>
        )}
      </svg>
      {h && hover !== null && (
        <Tooltip left={`${(x(hover) / W) * 100}%`}>
          <p className="mb-1 text-muted">{shortDate(h.date)}</p>
          <Row color={ACCENT} label="Forme" value={String(h.ctl)} line />
          <Row color={FATIGUE} label="Fatigue" value={String(h.atl)} line />
          <Row color="transparent" label="Fraîcheur" value={h.tsb > 0 ? `+${h.tsb}` : String(h.tsb)} />
        </Tooltip>
      )}
    </div>
  );
}

// Volume hebdomadaire réalisé, empilé par sport ; trait clair = volume prévu par le coach.
export function VolumeChart({ weeks, height = 200 }: { weeks: WeekVolume[]; height?: number }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 640;
  const pad = { l: 34, r: 8, t: 10, b: 24 };
  const total = (r: Record<string, number>) => SPORTS.reduce((s, k) => s + r[k], 0);
  const max = Math.ceil(Math.max(...weeks.map((w) => total(w.planned))) / 120) * 120;
  const band = (W - pad.l - pad.r) / weeks.length;
  const bw = Math.min(24, band * 0.55);
  const y = (min: number) => pad.t + (1 - min / max) * (height - pad.t - pad.b);
  const h = hover !== null ? weeks[hover] : null;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${height}`} className="w-full" role="img" aria-label="Volume hebdomadaire réalisé par sport">
        {[0, max / 2, max].map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke={GRID} strokeWidth="1" />
            <text x={pad.l - 6} y={y(t) + 3} textAnchor="end" fontSize="10" fill={MUTED}>{t ? `${t / 60}h` : "0"}</text>
          </g>
        ))}
        {weeks.map((w, i) => {
          const cx = pad.l + band * i + band / 2;
          let base = y(0);
          const segs = SPORTS.map((k) => {
            const top = y(0) - (y(0) - y(w.done[k]));
            const hgt = y(0) - top;
            const seg = { k, y: base - hgt, h: Math.max(0, hgt - 2) };
            base -= hgt;
            return seg;
          }).filter((s) => s.h > 0);
          const lastSeg = segs[segs.length - 1];
          return (
            <g key={w.start} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)} opacity={hover === null || hover === i ? 1 : 0.5}>
              <rect x={cx - band / 2} y={pad.t} width={band} height={height - pad.t - pad.b} fill="transparent" />
              {segs.map((s) => (
                <rect
                  key={s.k}
                  x={cx - bw / 2}
                  y={s.y + 2}
                  width={bw}
                  height={s.h}
                  rx={s === lastSeg ? 4 : 0}
                  fill={SPORT_COLOR[s.k]}
                />
              ))}
              <line x1={cx - bw / 2 - 4} x2={cx + bw / 2 + 4} y1={y(total(w.planned))} y2={y(total(w.planned))} stroke="#e8edf3" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
              {i % 2 === 0 && (
                <text x={cx} y={height - 6} textAnchor="middle" fontSize="10" fill={MUTED}>{shortDate(w.start)}</text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {SPORTS.map((k) => (
          <span key={k} className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm" style={{ background: SPORT_COLOR[k] }} />
            {SPORT_LABEL[k]}
          </span>
        ))}
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-3 rounded bg-fg/70" />
          Prévu par le coach
        </span>
      </div>
      {h && hover !== null && (
        <Tooltip left={`${((pad.l + band * hover + band / 2) / W) * 100}%`}>
          <p className="mb-1 text-muted">Semaine du {shortDate(h.start)}</p>
          {SPORTS.map((k) => (
            <Row key={k} color={SPORT_COLOR[k]} label={SPORT_LABEL[k]} value={`${fmtH(h.done[k])} / ${fmtH(h.planned[k])}`} />
          ))}
          <Row color="transparent" label="Total" value={`${fmtH(total(h.done))} / ${fmtH(total(h.planned))}`} />
        </Tooltip>
      )}
    </div>
  );
}

// Anneau de régularité : part des séances validées sur 4 semaines.
export function Ring({ value, size = 120, label }: { value: number; size?: number; label: string }) {
  const r = size / 2 - 8;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90" role="img" aria-label={`${label} ${value} %`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#0a333a" strokeWidth="8" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={ACCENT}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
          style={{ filter: "drop-shadow(0 0 6px rgba(63,224,236,.6))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold text-fg">{value}%</span>
        <span className="text-[0.65rem] text-muted">{label}</span>
      </div>
    </div>
  );
}

// Petite courbe d'une seule série (tests, charge) : point final mis en avant.
export function Sparkline({ values, width = 120, height = 36, color = ACCENT }: { values: number[]; width?: number; height?: number; color?: string }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const x = (i: number) => 4 + (i / (values.length - 1)) * (width - 8);
  const y = (v: number) => 4 + (1 - (v - min) / (max - min || 1)) * (height - 8);
  const d = values.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join("");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} aria-hidden>
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(values.length - 1)} cy={y(values[values.length - 1])} r="4" fill={color} stroke="#121923" strokeWidth="2" />
    </svg>
  );
}
