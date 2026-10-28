"use client";

import Image from "next/image";
import { useState } from "react";
import { GEAR, GEAR_CATEGORIES, amazonUrl } from "@/data/home";
import FilterChips from "./FilterChips";

// Tout le matériel, rangé par catégorie. Même grammaire que la séance détaillée :
// une ligne par produit, la ligne survolée (ou touchée) s'ouvre sur le produit.
export default function GearCatalog() {
  const [filter, setFilter] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const categories = GEAR_CATEGORIES.filter((c) => !filter || c === filter);

  return (
    <>
      <FilterChips options={GEAR_CATEGORIES} value={filter} onChange={setFilter} total={GEAR.length} />
      {categories.map((category) => (
        <section key={category}>
          <h2 className="display-xl text-3xl text-transparent [-webkit-text-stroke:1px_var(--accent)] md:text-5xl">{category}</h2>
          <ol className="mt-4 border-t border-white/10">
            {GEAR.filter((g) => g.category === category).map((item) => {
              const active = open === item.asin;
              return (
                <li
                  key={item.asin}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(item.asin)}
                  className="relative border-b border-white/10"
                >
                  <span className={`absolute top-0 left-0 h-px bg-accent transition-all duration-500 ${active ? "w-full" : "w-0"}`} />
                  <button
                    type="button"
                    onClick={() => setOpen(active ? null : item.asin)}
                    aria-expanded={active}
                    className="grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-4 text-left md:grid-cols-[5rem_1fr_auto]"
                  >
                    <span className="relative aspect-square overflow-hidden rounded-xl bg-white">
                      <Image src={item.image} alt="" fill sizes="80px" className="object-contain p-1.5" />
                    </span>
                    <span>
                      <span className={`heading block text-lg transition md:text-xl ${active ? "text-fg" : "text-muted"}`}>{item.label}</span>
                      {item.featured && <span className="eyebrow text-accent">Recommandé</span>}
                    </span>
                    <span className={`text-xl text-muted-2 transition ${active ? "rotate-45 text-accent" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-500 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-4 pb-5 md:flex-row md:items-center md:justify-between md:pl-24">
                        <div>
                          {item.why && <p className="leading-relaxed text-muted">{item.why}</p>}
                          {item.specs && (
                            <p className="mt-2 text-sm text-muted-2">
                              {item.specs.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(" · ")}
                            </p>
                          )}
                        </div>
                        <a
                          href={amazonUrl(item)}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          className="heading shrink-0 rounded-full bg-accent px-6 py-3 text-center text-sm transition hover:brightness-110"
                        >
                          Voir sur Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
      <p className="text-xs text-muted-2">Liens affiliés Amazon : une petite commission m&apos;est reversée, sans surcoût pour toi.</p>
    </>
  );
}
