import type { Metadata } from "next";
import GearCatalog from "@/components/catalog/GearCatalog";
import Section from "@/components/home/Section";

export const metadata: Metadata = {
  title: "Matériel · Lecoin-Triathlon",
  description: "Le matériel de triathlon que j'utilise vraiment : vélo, course, natation, nutrition.",
};

export default function MaterielPage() {
  return (
    <main className="flex-1">
      <Section id="materiel" eyebrow="Matériel" title="Ce que j'utilise vraiment">
        <GearCatalog />
      </Section>
    </main>
  );
}
