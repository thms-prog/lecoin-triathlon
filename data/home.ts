// Contenu de démo de la home, repris de Tri-Lab (plans, articles, liens Amazon).

export const euros = (n: number) => n.toLocaleString("fr-FR", { minimumFractionDigits: 2 }) + " €";

// Plans PDF par compétence (pas par distance). Titres, durées et prix provisoires.
// Programmes ciblés, suivis sur le site. `preview` alimente la maquette de l'interface
// (semaine 3 en cours, séances fictives). Titres, contenus et prix provisoires.
export const PDF_PLANS = [
  {
    discipline: "Vélo", title: "Force", detail: "Pousser plus gros, plus longtemps", weeks: 8, price: 24.9,
    image: "/demo/pdf-force-velo.jpg", position: "object-[70%_center]",
    preview: {
      sessions: ["Force · 5×4' à 50 rpm", "Endurance Z2 · 1h15", "Côtes assis · 6×3' gros braquet"],
      today: [
        { value: "150 W", text: "15' échauffement progressif, cadence libre" },
        { value: "188 W", text: "6×3' en côte, assis, 50-55 rpm · 75 % de ta FTP" },
        { value: "—", text: "3' de récupération en redescendant, très souple" },
        { value: "140 W", text: "10' retour au calme" },
      ],
    },
  },
  {
    discipline: "Course", title: "VMA", detail: "Relever ton plafond de vitesse", weeks: 8, price: 24.9,
    image: "/demo/pdf-vma.jpg", position: "object-[48%_center]",
    preview: {
      sessions: ["10×400 m à 100 % VMA", "Footing EF · 45'", "6×1000 m à 92 % VMA"],
      today: [
        { value: "5'30/km", text: "20' footing + 3 lignes droites" },
        { value: "4'02/km", text: "6×1000 m · 92 % de ta VMA" },
        { value: "—", text: "2' de récupération en trottinant entre chaque" },
        { value: "5'40/km", text: "10' retour au calme" },
      ],
    },
  },
  {
    discipline: "Natation", title: "Technique", detail: "Nager plus long en forçant moins", weeks: 6, price: 24.9,
    image: "/demo/pdf-nage.jpg", position: "object-center",
    preview: {
      sessions: ["Éducatifs rattrapé + 8×50 m", "Endurance 3×400 m", "Test CSS 400 + 200 m"],
      today: [
        { value: "—", text: "300 m d'échauffement + 4×50 m progressifs" },
        { value: "Max", text: "400 m à fond, chronométré" },
        { value: "—", text: "6' très facile" },
        { value: "Max", text: "200 m à fond, chronométré · ta CSS (actuelle 1'48/100 m) est recalculée" },
      ],
    },
  },
  {
    discipline: "Enchaînements", title: "Vélo-course", detail: "Courir vite sur des jambes lourdes", weeks: 6, price: 24.9,
    image: "/demo/pdf-enchainements.jpg", position: "object-[30%_center]",
    preview: {
      sessions: ["Vélo 45' + course 15'", "Footing EF · 40'", "3×(10' vélo + 5' course)"],
      today: [
        { value: "160 W", text: "15' de vélo pour s'échauffer" },
        { value: "212 W", text: "3×10' de vélo à 85 % de ta FTP…" },
        { value: "4'35/km", text: "…enchaînés sans pause avec 5' de course" },
        { value: "5'40/km", text: "10' de footing retour au calme" },
      ],
    },
  },
];

export const COACHING = {
  price: 80,
  points: [
    { title: "Un vrai coach, pas une IA", text: "Ton programme est écrit et ajusté à la main, par un coach qui connaît ton parcours." },
    { title: "Réponse sous 24 h", text: "Sous chaque séance, un fil de commentaires : tu racontes, ton coach répond et ajuste la suite." },
    { title: "Adapté à ta vie et à ton ressenti", text: "Boulot, déplacements, fatigue : tes séances bougent avec toi, pas l'inverse." },
    { title: "Ta progression en graphiques", text: "Tu vois ta forme évoluer semaine après semaine." },
  ],
  // Le bouton mène au questionnaire d'entrée, qui sert de base au début du programme.
  steps: [
    { title: "Questionnaire", text: "Ton niveau, tes objectifs, tes dispos, ton historique." },
    { title: "Ton programme", text: "Ton coach construit tes premières semaines sur mesure." },
    { title: "C'est parti", text: "Tu t'entraînes, tu commentes, on ajuste ensemble." },
  ],
};

