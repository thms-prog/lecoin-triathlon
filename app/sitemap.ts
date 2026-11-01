import type { MetadataRoute } from "next";
import { ARTICLES, BLOG_INDEXABLE, SITE_URL } from "@/data/articles";

// Les articles n'y entrent qu'au jour de la bascule (BLOG_INDEXABLE), comme leur noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/blog", "/materiel", "/programmes"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const articles = BLOG_INDEXABLE
    ? ARTICLES.map((a) => ({ url: `${SITE_URL}/blog/${a.slug}`, lastModified: a.dateModified, priority: 0.8 }))
    : [];
  return [...pages, ...articles];
}
