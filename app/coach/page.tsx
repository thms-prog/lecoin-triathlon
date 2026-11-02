import type { Metadata } from "next";
import { Suspense } from "react";
import CoachAthletes from "@/components/espace/CoachAthletes";
import SpaceHeader from "@/components/espace/SpaceHeader";
import { requireCoach } from "@/lib/auth";
import { listAthletes } from "@/lib/users";

export const metadata: Metadata = { title: "Espace coach · Lecoin-Triathlon", robots: { index: false } };

export default function CoachPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 md:px-12 md:py-12">
      <Suspense fallback={<p className="text-muted">Chargement…</p>}>
        <CoachContent />
      </Suspense>
    </main>
  );
}

async function CoachContent() {
  await requireCoach();
  const athletes = await listAthletes();
  return (
    <>
      <SpaceHeader eyebrow="Espace coach" title="Tes athlètes" />
      <CoachAthletes athletes={athletes.map(({ id, name, email }) => ({ id, name, email }))} />
    </>
  );
}
