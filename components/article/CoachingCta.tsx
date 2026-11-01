import Link from "next/link";
import { COACHING } from "@/data/home";

const VARIANTS = {
  corrections: {
    title: "Toutes ces corrections, faites par un vrai coach",
    text: "Allures calées sur tes tests et réajustées quand tu progresses, intensité dosée pour ton niveau, plan qui bouge avec ta fatigue et tes imprévus.",
  },
};

export type CoachingVariant = keyof typeof VARIANTS;

// Encart vers le coaching 1v1 : une seule fois par article, au milieu du texte.
export default function CoachingCta({ variant }: { variant: CoachingVariant }) {
  const v = VARIANTS[variant];
  return (
    <aside className="neon my-12 rounded-3xl bg-panel p-6 md:p-8">
      <p className="eyebrow text-accent">Coaching 1v1 · un vrai coach, pas une IA</p>
      <p className="heading mt-3 text-xl text-fg md:text-2xl">{v.title}</p>
      <p className="mt-3 text-muted">{v.text}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link
          href="/#coaching"
          className="heading inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pr-2.5 pl-6 text-sm text-fg no-underline shadow-[0_0_24px_rgba(0,129,143,0.8)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.9)]"
        >
          Découvrir le coaching
          <span className="flex size-7 items-center justify-center rounded-full bg-fg text-accent">→</span>
        </Link>
        <span className="text-sm text-muted">
          <span className="heading text-accent">{COACHING.price} €</span> / mois · sans engagement
        </span>
      </div>
    </aside>
  );
}
