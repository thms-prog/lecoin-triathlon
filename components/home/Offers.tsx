"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PDF_PLANS, euros } from "@/data/home";
import SeeAll from "./SeeAll";
import Section from "./Section";
import StoryBar from "./StoryBar";
import { useSeen, useSwipe } from "./useSwipe";

const CURRENT_WEEK = 3;
const AUTOPLAY = "6s";
// L'accueil montre 4 programmes au plus (4 onglets tiennent sur un écran de smartphone) ;
// le catalogue complet vit sur /programmes.
const PLANS = PDF_PLANS.slice(0, 4);

// Choix du programme à gauche, aperçu de l'interface à droite : on montre que le programme
// se suit sur le site, pas juste un fichier. Smartphone : 4 onglets à barres qui tiennent dans
// la largeur, comme le blog et le matériel. Les programmes défilent tout seuls jusqu'à la première
// interaction (onglet, swipe, « Voir plus ») : ensuite on ne change plus rien sous les yeux du visiteur.
export default function Offers() {
  const [selected, setSelected] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [ref, seen] = useSeen<HTMLDivElement>();
  const n = PLANS.length;
  const plan = PLANS[selected];

  const choose = (i: number) => {
    setAuto(false);
    setSelected(i);
  };
  const { dx, dragging, handlers } = useSwipe((dir) => choose((selected + dir + n) % n));

  return (
    <Section
      id="plans"
      tone="light"
      eyebrow="Programmes ciblés"
      title="Cible ton point faible"
      action={<SeeAll href="/programmes" count={PDF_PLANS.length} />}
    >
      <div
        ref={ref}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        className="grid items-center gap-6 lg:grid-cols-2 lg:gap-20"
      >
        <div className="min-w-0">
          <p className="hidden max-w-md text-ink-muted md:block">
            6 à 8 semaines pour travailler une compétence précise. Tu suis ton programme directement sur le site :
            ta séance du jour, tes allures calculées pour toi, ta progression semaine après semaine.
          </p>

          <ul role="tablist" className="grid grid-cols-4 gap-3 md:mt-8 md:flex md:flex-col md:gap-2">
            {PLANS.map((p, i) => {
              const active = i === selected;
              return (
                <li key={p.title} className="min-w-0">
                  <button
                    type="button"
                    role="tab"
                    onClick={() => choose(i)}
                    aria-selected={active}
                    className={`relative flex w-full flex-col py-1 text-left transition md:flex-row md:items-center md:gap-4 md:overflow-hidden md:rounded-2xl md:border md:p-3 ${
                      active ? "md:border-accent md:bg-white md:shadow-sm" : "md:border-transparent md:hover:bg-white/60"
                    }`}
                  >
                    {/* Smartphone : barre au-dessus de l'onglet. PC : liseré en bas de la carte active. */}
                    <StoryBar
                      state={active ? (auto ? "current" : "on") : auto && i < selected ? "done" : "todo"}
                      duration={AUTOPLAY}
                      running={seen && !paused && !dragging}
                      onEnd={() => setSelected((s) => (s + 1) % n)}
                      className={`h-1 rounded-full bg-ink/10 md:absolute md:inset-x-0 md:bottom-0 md:h-0.5 md:rounded-none md:bg-transparent ${active ? "" : "md:hidden"}`}
                    />
                    <span className="relative hidden size-14 shrink-0 overflow-hidden rounded-xl md:block">
                      <Image src={p.image} alt="" fill sizes="56px" className={`object-cover ${p.position}`} />
                    </span>
                    <span className="mt-2 min-w-0 flex-1 md:mt-0">
                      <span className={`eyebrow block truncate text-[0.6rem] md:text-xs md:text-accent ${active ? "text-accent" : "text-ink-muted"}`}>
                        {p.discipline}
                      </span>
                      <span className={`heading block truncate text-sm md:text-lg md:text-ink ${active ? "" : "text-ink/45"}`}>{p.title}</span>
                      <span className="hidden text-sm text-ink-muted md:block">{p.detail}</span>
                    </span>
                    <span className="hidden text-right text-sm md:block">
                      <span className="block font-semibold text-accent tabular-nums">{euros(p.price)}</span>
                      <span className="text-ink-muted">{p.weeks} sem.</span>
                    </span>
                  </button>
                </li>
              );
            })}
            {/* PC : « Tout voir » en dernière ligne de la liste (sur smartphone, il est sur la ligne du sur-titre). */}
            <li className="hidden md:block">
              <Link
                href="/programmes"
                className="group flex items-center gap-4 rounded-2xl border border-dashed border-accent/50 p-3 transition hover:border-accent hover:bg-white/60"
              >
                <span className="heading flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">+</span>
                <span className="flex-1">
                  <span className="heading block text-lg text-accent">Tout voir</span>
                  <span className="text-sm text-ink-muted">Tous les programmes ciblés</span>
                </span>
                <span className="text-sm text-ink-muted transition group-hover:text-accent">{PDF_PLANS.length} →</span>
              </Link>
            </li>
          </ul>
        </div>

        <div
          {...handlers}
          className="touch-pan-y select-none"
          style={{ transform: `translateX(${dx * 0.5}px)`, transition: dragging ? "none" : "transform .4s cubic-bezier(.2,.8,.2,1)" }}
        >
          <ProgramPreview key={plan.title} plan={plan} hint={auto} onOpen={() => setAuto(false)} />
        </div>
      </div>
    </Section>
  );
}

