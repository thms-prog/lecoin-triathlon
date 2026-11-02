import type { Metadata } from "next";
import { Suspense } from "react";
import SpaceHeader from "@/components/espace/SpaceHeader";
import { requireAthlete } from "@/lib/auth";

export const metadata: Metadata = { title: "Mon espace · Lecoin-Triathlon", robots: { index: false } };

export default function EspacePage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 md:px-12 md:py-12">
      <Suspense fallback={<p className="text-muted">Chargement…</p>}>
        <AthleteContent />
      </Suspense>
    </main>
  );
}

// Phase 1 : l'accès fonctionne ; l'interface validée (variante D) arrive en phase 2 avec les vraies données.
async function AthleteContent() {
  const user = await requireAthlete();
  const first = user.name.split(" ")[0];
  return (
    <>
      <SpaceHeader eyebrow="Mon espace" title={`Bonjour ${first}`} />
      <section className="neon rounded-3xl bg-panel p-6 md:p-8">
        <p className="heading text-xl text-fg">Ton coach prépare ta première semaine</p>
        <p className="mt-2 text-muted">Tes séances, ta forme et ta messagerie apparaîtront ici.</p>
      </section>
    </>
  );
}
