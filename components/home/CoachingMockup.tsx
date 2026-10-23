import Image from "next/image";
import { MOCKUP_COMMENTS, MOCKUP_FORM, MOCKUP_WEEK } from "@/data/home";

// Maquette statique de l'espace client : semaine, séance commentée, courbe de forme.

const STATE_STYLE = {
  done: "bg-accent text-fg",
  today: "border-2 border-accent text-fg",
  moved: "border border-dashed border-muted-2 text-muted-2",
  planned: "border border-white/15 text-muted",
} as const;

function FormChart() {
  const w = 520;
  const h = 72;
  const min = Math.min(...MOCKUP_FORM) - 4;
  const max = Math.max(...MOCKUP_FORM) + 4;
  const pts = MOCKUP_FORM.map((v, i) => [
    (i / (MOCKUP_FORM.length - 1)) * w,
    h - ((v - min) / (max - min)) * h,
  ]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const [lastX, lastY] = pts[pts.length - 1];
  const gain = Math.round(((MOCKUP_FORM[MOCKUP_FORM.length - 1] - MOCKUP_FORM[0]) / MOCKUP_FORM[0]) * 100);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Ta forme · 12 semaines</p>
        <p className="heading text-sm text-fg">+{gain}%</p>
      </div>
      <svg viewBox={`-4 -6 ${w + 8} ${h + 12}`} className="mt-2 h-14 w-full overflow-visible sm:h-20" role="img" aria-label={`Forme en hausse de ${gain}% sur 12 semaines`}>
        <defs>
          <linearGradient id="form-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke="white" strokeOpacity="0.06" />
        ))}
        <path d={`${line} L${w},${h} L0,${h} Z`} fill="url(#form-fill)" />
        <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="transparent">
            <title>{`Semaine ${i + 1} : ${MOCKUP_FORM[i]}`}</title>
          </circle>
        ))}
        <circle cx={lastX} cy={lastY} r="4" fill="var(--accent)" stroke="var(--panel)" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function CoachingMockup() {
  return (
    <div className="rounded-3xl border border-white/10 bg-panel p-4 shadow-2xl shadow-black/40 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="heading text-sm">Semaine 3 · Prépa 70.3</p>
        <p className="text-xs text-muted">Espace coaché</p>
      </div>

      <ol className="mt-4 grid grid-cols-7 gap-1.5">
        {MOCKUP_WEEK.map((d, i) => (
          <li key={i} className="flex flex-col items-center gap-1">
            <span className={`flex size-8 items-center justify-center rounded-full text-xs font-bold sm:size-9 ${STATE_STYLE[d.state]}`}>
              {d.state === "done" ? "✓" : d.day}
            </span>
            <span className="text-[10px] text-muted">{d.discipline}</span>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-2xl bg-bg/60 p-3.5 sm:mt-5 sm:p-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="heading text-sm">Vélo · Faible cadence 4×5&apos;</p>
          <p className="shrink-0 text-xs text-accent">Réalisée</p>
        </div>

        <ul className="mt-3 space-y-3">
          {MOCKUP_COMMENTS.map((c) => (
            <li key={c.from} className="flex gap-2.5">
              {c.from === "coach" ? (
                <Image src="/logo.svg" alt="" width={28} height={28} className="size-7 shrink-0" />
              ) : (
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  {c.name[0]}
                </span>
              )}
              <div>
                <p className="text-xs font-semibold text-muted">{c.name}</p>
                <p className="text-sm leading-snug text-fg">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs text-accent">↻ Planning mis à jour · 2 séances déplacées</p>
      </div>

      <div className="mt-4 sm:mt-5">
        <FormChart />
      </div>
    </div>
  );
}
