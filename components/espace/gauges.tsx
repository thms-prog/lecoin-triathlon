// Jauge de fraîcheur et rails de mesures de l'espace client (design validé, variante D).
// Utilisés par l'espace athlète et par l'aperçu de la section coaching de l'accueil.

export const freshness = (tsb: number) =>
  tsb <= -20
    ? { label: "Fatigué", cls: "text-crit" }
    : tsb < -5
      ? { label: "En charge", cls: "text-warn" }
      : tsb <= 10
        ? { label: "Équilibré", cls: "text-[#3fe0ec]" }
        : { label: "Frais", cls: "text-[#3fe0ec]" };

// Demi-cercle de −30 (fatigué) à +25 (frais) ; la valeur s'affiche sous le pivot de l'aiguille.
export function Dial({ value, size = 240, showValue = true }: { value: number; size?: number; showValue?: boolean }) {
  const min = -30;
  const max = 25;
  const stroke = size < 180 ? 7 : 10;
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
  const [nx, ny] = pt(value, r - stroke - 12);
  const fresh = freshness(value);
  return (
    <div className="mx-auto" style={{ width: size }}>
      <svg viewBox={`0 0 ${size} ${size / 2 + 8}`} width={size} role="img" aria-label={`Fraîcheur ${value}, ${fresh.label}`}>
        <path d={arc(min, max)} fill="none" stroke="#0a333a" strokeWidth={stroke} strokeLinecap="round" />
        <path d={arc(min, value)} fill="none" stroke="#3fe0ec" strokeWidth={stroke} strokeLinecap="round" style={{ filter: "drop-shadow(0 0 8px rgba(63,224,236,.7))" }} />
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#e8edf3" strokeWidth="2" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={stroke / 2 + 1} fill="#e8edf3" />
      </svg>
      {showValue && (
        <div className="mt-2 text-center">
          <p className="text-4xl font-semibold text-fg">{value > 0 ? `+${value}` : value}</p>
          <p className={`eyebrow mt-1 ${fresh.cls}`}>{fresh.label}</p>
        </div>
      )}
    </div>
  );
}

export function Rail({ label, value, sub, align = "left" }: { label: string; value: string; sub: string; align?: "left" | "right" }) {
  return (
    <div className={align === "right" ? "border-r-2 border-[#3fe0ec]/60 pr-4 text-right" : "border-l-2 border-[#3fe0ec]/60 pl-4"}>
      <p className="eyebrow text-[0.65rem] text-muted">{label}</p>
      <p className="text-2xl font-semibold text-fg">{value}</p>
      <p className="text-xs text-muted">{sub}</p>
    </div>
  );
}
