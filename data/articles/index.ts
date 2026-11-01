import type { Article } from "./types";
import { article as chatgpt } from "./plan-entrainement-triathlon-avec-chatgpt";

// Articles repris de Tri-Lab, un par un. Les autres slugs de BLOG_POSTS n'ont pas encore de page.
export const ARTICLES: Article[] = [chatgpt];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

// Tant que tri-lab.fr publie les mêmes textes, les articles restent hors index (contenu dupliqué).
// À passer à true le jour de la bascule (redirections 301 tri-lab.fr → lecoin-triathlon.fr).
export const BLOG_INDEXABLE = false;

export const SITE_URL = "https://lecoin-triathlon.fr";
