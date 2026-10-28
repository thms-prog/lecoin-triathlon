import type { Metadata } from "next";
import BlogIndex from "@/components/catalog/BlogIndex";
import Section from "@/components/home/Section";

export const metadata: Metadata = {
  title: "Blog · Lecoin-Triathlon",
  description: "Entraînement, nutrition, matériel : tous les articles pour progresser en triathlon.",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Section id="blog" eyebrow="Blog" title="Comprendre pour mieux s'entraîner">
        <BlogIndex />
      </Section>
    </main>
  );
}
