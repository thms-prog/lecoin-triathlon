import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "nutrition-triathlon-guide-complet",
  title: "Nutrition triathlon : le guide complet par distance (Sprint → Ironman)",
  seoTitle: "Nutrition triathlon 2026 : guide complet par distance",
  description: "Glucides, hydratation, ravitaillement par distance : tout ce qu'il faut savoir sur la nutrition en triathlon pour finir fort du Sprint à l'Ironman.",
  keywords: ["nutrition triathlon","ravitaillement triathlon","alimentation triathlon","que manger avant triathlon","nutrition ironman","nutrition 70.3","carb loading triathlon","hydratation triathlon","gels triathlon","electrolytes triathlon","nutrition course triathlon","gut training triathlon","nutrition triathlon sprint","alimentation avant triathlon","macronutriments triathlon","petit dejeuner triathlon","supplements triathlon","recuperation nutrition triathlon","nutrition triathlon olympique"],
  date: "2026-06-18",
  dateModified: "2026-11-01",
  category: "Nutrition",
  image: "/demo/blog/nutrition.jpg",
  coaching: {
    title: "Tes glucides intégrés à tes séances longues",
    text: "Ton coach prévoit quoi manger et boire sur chaque séance clé, pour que ta stratégie du jour J soit déjà rodée.",
  },
  faq: [
    {
      "q": "Combien de glucides prendre par heure en triathlon ?",
      "a": "Sprint et Olympique : 30 à 60g par heure. 70.3 et Ironman : 60 à 90g/heure, jusqu'à 120g pour les athlètes entraînés au gut training. La règle simple : 1g par kilo de poids corporel par heure. Fractionne toujours en petites prises toutes les 15-20 min."
    },
    {
      "q": "Que manger le matin d'un triathlon ?",
      "a": "Un repas riche en glucides, pauvre en fibres et graisses, 2h30 à 3h avant le départ. Flocons d'avoine + banane + miel, ou pain de mie + confiture + oeuf. 15-20 minutes avant le départ : 30g de glucides rapides (datte, gel, pain d'épice). Toujours des aliments déjà testés."
    },
    {
      "q": "Faut-il se ravitailler sur un triathlon Sprint ?",
      "a": "Pas obligatoire si la course dure moins d'1h. Un bidon de 500ml légèrement sucré sur le vélo suffit. Si tu dépasses 1h15 ou s'il fait chaud, ajoute 30 à 60g de glucides sur le vélo."
    },
    {
      "q": "Qu'est-ce que le carb loading ?",
      "a": "La recharge glucidique consiste à augmenter l'apport en glucides à 7-10g/kg/jour pendant J-3 à J-1 pour saturer le glycogène musculaire. Riz blanc, pâtes bien cuites, pain de mie, bananes. Réduire en parallèle les fibres, graisses et alcool."
    },
    {
      "q": "Combien boire pendant un triathlon ?",
      "a": "500 à 750ml par heure, ajustés à la chaleur. Sur formats longs, 400 à 600mg de sodium par heure pour éviter l'hyponatrémie et les crampes. Ne jamais perdre plus de 2-3% de son poids en eau."
    },
    {
      "q": "Quelle est la meilleure stratégie nutritionnelle pour un Ironman ?",
      "a": "Le vélo est la fenêtre principale : 60-90g de glucides/heure, 500-750ml de boisson sodée, prise toutes les 15-20 min. Sur le marathon : liquide uniquement, gel + eau à chaque ravitaillement, Coca sur la seconde moitié si besoin. Et surtout : ne rien tester le jour J que tu n'as pas pratiqué à l'entraînement."
    }
  ],
  content: `
<nav>
  <p>Sommaire</p>
  <nav class="toc" aria-label="Sommaire"><ul>
    <li><a href="#bases">Les bases nutritionnelles du triathlète</a></li>
    <li><a href="#entrainement">Nutrition à l'entraînement : avant, pendant, après</a></li>
    <li><a href="#semaine-avant">La semaine avant la course : recharge glucidique</a></li>
    <li><a href="#matin-course">Le matin de la course : timing et contenu</a></li>
    <li><a href="#ravitaillement">Ravitaillement en course par distance</a></li>
    <li><a href="#hydratation">Hydratation et électrolytes</a></li>
    <li><a href="#gut-training">Le gut training : entraîner son ventre</a></li>
    <li><a href="#erreurs">Les erreurs les plus fréquentes</a></li>
    <li><a href="#supplements">Suppléments : ce qui marche vraiment</a></li>
    <li><a href="#recuperation">Récupération nutritionnelle post-course</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul></nav>
</nav>

<p>On dit souvent que l'entraînement te mène à 70% de ton potentiel, la nutrition c'est le reste. Ce n'est pas une vérité gravée dans le marbre, mais c'est une direction : sans carburant adapté, la machine tourne en sous-régime même si les jambes sont là. Et sur la durée, c'est souvent la nutrition qui débloque le palier suivant. On parle dans notre <a href="/blog/transitions-triathlon-guide-complet">guide sur les transitions</a> du côté multidisciplinaire du triathlon. Ici on va plus loin sur ce qui alimente concrètement la performance. Des athlètes bien entraînés ratent leur course à cause d'un estomac qui lâche au 80ème kilomètre, d'une hypoglycémie sur le run, ou d'une stratégie hydrique mal préparée. D'autres, moins "performants" sur le papier, finissent forts parce qu'ils ont travaillé leur alimentation avec la même rigueur que leurs séances.</p>

<p>Ce guide couvre tout : les bases au quotidien, la préparation avant course, le ravitaillement par distance (Sprint, Olympique, 70.3, Ironman) et la récupération. L'objectif est de te donner des chiffres concrets, pas des généralités. Et pour être clair dès le départ : l'idée n'est pas de peser chaque gramme ni de vivre en moine. Gérer sa nutrition en triathlon, ça se résume à trois choses : ne pas être en sous-nutrition, ne pas se gaver, et savoir ce que tu mets dans le moteur autour de tes séances. Le reste, les protocoles au gramme près, c'est pour les passionnés ou ceux qui visent une qualification pro. Pour les autres, bien gérer l'assiette suffit à faire une vraie différence.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1585511543404-afac6081fc40?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Cycliste qui se ravitaille en buvant sur le vélo" class="content-img" loading="lazy">
  <figcaption>Photo : <a href="https://unsplash.com/photos/irsNMJFzSdI" rel="noopener noreferrer" target="_blank">Chris Kendall</a> · Unsplash</figcaption>
</figure>

<h2 id="bases">Les bases nutritionnelles du triathlète</h2>

<p>Avant de parler de gels et de ravitaillements, la fondation c'est l'alimentation quotidienne. Un triathlète qui mange mal au quotidien ne peut pas compenser avec une bonne stratégie de course. C'est comme mettre du carburant premium dans un moteur encrassé.</p>

<h3>Les macronutriments : ratios cibles</h3>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Macronutriment</th>
        <th>Proportion</th>
        <th>Énergie</th>
        <th>Sources recommandées</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Glucides</td>
        <td>50-60%</td>
        <td>4 kcal/g</td>
        <td>Riz, flocons d'avoine, patate douce, pain complet, légumineuses, banane</td>
      </tr>
      <tr>
        <td>Protéines</td>
        <td>20-25%</td>
        <td>4 kcal/g</td>
        <td>Poulet, poisson, oeufs, fromage blanc, légumineuses, tofu</td>
      </tr>
      <tr>
        <td>Lipides</td>
        <td>20-30%</td>
        <td>9 kcal/g</td>
        <td>Avocat, oléagineux, huile d'olive, saumon, graines de lin</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Glucides : le carburant principal</h3>

<p>Les glucides sont le seul macronutriment directement utilisable par les muscles à haute intensité. Ton corps stocke environ 400 à 500g de glycogène (muscles + foie), ce qui représente environ 90 minutes d'effort à intensité modérée. Passé ce délai sans ravitaillement, les performances s'effondrent. C'est le fameux "mur".</p>

<p>La quantité quotidienne dépend de ton volume d'entraînement. En phase de base (8-10h/semaine) : vise 5 à 7g de glucides par kilo de poids corporel. En phase de charge (12-15h/semaine) : monte à 7 à 9g/kg. Les jours de récupération, tu peux réduire : le corps n'a pas besoin de carburer pareil.</p>

<h3>Protéines : reconstruire et progresser</h3>

<p>Les protéines ne sont pas un carburant d'effort, mais elles sont essentielles à la récupération et à l'adaptation musculaire. Pour un triathlète, l'objectif est de <strong>1,4 à 1,8g de protéines par kilo de poids corporel par jour</strong> (soit 98 à 126g pour un athlète de 70kg). Répartir sur 3 à 5 repas est souvent conseillé pour le confort digestif, mais c'est un sujet plus débattu qu'il n'y paraît : des études récentes suggèrent que l'absorption totale sur la journée compte plus que la taille de chaque prise. À toi de voir ce qui est praticable dans ton quotidien.</p>

<h3>Lipides : l'énergie de fond et l'anti-inflammation</h3>

<p>Les graisses sont indispensables, surtout pour les entraînements longs à basse intensité où elles contribuent largement à la production d'énergie. Les oméga-3 (poissons gras, noix, graines de lin) ont un rôle anti-inflammatoire démontré. À ne pas négliger, surtout en période de gros volume. En revanche, les lipides ralentissent la digestion : à éviter en grandes quantités dans les repas pré-effort. Trop de lipides avant une séance ralentit aussi l'assimilation des glucides, exactement l'inverse de ce que tu veux quand les muscles ont besoin de carburant rapidement.</p>

<h3>Hydratation quotidienne : l'oubli systématique</h3>

<p>Vise <strong>30 à 35ml d'eau par kilo de poids corporel par jour</strong>, hors effort (2,1 à 2,5L pour 70kg). Une déshydratation de seulement 2% du poids corporel réduit les performances de 2 à 3%. Indicateur simple et fiable : la couleur des urines.</p>

<div class="cards">
  <div class="note">
    <p>Jaune pâle</p>
    <p>Bien hydraté</p>
  </div>
  <div>
    <p>Jaune foncé</p>
    <p>Bois davantage</p>
  </div>
  <div class="warn">
    <p class="bad">Transparent</p>
    <p class="bad">Trop dilué, attention</p>
  </div>
</div>

<h3>Calculer ses besoins caloriques : la méthode semaine</h3>

<p>Avant de répartir tes macros, il faut savoir combien de calories tu brûles réellement. Il existe des dizaines de méthodes, en voici une simple et efficace, celle du triathlète moyen qui veut un repère sans se compliquer la vie.</p>

<div class="info">
  <p>Étape 1 : Métabolisme de base (formule Mifflin-St Jeor)</p>
  <p>Le métabolisme de base, c'est le nombre de calories que ton corps brûle rien que pour rester en vie : faire battre le coeur, respirer, maintenir la température corporelle, faire fonctionner les organes. Même si tu passes toute la journée allongé sans bouger, ton corps consomme ces calories. C'est ton plancher énergétique, la base sur laquelle tout s'ajoute.</p>
  <p><strong>Homme :</strong> (10 × poids kg) + (6,25 × taille cm) − (5 × âge) + 5</p>
  <p><strong>Femme :</strong> (10 × poids kg) + (6,25 × taille cm) − (5 × âge) − 161</p>
  <div class="cards">
    <div class="box">
      <p>Exemple homme</p>
      <p>75 kg · 175 cm · 35 ans<br>→ <strong>1 673 kcal/jour au repos</strong></p>
    </div>
    <div class="box">
      <p>Exemple femme</p>
      <p>60 kg · 165 cm · 30 ans<br>→ <strong>1 320 kcal/jour au repos</strong></p>
    </div>
  </div>
  <p>Ces formules donnent une estimation avec des variations possibles de ±10%. Point de départ, pas vérité absolue.</p>
</div>

<div class="tip">
  <p class="good">Étape 2 : Dépense totale (métabolisme de base × coefficient d'activité)</p>
  <ul>
    <li>Sédentaire (peu ou pas de sport) : <strong>×1,2</strong></li>
    <li>Légèrement actif (1-3 séances/semaine) : <strong>×1,375</strong></li>
    <li>Modérément actif (3-5 séances/semaine) : <strong>×1,55</strong></li>
    <li>Très actif (entraînement quotidien) : <strong>×1,725</strong></li>
  </ul>
  <div class="box">
    <p class="good">Exemple : notre homme de 75 kg (1 673 kcal au repos), modérément actif</p>
    <p>1 673 × 1,55 = <strong>2 593 kcal/jour</strong></p>
  </div>
  <p class="good">Alternative plus précise : ta montre ou ton tracker te donne la dépense journalière en temps réel, sans avoir à choisir un coefficient fixe.</p>
</div>

<div class="note">
  <p class="mid">Étape 3 : La méthode semaine (recommandée)</p>
  <p>Plutôt que d'ajuster tes calories chaque jour, additionne les calories brûlées à l'entraînement sur 7 jours, fais la moyenne, et ajoute-la à ton métabolisme de base. Tu manges pareil tous les jours, jours off inclus.</p>
  <div class="box">
    <p class="mid">Exemple : notre homme (BMR 1 673 kcal), kcal dépensés selon la montre connectée</p>
    <div class="cards">
      <div><p>Lundi</p><p class="mid">800</p><p>kcal</p></div>
      <div><p>Mardi</p><p class="mid">600</p><p>kcal</p></div>
      <div><p>Mercredi</p><p class="mid">300</p><p>kcal</p></div>
      <div><p>Jeudi</p><p class="mid">1 200</p><p>kcal</p></div>
      <div><p>Vendredi</p><p class="mid">400</p><p>kcal</p></div>
      <div><p>Samedi</p><p class="mid">2 000</p><p>kcal</p></div>
      <div><p>Dimanche</p><p class="mid">200</p><p>kcal</p></div>
    </div>
    <p>Total sport semaine : 5 500 kcal / 7 = <strong>786 kcal/jour en moyenne</strong><br>Apport journalier cible : 1 673 + 786 = <strong>2 459 kcal/jour</strong></p>
  </div>
  <p><strong>Recalibrage toutes les 2 semaines</strong> : pèse-toi à conditions égales. Poids qui monte → réduis légèrement. Poids qui descend trop vite → augmente. C'est le poids qui te dit si le calcul est juste, pas la formule.</p>
</div>

<h3>Les applis pour tracker tes macros</h3>

<p>Une fois tes cibles calculées, il reste à les suivre au quotidien. Deux applications se démarquent clairement, et elles sont toutes les deux gratuites dans leur version de base.</p>

<div class="cards">

  <div>
    <div class="row">
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4f/ba/48/4fba48ab-fd97-f029-d8de-e3be7e85d043/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100bb.jpg" alt="MyFitnessPal" class="content-img" loading="lazy">
      <div>
        <p>MyFitnessPal</p>
        <p>La référence mondiale · Gratuit</p>
      </div>
    </div>
    <div>
      <p>La base de données la plus grande au monde : plus de 14 millions d'aliments référencés, codes-barres scannables, recettes personnalisées. Tu saisies ce que tu manges, l'appli calcule glucides, protéines et lipides en temps réel.</p>
      <ul>
        <li>Base d'aliments français très complète</li>
        <li>Scanner code-barre intégré</li>
        <li>Suivi des macros en temps réel</li>
        <li>Version gratuite largement suffisante</li>
      </ul>
      <div class="cards">
        <a href="https://apps.apple.com/fr/app/myfitnesspal/id218333324" target="_blank" rel="noopener noreferrer">App Store</a>
        <a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.mfp&amp;hl=fr" target="_blank" rel="noopener noreferrer">Google Play</a>
      </div>
    </div>
  </div>

  <div>
    <div class="row">
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/52/5d/10/525d102f-1662-20b3-dbdc-f51e68eda074/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/100x100bb.jpg" alt="Foodvisor" class="content-img" loading="lazy">
      <div>
        <p>Foodvisor</p>
        <p>App française · Photo IA · 4,6/5 sur l'App Store</p>
      </div>
    </div>
    <div>
      <p>Tu prends une photo de ton assiette, et l'IA estime automatiquement les quantités et les macros. Idéal quand tu n'as pas envie de tout saisir manuellement. L'application est française et particulièrement bien adaptée aux aliments du quotidien en France.</p>
      <ul>
        <li>Photo de l'assiette → macros estimées en 3 secondes</li>
        <li>Conçue par des diététiciens français</li>
        <li>Reconnait les plats cuisinés et restauration</li>
        <li>Moins précise sur les plats complexes (sauce, gratin)</li>
      </ul>
      <div class="cards">
        <a href="https://apps.apple.com/fr/app/foodvisor-calorie-et-regime/id1064020872" target="_blank" rel="noopener noreferrer" class="btn">App Store</a>
        <a href="https://play.google.com/store/apps/details?id=io.foodvisor.app&amp;hl=fr" target="_blank" rel="noopener noreferrer" class="btn">Google Play</a>
      </div>
    </div>
  </div>

</div>

<div class="tip">
  <p class="good"><strong>Comment les utiliser sans devenir obsessionnel :</strong> track pendant 2 à 3 semaines pour comprendre la composition de tes repas habituels. Une fois que tu as l'oeil, tu n'en as plus besoin en permanence. Ces applis sont un outil de calibration, pas une prison.</p>
</div>

<h2 id="entrainement">Nutrition à l'entraînement : avant, pendant, après</h2>

<p>L'entraînement est aussi l'endroit où tu répètes ta stratégie de course. Chaque sortie longue est une opportunité de tester ce que tu mangeras le jour J.</p>

<h3>Avant la séance</h3>

<div class="tip">
  <p class="good">Selon la durée de la séance :</p>
  <ul>
    <li><strong>&lt; 60 min :</strong> rien d'obligatoire, ou une banane 30 min avant</li>
    <li><strong>60-90 min :</strong> un repas léger riche en glucides 1h30-2h avant (flocons d'avoine, pain + confiture)</li>
    <li><strong>&gt; 90 min :</strong> repas complet 2-3h avant : riz, protéine maigre et légume cuit</li>
  </ul>
</div>

<p>Pour les séances du matin à jeun : c'est possible sur des sorties courtes à faible intensité (zone 2), et certains athlètes les utilisent pour améliorer l'oxydation des graisses. Mais sur une séance longue ou une séance de qualité (fractionné, tempo), partir à jeun te coûtera de la performance et de la récupération.</p>

<h3>Pendant la séance</h3>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Durée</th>
        <th>Glucides/heure</th>
        <th>Format recommandé</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&lt; 60 min</td>
        <td>0-30g</td>
        <td>Eau suffisante, gorgées régulières</td>
      </tr>
      <tr>
        <td>60-90 min</td>
        <td>30-60g</td>
        <td>Boisson isotonique ou gel + eau</td>
      </tr>
      <tr>
        <td>90 min - 2h30</td>
        <td>60-90g</td>
        <td>Gel toutes les 30-45 min + boisson sucrée</td>
      </tr>
      <tr>
        <td>&gt; 2h30</td>
        <td>80-120g</td>
        <td>Mix solide + liquide + électrolytes</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Important : pour absorber 80-120g de glucides par heure, il faut combiner deux types de sucres : glucose et fructose. Les gels modernes comme Maurten ou SiS Beta Fuel utilisent ce principe. Avec du glucose seul, la limite d'absorption est autour de 60g/heure. C'est pour ça qu'il faut travailler la nutrition tout au long de la préparation : si tu essaies de tourner à plus de 60g de glucides par heure le jour J sans jamais l'avoir pratiqué à l'entraînement, ton estomac lâchera avant tes jambes.</p>

<div>
  <p>Gels &amp; boissons isotoniques — nos sélections</p>
  <p>*liens affiliés Amazon</p>
  <div class="cards">
    <a href="https://link.amazon/B0iC7HeYT" rel="sponsored noopener noreferrer" target="_blank">
      <img src="https://m.media-amazon.com/images/I/710vQKAUK4L._AC_SL1500_.jpg" alt="Maurten Gel 100 x12" class="product-img" loading="lazy">
      <p>Maurten Gel 100 × 12</p>
      <span>Voir sur Amazon →</span>
    </a>
    <a href="https://link.amazon/B02kIh3vV" rel="sponsored noopener noreferrer" target="_blank">
      <img src="https://m.media-amazon.com/images/I/716Ra-GJdML._AC_SL1500_.jpg" alt="SiS Gel isotonique x15" class="product-img" loading="lazy">
      <p>SiS Gel isotonique × 15</p>
      <span>Voir sur Amazon →</span>
    </a>
    <a href="https://link.amazon/B08E0z8wn" rel="sponsored noopener noreferrer" target="_blank">
      <img src="https://m.media-amazon.com/images/I/617CoEwVY8L._AC_SL1500_.jpg" alt="Isostar isotonique citron" class="product-img" loading="lazy">
      <p>Isostar isotonique citron</p>
      <span>Voir sur Amazon →</span>
    </a>
    <a href="https://link.amazon/B05yCuMbD" rel="sponsored noopener noreferrer" target="_blank">
      <img src="https://m.media-amazon.com/images/I/61xRF8xuwjL._AC_SL1500_.jpg" alt="Isostar isotonique orange" class="product-img" loading="lazy">
      <p>Isostar isotonique orange</p>
      <span>Voir sur Amazon →</span>
    </a>
  </div>
</div>

<h3>La fenêtre de récupération post-effort</h3>

<p>Dans les <strong>30 à 60 minutes après l'effort</strong>, les muscles sont particulièrement réceptifs aux nutriments, c'est ce qu'on appelle la fenêtre anabolique. L'objectif théorique : 1,2g de glucides par kilo + 20 à 30g de protéines. En pratique pour 70kg : 84g de glucides + 25g de protéines. Un fromage blanc avec une banane et du miel, ou un riz au lait, font très bien l'affaire. En réalité, l'essentiel est de manger un vrai repas dans les heures qui suivent l'effort. Si tu n'as pas faim tout de suite après, ne force pas. Personnellement je ne cours pas après cette fenêtre de 30 minutes : après l'entraînement, c'est simplement mon repas principal.</p>

<!--COACHING-->

<h2 id="semaine-avant">La semaine avant la course : recharge glucidique</h2>

<p>Le carb loading ne consiste pas à manger des pâtes la veille au soir. C'est une stratégie qui commence 3 jours avant et qui vise à saturer complètement les réserves de glycogène musculaire. Ton réservoir plein plutôt qu'à moitié.</p>

<h3>J-7 à J-4 : alimentation normale</h3>

<p>Pas de changement radical. Mange normalement, continue tes séances légères. L'objectif est de ne pas arriver fatigué ou en déficit le jour J. Commence à réduire progressivement les fibres en excès (légumes crus, légumineuses) pour faciliter la digestion les jours suivants.</p>

<figure>
  <img src="/blog/img/pdf-nutri-steak-patate-douce.jpg" alt="Steak hache patate douce rotie salade — repas type triathlète avant course" class="content-img" loading="lazy">
  
</figure>

<h3>J-3 à J-1 : la recharge</h3>

<p>Augmente les glucides à <strong>7 à 10g par kilo de poids corporel par jour</strong>. Pour un athlète de 70kg, ça représente 490 à 700g de glucides quotidiens, soit significativement plus que d'habitude. Voici comment y arriver concrètement :</p>

<div class="note">
  <p class="mid">Aliments à privilégier (J-3 → J-1)</p>
  <div class="cards">
    <div>
      <p>A manger plus</p>
      <ul>
        <li>Riz blanc bien cuit</li>
        <li>Pâtes (bien cuites)</li>
        <li>Pain de mie</li>
        <li>Bananes mûres</li>
        <li>Compotes de fruits</li>
        <li>Gâteaux de riz, galettes de riz</li>
      </ul>
    </div>
    <div>
      <p>A réduire ou éviter</p>
      <ul>
        <li>Légumes crus et légumineuses</li>
        <li>Graisses en excès</li>
        <li>Aliments épicés ou acides</li>
        <li>Alcool</li>
        <li>Café en excès</li>
        <li>Aliments nouveaux ou inhabituels</li>
      </ul>
    </div>
  </div>
</div>

<p>L'hydratation se prépare aussi dès J-7 : augmente progressivement ta consommation d'eau. Ne te gorge pas d'eau la veille au soir : le corps ne peut pas stocker massivement de l'eau d'un coup, et tu risques des nuits entrecoupées.</p>

<h3>La veille : légèreté et habitudes</h3>

<p>Le repas de la veille au soir doit être familier, facile à digérer, et pas trop tardif. Riz blanc + poulet + un peu de sauce tomate est un grand classique. Pas de salades crues, pas de viandes grasses, pas de fromages forts. Mange à une heure raisonnable pour ne pas avoir l'estomac plein au coucher.</p>

<h2 id="matin-course">Le matin de la course : timing et contenu</h2>

<p>C'est l'étape que la plupart des athlètes ratent. Trop tôt = faim au bout d'une heure. Trop tard = estomac plein dans l'eau. Trop copieux = troubles digestifs garantis.</p>

<h3>2h30 à 3h avant le départ : le petit-déjeuner type</h3>

<div class="info">
  <p>3 options testées et validées</p>
  <div class="cards">
    <div class="box">
      <p>Option 1 : Classique</p>
      <ul>
        <li>Flocons d'avoine cuits</li>
        <li>1 banane</li>
        <li>1 c. à soupe de miel</li>
        <li>Eau ou thé léger</li>
      </ul>
    </div>
    <div class="box">
      <p>Option 2 : Simple</p>
      <ul>
        <li>3-4 tranches de pain de mie</li>
        <li>Confiture + miel</li>
        <li>1 oeuf à la coque</li>
        <li>Jus d'orange sans pulpe</li>
      </ul>
    </div>
    <div class="box">
      <p>Option 3 : Riz</p>
      <ul>
        <li>Riz au lait sucré</li>
        <li>1 banane</li>
        <li>1 carré de chocolat noir</li>
        <li>Eau</li>
      </ul>
    </div>
  </div>
  <p>Choisis l'option que tu as déjà testée. Jamais de nouveauté le matin d'une course.</p>
</div>

<h3>15 à 20 minutes avant le départ : la dernière charge</h3>

<p>Juste avant de rentrer dans l'eau, avale 30g de glucides à absorption rapide pour optimiser la glycémie au départ. Une datte medjool (25-30g de glucides), un gel, ou deux tranches de pain d'épice font parfaitement l'affaire. Bois 150 à 200ml d'eau avec.

</p><div class="box">
  <p>Et si tu as la boule au ventre ?</p>
  <p>C'est normal, les nerfs de course coupent l'appétit. Ne force pas. Si tu ne peux rien avaler avant l'eau, ce n'est pas grave. Reste bien hydraté, c'est la priorité. Dès que tu sors de la natation et que l'adrénaline retombe un peu, c'est là que tu rattrapas : un apport salé et glucidique (une barre, un gel, une banane) qui hydrate et recharge à la fois. Écoute ton corps le matin de course, ne t'impose pas un protocole qui te stresse plus qu'il ne t'aide.</p>
</div>

<h2 id="ravitaillement">Ravitaillement en course par distance</h2>

<p>C'est le coeur du sujet. La stratégie de ravitaillement est radicalement différente selon la distance. Ce qui marche sur un Sprint ne s'adapte pas à un Ironman, et vice versa.</p>

<div class="warn">
  <p class="bad">Règle absolue : rien de nouveau le jour J.</p>
  <p class="bad">Tout ce que tu manges et bois en course, tu l'as déjà testé à l'entraînement, dans les mêmes conditions. Entre 30 et 50% des DNF sur Ironman sont liés à des problèmes gastro-intestinaux évitables.</p>
</div>

<h3>Triathlon Sprint (&lt; 1h30)</h3>

<p>Sur un Sprint, la durée est trop courte pour que la nutrition change significativement le résultat. Si ton carb loading a été bien fait, l'essentiel est l'hydratation.</p>

<div class="box">
  <div class="cards">
    <div>
      <p>🏊</p>
      <p>Natation</p>
      <p>Rien. Concentre-toi sur la nage.</p>
    </div>
    <div>
      <p>🚴</p>
      <p>Vélo</p>
      <p>1 bidon 500ml légèrement sucré. Boire 2-3 gorgées toutes les 8-10 min.</p>
    </div>
    <div>
      <p>🏃</p>
      <p>Course à pied</p>
      <p>Eau aux ravitaillements si disponible. Pas de gel nécessaire.</p>
    </div>
  </div>
  <p>Si la course dépasse 1h15 ou en forte chaleur : prévoir 30-60g de glucides sur le vélo.</p>
</div>

<h3>Triathlon Olympique (2h à 3h)</h3>

<p>Le vélo devient la fenêtre principale de ravitaillement. L'objectif est de maintenir la glycémie stable pour aborder la course à pied dans les meilleures conditions.</p>

<div class="box">
  <div class="cards">
    <div>
      <p>🏊</p>
      <p>Natation</p>
      <p>Rien. Possibilité d'un gel en T1 si tu es à l'aise.</p>
    </div>
    <div>
      <p>🚴</p>
      <p>Vélo (40km)</p>
      <p>1-2 bidons 500ml. 30-60g glucides/h. 1 gel ou 1 barre à mi-parcours.</p>
    </div>
    <div>
      <p>🏃</p>
      <p>Course à pied (10km)</p>
      <p>Eau + 1 gel optionnel si la course dure plus de 45 min. Éviter les solides.</p>
    </div>
  </div>
</div>

<p>Astuce : finir les solides (barre énergétique) 20 minutes avant la fin du vélo. L'estomac a besoin de temps pour digérer avant de passer au run. Sur le run, le ventre n'aime pas les solides. Reste sur le liquide et les gels.</p>

<h3>Half Ironman / 70.3 (4h30 à 7h)</h3>

<p>À partir du 70.3, la nutrition devient un facteur de performance majeur. Une mauvaise stratégie ne te ralentit plus. Elle t'arrête. L'enjeu est de maintenir un apport glucidique constant pendant les 90km de vélo, sans surcharger l'intestin.</p>

<div class="box">
  <div class="cards">
    <div>
      <p>🏊</p>
      <p>Natation (1900m)</p>
      <p>Rien. Gel possible en T1 pour amorcer le ravitaillement.</p>
    </div>
    <div>
      <p>🚴</p>
      <p>Vélo (90km)</p>
      <p>60-90g glucides/h. 2 bidons 750ml. Mix gels + barres. Commencer dès le km 10.</p>
    </div>
    <div>
      <p>🏃</p>
      <p>Run (21km)</p>
      <p>Gels + eau aux ravitaillements. 1 gel toutes les 30-35 min. Boisson isotonique possible.</p>
    </div>
  </div>
  <div>
    <p>Objectifs chiffrés sur le vélo :</p>
    <p>500-750ml de liquide/heure · 400-600mg de sodium/heure · 60-90g de glucides/heure · 1 prise toutes les 15-20 minutes</p>
  </div>
</div>

<div class="note">
  <p class="mid">Retour d'expérience : quand le plan ne tient plus</p>
  <p>Sur mon triathlon longue distance, j'ai commencé à avoir des crampes d'estomac sur le run. Plus question de manger des gels. J'ai écouté mon corps, enfin partiellement, sinon j'aurais fini dans une cabine toilette, et j'ai arrêté tout solide et semi-liquide. Je me suis contenté du Coca-Cola aux ravitaillements. C'était pas l'idéal sur le papier, mais c'était ce que mon corps acceptait ce jour-là. La leçon : avoir un plan B. Savoir ce que tu peux avaler si ton estomac refuse le protocole prévu.</p>
</div>

<h3>Ironman 140.6 (8h à 17h)</h3>

<p>L'Ironman est dans une catégorie à part. Le vélo est souvent surnommé "le buffet". C'est là que tu manges pour les 4 à 6 heures suivantes. Une erreur de stratégie sur les 180km de vélo se paie cash sur le marathon.</p>

<div class="box">
  <div class="cards">
    <div>
      <p>🏊</p>
      <p>Natation (3800m)</p>
      <p>Rien. Gel obligatoire en T1 (les réserves ont commencé à baisser).</p>
    </div>
    <div>
      <p>🚴</p>
      <p>Vélo (180km)</p>
      <p>60-90g glucides/h. Renouveler les bidons. Barres jusqu'à 2h avant la fin.</p>
    </div>
    <div>
      <p>🏃</p>
      <p>Marathon (42km)</p>
      <p>Liquide uniquement. Gels + eau. Coca-Cola sur la seconde moitié si besoin.</p>
    </div>
  </div>
  <div>
    <p><strong>Sur le marathon :</strong> ne jamais attendre la faim ou la soif pour se ravitailler. A ce stade c'est déjà trop tard. Ravitaille-toi à chaque point, même si tu n'en as pas encore envie.</p>
  </div>
</div>

<p>Le Coca-Cola sur la fin de marathon est une institution sur l'Ironman. Ce n'est pas un mythe. La caféine réduit la perception de l'effort, le sucre rapide redonne un coup de boost, et les bulles calment l'estomac irrité. A utiliser avec modération (pas d'estomac vide) mais ça marche.</p>

<h2 id="hydratation">Hydratation et électrolytes</h2>

<p>L'hydratation en triathlon est plus complexe que "boire régulièrement". La quantité dépend de ta transpiration, de la température, de l'intensité de l'effort et de ta taille. Un conseil "universel" sur les quantités est forcément approximatif.</p>

<h3>Combien boire en course ?</h3>

<p>La règle de base : <strong>500 à 750ml par heure</strong>, à ajuster selon la chaleur et ton ressenti. La règle de sécurité : ne jamais perdre plus de <strong>2 à 3% de ton poids corporel</strong> en eau. Pour 70kg, ça représente 1,4 à 2,1kg de pertes sudorales maximum. Pour t'en faire une idée, pèse-toi avant et après une sortie longue : la différence de poids correspond aux fluides perdus.</p>

<p>Attention aussi à l'inverse : trop boire d'eau pure peut provoquer une <strong>hyponatrémie</strong> (dilution du sodium sanguin), particulièrement dangereuse sur les formats longs. Elle se manifeste par des nausées, maux de tête, confusion. La solution : ne pas boire d'eau pure mais une boisson avec du sodium.</p>

<h3>Le sodium : l'électrolyte clé</h3>

<p>Sur les formats longs (70.3 et Ironman), vise <strong>400 à 600mg de sodium par heure</strong>. La plupart des boissons isotoniques en contiennent, mais vérifie les étiquettes : certains gels en sont pauvres. Les pastilles d'électrolytes (SiS Go Hydro, Maurten Caf 100) permettent d'ajuster précisément.</p>

<p>Le sodium aide à retenir l'eau dans les cellules, prévient les crampes et maintient la contraction musculaire. C'est particulièrement critique en cas de chaleur ou si tu "transpires salé" (tu le remarques à la trace blanche sur la peau et le maillot).</p>

<h2 id="gut-training">Le gut training : entraîner son ventre</h2>

<p>Le tractus digestif, comme les muscles, s'adapte à l'entraînement. Un estomac "non entraîné" à absorber 80-90g de glucides par heure pendant l'effort va se rebeller. Un estomac habitué tolère des quantités bien plus élevées sans inconfort.</p>

<p>Le gut training consiste à <strong>pratiquer sa stratégie nutritionnelle à l'entraînement</strong>, surtout lors des sorties longues. Les principes :</p>

<ul>
  <li>Commence par des quantités faibles (40-50g/heure) et augmente progressivement sur 4 à 6 semaines</li>
  <li>Entraîne-toi à manger sur le vélo puis à courir : l'enchaînement est différent du vélo seul</li>
  <li>Teste les mêmes produits que tu utiliseras en course (gel, barre, boisson)</li>
  <li>Fais le test en conditions proches de la course (même intensité, même chaleur si possible)</li>
  <li>Commence le gut training au moins 6 semaines avant la compétition</li>
</ul>

<p>C'est pour ça que les sorties longues avec ravitaillement ne sont pas optionnelles sur un programme 70.3 ou Ironman. Elles entraînent autant le ventre que les jambes. Et même avec un gut training bien fait, il peut arriver que le jour J ton estomac décide autrement, comme dans le retour d'expérience 70.3 plus haut. L'important est d'avoir un plan B.</p>

<h2 id="erreurs">Les erreurs les plus fréquentes</h2>

<p>Ces erreurs sont évitables à 100%. Elles détruisent pourtant des courses à tous les niveaux.</p>

<div>
  <div class="warn">
    <p class="bad">1. Attendre d'avoir faim pour manger</p>
    <p class="bad">Quand tu as faim à l'effort, c'est déjà trop tard. Tu es en déficit énergétique et tu ne pourras pas le combler rapidement. Ravitaille-toi à intervalle régulier, qu'importe ton ressenti.</p>
  </div>
  <div class="warn">
    <p class="bad">2. Tester de nouveaux produits le jour J</p>
    <p class="bad">Le gel "offert" au dernier ravitaillement que tu n'as jamais essayé, la boisson des organisateurs dont tu ne connais pas la concentration. Evite-les. Ou adapte-toi en diluant avec de l'eau.</p>
  </div>
  <div class="warn">
    <p class="bad">3. Concentrer les glucides en une seule prise</p>
    <p class="bad">Avaler un gel toutes les heures d'un coup au lieu de fractionner toutes les 15-20 minutes. La digestion est plus douce, les pics glycémiques évités, et la tolérance meilleure.</p>
  </div>
  <div class="warn">
    <p class="bad">4. Négliger le sodium sur les formats longs</p>
    <p class="bad">Les crampes sur un Ironman sont souvent une déficience en électrolytes, pas en eau. Boire beaucoup d'eau pure sans sodium aggrave la situation.</p>
  </div>
  <div class="warn">
    <p class="bad">5. Faire un carb loading "de dernière minute"</p>
    <p class="bad">Les pâtes du soir avant course ne suffisent pas. La recharge glucidique efficace commence 3 jours avant, pas 12 heures avant.</p>
  </div>
  <div class="warn">
    <p class="bad">6. Ne pas boire assez ou attendre d'avoir soif</p>
    <p class="bad">Comme pour la faim, la soif est un signal qui arrive trop tard. À ce stade tu es déjà déshydraté et les performances chutent. Bois à intervalles réguliers dès le début de l'effort, même si tu n'en ressens pas encore le besoin.</p>
  </div>
  <div class="warn">
    <p class="bad">7. Partir trop fort sur le vélo</p>
    <p class="bad">Ce n'est pas directement nutritionnel, mais ça l'est indirectement : une intensité trop élevée sur le vélo stoppe la digestion (le sang quitte l'estomac vers les muscles). Tu ne peux plus rien absorber.</p>
  </div>
</div>

<h2 id="supplements">Suppléments : ce qui marche vraiment</h2>

<p>Le marché des compléments sportifs est encombré de produits inutiles ou marginaux. Voici les trois qui ont une vraie base scientifique pour les triathlètes :</p>

<div class="cards">
  <div class="tip">
    <p class="good">Caféine</p>
    <p class="good">3 à 6mg par kilo de poids corporel, 45 à 60 minutes avant l'effort ou pendant. Réduit la perception de la fatigue, améliore la concentration et retarde l'épuisement. Très efficace sur la fin d'Ironman.</p>
    <p class="good">Attention à la tolérance individuelle et au sommeil la veille.</p>
  </div>
  <div class="tip">
    <p class="good">Électrolytes</p>
    <p class="good">Sodium, potassium, magnésium : indispensables sur les formats longs. Sous forme de pastilles à dissoudre ou de sachets dans le bidon. Non négociable dès 2h de course.</p>
    <p class="good">Pastilles SiS Go Hydro ou Precision Hydration sont les références.</p>
  </div>
  <div class="tip">
    <p class="good">Bêta-alanine</p>
    <p class="good">Améliore la tolérance à l'acidose musculaire sur les efforts intenses. Effet visible surtout sur les formats courts (Sprint, Olympique) où l'intensité est plus élevée. Nécessite 4-6 semaines de charge régulière.</p>
    <p class="good">Picotements cutanés normaux : signe que ça agit.</p>
  </div>
</div>

<p>Ce qui ne vaut pas grand chose pour les triathlètes : brûleurs de graisse, boosters pré-workout aux mélanges inconnus, créatine (peu d'intérêt sur l'endurance longue), BCAA si les protéines alimentaires sont suffisantes.</p>

<h2 id="recuperation">Récupération nutritionnelle post-course</h2>

<p>Après une course, surtout un format long, le corps est en dette nutritionnelle importante. La récupération commence dans la première heure. C'est là que tu poses les bases pour les jours suivants.</p>

<p><strong>Dans les 30 à 60 minutes post-arrivée :</strong> vise 45g de glucides + 15 à 20g de protéines. Une barre de récupération, un fromage blanc avec du miel, ou un shake de protéines avec une banane. Si tu n'as pas faim (ce qui arrive souvent après un effort intense), opte pour un liquide : milk shake, lait chocolaté, boisson de récupération.</p>

<p><strong>Dans les 24 heures suivantes :</strong> réhydrate-toi en buvant 150% du poids perdu en eau. Un repas complet 2 à 3 heures après la course : riz, pâtes ou pommes de terre + protéine maigre + légumes cuits. Évite de repartir sur du volume alimentaire léger "parce que tu n'as pas entraînement". La récupération musculaire a besoin de carburant.</p>

<p><strong>Les 3 à 5 jours suivants :</strong> maintiens un apport protéique élevé (1,6 à 2g/kg) et ne réduis pas les glucides trop vite. Le corps reconstruit pendant cette phase. Le priver de nutriments ralentit la récupération et augmente le risque de blessure.</p>

<h2 id="faq">FAQ Nutrition triathlon</h2>

<!--FAQ-->

`,
};
