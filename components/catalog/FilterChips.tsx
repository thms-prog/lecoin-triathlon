// Filtre par catégorie, partagé par /blog et /materiel.
export default function FilterChips({
  options,
  value,
  onChange,
  total,
}: {
  options: readonly string[];
  value: string | null;
  onChange: (value: string | null) => void;
  total: number;
}) {
  const chip = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`heading shrink-0 rounded-full border px-4 py-2 text-xs transition ${
        active ? "border-accent bg-accent text-fg" : "border-line text-muted hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
      {chip(`Tout · ${total}`, value === null, () => onChange(null))}
      {options.map((o) => chip(o, value === o, () => onChange(o)))}
    </div>
  );
}
