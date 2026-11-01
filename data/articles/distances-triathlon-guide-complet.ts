import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "distances-triathlon-guide-complet",
  title: "Distances en triathlon : Comparatifs, conseils et choix du format",
  seoTitle: "Distances triathlon 2026 : Sprint, M, 70.3, Ironman (tableau complet)",
  description: "Toutes les distances du triathlon dans un tableau clair : XS, Sprint, M (Olympique), 70.3 et Ironman (3,8 km natation, 180 km vélo, 42,2 km course). Distances, prix et temps moyens par format, et comment choisir la tienne.",
  keywords: ["distances triathlon","distance triathlon","triathlon ironman distance","triathlon distance olympique","distance triathlon sprint","triathlon s distance","comparatif triathlon","triathlon XS","triathlon S","triathlon M","triathlon L","triathlon XXL","Ironman 140.6","triathlon 70.3","Super League","PTO","triathlon extrême","choisir distance triathlon","temps moyen triathlon"],
  date: "2026-01-26",
  dateModified: "2026-11-01",
  category: "Débuter",
  image: "/demo/blog/distances.webp",
  coaching: {
    title: "Ton format choisi, un plan pour y arriver",
    text: "Un vrai coach construit ta préparation pour la distance que tu vises, à partir de tes tests et de ton temps disponible.",
  },
  faq: [
    {
      "q": "Quelle est la distance d'un Ironman ?",
      "a": "Un Ironman (triathlon XXL, aussi appelé 140.6) se compose de 3,8 km de natation, 180 km de vélo et 42,195 km de course à pied, soit 226 km au total. C'est la distance la plus longue du triathlon officiel."
    },
    {
      "q": "Quelle est la distance d'un triathlon olympique (M) ?",
      "a": "Le triathlon M, dit olympique, comprend 1,5 km de natation, 40 km de vélo et 10 km de course à pied. C'est le format disputé aux Jeux Olympiques."
    },
    {
      "q": "Quelle est la distance d'un triathlon Sprint (S) ?",
      "a": "Le triathlon S, ou Sprint, correspond à 750 m de natation, 20 km de vélo et 5 km de course à pied. C'est le format le plus courant pour une première course."
    },
    {
      "q": "Qu'est-ce qu'un triathlon 70.3 ?",
      "a": "Le 70.3, ou Half Ironman (triathlon L), totalise 70,3 miles : 1,9 km de natation, 90 km de vélo et 21,1 km de course à pied, soit un semi-marathon en dernière partie."
    },
    {
      "q": "Quelle distance de triathlon choisir pour débuter ?",
      "a": "Le format XS (400 m / 10 km / 2,5 km) pour une première expérience sans pression, ou le Sprint (750 m / 20 km / 5 km) qui reste accessible tout en offrant une vraie ambiance de course. Le temps d'entraînement disponible est le critère principal."
    },
    {
      "q": "Combien de temps dure un triathlon ?",
      "a": "Pour un amateur : environ 1h à 1h30 sur Sprint, 2h à 3h sur Olympique, 4h30 à 7h sur 70.3, et 9h à 16h sur Ironman. La durée dépend fortement du niveau et du parcours."
    }
  ],
  content: `
<nav>
  <h2>Sommaire</h2>
  <nav class="toc" aria-label="Sommaire"><ul>
    <li><a href="#tableau-distances">Distances officielles : le tableau comparatif</a></li>
    <li><a href="#xs">Triathlon XS (Découverte) : 400 m / 10 km / 2,5 km</a></li>
    <li><a href="#s">Triathlon S (Sprint) : 750 m / 20 km / 5 km</a></li>
    <li><a href="#distance-triathlon-olympique">Triathlon M (Olympique) : 1,5 km / 40 km / 10 km</a></li>
    <li><a href="#l">Triathlon L (Half Ironman / 70.3) : 1,9 km / 90 km / 21,1 km</a></li>
    <li><a href="#distance-ironman">Triathlon XXL (Ironman) : 3,8 km / 180 km / 42,2 km</a></li>
    <li><a href="#specifiques">Triathlon spécifiques : Super League, PTO, Extrême</a></li>
    <li><a href="#choisir-distance">Comment choisir sa distance de triathlon ?</a></li>
    <li><a href="#temps-moyens">Temps moyens par distance</a></li>
    <li><a href="#faq">FAQ : distances du triathlon</a></li>
  </ul></nav>
</nav>

<p>Le triathlon se décline en plusieurs formats, adaptés à tous les niveaux et objectifs. Que vous soyez débutant ou triathlète confirmé, ce guide vous aide à comprendre les différences entre chaque distance et à faire le bon choix pour votre prochaine course.</p>

<h2 id="tableau-distances">Distances officielles du triathlon : le tableau comparatif</h2>
<p id="essentiel"><strong>En résumé :</strong> le triathlon compte 5 formats officiels (natation / vélo / course à pied) : <strong>XS (Découverte)</strong> 400 m / 10 km / 2,5 km · <strong>Sprint (S)</strong> 750 m / 20 km / 5 km · <strong>Olympique (M)</strong> 1,5 km / 40 km / 10 km · <strong>70.3 / Half Ironman (L)</strong> 1,9 km / 90 km / 21,1 km · <strong>Ironman (XXL)</strong> 3,8 km / 180 km / 42,2 km, soit 226 km au total. Le tableau ci-dessous ajoute les prix indicatifs et les spécificités par format.</p>
<p>Guide à jour en 2026. Les distances peuvent varier légèrement selon les épreuves&nbsp;; les tarifs dépendent de la notoriété de la course, de la région et de la date d'inscription.</p>
<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Natation</th>
      <th>Vélo</th>
      <th>Course à pied</th>
      <th>Coût estimé</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XS (Découverte)</td>
      <td>400&nbsp;m</td>
      <td>10&nbsp;km</td>
      <td>2,5&nbsp;km</td>
      <td>20&nbsp;€ à 45&nbsp;€</td>
    </tr>
    <tr>
      <td>S (Sprint)</td>
      <td>750&nbsp;m</td>
      <td>20&nbsp;km</td>
      <td>5&nbsp;km</td>
      <td>30&nbsp;€ à 65&nbsp;€</td>
    </tr>
    <tr>
      <td>M (Olympique)</td>
      <td>1,5&nbsp;km</td>
      <td>40&nbsp;km</td>
      <td>10&nbsp;km</td>
      <td>50&nbsp;€ à 80&nbsp;€</td>
    </tr>
    <tr>
      <td>L (Half Ironman)</td>
      <td>1,9&nbsp;km</td>
      <td>90&nbsp;km</td>
      <td>21,1&nbsp;km</td>
      <td>100&nbsp;€ à 300&nbsp;€<br><span>(Half Ironman label : 350&nbsp;€ à 600&nbsp;€)</span></td>
    </tr>
    <tr>
      <td>XL (Ironman)</td>
      <td>3,8&nbsp;km</td>
      <td>180&nbsp;km</td>
      <td>42,2&nbsp;km</td>
      <td>150&nbsp;€ à 400&nbsp;€<br><span>(Ironman label : 500&nbsp;€ à 900&nbsp;€)</span></td>
    </tr>
  </tbody>
  </table>
</div>

<p>Remarque&nbsp;: Ce sont les distances officielles, mais certains triathlons proposent des formats spécifiques. Les prix sont des moyennes constatées en France en 2026 et peuvent varier selon la notoriété de l’épreuve, la région et la date d’inscription. Pour le <strong>budget matériel</strong> par distance, voir le <a href="/blog/budget-triathlon-2026-guide-ultime">guide budget triathlon 2026</a>.</p>

<h2 id="xs">Triathlon XS (Découverte) : 400 m natation, 10 km vélo, 2,5 km course</h2>
<p>Le triathlon XS (Super Sprint) est le format officiel le plus court, pensé pour rendre le triple effort accessible à tous. Les distances sont généralement comprises entre&nbsp;:</p>
<ul>
  <li>🏊 <strong>Natation :</strong> 250 à 400 m</li>
  <li>🚴 <strong>Vélo :</strong> 6 à 10 km</li>
  <li>🏃 <strong>Course à pied :</strong> 1,5 à 2,5 km</li>
  <li>🚦 <strong>Drafting :</strong> souvent autorisé (aspiration-abri possible, ambiance peloton)</li>
  <li>🚲 <strong>Vélo :</strong> tous types acceptés (route, VTC, VTT), vélo chrono généralement interdit</li>
  <li>🧢 <strong>Matériel :</strong> équipement simple : maillot, short ou trifonction, lunettes de natation, casque, chaussures de course. Pas de combinaison néoprène ni ravitaillement nécessaire.</li>
</ul>
<p>Ce format s’adresse particulièrement aux débutants, aux jeunes, ou à ceux qui souhaitent s’initier au triathlon dans une ambiance conviviale. La durée totale varie de 30 minutes à 1h10 selon le niveau, ce qui permet de découvrir les transitions et la gestion de l’effort sans pression excessive.</p>
<p>Le XS est idéal pour&nbsp;:</p>
<ul>
  <li>Vivre une première expérience positive</li>
  <li>Apprendre les bases du triathlon (transitions, enchaînement des disciplines)</li>
  <li>Progresser rapidement et prendre confiance</li>
</ul>
<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Avantages</th>
      <th>Inconvénients</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Format rapide et accessible</td>
      <td>Effort court mais parfois intense</td>
    </tr>
    <tr>
      <td>Faible charge physique</td>
      <td>Transitions très importantes pour le classement</td>
    </tr>
    <tr>
      <td>Coût réduit, matériel simple</td>
      <td>Ne développe pas l’endurance longue</td>
    </tr>
    <tr>
      <td>Ambiance conviviale, format motivant</td>
      <td>Peut frustrer les sportifs cherchant un défi plus long</td>
    </tr>
  </tbody>
</table></div>

<h2 id="s">Triathlon S (Sprint) : 750 m natation, 20 km vélo, 5 km course</h2>
<ul>
  <li>🏊 <strong>Natation :</strong> 750 m</li>
  <li>🚴 <strong>Vélo :</strong> 20 km</li>
  <li>🏃 <strong>Course à pied :</strong> 5 km</li>
  <li>🚦 <strong>Drafting :</strong> souvent autorisé (aspiration-abri possible en peloton)</li>
  <li>🚲 <strong>Vélo :</strong> vélo de route classique recommandé, vélo chrono généralement interdit</li>
  <li>🧢 <strong>Matériel :</strong> trifonction ou maillot/short, lunettes de natation, casque, chaussures de course. Ravitaillement facultatif, combinaison néoprène rarement utile sauf eau très froide.</li>
</ul>
<p>Le triathlon Sprint est le format le plus populaire pour débuter ou progresser rapidement. Accessible à tous, il permet de tester ses capacités sur des distances abordables, tout en découvrant l’intensité de la compétition. La durée varie généralement de 1h à 1h30 selon le niveau.</p>
<ul>
  <li>Format idéal pour une première course officielle</li>
  <li>Apprentissage des transitions en conditions réelles</li>
  <li>Intensité motivante pour progresser</li>
</ul>
<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Avantages</th>
      <th>Inconvénients</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Distances accessibles à tous</td>
      <td>Peut être très compétitif</td>
    </tr>
    <tr>
      <td>Format motivant et dynamique</td>
      <td>Transitions rapides à maîtriser</td>
    </tr>
    <tr>
      <td>Idéal pour progresser et s’entraîner</td>
      <td>Effort soutenu, peu de place à l’erreur</td>
    </tr>
  </tbody>
</table></div>

<h2 id="distance-triathlon-olympique">Triathlon M (Olympique) : 1,5 km natation, 40 km vélo, 10 km course</h2>
<ul>
  <li>🏊 <strong>Natation :</strong> 1,5 km</li>
  <li>🚴 <strong>Vélo :</strong> 40 km</li>
  <li>🏃 <strong>Course à pied :</strong> 10 km</li>
  <li>🚦 <strong>Drafting :</strong> autorisé sur la plupart des courses (peloton possible)</li>
  <li>🚲 <strong>Vélo :</strong> vélo de route classique obligatoire, vélo chrono interdit</li>
  <li>🧢 <strong>Matériel :</strong> trifonction, lunettes de natation, casque, chaussures de course. Ravitaillement conseillé sur le vélo, combinaison néoprène uniquement si eau froide.</li>
</ul>
<p>Le triathlon Olympique (M) est la distance officielle des Jeux Olympiques. Il séduit les sportifs en quête de challenge, alliant endurance et vitesse sur des distances exigeantes. La durée varie de 2h à 3h selon le niveau et le parcours.</p>
<ul>
  <li>Format reconnu internationalement</li>
  <li>Exige une préparation sérieuse</li>
  <li>Gestion de l’effort et des transitions sur la durée</li>
</ul>
<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Avantages</th>
      <th>Inconvénients</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Format officiel, challenge reconnu</td>
      <td>Demande une bonne préparation physique</td>
    </tr>
    <tr>
      <td>Équilibre entre vitesse et endurance</td>
      <td>Effort long, gestion de l’alimentation nécessaire</td>
    </tr>
    <tr>
      <td>Expérience enrichissante et format polyvalent</td>
      <td>Transitions plus complexes à gérer</td>
    </tr>
  </tbody>
</table></div>

<h2 id="l">Triathlon L (Half Ironman / 70.3) : 1,9 km natation, 90 km vélo, 21,1 km course</h2>
<ul>
  <li>🏊 <strong>Natation :</strong> 1,9 km</li>
  <li>🚴 <strong>Vélo :</strong> 90 km</li>
  <li>🏃 <strong>Course à pied :</strong> 21,1 km</li>
  <li>🚦 <strong>Drafting :</strong> interdit (règlement strict, pénalités en cas d’aspiration-abri)</li>
  <li>🚲 <strong>Vélo :</strong> vélo de route ou vélo chrono autorisé</li>
  <li>🧢 <strong>Matériel :</strong> trifonction, lunettes de natation, casque, chaussures de course, ravitaillement obligatoire sur le vélo et la course, matériel de réparation conseillé. Combinaison néoprène si eau froide.</li>
</ul>
<p>Le triathlon L (Half Ironman) est un format longue distance réservé aux triathlètes expérimentés. Il demande une gestion précise de l’effort et de la nutrition, sur des parcours souvent exigeants. La durée varie de 4h à 7h selon le niveau et les conditions.</p>
<ul>
  <li>Format longue distance, défi majeur</li>
  <li>Importance de la nutrition et de l’hydratation</li>
  <li>Gestion mentale et stratégie de course</li>
</ul>
<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Avantages</th>
      <th>Inconvénients</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Défi d’endurance et de gestion</td>
      <td>Préparation longue et exigeante</td>
    </tr>
    <tr>
      <td>Sensation d’accomplissement</td>
      <td>Risque de blessure ou de défaillance</td>
    </tr>
    <tr>
      <td>Format reconnu, ambiance unique</td>
      <td>Gestion complexe de la nutrition et du matériel</td>
    </tr>
  </tbody>
</table></div>

<h2 id="distance-ironman">Triathlon XXL (Ironman / 140.6) : 3,8 km natation, 180 km vélo, 42,2 km course</h2>
<ul>
  <li>🏊 <strong>Natation :</strong> 3,8 km</li>
  <li>🚴 <strong>Vélo :</strong> 180 km</li>
  <li>🏃 <strong>Course à pied :</strong> 42,2 km</li>
  <li>🚦 <strong>Drafting :</strong> interdit (règlement strict, pénalités immédiates)</li>
  <li>🚲 <strong>Vélo :</strong> vélo de route ou vélo chrono autorisé</li>
  <li>🧢 <strong>Matériel :</strong> trifonction, lunettes de natation, casque, chaussures de course, ravitaillement obligatoire, matériel de réparation et d’urgence conseillé. Combinaison néoprène si eau froide.</li>
</ul>
<p>L’Ironman est la distance reine du triathlon. Ce format extrême est réservé aux passionnés d’ultra-endurance, et demande une préparation physique et mentale hors norme. La durée varie de 8h à plus de 16h selon le niveau et les conditions.</p>
<ul>
  <li>Accomplissement sportif majeur</li>
  <li>Gestion mentale et stratégie sur la journée</li>
  <li>Ambiance internationale et prestige de l’épreuve</li>
</ul>
<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Avantages</th>
      <th>Inconvénients</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Défi ultime, prestige et reconnaissance</td>
      <td>Préparation très longue et coûteuse</td>
    </tr>
    <tr>
      <td>Expérience inoubliable et dépassement de soi</td>
      <td>Risque de blessure, fatigue extrême</td>
    </tr>
    <tr>
      <td>Ambiance internationale, communauté forte</td>
      <td>Gestion complexe du matériel et de la nutrition</td>
    </tr>
  </tbody>
</table></div>

<h2 id="specifiques">Triathlon spécifiques : Super League, PTO, Extrême</h2>
<p>En marge des formats traditionnels (XS à XXL), certains circuits ou événements ont développé des formats uniques, plus spectaculaires, plus intenses ou plus extrêmes. Ces formats spécifiques attirent des profils variés : amateurs de sensations fortes, fans de stratégie, ou triathlètes en quête de dépassement absolu. Voici les principaux à connaître :</p>

<h3>🟨 Super League Triathlon : le show avant tout</h3>
<p>La <strong>Super League Triathlon (SLT)</strong> révolutionne le format classique avec des courses ultra-courtes, intenses et spectaculaires. Les distances sont réduites (souvent 300 m natation / 4 km vélo / 1,6 km course), mais les formats sont variés : enchaînements multiples, départs inversés, éliminations en direct… Le tout dans un cadre urbain, avec des transitions ultra-rapides et une forte dimension tactique. C’est le format préféré des spectateurs et des triathlètes explosifs.<br>
<em>Source : <a href="https://superleaguetriathlon.com/" target="_blank" rel="noopener noreferrer">superleaguetriathlon.com</a></em></p>

<h3>🟦 PTO (100 km) : l’intensité du long, sans l’usure</h3>
<p>Le circuit <strong>PTO (Professional Triathletes Organisation)</strong> a introduit un format standardisé de 100 km : 2 km de natation, 80 km de vélo, 18 km de course. Pensé pour la haute intensité, il combine la stratégie du long avec la vitesse du format M. Ce format vise à rendre le triathlon longue distance plus lisible, plus compétitif et plus attractif pour les pros comme pour les spectateurs. Il gagne en popularité sur les grandes scènes internationales.</p>
<p><strong>Exemple&nbsp;: PTO T100 Triathlon World Tour – Nice</strong><br>
L’épreuve T100 de Nice, organisée en 2024, a réuni l’élite mondiale sur la Promenade des Anglais. Le parcours, composé de 2 km de natation en mer Méditerranée, 80 km de vélo vallonné dans l’arrière-pays niçois, et 18 km de course à pied sur le front de mer, a offert un spectacle intense et stratégique. Ce format met en avant la polyvalence et la gestion de l’effort, tout en restant très accessible à suivre pour le public.<br>

<em>Source&nbsp;: <a href="https://t100triathlon.com/races/nice/" target="_blank" rel="noopener noreferrer">t100triathlon.com/races/nice</a></em>
</p>
<div>
  <img src="/blog/img/t100.webp" alt="PTO T100 Triathlon World Tour Nice" class="content-img" loading="lazy">
  <div>PTO T100 Triathlon World Tour – Qatar</div>
</div>

<h3>⛰️ Formats extrêmes : repousser les limites</h3>
<p>Certains triathlons sortent complètement des standards pour proposer des expériences hors normes. On parle ici de formats extrêmes :</p>
<ul>
  <li><strong>Embrunman</strong> : 3,8 / 188 / 42 avec le col de l’Izoard (<a href="https://www.embrunman.com/" target="_blank" rel="noopener noreferrer">embrunman.com</a>)</li>
  <li><strong>Norseman</strong> : parcours en Norvège avec eau glacée et marathon en montagne (<a href="https://nxtri.com/" target="_blank" rel="noopener noreferrer">nxtri.com</a>)</li>
  <li><strong>Alpe d’Huez</strong> : triathlon avec les 21 lacets mythiques du Tour de France (<a href="https://www.alpetriathlon.com/" target="_blank" rel="noopener noreferrer">alpetriathlon.com</a>)</li>
  <li><strong>Swissman, Celtman, Patagonman…</strong> : formats Ironman dans des environnements sauvages</li>
</ul>
<p>Ces épreuves demandent une préparation physique et mentale exceptionnelle. Elles attirent les triathlètes expérimentés en quête d’aventure, de solitude et de dépassement total.<br>
<em>Sources : sites officiels de chaque épreuve</em></p>

<h2 id="choisir-distance">Comment choisir sa distance de triathlon&nbsp;?</h2>
<p>Le choix dépend surtout du <strong>temps d'entraînement</strong> dont tu disposes chaque semaine, puis de ton <strong>expérience</strong> et de ton <strong>budget course</strong>. Si tu débutes, notre <a href="/blog/debuter-triathlon-guide-complet">guide complet pour débuter le triathlon</a> t'aide à cadrer ton premier objectif.</p>
<p><strong>Repère rapide selon ton volume hebdomadaire :</strong></p>
<ul>
  <li><strong>Moins de 3h/semaine</strong> → Triathlon XS, ou Sprint (S) si tu as déjà une base d'endurance</li>
  <li><strong>3 à 5h</strong> → Sprint (S) ; Olympique (M) avec un peu d'expérience</li>
  <li><strong>5 à 7h</strong> → Olympique (M) ; 70.3 (L) sur un objectif « finir »</li>
  <li><strong>7 à 10h</strong> → 70.3 (L) ; Ironman (XXL) pour les confirmés</li>
  <li><strong>Plus de 10h</strong> → 70.3 (L) ou Ironman (XXL) selon l'expérience</li>
</ul>
<p>Le temps d'entraînement est le critère n°1, l'expérience et le budget affinent. Le simulateur ci-dessous croise les trois et te renvoie un format précis.</p>

<p>👇 Réponds à 3 questions pour ton format conseillé.</p>

<!--QUIZ-->

<!--COACHING-->

<h2 id="temps-moyens">Temps moyens par distance</h2>
<p>Temps médian d'un amateur (arrivée, transitions comprises) : <strong>~1h35</strong> sur Sprint, <strong>~2h50</strong> sur Olympique, <strong>5h52</strong> sur 70.3, <strong>12h23</strong> sur Ironman. Ces temps varient fortement selon le niveau, l'âge, le parcours et la météo.</p>
<p>➡️ Détail complet : <a href="/blog/temps-moyen-triathlon-distance-niveau-age">temps moyen sur un triathlon par distance, par niveau et par tranche d'âge</a>, avec les fourchettes débutant / confirmé, les taux d'abandon et les repères élites.</p>

<h2 id="faq">FAQ : distances du triathlon</h2>

<!--FAQ-->
`,
};
