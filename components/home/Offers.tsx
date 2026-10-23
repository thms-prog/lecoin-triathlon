"use client";

import Image from "next/image";
import { useState } from "react";
import { PDF_PLANS } from "@/data/home";
import Section from "./Section";

const euros = (n: number) => n.toLocaleString("fr-FR", { minimumFractionDigits: 2 }) + " €";
const CURRENT_WEEK = 3;

// Choix du programme à gauche (chips sur smartphone), aperçu de l'interface à droite :
// on montre que le programme se suit sur le site, pas juste un fichier.
export default function Offers() {
  const [selected, setSelected] = useState(0);
  const plan = PDF_PLANS[selected];

  return (
    <Section id="plans" tone="light" eyebrow="Programmes ciblés" title="Cible ton point faible">
      <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <p className="hidden max-w-md text-ink-muted md:block">
            6 à 8 semaines pour travailler une compétence précise. Tu suis ton programme directement sur le site :
            ta séance du jour, tes allures calculées pour toi, ta progression semaine après semaine.
          </p>

          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:mt-8 md:flex-col md:gap-2 md:overflow-visible md:px-0">
            {PDF_PLANS.map((p, i) => {
              const active = i === selected;
              return (
                <li key={p.title} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={active}
                    className={`flex w-full items-center gap-4 rounded-full border px-4 py-2 text-left transition md:rounded-2xl md:p-3 ${
                      active ? "border-accent bg-white shadow-sm" : "border-transparent hover:bg-white/60"
                    }`}
                  >
                    <span className="relative hidden size-14 shrink-0 overflow-hidden rounded-xl md:block">
                      <Image src={p.image} alt="" fill sizes="56px" className={`object-cover ${p.position}`} />
                    </span>
                    <span className="flex-1">
                      <span className="eyebrow hidden text-accent md:block">{p.discipline}</span>
                      <span className="heading block text-sm md:text-lg">
                        <span className="md:hidden">{p.discipline} · </span>
                        {p.title}
                      </span>
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
          </ul>
        </div>

        <ProgramPreview key={plan.title} plan={plan} />
      </div>
    </Section>
  );
}

function ProgramPreview({ plan }: { plan: (typeof PDF_PLANS)[number] }) {
  const progress = (CURRENT_WEEK / plan.weeks) * 100;
  const { sessions, today } = plan.preview;
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl bg-bg text-fg shadow-2xl shadow-black/20">
      <div className="relative h-24 md:h-40">
        <Image key={plan.image} src={plan.image} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-[center_25%]" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-transparent" />
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
              onClick={() => setOpen((o) => !o)}
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
