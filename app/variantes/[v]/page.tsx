import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import VariantShell, { type VariantKey } from "@/components/espace/VariantShell";
import { loadProgramme } from "@/lib/programme";

// TEMP : comparaison des variantes de l'espace client, à supprimer après décision.
export const metadata: Metadata = { robots: { index: false } };

export function generateStaticParams() {
  return ["a", "b", "c", "d"].map((v) => ({ v }));
}

export default function Variante({ params }: PageProps<"/variantes/[v]">) {
  return (
    <Suspense>
      <Content params={params} />
    </Suspense>
  );
}

async function Content({ params }: Pick<PageProps<"/variantes/[v]">, "params">) {
  const { v } = await params;
  if (!["a", "b", "c", "d"].includes(v)) notFound();
  // Semaine de démo : les vraies séances du programme, du lundi 2 au samedi 7 novembre.
  const week = loadProgramme().filter((w) => w.date >= "2026-11-02" && w.date <= "2026-11-07");
  return <VariantShell v={v as VariantKey} week={week} />;
}
