import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "construire-plan-entrainement-triathlon",
  title: "Construire son plan d’entraînement en triathlon",
  seoTitle: "Construire son plan d'entraînement triathlon",
  description: "Construire un plan d'entraînement triathlon efficace : structure hebdo, macrocycles, calcul VMA/FTP et zones d'entraînement pour Sprint à Ironman.",
  keywords: ["plan entraînement triathlon","construire plan triathlon","structure semaine triathlon","VMA test triathlon","FTP vélo calcul","zones entraînement triathlon","plan triathlon débutant","macrocycle triathlon","triathlon Sprint Olympique 70.3"],
  date: "2026-02-05",
  dateModified: "2026-11-01",
  category: "Entraînement",
  image: "/demo/blog/plan.webp",
  coaching: {
    title: "Pas le temps de bâtir ton plan toi-même ?",
    text: "Un vrai coach le construit à partir de tes tests, de ta date de course et de tes créneaux réels, puis l'ajuste chaque semaine.",
  },
  gear: {
    title: "Les outils pour mesurer tes repères",
    intro: "VMA, FTP, zones : sans mesure fiable, un plan ne peut pas caler tes intensités.",
    items: [
      { asin: "B0BS1TN8QL", why: "Montre GPS multisport : allure, cardio et tests VMA, avec un vrai mode triathlon." },
      { asin: "B0FLQDCR7X", why: "Home trainer connecté : test FTP et séances vélo précises, même l'hiver." },
      { asin: "B0FBGDR81B", why: "Capteur de puissance sur pédales : tes watts réels sur la route." },
    ],
  },
  faq: [
    {
      "q": "Combien de séances par semaine pour un plan triathlon ?",
      "a": "En général, 3 à 5 séances par semaine suffisent pour un format Sprint ou Olympique. Pour un Ironman 70.3, compte plutôt 5 à 7 séances. L'important est de répartir équitablement les trois disciplines tout en respectant les jours de récupération."
    },
    {
      "q": "Faut-il connaître sa VMA et sa FTP pour construire un plan triathlon ?",
      "a": "Oui, connaître sa VMA (Vitesse Maximale Aérobie) et sa FTP (Functional Threshold Power) permet de calculer des zones d'entraînement précises et d'éviter de s'entraîner trop fort ou trop doucement. Des tests simples de 6 à 20 minutes suffisent pour les mesurer."
    },
    {
      "q": "Comment structurer sa semaine d'entraînement en triathlon ?",
      "a": "Une semaine type en triathlon alterne les disciplines en évitant deux séances intenses consécutives. Exemple : lundi repos, mardi course à pied, mercredi natation, jeudi vélo, vendredi repos ou natation légère, samedi sortie longue vélo, dimanche course à pied courte."
    },
    {
      "q": "Quelle est la différence entre un plan Sprint et un plan Ironman ?",
      "a": "Un plan Sprint (8 à 12 semaines) mise sur la vitesse et la technique avec 3 à 4 séances par semaine. Un plan Ironman (20 à 30 semaines) privilégie le volume et l'endurance fondamentale avec 6 à 10 séances par semaine. Le volume hebdomadaire peut aller de 5h pour un Sprint à plus de 15h pour un Ironman."
    },
    {
      "q": "Peut-on utiliser un générateur de plan triathlon en ligne ?",
      "a": "Oui, mais choisis-en un qui prend en compte ta VMA, ta FTP, ton temps de crawl sur 200m, ton volume horaire disponible et ta date de course : c'est bien plus efficace qu'un plan générique. La limite reste l'adaptation : un générateur ne réagit pas à ta fatigue ni à une séance ratée, un coach si."
    }
  ],
  content: `
<nav>
  <h2>Sommaire</h2>
  <ul>
    <li>🧱 <a href="#bases-plan-triathlon">Les bases pour construire un plan d’entraînement en triathlon</a></li>
    <li>🗓️ <a href="#semaine-type-triathlon">Comment structurer une semaine type en triathlon</a></li>
    <li>⚠️ <a href="#erreurs-a-eviter">Les erreurs à éviter quand on crée son plan</a></li>
    <li>📋 <a href="#exemples-plans">Exemple de plans d’entraînement selon les objectifs</a></li>
    <li>🧰 <a href="#outils-plan">Outils pour construire son plan d’entraînement</a></li>
    <li>❓ <a href="#faq">FAQ</a></li>
  </ul>
</nav>

<h2 id="bases-plan-triathlon">Les bases pour construire un plan d'entraînement en triathlon</h2>
<h3>Comprendre les trois disciplines et leurs contraintes</h3>
<p>Je vais garder l'explication centrée sur le triathlon, sans écrire un livre complet sur chaque discipline. Voici une lecture rapide et réaliste des contraintes, avec la même logique pour les trois sports.</p>

<p><strong>1) La course à pied</strong></p>
<ul>
  <li><strong>Accès / temps</strong> : ultra-simple à lancer. Tu sors de chez toi, la séance commence.</li>
  <li><strong>Coût / matériel</strong> : une bonne paire de chaussures + veste de pluie + lampe frontale, c'est suffisant.</li>
  <li><strong>Risque</strong> : sport à impact → la montée en volume doit être progressive. Une revue systématique sur des coureurs de longue distance rapporte une incidence de blessures allant d'environ <strong>19,4% à 79,3%</strong> selon les études (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465455/" target="_blank" rel="noopener noreferrer">source</a>).</li>
  <li><strong>Conseil clé</strong> : varier les intensités (calme + intensité) et intégrer du renforcement musculaire réduit le risque.</li>
</ul>

<p><strong>2) La natation</strong></p>
<ul>
  <li><strong>Accès / temps</strong> : nécessite une piscine → trajets + créneaux horaires à prendre en compte.</li>
  <li><strong>Coût / matériel</strong> : peu coûteux (bonnet, lunettes, maillot), mais il faut ajouter l'abonnement ou les cartes de séances.</li>
  <li><strong>Technique</strong> : discipline la plus technique des trois. Sans coach ou conseils, la progression est souvent lente.</li>
  <li><strong>Risque</strong> : impact faible, mais une mauvaise technique peut créer des tensions (épaules, cervicales).</li>
</ul>

<p><strong>3) Le vélo</strong></p>
<ul>
  <li><strong>Accès / sécurité</strong> : dépend beaucoup des routes. Dans certaines zones, la circulation rend les sorties stressantes. Personnellement, j’attends une météo idéale pour limiter le risque.</li>
  <li><strong>Coût / matériel</strong> : vélo, casque, chaussures, accessoires + consommables. Le budget grimpe vite.</li>
  <li><strong>Alternative pratique</strong> : home trainer pour s’entraîner en sécurité et suivre la puissance (idéal si tu aimes la data). Un gravel est aussi une option pour éviter les routes trop fréquentées.</li>
  <li><strong>Risque</strong> : impact moyen. Rouler avec un vélo et des cales mal réglés par rapport à sa morphologie peut entraîner des douleurs aux genoux, au dos et aux cervicales, le risque de chute est également présent.</li>
</ul>

<p>Voilà les trois disciplines résumées dans leur réalité terrain.</p>

<h3>Définir son objectif (S, M, L, XXL)</h3>
<p>Choisir sa course dépend surtout de trois facteurs&nbsp;: ton <strong>niveau actuel</strong>, ton <strong>temps disponible par semaine</strong> et ton <strong>budget</strong> (matériel, déplacements, inscriptions). Si tu hésites, notre guide complet t'aidera à faire un choix cohérent&nbsp;:</p>

<div class="tip">
  <div class="row">
    <img src="/blog/img/distance-triathlon.webp" alt="Guide des distances triathlon" class="content-img" loading="lazy">
    <div>
      <h4>📏 Guide complet des distances en triathlon</h4>
      <p>
        <strong>Sprint • Olympique • Half Ironman (70.3) • Ironman (140.6)</strong>
      </p>
      <p class="good">
        Comparatif détaillé de toutes les distances : temps d'entraînement requis, budget, niveau recommandé, et conseils pour choisir le format adapté à ton profil.
      </p>
      <a href="/blog/distances-triathlon-guide-complet">
        Découvrir le guide complet →
      </a>
    </div>
  </div>
</div>

<h3>Évaluer son niveau actuel (VMA, FTP, natation)</h3>
<p>Ton programme repose sur des <strong>pourcentages d'intensité</strong> calculés à partir de trois repères&nbsp;: VMA (course), FTP (vélo) et vitesse en natation. Ces repères doivent être <strong>retestés régulièrement</strong> (toutes les 6–8&nbsp;semaines) pour rester précis.</p>
<p><strong>• VMA (course à pied)</strong> : vitesse maximale aérobie. Un test simple est le <strong>Demi‑Cooper (6&nbsp;min)</strong> à allure maximale régulière. Tu obtiens une VMA en km/h, que tu peux convertir en min/km pour les séances.</p>
<div class="note row">
  <img src="/blog/img/ameliorer-sa-vma.webp" alt="Calculer sa VMA" class="content-img" loading="lazy">
  
</div>
<p><strong>• FTP (vélo)</strong> : puissance maximale soutenable ~1&nbsp;heure. En pratique, on fait un test <strong>20&nbsp;min</strong> et on estime la FTP à <strong>95&nbsp;%</strong> de la puissance moyenne du test. L'idéal est un home trainer ou un capteur de puissance.</p>
<div class="info row">
  <img src="/blog/img/ftp-cyclisme.webp" alt="Calculer sa FTP" class="content-img" loading="lazy">
  <a href="/blog/comprendre-la-ftp-en-velo" class="btn">Guide FTP vélo →</a>
</div>
<p><strong>• CSS (Natation)</strong> : on utilise souvent la <strong>CSS</strong> (Critical Swim Speed, parfois appelée “vitesse critique”). Le test le plus courant est <strong>200&nbsp;m + 400&nbsp;m</strong> à fond, avec récupération complète. La CSS se calcule comme suit&nbsp;: <strong>CSS (sec/100&nbsp;m) = (T400 − T200) / 2</strong>. Tu obtiens ainsi une allure de référence en min/100&nbsp;m pour calibrer tes séries (endurance, tempo, seuil).</p>

<h3>Prendre en compte son temps disponible par semaine</h3>

<p>Beaucoup disent « Je n'ai pas le temps » et d'autres font des calculs mathématiques : 24 h − 8 h de travail − 8 h de sommeil = 8 h restantes. Mais cette réalité varie énormément selon ta vie personnelle. <strong>Il faut être lucide et réaliste.</strong> Voyons comment structurer une semaine type.</p>

<p><strong>Ma semaine personnelle : format L (longue distance) avec 8–10 h d'entraînement</strong></p>

<div class="table-wrap">
<table>
<tbody><tr>
<th><strong>Créneaux</strong></th>
<th><strong>Lundi</strong></th>
<th><strong>Mardi</strong></th>
<th><strong>Mercredi</strong></th>
<th><strong>Jeudi</strong></th>
<th><strong>Vendredi</strong></th>
<th><strong>Samedi</strong></th>
<th><strong>Dimanche</strong></th>
</tr>
<tr>
<td>5 h–5h50</td>
<td>Réveil + petit dej</td>
<td>Réveil + petit dej</td>
<td>Réveil + petit dej</td>
<td>Réveil + petit dej</td>
<td>Réveil + petit dej</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>5h50–7 h</td>
<td>Route vers le boulot</td>
<td>Route vers le boulot</td>
<td>Route vers le boulot</td>
<td>Route vers le boulot</td>
<td>Route vers le boulot</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>7 h–11h30</td>
<td>Boulot</td>
<td>Boulot</td>
<td>Boulot</td>
<td>Boulot</td>
<td>Boulot</td>
<td><strong>Vélo</strong><br>Endurance<br>éventuellement du brick</td>
<td><strong>repos</strong></td>
</tr>

<tr>
<td>11h30–12h30</td>
<td>Déjeuner</td>
<td><strong>Natation 45' + Snack</strong></td>
<td>Déjeuner</td>
<td>Déjeuner</td>
<td><strong>Natation 45' + Snack</strong></td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>12h30–15 h</td>
<td>Boulot</td>
<td>Boulot</td>
<td>Boulot</td>
<td>Boulot</td>
<td>Boulot</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>15 h–16h40</td>
<td>Route vers la maison</td>
<td>Route vers la maison</td>
<td>Route vers la maison</td>
<td>Route vers la maison</td>
<td>Route vers la maison</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>16h40–17 h</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>17–18 h</td>
<td><strong>Run</strong></td>
<td></td>
<td><strong>HomeTrainer</strong></td>
<td><strong>Run</strong></td>
<td><strong>HomeTrainer</strong></td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>18–19 h</td>
<td>Diner</td>
<td>Diner</td>
<td>Diner</td>
<td>Diner</td>
<td>Diner</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>19–20 h</td>
<td>Rangement<br> douche enfants</td>
<td>Rangement<br> douche enfants</td>
<td>Rangement<br> douche enfants</td>
<td>Rangement<br> douche enfants</td>
<td>Rangement<br> douche enfants</td>
<td>Rangement<br> douche enfants</td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>20–21 h</td>
<td>Mise aux lits des enfants</td>
<td>Mise aux lits des enfants</td>
<td>Mise aux lits des enfants</td>
<td>Mise aux lits des enfants</td>
<td>Mise aux lits des enfants</td>
<td>Mise aux lits des enfants</td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>21–22 h</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>22–23 h</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td>Série<br>Film<br>Occupation</td>
<td></td>
<td><strong>repos</strong></td>
</tr>
<tr>
<td>23–5 h</td>
<td><em>Sommeil</em></td>
<td><em>Sommeil</em></td>
<td><em>Sommeil</em></td>
<td><em>Sommeil</em></td>
<td><em>Sommeil</em></td>
<td><em>Sommeil</em></td>
<td><em>Sommeil</em></td>
</tr>
</tbody></table>
</div>

<p><strong>Exemple personnel :</strong> dans mon cas, le temps est ma variable principale. Je pourrais viser un format XXL, mais le sacrifice de ma vie de famille n'en vaut pas la chandelle. Je n'ai ni l'objectif de devenir pro ni le niveau requis, et j'aime rester hybride dans le sport comme dans la vie personnelle.</p>

<p>J'ai aussi la chance d'avoir une piscine à 3 minutes de mon travail, ce qui me permet de nager pendant mes pauses midi. Cependant, je fais 230 km de trajet par jour pour le boulot, ce qui réduit considérablement mes créneaux disponibles. <strong>Le temps reste ma variable n°1</strong> pour choisir quel triathlon entreprendre.</p>

<p><strong>À toi de jouer :</strong> mets ta vie sur un planning, fais les calculs réalistes de tes créneaux disponibles, mais ne sacrifie pas ta qualité de vie. Un plan tenable sur le long terme vaut mieux qu'un plan ambitieux impossible à tenir.</p>

<h3>Adapter son plan à son historique de blessures et à sa physiologie</h3>

<p><strong>Avant de débuter, sécurise ton parcours.</strong> Si tu as des antécédents médicaux importants (cardiaques, respiratoires, articulaires) ou des blessures mal soignées, consulte un médecin du sport. Pour toutes les compétitions officielles, un <strong>certificat médical de non-contre-indication à la pratique du triathlon</strong> est obligatoire. Ce n'est pas qu'une formalité administrative : c'est une protection pour toi comme pour les organisateurs en cas d'accident.</p>

<p><strong>Adapte aussi ton plan aux blessures passées :</strong></p>
<ul>
<li><strong>Antécédents de tendinites</strong> : privilégie la natation et le vélo, réduis les impacts (course à pied).</li>
<li><strong>Problèmes de dos</strong> : attention à la position sur le vélo (réglage crucial), favorise la natation avec une technique propre.</li>
<li><strong>Fragilités musculaires</strong> : intègre du renforcement musculaire et de la mobilité pour prévenir les rechutes.</li>
</ul>

<p>Ton plan doit être <strong>adapté à tes faiblesses, pas à l'inverse</strong>. Mieux vaut progresser lentement que se blesser et tout arrêter.</p>

<h3>Intégrer son budget et ses ressources (matériel, coaching, outils)</h3>

<p>Le triathlon est un sport de passionnés, et certains y investissent des budgets colossaux. Mais <strong>tu peux finir n'importe quel triathlon avec du matériel de base</strong> et même réaliser de très bons chronos.</p>

<p><strong>L'analogie voiture/vélo :</strong></p>
<p>Imagine un vélo comme une voiture sans moteur. <strong>Le moteur, c'est toi.</strong> Le carburant, c'est ton hydratation et ta nutrition.</p>
<ul>
<li>Une voiture à 120 000 € avec un moteur bas de gamme ? OK, c'est beau, mais ça n'avance pas.</li>
<li>Une voiture à 20 000 € avec un gros moteur performant ? Ça trace, même si elle est banale à l'arrêt.</li>
</ul>
<p>Bien sûr, un vélo bien profilé fait la différence, mais seulement <strong>à partir d'un certain niveau</strong>. Les gains aérodynamiques en watts se calculent en laboratoire à des vitesses élevées (&gt;35 km/h). En dessous, ton entraînement prime sur le matériel.</p>

<p><strong>Coaching vs matériel :</strong></p>
<p>Un coaching de qualité coûte environ <strong>90–150 €/mois</strong>. Si tu as déjà du matériel correct, investir dans un coach sera souvent plus rentable qu'upgrader ton vélo. <strong>Le matériel (sauf vraiment bas de gamme) est rarement ton facteur limitant.</strong> Ton entraînement, ta technique et ta gestion de l'effort le sont bien plus.</p>

<p><strong>Priorités budgétaires recommandées :</strong></p>
<ol>
<li>1. <strong>Matériel de base fonctionnel</strong> : vélo route/triathlon d'occasion, combinaison adaptée, chaussures de course remplacées tous les 800–1 000 km.</li>
<li>2. <strong>Coaching ou plan structuré</strong> : pour progresser efficacement et éviter les blessures.</li>
<li>3. <strong>Outils de suivi</strong> : montre GPS, capteur de puissance (si budget le permet).</li>
<li>4. <strong>Upgrades matériels</strong> : roues carbone, prolongateurs, combinaison haute performance… seulement une fois que ton niveau justifie l'investissement.</li>
</ol>
<p>Pour un chiffrage détaillé par distance, voir le <a href="/blog/budget-triathlon-2026-guide-ultime">guide budget triathlon 2026</a>.</p>
<img src="/blog/img/coach-nat.webp" alt="Coaching en natation avec une coach" class="content-img" loading="lazy">

<h2 id="semaine-type-triathlon">Comment structurer une semaine type en triathlon</h2>
<h3>Répartition natation / vélo / course selon le niveau</h3>

<p><strong>Il n'y a pas de règle 1/3 – 1/3 – 1/3.</strong> La répartition entre les trois disciplines varie selon ton niveau, tes points forts/faibles, et ton objectif de course.</p>

<p><strong>Ma répartition personnelle (format L, 8–10 h/semaine) :</strong></p>
<ul>
<li><strong>Vélo : 55 % du volume sur du L</strong> (3–5 h) → C'est la discipline la plus longue en course, donc celle où la différence de temps se fait le plus. Je la privilégie.</li>
<li><strong>Course à pied : 33 % du volume sur du L</strong> (1 h 30 – 2 h 30) → J'ai un historique de coureur, donc je maintiens un volume raisonnable pour progresser sans surentraîner.</li>
<li><strong>Natation : 12 % du volume sur du L</strong> (1 h 30) → C'est mon point faible et la discipline où les écarts de temps sont les plus faibles. Si j'étais en phase d'optimisation, j'ajouterais une séance technique pour améliorer mon efficacité.</li>
</ul>

<p><strong>Adapter la répartition selon ton profil :</strong></p>
<ul>
<li><strong>Si tu débutes en natation</strong> : augmente le volume pour travailler la technique (15–20 % du temps total).</li>
<li><strong>Si tu vises un format court (S ou M)</strong> : équilibre davantage entre les trois disciplines (course à pied plus importante).</li>
<li><strong>Si tu vises un format long (L ou XXL)</strong> : privilégie le vélo (50–60 %), c'est là que tu passes le plus de temps en course.</li>
</ul>

<h3>Où placer les séances clés (endurance, intensité, technique)</h3>

<p>La plupart des plans d'entraînement structurent la saison en <strong>4 blocs de macrocycles</strong> (3–4 semaines chacun). Voici comment les séances clés s'articulent :</p>

<p><strong>1) Phase Base (Endurance) – 4 à 6 semaines</strong></p>
<ul>
<li><strong>Objectif</strong> : construire une base aérobie solide, augmenter le volume progressivement.</li>
<li><strong>Séances clés</strong> : endurance, technique, récupération légère.</li>
<li><strong>Intensité</strong> : 60–75 % de ta puissance max (vélo) ou VMA (course).</li>
<li><strong>Exemple</strong> : long vélo endurance samedi, sortie course légère dimanche, technique natation mercredi.</li>
</ul>

<p><strong>2) Phase Build (Construction) – 4 à 6 semaines</strong></p>
<ul>
<li><strong>Objectif</strong> : augmenter l'intensité, intégrer les séances d'endurance à intensité (tempo), introduction du travail seuil.</li>
<li><strong>Séances clés</strong> : endurance, tempo, seuil, technique.</li>
<li><strong>Intensité</strong> : 75–90 % (endurance augmentée, tempo, travail seuil).</li>
<li><strong>Exemple</strong> : vélo tempo mardi, natation seuil vendredi, course longue dimanche.</li>
</ul>

<p><strong>3) Phase Peak (Pic de forme) – 2 à 3 semaines</strong></p>
<ul>
<li><strong>Objectif</strong> : séances au maximum d'intensité, simuler les conditions de course.</li>
<li><strong>Séances clés</strong> : efforts seuil, VO2max, intervals courts/rapides.</li>
<li><strong>Intensité</strong> : 90–100 % (efforts proches du max).</li>
<li><strong>Exemple</strong> : 3 × 3 min VO2max au vélo, 4 × 800 m en course, séries intensité natation.</li>
</ul>

<p><strong>4) Phase Taper (Affûtage) – 1 à 2 semaines avant la compétition</strong></p>
<ul>
<li><strong>Objectif</strong> : réduire le volume de 40–50 %, maintenir l'intensité, récupérer nerveusement et physiquement.</li>
<li><strong>Séances clés</strong> : courtes séances d'intensité modérée, étirements, repos.</li>
<li><strong>Intensité</strong> : basse intensité, avec petits pics de seuil (pas de gros efforts).</li>
<li><strong>Exemple</strong> : 2 × 2 min seuil vélo, 1 h natation technique, 30 min course allure facile.</li>
</ul>

<p><strong>Important :</strong> quand on parle d'intensité, ça ne veut pas dire que <strong>toute ta séance</strong> doit être à 90–100 %. Chaque coach a sa technique, mais une méthode reconnue est la <strong>règle 80/20</strong> : 80 % en endurance, 20 % en intensité haute. Quelqu'un de plus performant pourra monter à 70/30 % (70 % endurance, 30 % intensité).</p>

<p><strong>Différentes philosophies d'entraînement :</strong></p>
<ul>
<li><strong>Cycles classiques</strong> : 3–4 semaines intensives, suivies d'1 semaine de déload (récupération importante).</li>
<li><strong>Approche 80/20</strong> : maintien de l'équilibre endurance/intensité tout au long de la saison.</li>
<li><strong>Periodization linéaire</strong> : progression graduelle du volume et de l'intensité (ce que nous avons décrit avec Base → Build → Peak → Taper).</li>
</ul>

<p><strong>La réalité : il y a 1 000 méthodes différentes,</strong> mais les principes communs fonctionnent :</p>
<ul>
<li>✓ <strong>Régularité</strong> : entraîner 3–5 fois par semaine, sans sauter de séances.</li>
<li>✓ <strong>Progressivité</strong> : augmenter le volume et/ou l'intensité progressivement.</li>
</ul>

<p>À un niveau débutant et intermédiaire, tant que tu respectes ces 2 points, <strong>la progression viendra forcément.</strong> Tu n'as pas besoin de la meilleure méthode du monde : tu as besoin de cohérence et d'écoute de ton corps.</p>

<h2 id="erreurs-a-eviter">Les erreurs à éviter quand on crée son plan</h2>

<p><strong>1) Trop de volume et d'intensité d'un coup</strong></p>
<p>C'est LA grosse erreur. Je l'ai déjà martelé, mais c'est important : respecter la progressivité. Augmente semaine par semaine. Sinon, ton mental craquera en premier, et ton physique ne tiendra pas. Le but du triathlon n'est pas de claquer un Ironman en 6 mois en partant de zéro. Oui, c'est théoriquement possible, mais tu le subirais au lieu de le vivre. C'est dommage. Le triathlon offre un cadre exceptionnel : profites-en, ne te précipite pas.</p>

<p><strong>2) Manque de récupération et pas de déload</strong></p>
<p>Les semaines de déload (réduction de 30–50 % du volume) ne sont pas une perte de temps. Elles sont <strong>essentielles</strong>. Tu continue le sport, mais à intensité et volume réduits. C'est là que ton corps s'adapte et progresse.</p>

<p><strong>3) Copier un plan qui ne correspond pas à ton profil</strong></p>
<p>C'est l'erreur la plus courante. Sur notre site (et partout), on trouve plein de plans d'entraînement. Bien sûr, nous essayons de les adapter au mieux selon l'intensité et le niveau. Mais le volume reste un piège.</p>
<p><strong>Exemple :</strong> si tu pars de zéro et que tu commences un plan format L (longue distance), ça va rouler directement à 6–8 h/semaine. C'est compliqué. Les plans proposés s'adaptent au niveau, mais supposent que tu as une <em>base minimale</em> (quelques mois de pratique). Si ce n'est pas ton cas, tu as deux options :</p>
<ul>
<li>Organise une <strong>progression progressive</strong> de 2–3 mois avant de passer au plan officiel.</li>
<li>Investis dans <strong>quelques mois de coaching</strong> avant, ça va t'apprendre les ficelles. Ensuite, tu passes sur un plan moins cher/plus autonome.</li>
</ul>

<h2 id="exemples-plans">Exemple de plans d'entraînement selon les objectifs</h2>
<h3>Plan triathlon débutant</h3>
<p>Idéal si tu débutes le triathlon ou si tu viens de reprendre après une pause. Compte un volume progressif de <strong>3-4/4-5/5-6 h/semaine</strong>. L'accent est mis sur la technique, la construction d'une base aérobie et l'adaptation à la pratique multi-discipline.</p>

<h3>Plan triathlon intermédiaire</h3>
<p>Tu as un peu d'expérience et tu cherches à progresser. Compte un volume progressif de <strong>4-6/6-8 h/semaine</strong>. L'accent est mis sur l'intensité, le travail seuil et l'optimisation de ta performance sur chaque discipline.</p>

<h3>Plan objectif performance</h3>
<p>Tu vises la performance et tu es prêt à investir du temps. Compte un volume progressif de <strong>6-8/8-10/10-12 h/semaine</strong>. L'accent est mis sur l'optimisation maximale : travail VO2max, force, endurance.</p>

<!--COACHING-->

<h2 id="outils-plan">Outils pour construire son plan d'entraînement</h2>
<h3>Calculer sa VMA</h3>
<p>La VMA (Vitesse Maximale Aérobie) est le repère de base pour calibrer tes séances de course à pied. Le test de référence est le <strong>Demi-Cooper (6 min à allure maximale régulière)</strong>. Tu mesures la distance parcourue et tu divises par 100 pour obtenir ta VMA en km/h.</p>
<p><strong>Exemple :</strong> si tu parcours 1 500 m en 6 min → VMA = 15 km/h.</p>

<h3>Calculer sa FTP</h3>
<p>La FTP (Functional Threshold Power) représente la puissance maximale que tu peux maintenir pendant ~1 heure à vélo. Pour la tester, fais un effort de <strong>20 minutes à bloc</strong> sur home trainer ou route plate, et prends <strong>95 % de ta puissance moyenne</strong>.</p>
<p><strong>Exemple :</strong> si tu maintiens 250 W pendant 20 min → FTP = 250 × 0,95 = 237 W.</p>
<p>🔧 <strong>Retrouve notre guide FTP complet avec tableau des zones de puissance ici :</strong> <a href="/blog/comprendre-la-ftp-en-velo">Guide FTP vélo avec zones et calculs</a></p>

<h3>Définir ses zones d'entraînement</h3>
<p>Les zones d'entraînement te permettent de calibrer chaque séance selon l'objectif (récupération, endurance, seuil, VO2max). Voici un récapitulatif des zones principales :</p>

<div class="table-wrap"><table>
<tbody><tr>
<th><strong>Zone</strong></th>
<th><strong>% VMA (Course)</strong></th>
<th><strong>% FTP (Vélo)</strong></th>
<th><strong>Objectif</strong></th>
</tr>
<tr>
<td><strong>Z1 - Récupération</strong></td>
<td>60–70 %</td>
<td>&lt; 55 %</td>
<td>Récupération active</td>
</tr>
<tr>
<td><strong>Z2 - Endurance</strong></td>
<td>70–80 %</td>
<td>56–75 %</td>
<td>Base aérobie, volume</td>
</tr>
<tr>
<td><strong>Z3 - Tempo</strong></td>
<td>80–85 %</td>
<td>76–90 %</td>
<td>Endurance intense</td>
</tr>
<tr>
<td><strong>Z4 - Seuil</strong></td>
<td>85–92 %</td>
<td>91–105 %</td>
<td>Seuil lactique</td>
</tr>
<tr>
<td><strong>Z5 - VO2max</strong></td>
<td>92–100 %</td>
<td>106–120 %</td>
<td>Puissance maximale aérobie</td>
</tr>
</tbody></table></div>

<!--GEAR-->

<h2 id="faq">FAQ — Construire son plan d'entraînement triathlon</h2>

<!--FAQ-->

<h2>Conclusion : Il est temps de passer à l'action</h2>

<p>Construire un plan d'entraînement en triathlon n'est pas une science exacte, mais une combinaison de <strong>principes solides</strong> (progressivité, régularité, récupération) et d'<strong>adaptation personnelle</strong> à ton contexte. Ce que tu as appris ici : les trois disciplines, la structure macro, les erreurs à éviter, les zones d'entraînement.</p>

<p>Le reste dépend de <strong>ton engagement</strong>, de ta capacité à écouter ton corps et à ajuster selon ta réalité. Pas besoin d'être parfait : il faut être <strong>cohérent et progressif</strong>.</p>

<p><strong>Prochaine étape ?</strong> Choisis ta distance (Sprint, Olympique, 70.3 ou Ironman), teste ta VMA et ta FTP, et crée ton premier plan personnalisé. Nos outils t'accompagneront à chaque étape. Bonne chance ! 🏊‍♂️🚴‍♀️🏃‍♂️</p>
`,
};
