import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles/types";
import ArticleBody from "./ArticleBody";
import TocNav from "./TocNav";

const longDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

// Entrées du sommaire, reprises du sommaire écrit dans l'article (libellés courts).
function tocItems(article: Article) {
  return [...article.content.matchAll(/<li><a href="#([^"]+)">([^<]+)<\/a><\/li>/g)].map((m) => ({ id: m[1], label: m[2] }));
}

// Colonne de droite (PC) : le sommaire seul, collé à l'écran, sans pub (coaching et Amazon
// n'apparaissent qu'une fois, dans le texte). Il défile dans son bloc s'il dépasse la hauteur d'écran.
function Rail({ article }: { article: Article }) {
  return (
    <div data-toc-scroll className="scrollbar-thin sticky top-20 max-h-[calc(100svh-6rem)] overflow-y-auto py-4 pr-2">
      <TocNav items={tocItems(article)} />
    </div>
  );
}

// Smartphone : une colonne. PC : texte à gauche, sommaire collant à droite.
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
