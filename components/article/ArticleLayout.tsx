import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles/types";
import { COACHING, GEAR, amazonUrl } from "@/data/home";
import ArticleBody from "./ArticleBody";
import TocNav from "./TocNav";

const longDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

// Entrées du sommaire, reprises du sommaire écrit dans l'article (libellés courts).
function tocItems(article: Article) {
  return [...article.content.matchAll(/<li><a href="#([^"]+)">([^<]+)<\/a><\/li>/g)].map((m) => ({ id: m[1], label: m[2] }));
}

// Colonne de droite (PC) : sommaire + produit Amazon + offre coaching, collés à l'écran.
// Elle tient toujours dans la hauteur de l'écran : seul le sommaire défile, les deux cartes restent visibles.
function Rail({ article }: { article: Article }) {
  const pick = article.gear?.[0] && GEAR.find((g) => g.asin === article.gear?.[0].asin);
  return (
    <div className="sticky top-20 flex max-h-[calc(100svh-6rem)] flex-col gap-5 py-4">
      <div data-toc-scroll className="scrollbar-thin relative min-h-0 flex-1 overflow-y-auto pr-2">
        <TocNav items={tocItems(article)} />
      </div>
      {pick && (
        <a
          href={amazonUrl(pick)}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-panel-2 p-3 transition hover:border-accent"
        >
          <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-white">
            <Image src={pick.image} alt={pick.label} fill sizes="64px" className="object-contain p-1.5" />
          </span>
          <span className="text-sm">
            <span className="eyebrow block text-[0.6rem] text-muted">Mon matériel</span>
            <span className="block font-semibold text-fg">{pick.label}</span>
            <span className="heading text-xs text-accent group-hover:underline">Voir sur Amazon ↗</span>
          </span>
        </a>
      )}
      <div className="neon shrink-0 rounded-2xl bg-panel p-5">
        <p className="eyebrow text-accent">Coaching 1v1</p>
        <p className="heading mt-2 text-lg">Un vrai coach, pas une IA</p>
        <p className="mt-2 text-sm text-muted">
          <span className="heading text-accent">{COACHING.price} €</span> / mois · sans engagement · réponse sous 24 h
        </p>
        <Link href="/#coaching" className="heading mt-4 block rounded-full bg-accent py-2.5 text-center text-xs transition hover:brightness-110">
          Découvrir le coaching
        </Link>
      </div>
    </div>
  );
}

// Smartphone : une colonne. PC : texte à gauche, rail de conversion collant à droite.
export default function ArticleLayout({ article }: { article: Article }) {
  return (
    <article className="mx-auto w-full max-w-7xl px-5 pt-8 pb-20 md:pt-14 lg:grid lg:grid-cols-[minmax(0,48rem)_18rem] lg:justify-center lg:gap-16 lg:px-12">
      <div className="min-w-0">
        <nav aria-label="Fil d'Ariane" className="text-sm text-muted">
          <Link href="/" className="transition hover:text-accent">Accueil</Link>
          <span className="mx-2 text-muted-2">/</span>
          <Link href="/blog" className="transition hover:text-accent">Blog</Link>
        </nav>
        <p className="eyebrow mt-6 text-accent">
          {article.category} · mis à jour le <time dateTime={article.dateModified}>{longDate(article.dateModified)}</time>
        </p>
        <h1 className="heading mt-3 text-3xl text-balance md:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg text-muted">{article.description}</p>
        <div className="neon relative mt-8 aspect-16/9 overflow-hidden rounded-3xl">
          <Image src={article.image} alt={article.title} fill priority sizes="(min-width: 1024px) 768px, 100vw" className="object-cover" />
        </div>
        <ArticleBody article={article} className="lg-hide-toc" />
      </div>
      <aside className="hidden pt-40 lg:block">
        <Rail article={article} />
      </aside>
    </article>
  );
}
