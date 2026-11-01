export type Article = {
  slug: string;
  title: string;
  // Balise <title> (plus courte que le H1), reprise de Tri-Lab pour garder le référencement.
  seoTitle: string;
  description: string;
  keywords: string[];
  date: string;
  dateModified: string;
  category: string;
  image: string;
  // Encart matériel <!--GEAR--> : une fois par article, seulement s'il n'a pas déjà ses produits.
  // Les produits viennent du registre GEAR de data/home.ts (par ASIN).
  gear?: { title: string; intro: string; items: { asin: string; why: string }[] };
  // Encart coaching <!--COACHING--> : une fois par article, au milieu du texte.
  coaching?: { title: string; text: string };
  // Source unique de la FAQ : affichée à <!--FAQ--> et reprise dans le JSON-LD FAQPage.
  faq: { q: string; a: string }[];
  // HTML de l'article. Marqueurs remplacés par des composants, toujours au premier niveau du HTML :
  // <!--FAQ-->, <!--GEAR-->, <!--COACHING-->, <!--CALC-->, <!--QUIZ-->, <!--FTPTOOLS-->.
  content: string;
};