function ProgramPreview({ plan, hint, onOpen }: { plan: (typeof PDF_PLANS)[number]; hint: boolean; onOpen: () => void }) {
  const progress = (CURRENT_WEEK / plan.weeks) * 100;
  const { sessions, today } = plan.preview;
  const [open, setOpen] = useState(false);

  return (
    <div className="animate-[fadeIn_.4s_ease-out] overflow-hidden rounded-3xl bg-bg text-fg shadow-2xl shadow-black/20">
      <div className="relative h-24 md:h-40">
        <Image key={plan.image} src={plan.image} alt="" fill draggable={false} sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-[center_25%]" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-transparent" />
        {hint && (
          <span className="eyebrow pointer-events-none absolute top-3 right-3 rounded-full bg-bg/60 px-3 py-1.5 text-white/90 backdrop-blur md:hidden">
            ‹ Glisse ›
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-3">
          <p className="eyebrow text-white/70">Programme · {plan.discipline}</p>
          <p className="display-xl text-2xl md:text-3xl">{plan.title}</p>
        </div>
      </div>

      <div className="space-y-3 p-4 md:space-y-4 md:p-5">
        <div>
          <div className="flex justify-between text-xs text-muted">
            <span>Semaine {CURRENT_WEEK} / {plan.weeks}</span>
            <span>{Math.round(progress)} %</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <ol className="space-y-2">
          {sessions.slice(0, -1).map((s) => (
            <li key={s} className="flex items-center gap-3 px-3 py-2 text-sm md:py-2.5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold">✓</span>
              <span className="text-muted line-through decoration-white/20">{s}</span>
            </li>
          ))}

          {/* Séance du jour : « Voir plus » déplie le détail avec les valeurs calculées pour l'athlète. */}
          <li className="rounded-xl bg-panel ring-1 ring-accent">
            <button
              type="button"
              onClick={() => {
                onOpen();
                setOpen((o) => !o);
              }}
              aria-expanded={open}
              className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm md:py-2.5"
            >
              <span className="size-6 shrink-0 rounded-full border-2 border-accent" />
              <span className="flex-1 font-semibold">{sessions[sessions.length - 1]}</span>
              <span className="shrink-0 text-right text-xs leading-tight">
                <span className="block text-muted">Aujourd&apos;hui</span>
                <span className="font-semibold text-accent">{open ? "Voir moins ▴" : "Voir plus ▾"}</span>
              </span>
            </button>
            {open && (
              <ol className="mx-3 border-t border-white/10 pb-1">
                {today.map((b) => (
                  <li key={b.text} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-3 border-b border-white/10 py-2.5 text-sm last:border-0">
                    <span className="font-display font-extrabold text-accent tabular-nums">{b.value}</span>
                    <span className="text-fg">{b.text}</span>
                  </li>
                ))}
              </ol>
            )}
          </li>
        </ol>

        <a href="#" className="heading block rounded-full bg-accent py-3 text-center text-sm transition hover:brightness-110">
          Commencer ce programme · {euros(plan.price)}
        </a>
      </div>
    </div>
  );
}
