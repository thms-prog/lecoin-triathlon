"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GEAR, GEAR_CATEGORIES, amazonUrl } from "@/data/home";
import SeeAll from "./SeeAll";
import StoryBar from "./StoryBar";
import Section from "./Section";
import { useSeen, useSwipe } from "./useSwipe";

// Sur l'accueil, seulement les produits mis en avant, rangés par catégorie.
const SHELVES = GEAR_CATEGORIES.map((category) => ({
  category,
  items: GEAR.filter((g) => g.featured && g.category === category),
})).filter((s) => s.items.length > 0);

const AUTOPLAY = "5s";

// Vitrine : sélecteur de catégorie en haut (le dernier onglet mène à tout le matériel sur PC),
// un produit à la fois sur un socle lumineux qu'on fait glisser au doigt ou à la souris.
// Défile tout seul façon stories (une barre par produit, pause au survol) ; le swipe passe
// au produit suivant, puis à la catégorie suivante.
export default function Gear() {
  const [shelf, setShelf] = useState(0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [hintRef, seen] = useSeen<HTMLDivElement>();
  const { category, items } = SHELVES[shelf];
  const item = items[index];

  const pick = (s: number) => {
    setShelf(s);
    setIndex(0);
  };

  const step = (dir: 1 | -1) => {
    const i = index + dir;
    if (i >= 0 && i < items.length) return setIndex(i);
    const s = (shelf + dir + SHELVES.length) % SHELVES.length;
    setShelf(s);
    setIndex(dir === 1 ? 0 : SHELVES[s].items.length - 1);
  };

  const { dx, dragging, handlers } = useSwipe((dir) => {
    setSwiped(true);
    step(dir);
  });

  return (
    <Section id="materiel" eyebrow="Matériel" title="Ce que j'utilise vraiment" action={<SeeAll href="/materiel" count={GEAR.length} />}>
      <div onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} className="flex flex-col gap-8 md:gap-12">
        <div role="tablist" className="grid grid-cols-4 gap-3 md:grid-cols-5 md:gap-6">
          {SHELVES.map((s, i) => {
            const active = i === shelf;
            return (
              <button key={s.category} type="button" role="tab" aria-selected={active} onClick={() => pick(i)} className="group min-w-0 text-left">
                <span className="flex gap-1">
                  {s.items.map((g, k) => (
                    <StoryBar
                      key={g.asin}
                      state={active && k === index ? "current" : i < shelf || (active && k < index) ? "done" : "todo"}
                      duration={AUTOPLAY}
                      running={seen && !paused && !dragging}
                      onEnd={() => step(1)}
                      className="h-1 flex-1 rounded-full bg-line md:h-0.5 md:rounded-none"
                    />
                  ))}
                </span>
                <span className={`heading mt-3 block truncate text-xs transition sm:text-sm md:text-lg ${active ? "text-fg" : "text-muted-2 group-hover:text-muted"}`}>
                  {s.category}
                </span>
              </button>
            );
          })}
          <Link href="/materiel" className="group hidden md:block">
            <span className="block h-0.5 bg-[repeating-linear-gradient(90deg,var(--accent)_0_6px,transparent_6px_10px)] opacity-60 transition group-hover:opacity-100" />
            <span className="heading mt-3 block text-lg text-accent">
              Tout voir <span className="text-xs text-muted-2 transition group-hover:text-muted">{GEAR.length}</span> →
            </span>
          </Link>
        </div>
  
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div
            ref={hintRef}
            {...handlers}
            className="relative mx-auto aspect-square w-full max-w-md cursor-grab touch-pan-y select-none active:cursor-grabbing"
          >
            <span
              aria-hidden
              className="display-xl pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-6xl text-transparent [-webkit-text-stroke:1px_var(--line)] md:text-8xl"
            >
              {category}
            </span>
            <div className="absolute inset-[6%] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-accent/40" />
            <div className="absolute inset-[14%] overflow-hidden rounded-full bg-white shadow-[0_0_90px_-10px_var(--accent)]">
              <div className={seen && !swiped ? "absolute inset-0 animate-[nudge_1.2s_ease-in-out_.4s_2]" : "absolute inset-0"}>
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `translateX(${dx}px) rotate(${dx / 12}deg)`,
                    opacity: 1 - Math.min(Math.abs(dx) / 260, 0.6),
                    transition: dragging ? "none" : "transform .4s cubic-bezier(.2,.8,.2,1), opacity .4s",
                  }}
                >
                  <Image
                    key={item.asin}
                    src={item.image}
                    alt={item.label}
                    fill
                    draggable={false}
                    sizes="(min-width: 768px) 360px, 70vw"
                    className="animate-[fadeIn_.4s_ease-out] object-contain p-[14%]"
                  />
                </div>
              </div>
            </div>
            {items.length > 1 && (
              <span className="eyebrow absolute top-0 left-0 text-accent tabular-nums">
                {index + 1} / {items.length}
              </span>
            )}
            {!swiped && <span className="eyebrow pointer-events-none absolute top-0 right-0 text-muted">‹ Glisse ›</span>}
            <a
              href={amazonUrl(item)}
              target="_blank"
              rel="sponsored noopener noreferrer"
              draggable={false}
              className="heading absolute bottom-[7%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-accent py-2.5 pr-2.5 pl-5 text-sm whitespace-nowrap text-fg shadow-[0_0_24px_rgba(0,129,143,0.8)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.9)]"
            >
              Voir sur Amazon
              <span className="flex size-7 items-center justify-center rounded-full bg-fg text-accent">↗</span>
            </a>
          </div>
  
          <div key={item.asin} className="animate-[fadeIn_.5s_ease-out]">
            <p className="eyebrow text-accent">{item.category}</p>
            <p className="heading mt-2 text-2xl md:text-3xl">{item.label}</p>
            {item.why && <p className="mt-3 border-l-2 border-accent pl-4 leading-relaxed text-muted">{item.why}</p>}
            {item.specs && (
              <dl className="mt-6 grid grid-cols-3 border-y border-white/10">
                {item.specs.map((s) => (
                  <div key={s.label} className="border-r border-white/10 py-4 pr-3 last:border-0 [&:not(:first-child)]:pl-4">
                    <dt className="text-xs text-muted-2">{s.label}</dt>
                    <dd className="heading mt-1 text-lg text-accent md:text-xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-2">Liens affiliés Amazon : une petite commission m&apos;est reversée, sans surcoût pour toi.</p>
    </Section>
  );
}
