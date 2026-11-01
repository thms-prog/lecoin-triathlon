import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "calculateur-temps-triathlon",
  title: "Combien de temps pour finir un triathlon ? Le calculateur par distance et niveau",
  seoTitle: "Combien de temps pour un triathlon ? Calculateur (2026)",
  description: "Combien de temps pour finir un triathlon (Sprint à Ironman) ? Calcule ton temps à partir de tes chronos nage, vélo, course. Outil gratuit, basé sur la recherche.",
  keywords: ["calculateur temps triathlon","combien de temps pour un triathlon","predire son temps triathlon","temps triathlon sprint olympique 70.3 ironman","combien de temps pour un ironman","temps 70.3 calculateur","chrono triathlon","calculer son temps de triathlon","vitesse triathlon par distance","temps triathlon debutant"],
  date: "2026-09-11",
  dateModified: "2026-11-01",
  category: "Course",
  image: "/demo/blog/calculateur.jpg",
  coaching: {
    title: "Faire baisser ce chrono, semaine après semaine",
    text: "Ton coach part de tes tests, fixe des allures et des watts réalistes pour ta course, et réévalue ta projection à chaque nouveau test.",
  },
  faq: [
    {
      "q": "Comment calculer son temps de triathlon avant la course ?",
      "a": "En partant de tes données réelles sur chaque sport (ton temps sur 400 m nage à fond, ta FTP et ton poids à vélo, ta VMA en course à pied), puis en appliquant des ajustements propres au triathlon : le vélo se pace en dessous de ton maximum pour garder les jambes, la course est plus lente après le vélo, la nage varie selon la distance et l'environnement (bassin, eau libre, combinaison), et il faut ajouter le temps des transitions. Additionner simplement 3 performances solo sans ces ajustements donne un temps largement trop optimiste."
    },
    {
      "q": "Combien de temps pour finir un triathlon Sprint, Olympique, 70.3 ou Ironman ?",
      "a": "Ça dépend entièrement de ton niveau sur chaque sport, mais les ajustements à appliquer changent aussi avec la distance : le vélo se roule plus près de sa puissance maximale sur un Sprint (environ 90% de la FTP) que sur un Ironman (environ 65 à 72%), la course ralentit d'environ 5 à 8% sur un Sprint ou un Olympique contre 10 à 15% sur un Ironman, et les transitions passent de 3 à 6 minutes sur les courtes distances à 10 à 20 minutes sur Ironman. Utilise le calculateur en haut de cette page avec tes propres données pour une estimation personnalisée."
    },
    {
      "q": "Pourquoi je cours moins vite après le vélo en triathlon ?",
      "a": "Le vélo prolongé ne change pas le coût en oxygène de la course à une allure donnée, mais il fait chuter le rendement mécanique de la foulée d'environ 12%, ce qui pousse le corps à compenser par plus de filière anaérobie. En pratique la foulée met aussi plus longtemps à se stabiliser après le vélo (environ 680 mètres contre 300 après une course seule). Résultat mesuré sur le terrain : 5 à 8% plus lent qu'un 5 ou 10 km solo sur les courtes distances, 6 à 10% sur un 70.3, jusqu'à 15% sur un Ironman. Cette perte se réduit avec l'entraînement, en particulier les séances d'enchaînement (brick, vélo puis course) répétées chaque semaine."
    },
    {
      "q": "Faut-il une combinaison en triathlon pour aller plus vite ?",
      "a": "Oui dans la grande majorité des cas où elle est autorisée. Les études mesurent une amélioration de 3 à 11% selon le niveau du nageur, les moins efficaces en profitant le plus grâce à la flottaison supplémentaire. À l'inverse, nager en eau libre sans combinaison est généralement 5 à 15% plus lent qu'en bassin (pas de mur pour se relancer, relevés de tête pour se repérer, clapot)."
    },
    {
      "q": "Combien de temps compter pour les transitions en triathlon (T1 et T2) ?",
      "a": "De 3 à 6 minutes au total sur un Sprint ou un Olympique, 9 à 14 minutes sur un 70.3 (une seule transition peut dépasser 5 minutes sur une grande zone labellisée), et 10 à 20 minutes sur un Ironman, plus si c'est ton premier passage et que tu changes de tenue. Ce n'est jamais un forfait unique quelle que soit la distance."
    },
    {
      "q": "Ce calculateur de temps triathlon est-il fiable à la minute près ?",
      "a": "Non, et aucun calculateur ne peut l'être : il n'existe pas de formule publiée et validée qui combine les 3 sports en un chiffre exact pour tout le monde. Le parcours (dénivelé, chaleur, vent), ta gestion de course et ta forme du jour peuvent faire varier le résultat de 15 à 30 minutes sur les longues distances. C'est pour ça que l'outil donne une fourchette (jour prudent / réaliste / bon jour) plutôt qu'un chiffre unique."
    }
  ],
  content: `
<div class="info">
  <p>En bref</p>
  <p>Additionner tes 3 chronos solo donne un temps de triathlon trop optimiste : le vélo se pace en dessous de ton maximum, la course ralentit après le vélo, la nage varie selon bassin/eau libre/combinaison, et il faut ajouter les transitions. Le calculateur ci-dessous applique ces ajustements à partir de données de recherche et d'heuristiques de coachs (sources détaillées plus bas), et te donne 3 scénarios plutôt qu'un chiffre unique.</p>
</div>

<!--CALC-->

<nav class="toc" aria-label="Sommaire"><ul>
  <li><a href="#methode">Comment calculer son temps de triathlon</a></li>
  <li><a href="#nage">Nage : bassin, eau libre, combinaison</a></li>
  <li><a href="#velo">À quelle intensité rouler selon la distance</a></li>
  <li><a href="#course">Pourquoi on court moins vite après le vélo</a></li>
  <li><a href="#transitions">Le temps des transitions T1 et T2</a></li>
  <li><a href="#reperes">Les ajustements par distance, en un tableau</a></li>
  <li><a href="#limites">Les limites d'un calculateur de temps triathlon</a></li>
  <li><a href="#faq">FAQ</a></li>
</ul></nav>

<h2 id="methode">Comment calculer son temps de triathlon avant la course</h2>

<p>L'erreur la plus courante : prendre son chrono sur 5 km, sa vitesse moyenne à vélo et son allure de nage, les additionner, et se dire que ce sera à peu près ça le jour J. Ce total est presque toujours trop optimiste, pour trois raisons qui n'ont rien à voir entre elles.</p>

<ul>
  <li><strong>Le vélo n'est pas couru à fond.</strong> Tu roules volontairement en dessous de ton plafond pour garder des jambes pour la course. Ce n'est pas de la fatigue, c'est un choix de pacing, et il varie beaucoup selon la distance.</li>
  <li><strong>La course ralentit après le vélo.</strong> Ton corps est mesurablement moins efficace mécaniquement en sortant du vélo, même à allure identique.</li>
  <li><strong>La nage dépend du contexte</strong>, pas seulement de ton niveau : bassin ou eau libre, avec ou sans combinaison, changent le temps final de plusieurs pourcents.</li>
</ul>

<p>Le calculateur en haut de cette page part de 3 données que tu connais probablement déjà (un 400 m nagé à fond, ta FTP et ton poids à vélo, ta VMA en course à pied), et applique ces trois ajustements dans l'ordre de la course : nage, vélo, course. Le détail de chacun, avec les sources, suit dans les sections ci-dessous.</p>

<h2 id="nage">Nage en triathlon : bassin, eau libre, combinaison</h2>

<p>Ton 400 m se nage à fond, c'est un effort quasi anaérobie que tu ne peux pas prolonger tel quel. Le plus gros écart se creuse tout de suite après, dès le 750 m ; ensuite ça se tasse, 1500, 1900 et 3800 m restent assez proches entre eux :</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Distance</th>
      <th>% de ton allure 400 m à fond</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint (750 m)</td><td>≈ 94%</td></tr>
    <tr><td>Olympique (1500 m)</td><td>≈ 88%</td></tr>
    <tr><td>70.3 (1900 m)</td><td>≈ 86%</td></tr>
    <tr><td>Ironman (3800 m)</td><td>≈ 84%</td></tr>
  </tbody>
</table>
</div>

<p>En eau libre sans combinaison, compte 5 à 15% plus lent qu'en bassin à effort identique : pas de mur pour se relancer, relevés de tête pour se repérer, clapot ou courant. La combinaison compense une bonne partie de cette perte, avec un gain mesuré de 3 à 11% selon le niveau, les nageurs les moins efficaces en profitant le plus grâce à la flottaison (sources : <a href="https://pubmed.ncbi.nlm.nih.gov/30958047/" target="_blank" rel="noopener noreferrer">PubMed</a>, <a href="https://journals.humankinetics.com/view/journals/ijspp/16/9/article-p1217.xml" target="_blank" rel="noopener noreferrer">IJSPP</a>).</p>

<img src="/blog/img/calculateur-1.jpg" alt="Sortie de nage en combinaison, sprint vers la zone de transition T1 avant de prendre le vélo" class="content-img" loading="lazy">

<h2 id="velo">À quelle intensité rouler à vélo selon la distance</h2>

<p>Le repère le plus utilisé (calé sur des milliers de fichiers de puissance réels) exprime la cible en pourcentage de FTP :</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Distance</th>
      <th>% FTP cible (amateur)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint</td><td>≈ 90%</td></tr>
    <tr><td>Olympique</td><td>≈ 83%</td></tr>
    <tr><td>70.3</td><td>75 à 80%</td></tr>
    <tr><td>Ironman</td><td>65 à 72%</td></tr>
  </tbody>
</table>
</div>

<div class="box"><strong>Sur la source :</strong> ces % de FTP ne sortent pas d'une étude scientifique mais d'un outil de pacing commercial (Best Bike Split, racheté par TrainingPeaks), calé sur des milliers de fichiers de puissance réels de coureurs. Statistiquement solide sur de gros volumes de données, mais ce n'est pas un protocole de recherche publié et relu par des pairs. Sources : <a href="https://www.bestbikesplit.com/triathlon-bike-pace-calculator" target="_blank" rel="noopener noreferrer">Best Bike Split, Triathlon Bike Pace Calculator</a> et <a href="https://www.trainingpeaks.com/blog/how-to-cheat-by-using-a-power-meter-in-an-ironman/" target="_blank" rel="noopener noreferrer">TrainingPeaks, pacing Ironman au power meter (Joe Friel)</a>.</div>

<p>Plus la distance est longue, plus il faut rouler loin de son plafond pour garder de quoi courir. Le dénivelé joue aussi, et le plus fiable pour le mesurer est le ratio mètres de D+ par kilomètre (D+/km), qui reste comparable quelle que soit la distance de la course. Les repères habituels (source : <a href="https://sportcoaching.com.au/elevation-gain-in-cycling/" target="_blank" rel="noopener noreferrer">Sport Coaching Australia, Elevation Gain in Cycling</a>) : environ 5 m/km, c'est un parcours vallonné qui roule ; vers 10 m/km, une vraie journée vallonnée ; au-delà de 15 m/km, une grosse journée de montagne. Le calculateur en haut de page utilise directement ton D+ plutôt qu'une case à cocher, pour éviter les effets de seuil artificiels entre catégories.</p>

<p>Le risque de se tromper est asymétrique : dépasser son plan vélo de seulement 3 à 5% peut coûter 20 à 30 minutes sur le marathon d'un Ironman. Le calcul est presque toujours perdant : quelques minutes gagnées à vélo en poussant plus fort coûtent largement plus cher sur la course qui suit.</p>

<h2 id="course">Pourquoi on court moins vite après le vélo</h2>

<p>C'est l'étape la mieux documentée scientifiquement. Une étude sur des triathlètes universitaires (contre-la-montre vélo de 40 km puis course à allure de compétition) montre que le vélo prolongé ne change pas le coût en oxygène de la course à une allure donnée, mais fait chuter le rendement mécanique de la foulée d'environ 12%, le corps compensant par plus de filière anaérobie. Une autre étude, par analyse de la foulée, montre que la coordination met environ 680 mètres à se stabiliser après le vélo, contre seulement 300 mètres après une course seule.</p>

<div class="box"><strong>Sur la source :</strong> l'étude sur le rendement mécanique porte sur 8 triathlètes universitaires de niveau club, celle sur la foulée sur un échantillon tout aussi restreint. Ce sont de vraies études publiées, mais des petits groupes, pas de larges cohortes. Le mécanisme (moins de rendement, plus de filière anaérobie) est solide ; le chiffre exact (les fameux 12%) peut varier nettement d'un individu à l'autre. Sources : <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9344700/" target="_blank" rel="noopener noreferrer">Prolonged cycling lowers subsequent running mechanical efficiency in collegiate triathletes</a> et <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9802668/" target="_blank" rel="noopener noreferrer">Discovering the sluggishness of triathlon running</a>.</div>

<p>Traduit en allure, pour un athlète entraîné (source : <a href="https://scientifictriathlon.com/tts48/" target="_blank" rel="noopener noreferrer">That Triathlon Show, EP#48</a>) :</p>

<ul>
  <li><strong>Sprint et Olympique :</strong> 5 à 6% plus lent que ton 5 ou 10 km solo (7 à 8% si tu débutes).</li>
  <li><strong>70.3 :</strong> 6 à 10% plus lent que ton semi-marathon solo.</li>
  <li><strong>Ironman :</strong> environ 15% plus lent que ton marathon solo en moyenne chez les amateurs, parfois plus.</li>
</ul>

<p>Ces pourcentages ne sont pas une fatalité : la clé numéro un pour limiter cette perte, citée par la plupart des coachs, c'est de s'entraîner régulièrement en enchaînement (brick) plutôt qu'à chaque sport séparément. Un athlète qui bricke chaque semaine en fin de préparation se rapproche du bas de la fourchette ; un athlète qui ne s'y met jamais reste vers le haut, voire au-delà. Le calculateur en tient compte via le curseur « expérience », mais c'est bien un levier d'entraînement, pas une fatalité liée au niveau.</p>

<p>Même logique que pour le vélo et la nage, en % de VMA cette fois. La colonne « solo » reprend les repères d'allure déjà utilisés sur le reste du site pour une course seule à la distance la plus proche ; la colonne « en triathlon » y applique le ralentissement du dessus, pour un niveau intermédiaire (« quelques courses ») :</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Distance course à pied</th>
      <th>% VMA solo (référence)</th>
      <th>% VMA en triathlon</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint (5 km)</td><td>94% (comme un 5 km solo)</td><td>≈ 88%</td></tr>
    <tr><td>Olympique (10 km)</td><td>90% (comme un 10 km solo)</td><td>≈ 84%</td></tr>
    <tr><td>70.3 (21,1 km)</td><td>85% (comme un semi solo)</td><td>≈ 78%</td></tr>
    <tr><td>Ironman (42,2 km)</td><td>80% (comme un marathon solo)</td><td>≈ 68%</td></tr>
  </tbody>
</table>
</div>

<h2 id="transitions">Combien de temps prennent les transitions T1 et T2</h2>

<p>Très variable selon le format, ce n'est jamais un forfait unique :</p>

<ul>
  <li><strong>Sprint :</strong> 3 à 5 minutes au total pour les deux transitions.</li>
  <li><strong>Olympique :</strong> 4 à 6 minutes au total.</li>
  <li><strong>70.3 :</strong> 9 à 11 minutes pour quelqu'un d'expérimenté, jusqu'à 14 minutes sur une grande zone de transition labellisée ou pour un premier passage. Sur ce genre d'épreuve, la T1 seule (sortie de nage, combinaison, course jusqu'au vélo) peut déjà dépasser 5 à 6 minutes sans traîner.</li>
  <li><strong>Ironman :</strong> environ 10 minutes pour un athlète expérimenté, 15 à 20 minutes pour un premier passage (le temps de changer de tenue compte).</li>
</ul>

<h2 id="reperes">Les ajustements par distance, en un tableau</h2>

<p>Le résumé de tout ce qui précède, la base utilisée par le calculateur en haut de page :</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Distance</th>
      <th>Vélo (% FTP)</th>
      <th>T1+T2</th>
      <th>Course vs solo</th>
      <th>Nage vs ton 400 m à fond</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint</td><td>≈ 90%</td><td>3-5 min</td><td>-5 à -8%</td><td>-6%</td></tr>
    <tr><td>Olympique</td><td>≈ 83%</td><td>4-6 min</td><td>-5 à -8%</td><td>-12%</td></tr>
    <tr><td>70.3</td><td>75-80%</td><td>9-14 min</td><td>-6 à -10%</td><td>-14%</td></tr>
    <tr><td>Ironman</td><td>65-72%</td><td>10-20 min</td><td>-10 à -15%</td><td>-16%</td></tr>
  </tbody>
</table>
</div>

<p>Dans ce tableau, un signe négatif veut toujours dire « plus lent » (moins de vitesse, ou une allure de nage/course rallongée).</p>

<p>La dernière colonne isole l'effet de la distance seule sur la nage, en bassin. Elle s'ajoute à l'effet de l'environnement vu plus haut : mer ou lac avec combinaison, ou sans. Par exemple sur un Ironman en mer sans combinaison, les deux effets se cumulent (-16% liés à la distance, -5 à -15% liés à l'eau libre sans combi). Chaque case reste une fourchette : le calculateur affine avec ton environnement de nage, ton D+ vélo et ton expérience sur la distance, mais il ne remplace pas un test réel.</p>

<!--COACHING-->

<h2 id="limites">Les limites d'un calculateur de temps triathlon</h2>

<p>Il n'existe pas de formule publiée et validée qui combine les 3 sports en un chiffre exact pour tout le monde. Ce que tu lis ici assemble des effets étudiés séparément (rendement mécanique, effet combinaison, cible de puissance vélo) avec des repères de coachs calés sur des bases de résultats réels, pas une équation unique sortie d'un laboratoire.</p>

<ul>
  <li><strong>Le parcours change tout.</strong> Dénivelé, chaleur, vent, drafting autorisé ou non : un même profil physiologique peut voir son temps Ironman varier de 15 à 25 minutes selon le jour et le parcours.</li>
  <li><strong>La variation individuelle est énorme.</strong> Deux athlètes avec les mêmes 3 chronos solo peuvent finir avec 20 à 30 minutes d'écart selon leur expérience des enchaînements, leur nutrition et leur discipline de pacing. Concrètement, celui qui fait des séances brick chaque semaine encaisse beaucoup moins la sortie de vélo que celui qui ne les travaille jamais, à niveau solo identique.</li>
  <li><strong>Un calcul fait tôt dans la prépa vieillit vite.</strong> Si tu calcules ton temps probable en début d'entraînement, tes chronos, ta FTP et ta VMA vont encore bouger d'ici la course. Recalcule avec des données à jour à quelques semaines de l'échéance.</li>
</ul>

<h2 id="faq">FAQ : calculer et prédire son temps de triathlon</h2>

<!--FAQ-->

<p>Pour aller plus loin : <a href="/blog/temps-moyen-triathlon-distance-niveau-age">les temps moyens en triathlon par distance, niveau et âge</a>, <a href="/blog/comprendre-la-ftp-en-velo">comprendre et tester sa FTP</a>, <a href="/blog/construire-plan-entrainement-triathlon">construire son plan d'entraînement</a>.</p>
`,
};
