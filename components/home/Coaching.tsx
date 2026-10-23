import { COACHING } from "@/data/home";
import CoachingMockup from "./CoachingMockup";

const CTA = "heading rounded-full bg-accent text-fg transition hover:brightness-110";

export default function Coaching() {
  return (
    <section id="coaching" className="scroll-mt-14 bg-bg text-fg">
      <div className="mx-auto grid w-full max-w-350 items-center gap-5 px-5 py-6 md:gap-10 md:px-12 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <div>
          <p className="eyebrow text-accent">Coaching 1v1 · par un vrai coach</p>
          <h2 className="heading mt-2 text-3xl text-balance md:mt-3 md:text-4xl">Un coach qui s&apos;adapte à ta vie</h2>

          {/* Smartphone : prix et bouton sur la même ligne pour tenir sur un écran. */}
          <div className="mt-3 flex items-center justify-between gap-3 md:mt-4 md:justify-start">
            <p className="leading-tight">
              <span className="heading text-2xl text-accent tabular-nums">{COACHING.price} €</span>
              <span className="text-muted"> / mois</span>
              <span className="block text-sm text-muted md:ml-2 md:inline">sans engagement</span>
              <span className="block text-sm text-muted md:hidden">réponse sous 24 h</span>
            </p>
            <a href="#" className={`${CTA} shrink-0 px-5 py-3 text-xs md:hidden`}>
              Commencer
            </a>
          </div>

          <ul className="mt-8 hidden space-y-5 md:block">
            {COACHING.points.map((p) => (
              <li key={p.title} className="border-l-2 border-accent pl-4">
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm text-muted">{p.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden md:block">
            <p className="eyebrow text-muted">Comment ça démarre</p>
            <ol className="mt-4 grid grid-cols-3 gap-4">
              {COACHING.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="heading text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1 font-semibold">{s.title}</p>
                  <p className="text-sm text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 hidden items-center gap-4 md:flex">
            <a href="#" className={`${CTA} px-7 py-3.5 text-sm`}>
              Commencer le questionnaire
            </a>
            <span className="text-sm text-muted">Le questionnaire est gratuit</span>
          </div>
        </div>

        <CoachingMockup />
      </div>
    </section>
  );
}
