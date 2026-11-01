import type { ReactNode } from "react";

// Mise en page commune des pages légales : texte long, lisible, sans effet.
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 md:py-20">
      <h1 className="heading text-3xl md:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Dernière mise à jour : {updated}</p>
      <div className="mt-10 space-y-8 leading-relaxed text-muted [&_a]:text-accent [&_h2]:heading [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:text-fg [&_strong]:text-fg">
        {children}
      </div>
    </main>
  );
}
