import type { Metadata } from "next";
import Link from "next/link";

// TEMP : page de choix de l'espace client, à supprimer après décision.
export const metadata: Metadata = { robots: { index: false } };

const VARIANTS = [
  { v: "d", name: "Synthèse · à valider", text: "Athlète : l'aperçu de C, la semaine de C cliquable avec le détail de chaque séance, les 3 onglets de B et la conversation dessous. Coach : la messagerie de B, avec l'aperçu et la semaine de l'athlète ouvert." },
  { v: "a", name: "Tableau de bord", text: "Tout visible d'un coup : chiffres clés, forme, volume, régularité, tests, semaine et échanges. Côté coach, un tableau des athlètes trié par urgence." },
  { v: "b", name: "Ma semaine", text: "L'action d'abord : les jours en cartes à faire glisser, la séance du jour à valider sur place, puis un graphique à la fois. Côté coach, une boîte de réception." },
  { v: "c", name: "Mission control", text: "Le plus futuriste : une grande jauge de fraîcheur, des rails de mesures, la semaine en ligne de temps. Côté coach, un mur d'athlètes qui s'allument." },
];

export default function Variantes() {
  return (
    <main className="mx-auto w-full max-w-350 flex-1 px-5 py-12 md:px-12 md:py-24 lg:px-20">
      <p className="eyebrow text-accent">Variantes · espace client</p>
      <h1 className="heading mt-3 text-3xl md:text-4xl">L&apos;espace athlète et coach</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Données fictives (Julie, 70.3 en mai 2027) et vraie semaine du programme. Chaque variante a une vue athlète et une vue coach,
        à basculer en haut de page.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {VARIANTS.map((x) => (
          <Link key={x.v} href={`/variantes/${x.v}`} className="neon rounded-3xl bg-panel p-6 transition hover:bg-panel-2">
            <span className="heading text-5xl text-accent">{x.v.toUpperCase()}</span>
            <h2 className="heading mt-4 text-xl">{x.name}</h2>
            <p className="mt-2 text-sm text-muted">{x.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
