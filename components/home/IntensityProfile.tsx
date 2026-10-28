"use client";

import type { Workout } from "@/data/workouts";
import { minutes, percent } from "./intensity";

// Profil d'intensité façon Zwift : une barre par bloc, largeur = durée, hauteur = intensité.
// Les blocs sans durée lisible (ex. option extérieur) sont ignorés.
export default function IntensityProfile({
  workout,
  height = 120,
  active,
  onActive,
  showScale = false,
}: {
  workout: Workout;
  height?: number;
  active?: number | null;
  onActive?: (i: number | null) => void;
  showScale?: boolean;
}) {
  const W = 1000;
  const MAX = 120;
  const gap = 6;
  const timed = workout.blocks
    .map((b, i) => ({ i, min: minutes(b), pct: percent(b) }))
    .filter((b): b is { i: number; min: number; pct: number } => b.min !== null && b.pct !== null);
  const total = timed.reduce((s, b) => s + b.min, 0);
  // Position horizontale de chaque barre = somme des durées qui la précèdent.
  const bars = timed.map((b, k) => ({
    ...b,
    x: (timed.slice(0, k).reduce((s, p) => s + p.min, 0) / total) * W,
  }));
  const id = `profile-${height}`;

  return (
    <svg viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="none" className="w-full overflow-visible" style={{ height }} role="img" aria-label="Profil d'intensité de la séance">
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3fe0ec" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.25" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      {showScale &&
        [50, 75, 100].map((p) => (
          <g key={p}>
            <line x1="0" x2={W} y1={height - (p / MAX) * height} y2={height - (p / MAX) * height} stroke="white" strokeOpacity="0.08" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          </g>
        ))}
      {bars.map((b) => {
        const w = (b.min / total) * W - gap;
        const h = (b.pct / MAX) * height;
        const bx = b.x;
        const on = active === b.i;
        const dim = active !== undefined && active !== null && !on;
        return (
          <g key={b.i} onPointerEnter={() => onActive?.(b.i)} onPointerLeave={() => onActive?.(null)} style={{ cursor: onActive ? "pointer" : undefined }}>
            <rect x={bx} y={height - h} width={w} height={h} rx="3" fill={`url(#${id}-fill)`} filter={`url(#${id}-glow)`} opacity={on ? 0.9 : 0.45} />
            <rect x={bx} y={height - h} width={w} height={h} rx="3" fill={`url(#${id}-fill)`} opacity={dim ? 0.35 : 1} className="transition-opacity duration-300" />
            <rect x={bx} y={height - h} width={w} height="3" fill="#3fe0ec" opacity={dim ? 0.4 : 1} />
          </g>
        );
      })}
    </svg>
  );
}
