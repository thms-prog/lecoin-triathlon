import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "temps-moyen-triathlon-distance-niveau-age",
  title: "Temps moyen sur un triathlon : par distance, niveau et âge",
  seoTitle: "Temps moyen sur un triathlon : Sprint, M, 70.3, Ironman (par âge)",
  description: "Temps médian et moyen sur un triathlon : Sprint 1h35, Olympique 2h50, 70.3 5h52, Ironman 12h23. Détail par sexe, par âge, par niveau et taux d'abandon (DNF).",
  keywords: ["temps moyen triathlon","temps moyen triathlon m","temps moyen triathlon s","temps moyen triathlon l","temps triathlon sprint","temps moyen olympique","temps moyen 70.3","temps moyen ironman","temps médian ironman","temps triathlon par age","temps moyen ironman par age","chrono triathlon débutant","bon temps triathlon","taux abandon ironman","DNF ironman"],
  date: "2026-09-04",
  dateModified: "2026-11-01",
  category: "Course",
  image: "/demo/blog/temps-moyen.jpg",
  coaching: {
    title: "Baisser ton temps, c'est d'abord de la régularité",
    text: "Ton coach programme natation, vélo et course avec tes allures, et ajuste chaque semaine pour que tu tiennes la durée.",
  },
  faq: [
    {
      "q": "Quel est le temps moyen sur un triathlon olympique ?",
      "a": "Le temps médian va de 2h50 à 3h00 selon l'épreuve : environ 2h48 pour un homme, 3h05 pour une femme, transitions comprises. Un débutant termine plutôt en 3h15 à 3h45, un athlète confirmé en 2h10 à 2h30."
    },
    {
      "q": "Quel est le temps moyen sur un 70.3 (Half Ironman) ?",
      "a": "Médiane 5h52 et moyenne 5h57, compilées sur plus de 1,3 million d'arrivées : 5h45 pour les hommes, 6h14 pour les femmes. Un premier 70.3 se vise entre 6h45 et 7h45."
    },
    {
      "q": "Quel est le temps moyen sur un Ironman ?",
      "a": "Médiane 12h23 et moyenne 12h30 : 12h13 pour les hommes, 13h08 pour les femmes, pour une barrière horaire de 17h. Un premier Ironman se vise entre 13h30 et 15h30 ; les confirmés passent sous 11h."
    },
    {
      "q": "Combien de temps pour un premier triathlon (Sprint) ?",
      "a": "Sur un format Sprint (750 m, 20 km, 5 km), compte 1h45 à 2h05 pour une première course. L'objectif d'un premier triathlon est de finir en gérant son effort, pas de viser un chrono."
    },
    {
      "q": "Quel est le taux d'abandon sur un Ironman ?",
      "a": "Autour de 5 à 10 % une année normale, soit 90 à 95 % de finishers. Il grimpe fortement en cas de forte chaleur : jusqu'à 25 à 30 % sur certaines éditions (St. George 2012, Waco 2022)."
    },
    {
      "q": "Le temps sur un triathlon augmente-t-il beaucoup avec l'âge ?",
      "a": "La performance culmine entre 25 et 35 ans. À entraînement équivalent, on ralentit d'environ 6 % par décennie après 40 ans, 12 % après 50 ans et 25 % après 60 ans."
    }
  ],
  content: `
<div id="essentiel" class="box">
  <p>L'essentiel : temps médian (arrivée, transitions comprises)</p>
  <ul>
    <li><strong>XS (Découverte)</strong> : environ 1h05 (peu de données publiques)</li>
    <li><strong>Sprint (S)</strong> : environ 1h35 · hommes 1h30, femmes 1h45</li>
    <li><strong>Olympique (M)</strong> : 2h50 à 3h00 · hommes 2h48, femmes 3h05</li>
    <li><strong>70.3 (L / Half Ironman)</strong> : <strong>5h52</strong> · hommes 5h45, femmes 6h14</li>
    <li><strong>Ironman (XXL)</strong> : <strong>12h23</strong> · hommes 12h13, femmes 13h08</li>
  </ul>
  <p>70.3 et Ironman : médianes compilées sur plus de 2 millions d'arrivées (bases publiques). Sprint et Olympique : recoupement de plusieurs compilations concordantes, sur des échantillons plus petits.</p>
</div>

<div class="info">
  <strong>Médiane ou moyenne ?</strong> On raisonne surtout en temps <em>médian</em> : la moitié des finishers vont plus vite, l'autre moitié moins vite. La moyenne est un peu plus lente, car une poignée d'athlètes qui terminent près de la barrière horaire (17h sur Ironman) la tire vers le haut. Sur Ironman, la moyenne est environ 7 minutes plus lente que la médiane ; les deux chiffres sont donnés distance par distance plus bas.
</div>

<nav>
  <p>Sommaire</p>
  <nav class="toc" aria-label="Sommaire"><ul>
    <li><a href="#tableau">Temps médian par distance</a></li>
    <li><a href="#barrieres">Barrières horaires et format XS</a></li>
    <li><a href="#splits">Répartition natation, vélo, course</a></li>
    <li><a href="#temps-sprint">Temps sur un Sprint (S)</a></li>
    <li><a href="#temps-m">Temps sur un Olympique (M)</a></li>
    <li><a href="#temps-l">Temps sur un 70.3 (L)</a></li>
    <li><a href="#temps-ironman">Temps sur un Ironman (XXL)</a></li>
    <li><a href="#par-age">Temps moyen par tranche d'âge</a></li>
    <li><a href="#par-niveau">Temps moyen selon le niveau</a></li>
    <li><a href="#dnf">Taux d'abandon (DNF)</a></li>
    <li><a href="#facteurs">Ce qui fait varier ton chrono</a></li>
    <li><a href="#methodo">Méthodologie et sources</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul></nav>
</nav>

<h2 id="tableau">Temps médian par distance</h2>
<p>Temps d'arrivée, les deux transitions comprises. Le « Top 25 % » donne un repère de ce qu'est un <strong>bon temps</strong> pour un amateur ; le « Top 10 % » correspond aux athlètes bien entraînés.</p>
<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Médiane globale</th>
      <th>Hommes</th>
      <th>Femmes</th>
      <th>Top 25 %</th>
      <th>Top 10 %</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint (S)</td><td>1h35</td><td>1h30</td><td>1h45</td><td>1h15</td><td>1h05</td></tr>
    <tr><td>Olympique (M)</td><td>2h50</td><td>2h48</td><td>3h05</td><td>2h30</td><td>2h15</td></tr>
    <tr><td>70.3 (L)</td><td><strong>5h52</strong></td><td>5h45</td><td>6h14</td><td>5h16</td><td>4h48</td></tr>
    <tr><td>Ironman (XXL)</td><td><strong>12h23</strong></td><td>12h13</td><td>13h08</td><td>11h06</td><td>10h08</td></tr>
  </tbody>
</table>
</div>

<h2 id="barrieres">Barrières horaires et format XS</h2>
<ul>
  <li><strong>Sprint</strong> : barrière souvent fixée entre 2h30 et 3h, très variable selon l'organisation.</li>
  <li><strong>Olympique</strong> : entre 3h30 et 4h en général ; certaines courses locales n'ont pas de barrière stricte.</li>
  <li><strong>70.3</strong> : 8h30.</li>
  <li><strong>Ironman</strong> : 17h.</li>
</ul>
<p>Le format <strong>XS (Découverte)</strong>, soit 400 m de natation, 10 km de vélo et 2,5 km de course, n'a pas de statistiques publiques fiables. Compte environ <strong>1h05</strong> en médiane, dans une fourchette large de 40 min à 1h40 selon le niveau.</p>

<h2 id="splits">Répartition natation, vélo, course</h2>
<p>Temps de passage médians. Le vélo pèse la moitié du chrono sur toutes les distances : c'est là que se joue la performance.</p>
<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Natation</th>
      <th>Vélo</th>
      <th>Course à pied</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint</td><td>18 min</td><td>46 min</td><td>28 min</td></tr>
    <tr><td>Olympique</td><td>30 min</td><td>1h15</td><td>52 min</td></tr>
    <tr><td>70.3</td><td>38 min</td><td>2h57</td><td>2h05</td></tr>
    <tr><td>Ironman</td><td>1h16</td><td>6h08</td><td>4h40</td></tr>
  </tbody>
</table>
</div>

<h2 id="temps-sprint">Temps moyen sur un triathlon S (Sprint)</h2>
<div>
  <div class="info cards">
    <span><strong>Médiane 1h30</strong></span><span>Moyenne 1h35</span><span>Hommes 1h30</span><span>Femmes 1h45</span><span>Top 25 % : 1h15</span><span>Top 10 % : 1h05</span>
  </div>
  <ul>
    <li><strong>Par niveau</strong> : débutant 1h45 à 2h05, pratiquant régulier 1h25 à 1h40.</li>
    <li><strong>Le point clef</strong> : c'est le format le plus dispersé (beaucoup de premières courses, des temps de 1h à plus de 2h), et la natation de 750 m y creuse les plus gros écarts. La moyenne est plus lente que la médiane pour cette raison.</li>
    <li><strong>Élite</strong> : 50 à 55 minutes (Léo Bergère, 2<sup>e</sup> aux WTCS 2023 en 54'06).</li>
  </ul>
</div>

<h2 id="temps-m">Temps moyen sur un triathlon M (Olympique)</h2>
<div>
  <div class="info cards">
    <span><strong>Médiane 2h50 à 3h00</strong></span><span>Hommes 2h48</span><span>Femmes 3h05</span><span>Top 25 % : 2h30</span><span>Top 10 % : 2h15</span>
  </div>
  <ul>
    <li><strong>Par niveau</strong> : débutant 3h15 à 3h45, confirmé 2h10 à 2h30.</li>
    <li><strong>Le point clef</strong> : la médiane dépend du type d'épreuve. Course à licence ou de club (peloton entraîné) : plutôt 2h45. Grande épreuve ouverte de masse, comme le Chicago Triathlon et ses 8 000 arrivants : plutôt 3h10. Le vélo de 40 km pèse la plus grosse part du chrono.</li>
    <li><strong>Élite</strong> : sous 1h45 (records olympiques de Paris 2024 : Alex Yee 1h43'33, Cassandre Beaugrand 1h54'55).</li>
  </ul>
</div>

<h2 id="temps-l">Temps moyen sur un 70.3 (Half Ironman)</h2>
<div>
  <div class="info cards">
    <span><strong>Médiane 5h52</strong></span><span>Moyenne 5h57</span><span>Hommes 5h45</span><span>Femmes 6h14</span><span>Top 25 % : 5h16</span><span>Top 10 % : 4h48</span>
  </div>
  <ul>
    <li><strong>Par niveau</strong> : premier 70.3 entre 6h45 et 7h45, confirmé 4h40 à 5h10.</li>
    <li><strong>Le point clef</strong> : médiane et moyenne quasi identiques, signe d'un peloton homogène. Sur 5 à 7 heures d'effort, la gestion de l'allure et de la nutrition fait l'essentiel de l'écart entre athlètes.</li>
    <li><strong>Élite</strong> : la Française Marjolaine Pierré a gagné l'Ironman 70.3 d'Aix-en-Provence 2026 en 4h08'27, record du parcours.</li>
  </ul>
</div>

<h2 id="temps-ironman">Temps moyen sur un Ironman</h2>
<div>
  <div class="info cards">
    <span><strong>Médiane 12h23</strong></span><span>Moyenne 12h30</span><span>Hommes 12h13</span><span>Femmes 13h08</span><span>Top 25 % : 11h06</span><span>Top 10 % : 10h08</span>
  </div>
  <ul>
    <li><strong>Par niveau</strong> : objectif « finisher » d'un premier Ironman entre 13h30 et 15h30, confirmé sous 11h.</li>
    <li><strong>Le point clef</strong> : la moyenne est un peu plus lente que la médiane, car les finishers proches de la barrière de 17h comptent autant qu'un athlète rapide.</li>
    <li><strong>Élite</strong> : environ 8h. Le 5 juillet 2026, à la DATEV Challenge Roth, Sam Laidlow a signé <strong>7h21'04</strong>, meilleur temps de l'histoire sur la distance (8 secondes sous l'ancien record du monde).</li>
  </ul>
</div>

<h2 id="par-age">Temps moyen sur un triathlon par tranche d'âge</h2>
<p>La performance en endurance culmine entre 25 et 35 ans, puis décline progressivement. À entraînement équivalent, le ralentissement moyen par rapport à la tranche 25-39 ans est d'environ :</p>
<ul>
  <li><strong>40 à 49 ans</strong> : +6 %</li>
  <li><strong>50 à 59 ans</strong> : +12 %</li>
  <li><strong>60 ans et plus</strong> : +25 % et au-delà</li>
</ul>

<h3>Par âge : triathlon olympique (M)</h3>
<div class="table-wrap">
<table>
  <thead><tr><th>Âge</th><th>Hommes</th><th>Femmes</th></tr></thead>
  <tbody>
    <tr><td>18 à 24 ans</td><td>2h43</td><td>2h55</td></tr>
    <tr><td>25 à 39 ans</td><td>2h45</td><td>3h00</td></tr>
    <tr><td>40 à 49 ans</td><td>2h52</td><td>3h08</td></tr>
    <tr><td>50 à 59 ans</td><td>3h02</td><td>3h18</td></tr>
    <tr><td>60 à 69 ans</td><td>3h20</td><td>3h35</td></tr>
    <tr><td>70 ans et plus</td><td>3h45</td><td>4h00</td></tr>
  </tbody>
</table>
</div>

<h3>Par âge : 70.3 (Half Ironman)</h3>
<p>Temps médian par catégorie d'âge de compétition.</p>
<div class="table-wrap">
<table>
  <thead><tr><th>Âge</th><th>Hommes</th><th>Femmes</th></tr></thead>
  <tbody>
    <tr><td>18 à 24</td><td>5h40</td><td>6h08</td></tr>
    <tr><td>25 à 29</td><td>5h39</td><td>6h06</td></tr>
    <tr><td>30 à 34</td><td>5h39</td><td>6h07</td></tr>
    <tr><td>35 à 39</td><td>5h40</td><td>6h10</td></tr>
    <tr><td>40 à 44</td><td>5h44</td><td>6h14</td></tr>
    <tr><td>45 à 49</td><td>5h48</td><td>6h20</td></tr>
    <tr><td>50 à 54</td><td>5h54</td><td>6h28</td></tr>
    <tr><td>55 à 59</td><td>6h03</td><td>6h36</td></tr>
    <tr><td>60 à 64</td><td>6h16</td><td>6h49</td></tr>
    <tr><td>65 à 69</td><td>6h31</td><td>7h07</td></tr>
    <tr><td>70 à 74</td><td>6h53</td><td>7h27</td></tr>
  </tbody>
</table>
</div>

<h3>Par âge : Ironman</h3>
<p>Temps médian par catégorie d'âge de compétition. En course, on se compare surtout à sa propre catégorie, pas à la moyenne générale.</p>
<div class="table-wrap">
<table>
  <thead><tr><th>Âge</th><th>Hommes</th><th>Femmes</th></tr></thead>
  <tbody>
    <tr><td>18 à 24</td><td>12h05</td><td>12h51</td></tr>
    <tr><td>25 à 29</td><td>11h48</td><td>12h39</td></tr>
    <tr><td>30 à 34</td><td>11h46</td><td>12h44</td></tr>
    <tr><td>35 à 39</td><td>11h52</td><td>12h56</td></tr>
    <tr><td>40 à 44</td><td>12h07</td><td>13h10</td></tr>
    <tr><td>45 à 49</td><td>12h23</td><td>13h27</td></tr>
    <tr><td>50 à 54</td><td>12h44</td><td>13h48</td></tr>
    <tr><td>55 à 59</td><td>13h12</td><td>14h05</td></tr>
    <tr><td>60 à 64</td><td>13h42</td><td>14h38</td></tr>
    <tr><td>65 à 69</td><td>14h12</td><td>15h21</td></tr>
    <tr><td>70 à 74</td><td>14h56</td><td>15h46</td></tr>
  </tbody>
</table>
</div>

<h2 id="par-niveau">Temps moyen sur un triathlon selon le niveau (débutant, intermédiaire, confirmé)</h2>
<p>« Débutant » : 1re ou 2e saison, objectif finir. « Intermédiaire » : 2 à 3 séances par sport et par semaine, quelques courses au compteur. « Confirmé » : entraînement structuré toute l'année, recherche de performance.</p>
<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Débutant</th>
      <th>Intermédiaire</th>
      <th>Confirmé</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sprint</td><td>1h45 à 2h05</td><td>1h25 à 1h40</td><td>1h05 à 1h18</td></tr>
    <tr><td>Olympique</td><td>3h15 à 3h45</td><td>2h40 à 3h00</td><td>2h10 à 2h30</td></tr>
    <tr><td>70.3</td><td>6h45 à 7h45</td><td>5h30 à 6h10</td><td>4h40 à 5h10</td></tr>
    <tr><td>Ironman</td><td>13h30 à 15h30</td><td>12h00 à 13h00</td><td>10h00 à 11h15</td></tr>
  </tbody>
</table>
</div>

<h2 id="dnf">Taux d'abandon (DNF)</h2>
<ul>
  <li><strong>Ironman complet</strong> : 5 à 10 % de non-finishers une année normale, donc 90 à 95 % des partants terminent. La majorité des courses sont sous 10 %.</li>
  <li><strong>70.3</strong> : plus bas, souvent 2 à 5 %.</li>
  <li><strong>Les pics sont météo</strong> : Ironman St. George 2012, près de 29 % d'abandons ; Ironman Waco 2022, près d'un tiers. Chaleur, humidité et vent font exploser les temps (au-delà de 14h de moyenne sur les courses à fort DNF) et rater les barrières horaires.</li>
  <li><strong>Championnat du monde</strong> (Kona, Nice) : très variable selon l'année et la chaleur ; s'y ajoutent des athlètes retirés du parcours par la sécurité, ce qui gonfle le chiffre.</li>
</ul>
<p class="mid">
  <strong>« L'Ironman devient trop facile à finir » ?</strong> Les taux d'abandon sur les épreuves labellisées sont bas ces dernières saisons. Plusieurs explications tiennent la route : des étés cléments, des parcours de plus en plus roulants choisis pour la performance, et un niveau de préparation moyen qui a nettement monté (plans structurés, home trainer, capteurs). Une autre hypothèse circule dans le milieu : avec des grilles de départ toujours plus remplies et un label devenu très commercial, l'application des barrières intermédiaires serait un peu plus souple sur le terrain. Rien ne le confirme officiellement, et le plafond de 17h reste la norme de longue date. À l'inverse, les épreuves extrêmes indépendantes (Norseman, Embrunman, Celtman) restent réputées bien plus sélectives.
</p>

<!--COACHING-->

<h2 id="facteurs">Ce qui fait varier ton chrono</h2>
<ul>
  <li><strong>La natation</strong> : la discipline la plus technique. Entre un débutant et un nageur à l'aise, l'écart sur les 1,5 km d'un Olympique se compte en minutes.</li>
  <li><strong>Le vélo</strong> : la plus grosse part du temps total, environ 50 %. Un gain de watts au seuil se traduit directement en minutes gagnées.</li>
  <li><strong>Le parcours</strong> : entre un tracé plat et roulant et un tracé vallonné, l'écart atteint 20 à 45 minutes sur un Half, davantage sur un Ironman.</li>
  <li><strong>La météo</strong> : par forte chaleur, par grand vent ou dans une eau froide, les chronos de tout le monde s'allongent.</li>
  <li><strong>Les transitions</strong> : quelques secondes sur un Sprint bien rodé, plusieurs minutes quand on découvre.</li>
</ul>

<h2 id="methodo">Méthodologie et sources</h2>
<p>Les temps <strong>70.3 et Ironman</strong> sont des médianes compilées sur de très grands échantillons : environ 1,37 million d'arrivées sur plus de 1 000 courses de 70.3, et près de 800 000 arrivées sur plus de 490 Ironman, d'après les bases publiques de <a href="https://www.tritimes.org/" target="_blank" rel="noopener noreferrer">TriTimes</a>. Ces médianes bougent très peu d'une saison à l'autre ; les repères recoupent ceux de <a href="https://www.coachcox.co.uk/imstats/" target="_blank" rel="noopener noreferrer">CoachCox</a> et de <a href="https://marathonhandbook.com/average-ironman-time/" target="_blank" rel="noopener noreferrer">Marathon Handbook</a>.</p>
<p>Les temps <strong>Sprint et Olympique</strong> proviennent du recoupement de plusieurs compilations de résultats publics (<a href="https://www.tri247.com/beginner-triathlon/average-good-triathlon-times" target="_blank" rel="noopener noreferrer">TRI247</a>, TriGearLab, RunTri). Il n'existe pas de base centralisée aussi large que pour les formats Ironman : l'échantillon est plus petit et la fourchette plus ouverte.</p>
<p>Ces valeurs donnent un ordre de grandeur. Une même distance se court 20 à 45 minutes plus vite sur un parcours plat, et le profil du peloton compte autant que le parcours : courses à licence contre épreuves ouvertes de masse. Page mise à jour au fil des saisons.</p>

<h2 id="faq">FAQ</h2>

<!--FAQ-->
`,
};
