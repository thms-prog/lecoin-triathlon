"use client";

import Image from "next/image";
import { useState } from "react";
import { PDF_PLANS, euros } from "@/data/home";
import FilterChips from "./FilterChips";

const DISCIPLINES = [...new Set(PDF_PLANS.map((p) => p.discipline))];

// Tous les programmes ciblés, filtrables par discipline. Même carte sombre que l'aperçu de l'accueil.
export default function PlanCatalog() {
  const [filter, setFilter] = useState<string | null>(null);
  const plans = filter ? PDF_PLANS.filter((p) => p.discipline === filter) : PDF_PLANS;

  return (
    <>
      <FilterChips options={DISCIPLINES} value={filter} onChange={setFilter} total={PDF_PLANS.length} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <li key={p.title} className="animate-[fadeIn_.4s_ease-out]">
            <a href="#" className="group block overflow-hidden rounded-3xl bg-bg text-fg shadow-xl shadow-black/15 transition duration-500 hover:shadow-[0_20px_60px_-15px_var(--accent)]">
              <div className="relative h-40">
                <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className={`object-cover transition duration-700 group-hover:scale-105 ${p.position}`} />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-3">
                  <p className="eyebrow text-white/70">Programme · {p.discipline}</p>
                  <p className="display-xl text-3xl">{p.title}</p>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <p className="text-muted">{p.detail}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-muted">{p.weeks} semaines</span>
                  <span className="heading text-accent tabular-nums">{euros(p.price)}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
