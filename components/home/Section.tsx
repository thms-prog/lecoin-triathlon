import type { ReactNode } from "react";

// Une thématique = un écran sur smartphone (hauteur d'écran moins le header).
// Les sections alternent sombre / clair, comme sur Ladder.
export default function Section({
  id,
  eyebrow,
  title,
  tone = "dark",
  action,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "dark" | "light";
  // Lien sur la ligne du sur-titre (ex. « Tout voir »), visible dès l'arrivée sur la section.
  action?: ReactNode;
  children: ReactNode;
}) {
  const light = tone === "light";
  return (
    <section id={id} className={`scroll-mt-14 ${light ? "bg-light text-ink" : "bg-bg text-fg"}`}>
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-350 flex-col justify-center gap-8 px-5 py-12 md:min-h-0 md:gap-12 md:px-12 md:py-24 lg:px-20">
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow text-accent">{eyebrow}</p>
            {action}
          </div>
          <h2 className="heading mt-3 text-3xl text-balance md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
