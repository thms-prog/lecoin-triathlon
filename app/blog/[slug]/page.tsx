import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArticleLayout from "@/components/article/ArticleLayout";
import Blog from "@/components/home/Blog";
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

// Le slug est lu sous <Suspense> : le « shell » instantané de la route ne dépend pas de l'URL
// (exigé par Cache Components). Les articles restent prérendus au build, HTML complet compris.
export default function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <main className="flex-1">
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleContent params={params} />
      </Suspense>
    </main>
  );
}

function ArticleSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl animate-pulse px-5 pt-8 pb-20 md:pt-14">
      <div className="h-4 w-32 rounded bg-white/5" />
      <div className="mt-8 h-12 w-full rounded bg-white/5" />
      <div className="mt-3 h-12 w-2/3 rounded bg-white/5" />
      <div className="mt-8 aspect-16/9 rounded-3xl bg-white/5" />
    </div>
  );
}

async function ArticleContent({ params }: Pick<PageProps<"/blog/[slug]">, "params">) {
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleLayout article={article} />
      {/* « À lire aussi » : la section Blog de l'accueil, sans l'article en cours. */}
      <Blog id="a-lire" eyebrow="Blog · À lire aussi" exclude={article.slug} />
    </>
  );
}
