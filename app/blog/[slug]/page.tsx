import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/article/ArticleBody";
import { ARTICLES, BLOG_INDEXABLE, SITE_URL, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    robots: { index: BLOG_INDEXABLE, follow: true },
    openGraph: {
      type: "article",
      url,
      title: article.seoTitle,
      description: article.description,
      siteName: "Lecoin-Triathlon",
      locale: "fr_FR",
      images: [{ url: `${SITE_URL}${article.image}`, alt: article.title }],
      publishedTime: article.date,
      modifiedTime: article.dateModified,
    },
    twitter: { card: "summary_large_image", title: article.seoTitle, description: article.description },
  };
}

const longDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const url = `${SITE_URL}/blog/${article.slug}`;

  // Données structurées : article, FAQ (réponses directes, reprises par les moteurs IA) et fil d'Ariane.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      image: `${SITE_URL}${article.image}`,
      datePublished: article.date,
      dateModified: article.dateModified,
      author: { "@type": "Organization", name: "Lecoin-Triathlon", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Lecoin-Triathlon",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: article.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto w-full max-w-3xl px-5 pt-8 pb-20 md:pt-14">
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
          <Image src={article.image} alt={article.title} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>
        <ArticleBody article={article} />
      </article>
    </main>
  );
}