// Données fictives de la maquette de l'espace client.
export const MOCKUP_WEEK = [
  { day: "L", discipline: "Course", state: "done" },
  { day: "M", discipline: "Nage", state: "done" },
  { day: "M", discipline: "Vélo", state: "today" },
  { day: "J", discipline: "Repos", state: "moved" },
  { day: "V", discipline: "Course", state: "planned" },
  { day: "S", discipline: "Vélo", state: "planned" },
  { day: "D", discipline: "Renfo", state: "planned" },
] as const;

export const MOCKUP_COMMENTS = [
  { from: "athlete", name: "Julie", text: "Journée chargée au boulot, jambes lourdes dès le 3e bloc. RPE 7 au lieu de 6." },
  { from: "coach", name: "Coach", text: "Bien géré. Avec ton déplacement jeudi, je décale le footing à vendredi et je raccourcis samedi." },
] as const;

// Forme sur 12 semaines (indice arbitraire, la semaine 1 vaut 100).
export const MOCKUP_FORM = [100, 103, 101, 106, 110, 108, 113, 112, 116, 114, 119, 118];

// Articles repris de Tri-Lab (mêmes slugs, mêmes dates). L'accueil affiche les plus récents,
// la page /blog les liste tous.
export const BLOG_POSTS = [
  { slug: "calculateur-temps-triathlon", date: "2026-09-11", category: "Course", image: "/demo/blog/calculateur.jpg", title: "Combien de temps pour finir un triathlon ? Le calculateur", excerpt: "Calcule ton temps du Sprint à l'Ironman à partir de tes chronos nage, vélo, course." },
  { slug: "plan-entrainement-triathlon-avec-chatgpt", date: "2026-09-10", category: "Entraînement", image: "/demo/blog/chatgpt.jpg", title: "Faire son plan triathlon avec ChatGPT : le guide", excerpt: "Le prompt qui marche, ce qu'il produit vraiment, et quand l'IA ne suffit plus." },
  { slug: "temps-moyen-triathlon-distance-niveau-age", date: "2026-09-04", category: "Course", image: "/demo/blog/temps-moyen.jpg", title: "Temps moyen sur un triathlon : par distance, niveau et âge", excerpt: "Sprint 1h35, Olympique 2h50, 70.3 5h52, Ironman 12h23 : le détail par sexe, âge et niveau." },
  { slug: "educatifs-natation-triathlon", date: "2026-08-26", category: "Natation", image: "/demo/blog/educatifs.jpg", title: "Éducatifs natation : les 7 exercices qui améliorent ton crawl", excerpt: "Exécution, bénéfice, erreurs fréquentes, et comment les caser en 2 séances par semaine." },
  { slug: "velo-triathlon-moins-de-1500-euros", date: "2026-07-23", category: "Vélo", image: "/demo/blog/velo-1500.jpg", title: "Vélo triathlon à moins de 1500 € : 5 routes et 2 CLM", excerpt: "Taille de cadre, freins à disque et méthode pour négocier une occasion au bon prix." },
  { slug: "nutrition-triathlon-guide-complet", date: "2026-06-18", category: "Nutrition", image: "/demo/blog/nutrition.jpg", title: "Nutrition triathlon, du Sprint à l'Ironman", excerpt: "Glucides, hydratation, ravitaillement : quoi prendre selon la distance pour finir fort." },
  { slug: "zwift-vs-rouvy-vs-mywhoosh-home-trainer-triathlon", date: "2026-05-31", category: "Vélo", image: "/demo/blog/zwift.png", title: "Zwift, Rouvy ou MyWhoosh pour le triathlon ?", excerpt: "Prix, parcours Ironman officiels, test FTP, communauté : le comparatif des 3 applis." },
  { slug: "sub-6h-ironman-70-3-partir-de-zero", date: "2026-05-10", category: "Entraînement", image: "/demo/blog/sub6h.jpg", title: "Sub 6h sur Ironman 70.3, même en partant de 0", excerpt: "Splits par discipline, 6 mois de préparation, nutrition et gestion du jour J." },
  { slug: "transitions-triathlon-guide-complet", date: "2026-04-27", category: "Course", image: "/demo/blog/transitions.jpg", title: "Les transitions : guide complet T1 et T2", excerpt: "Ta zone, les gestes clés, les règles et les erreurs qui coûtent des secondes." },
  { slug: "endurance-fondamentale-triathlon", date: "2026-04-01", category: "Entraînement", image: "/demo/blog/ef.jpg", title: "L'endurance fondamentale en triathlon", excerpt: "Zone 2, règle 80/20, piège de la zone 3 et calcul de ton allure EF sur les 3 disciplines." },
  { slug: "budget-triathlon-2026-guide-ultime", date: "2026-03-06", category: "Matériel", image: "/demo/blog/budget.jpg", title: "Quel budget pour le triathlon en 2026 ?", excerpt: "Sprint ~800 €, Olympique ~1 100 €, 70.3 ~1 500 €, Ironman ~2 800 € : le kit par distance." },
  { slug: "debuter-triathlon-guide-2026", date: "2026-02-09", category: "Débuter", image: "/demo/blog/debuter.webp", title: "Comment débuter le triathlon : le guide complet", excerpt: "Matériel, plan, tests VMA/FTP, erreurs à éviter pour réussir ton premier triathlon." },
  { slug: "construire-plan-entrainement-triathlon", date: "2026-02-05", category: "Entraînement", image: "/demo/blog/plan.webp", title: "Construire son plan d'entraînement en triathlon", excerpt: "Structure hebdo, macrocycles et zones d'entraînement, du Sprint à l'Ironman." },
  { slug: "distances-triathlon-guide-complet", date: "2026-01-26", category: "Débuter", image: "/demo/blog/distances.webp", title: "Distances en triathlon : comparatif et choix du format", excerpt: "XS, Sprint, M, 70.3, Ironman : distances, prix et temps moyens dans un tableau clair." },
  { slug: "comprendre-la-ftp-en-velo", date: "2026-01-14", category: "Vélo", image: "/demo/blog/ftp.webp", title: "Qu'est-ce que la FTP ? Définition et tests", excerpt: "3 tests fiables, le calcul pas à pas et tes zones d'entraînement vélo." },
  { slug: "PhEF-Physical-evaluation-fitness", date: "2026-01-09", category: "Tests", image: "/demo/blog/phef.webp", title: "PhEF : Physical Evaluation Fitness", excerpt: "Le test de l'armée belge : déroulement, barèmes officiels et conseils pour le réussir." },
  { slug: "Qu-est-ce-que-la-VMA", date: "2026-01-02", category: "Course", image: "/demo/blog/vma.webp", title: "Qu'est-ce que la VMA ? Définition et tests", excerpt: "5 tests précis, le calcul étape par étape et tes allures exactes pour le triathlon." },
];

