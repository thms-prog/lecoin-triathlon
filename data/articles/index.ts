import type { Article } from "./types";
import { article as budget } from "./budget-triathlon-2026-guide-ultime";
import { article as calculateur } from "./calculateur-temps-triathlon";
import { article as chatgpt } from "./plan-entrainement-triathlon-avec-chatgpt";
import { article as construire } from "./construire-plan-entrainement-triathlon";
import { article as debuter } from "./debuter-triathlon-guide-complet";
import { article as distances } from "./distances-triathlon-guide-complet";
import { article as educatifs } from "./educatifs-natation-triathlon";
import { article as endurance } from "./endurance-fondamentale-triathlon";
import { article as ftp } from "./comprendre-la-ftp-en-velo";
import { article as nutrition } from "./nutrition-triathlon-guide-complet";
import { article as sub6h } from "./sub-6h-ironman-70-3-partir-de-zero";
import { article as tempsMoyen } from "./temps-moyen-triathlon-distance-niveau-age";
import { article as transitions } from "./transitions-triathlon-guide-complet";
import { article as velo1500 } from "./velo-triathlon-moins-de-1500-euros";
import { article as zwift } from "./zwift-vs-rouvy-vs-mywhoosh-home-trainer-triathlon";

// Les 15 articles repris de Tri-Lab (ceux qui faisaient des vues). Les cartes du blog
// (accueil, /blog, « À lire aussi ») viennent de BLOG_POSTS dans data/home.ts.
export const ARTICLES: Article[] = [
  calculateur, chatgpt, tempsMoyen, educatifs, velo1500, nutrition, zwift, sub6h,
  transitions, endurance, budget, debuter, construire, distances, ftp,
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

// Tant que tri-lab.fr publie les mêmes textes, les articles restent hors index (contenu dupliqué).
// À passer à true le jour de la bascule (redirections 301 tri-lab.fr → lecoin-triathlon.fr).
export const BLOG_INDEXABLE = false;

export const SITE_URL = "https://lecoin-triathlon.fr";
