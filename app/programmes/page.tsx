import type { Metadata } from "next";
import PlanCatalog from "@/components/catalog/PlanCatalog";
import Section from "@/components/home/Section";

export const metadata: Metadata = {
  title: "Programmes ciblés · Lecoin-Triathlon",
  description: "Des programmes de 6 à 8 semaines pour travailler une compétence précise, suivis directement sur le site.",
};

export default function ProgrammesPage() {
  return (
    <main className="flex-1">
      <Section id="programmes" tone="light" eyebrow="Programmes ciblés" title="Cible ton point faible">
        <PlanCatalog />
      </Section>
    </main>
  );
}
