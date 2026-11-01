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
  // Produits Amazon mis en avant dans l'encart <!--GEAR--> (ASIN du registre data/home.ts).
  gear?: { asin: string; why: string }[];
  // Source unique de la FAQ : affichée à <!--FAQ--> et reprise dans le JSON-LD FAQPage.
  faq: { q: string; a: string }[];
  // HTML de l'article. Marqueurs remplacés par des composants : <!--GEAR-->, <!--FAQ-->,
  // <!--COACHING:corrections|plan-->.
  content: string;
};
