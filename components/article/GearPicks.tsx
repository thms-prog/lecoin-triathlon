import Image from "next/image";
import { GEAR, amazonUrl } from "@/data/home";

// Encart matériel affilié, placé là où l'article parle de l'outil (pas en fin de page).
export default function GearPicks({
  title,
  intro,
  items: picks,
}: {
  title: string;
  intro: string;
  items: { asin: string; why: string }[];
}) {
  const items = picks.flatMap((p) => {
    const item = GEAR.find((g) => g.asin === p.asin);
    return item ? [{ ...item, why: p.why }] : [];
  });
  if (!items.length) return null;

  return (
    <aside className="my-10 rounded-3xl border border-white/10 bg-panel-2 p-5 md:p-6">
      <p className="eyebrow text-accent">{title}</p>
      <p className="mt-2 text-sm text-muted">{intro}</p>
      <ul className={`mt-5 grid gap-3 ${items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {items.map((item) => (
          <li key={item.asin}>
            <a
              href={amazonUrl(item)}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="group flex h-full gap-4 rounded-2xl bg-bg/60 p-3 no-underline ring-1 ring-white/5 transition hover:ring-accent md:flex-col"
            >
              <span className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-white md:aspect-square md:size-auto md:w-full">
                <Image src={item.image} alt={item.label} fill sizes="(min-width: 768px) 220px, 80px" className="object-contain p-2" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-fg">{item.label}</span>
                <span className="mt-1 text-sm leading-snug text-muted">{item.why}</span>
                <span className="heading mt-auto pt-2 text-xs text-accent group-hover:underline">Voir sur Amazon ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-2">Liens affiliés : ça ne te coûte rien de plus et ça finance le site.</p>
    </aside>
  );
}
