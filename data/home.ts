// Contenu de démo de la home, repris de Tri-Lab (plans, articles, liens Amazon).

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

export const BLOG_POSTS = [
  { title: "Qu'est-ce que la FTP ? Définition et tests", category: "Vélo", image: "/demo/blog-ftp.webp" },
  { title: "L'endurance fondamentale en triathlon", category: "Entraînement", image: "/demo/blog-ef.jpg" },
  { title: "Les transitions : guide complet T1 et T2", category: "Course", image: "/demo/blog-transitions.jpg" },
  { title: "Nutrition triathlon, du Sprint à l'Ironman", category: "Nutrition", image: "/demo/blog-nutrition.jpg" },
];

export const GEAR = [
  { label: "Wahoo KICKR Core 2", category: "Vélo", asin: "B0FLQDCR7X", tag: "hometrainer051-21", image: "https://m.media-amazon.com/images/I/610D8yjOYzL._AC_SL1500_.jpg" },
  { label: "Garmin Forerunner 965", category: "Course", asin: "B0BS1TN8QL", tag: "montre965-21", image: "https://m.media-amazon.com/images/I/71NC77GMLVL._AC_SL1500_.jpg" },
  { label: "Arena Air Speed Mirror", category: "Natation", asin: "B07WRFCJ9N", tag: "lunetteseaulibre-21", image: "https://m.media-amazon.com/images/I/61IIBmbGv8L._AC_SL1500_.jpg" },
  { label: "Maurten Gel 100 × 12", category: "Nutrition", asin: "B07H319S3V", tag: "gelmaurten-21", image: "https://m.media-amazon.com/images/I/710vQKAUK4L._AC_SL1500_.jpg" },
];

export function amazonUrl(item: { asin: string; tag: string }): string {
  return `https://www.amazon.fr/dp/${item.asin}/?tag=${item.tag}`;
}