export type BlogPost = (typeof BLOG_POSTS)[number];

export function latestPosts(count: number): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
}

export const GEAR_CATEGORIES = ["Vélo", "Course", "Natation", "Nutrition"] as const;
export type GearCategory = (typeof GEAR_CATEGORIES)[number];

export type GearItem = {
  label: string;
  category: GearCategory;
  asin: string;
  tag: string;
  image: string;
  // Mis en avant sur l'accueil ; tout le reste vit sur /materiel.
  featured?: boolean;
  // Textes provisoires, à réécrire avec ton vrai retour d'expérience.
  why?: string;
  specs?: { value: string; label: string }[];
};

// Registre repris de Tri-Lab (src/Data/affiliateLinks.ts) : un Tracking ID Amazon par produit.
export const GEAR: GearItem[] = [
  {
    label: "Wahoo KICKR Core 2", category: "Vélo", asin: "B0FLQDCR7X", tag: "hometrainer051-21", image: "https://m.media-amazon.com/images/I/610D8yjOYzL._AC_SL1500_.jpg", featured: true,
    why: "Silencieux et précis : il encaisse tous les blocs d'hiver sur Zwift.",
    specs: [{ value: "1800 W", label: "Résistance max" }, { value: "±2 %", label: "Précision" }, { value: "Zwift", label: "Compatible" }],
  },
  { label: "Magene P715, capteur de puissance", category: "Vélo", asin: "B0FBGDR81B", tag: "capteurpuissance-21", image: "https://m.media-amazon.com/images/I/61tiLR5mc8L._AC_SL1500_.jpg" },
  { label: "Garmin Edge 530", category: "Vélo", asin: "B07RZ95D6L", tag: "edge530-21", image: "https://m.media-amazon.com/images/I/61-4nSEkgrL._AC_SL1500_.jpg" },
  { label: "Casque Abus Macator", category: "Vélo", asin: "B0CCJJRVH2", tag: "casqueabus-21", image: "https://m.media-amazon.com/images/I/712tk7-JZsL._AC_SX679_.jpg" },
  {
    label: "Garmin Forerunner 965", category: "Course", asin: "B0BS1TN8QL", tag: "montre965-21", image: "https://m.media-amazon.com/images/I/71NC77GMLVL._AC_SL1500_.jpg", featured: true,
    why: "Écran lisible en plein soleil, mode triathlon avec transitions enregistrées.",
    specs: [{ value: "AMOLED", label: "Écran" }, { value: "23 j", label: "Autonomie" }, { value: "Tri", label: "Mode multisport" }],
  },
  { label: "Hoka Mach 5", category: "Course", asin: "B0BL7N9D2N", tag: "hokamach5-21", image: "https://m.media-amazon.com/images/I/51aBsg4-JTL._AC_SY695_.jpg" },
  { label: "Asics Novablast (femme)", category: "Course", asin: "B0D5H82BR5", tag: "novablast-21", image: "https://m.media-amazon.com/images/I/51FVoNMhycL._AC_SY695_.jpg" },
  { label: "Nike Pegasus 41", category: "Course", asin: "B0F2GB3CGG", tag: "pegasus41-21", image: "https://m.media-amazon.com/images/I/71hljoGjRRL._AC_SY695_.jpg" },
  { label: "Lunettes Oakley", category: "Course", asin: "B01KAFO1T0", tag: "lunettesoakley-21", image: "https://m.media-amazon.com/images/I/51bLzLgM6CS._AC_SL1500_.jpg" },
  { label: "Ceinture porte-dossard", category: "Course", asin: "B07NQ8M6YT", tag: "ceinturedossard-21", image: "https://m.media-amazon.com/images/I/51xT2l2IlzL._AC_SL1000_.jpg" },
  {
    label: "Arena Air Speed Mirror", category: "Natation", asin: "B07WRFCJ9N", tag: "lunetteseaulibre-21", image: "https://m.media-amazon.com/images/I/61IIBmbGv8L._AC_SL1500_.jpg", featured: true,
    why: "Verres miroir pour les départs face au soleil, confortables sur la durée.",
    specs: [{ value: "Miroir", label: "Verres" }, { value: "Anti-buée", label: "Traitement" }, { value: "Eau libre", label: "Usage" }],
  },
  { label: "Bonnet Arena silicone", category: "Natation", asin: "B01MSREODA", tag: "bonnetarena-21", image: "https://m.media-amazon.com/images/I/51e-u3BAvML._AC_SL1500_.jpg" },
  {
    label: "Maurten Gel 100 × 12", category: "Nutrition", asin: "B07H319S3V", tag: "gelmaurten-21", image: "https://m.media-amazon.com/images/I/710vQKAUK4L._AC_SL1500_.jpg", featured: true,
    why: "Digeste même à haute intensité : la base de ma stratégie en course.",
    specs: [{ value: "25 g", label: "Glucides" }, { value: "100 kcal", label: "Énergie" }, { value: "Hydrogel", label: "Format" }],
  },
  { label: "SiS Gel isotonique × 15", category: "Nutrition", asin: "B07PGL4G2R", tag: "gelsis-21", image: "https://m.media-amazon.com/images/I/716Ra-GJdML._AC_SL1500_.jpg" },
];

export function amazonUrl(item: { asin: string; tag: string }): string {
  return `https://www.amazon.fr/dp/${item.asin}/?tag=${item.tag}`;
}
