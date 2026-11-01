import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "budget-triathlon-2026-guide-ultime",
  title: "Quel budget pour le triathlon en 2026 ? Sprint, Olympique, 70.3, Ironman",
  seoTitle: "Budget triathlon 2026 : du Sprint à l'Ironman",
  description: "Sprint ~800€, Olympique ~1 100€, 70.3 ~1 500€, Ironman ~2 800€. Kit complet par distance : indispensables, conseillés, upgrades — et stratégie d'achat.",
  keywords: ["budget triathlon 2026","coût triathlon","équipement triathlon prix","budget ironman","prix triathlon sprint","combien coûte un triathlon","matériel triathlon débutant","budget 70.3","stratégie équipement triathlon"],
  date: "2026-03-06",
  dateModified: "2026-11-01",
  category: "Matériel",
  image: "/demo/blog/budget.jpg",
  coaching: {
    title: "Le matériel ne fait pas le chrono, l'entraînement oui",
    text: "Un vrai coach construit ta préparation autour de ta distance, de ton temps disponible et de ton niveau, puis l'ajuste chaque semaine.",
  },
  faq: [
    {
      "q": "Quel budget prévoir pour son premier triathlon ?",
      "a": "Compte environ 600 € en budget serré et 1 500 € en budget confort pour un format XS ou Sprint, matériel uniquement (hors inscription, licence et déplacements). L'essentiel : lunettes, bonnet, maillot, casque, chaussures de running et un vélo d'occasion."
    },
    {
      "q": "Combien coûte l'équipement pour un Ironman ?",
      "a": "De 3 500 € en budget serré à 8 000 € et plus en budget confort. L'écart se joue surtout sur le vélo, les roues, le capteur de puissance et la montre triathlon."
    },
    {
      "q": "Peut-on faire un triathlon avec un VTT ou un vélo hybride ?",
      "a": "Oui sur un format XS ou Sprint, un VTT ou un hybride en bon état suffit. À partir de l'Olympique (40 km de vélo et plus), un vélo de route devient nécessaire car le VTT est trop pénalisant."
    },
    {
      "q": "La combinaison néoprène est-elle obligatoire en triathlon ?",
      "a": "Elle est autorisée quand l'eau est sous 22 °C et obligatoire sous 16 °C. Elle devient vraiment rentable dès le format Olympique : 3 à 5 minutes gagnées sur 1,5 km grâce à la flottaison et au gain thermique."
    },
    {
      "q": "Vaut-il mieux acheter son matériel neuf ou d'occasion ?",
      "a": "Si tu comptes utiliser le matériel moins de deux saisons, l'occasion ou la location sont presque toujours plus rentables. Le marché de l'occasion en triathlon est sain car beaucoup de pratiquants revendent régulièrement pour upgrader."
    },
    {
      "q": "Quel est le meilleur moment de l'année pour s'équiper ?",
      "a": "Septembre-octobre pour les vélos et les roues (fin de saison, soldes) et le Black Friday en novembre pour l'électronique : montres GPS, capteurs, home trainers. À éviter : avril-mai, quand la demande repart et les prix remontent."
    },
    {
      "q": "Faut-il un capteur de puissance pour débuter le triathlon ?",
      "a": "Non. C'est un achat fortement conseillé seulement à partir du 70.3, pour piloter l'effort sur 90 km de vélo. En Sprint et Olympique, une montre GPS avec fréquence cardiaque suffit largement."
    }
  ],
  content: `
<p>La règle des 80/20 s'applique brutalement en triathlon : <strong>80% de votre performance vient de l'entraînement, du sommeil et de la régularité</strong>. Le matériel fait les 20% restants, et encore, seulement à partir d'un certain niveau. Ce guide met le matériel à sa vraie place.</p>

<nav>
  <p>Sommaire</p>
  <ul>
    <li>🚀 <a href="#sprint">Sprint : le kit complet</a></li>
    <li>🎯 <a href="#olympique">Olympique : le kit complet</a></li>
    <li>💪 <a href="#703">70.3 : le kit complet</a></li>
    <li>🏆 <a href="#ironman">Ironman 140.6 : le kit complet</a></li>
    <li>🛒 <a href="#liste-courses-triathlon">Liste de courses complète</a></li>
    <li>👁️ <a href="#frais-invisibles">Les frais invisibles</a></li>
    <li>📊 <a href="#materiel-vs-entrainement">Matériel vs Entraînement</a></li>
    <li>💡 <a href="#strategie-achat">Stratégie d'achat 2026</a></li>
    <li>❓ <a href="#faq">FAQ</a></li>
  </ul>
</nav>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Distance</th>
        <th>Budget serré</th>
        <th>Budget confort</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>🚀 XS / Sprint</td>
        <td>~600€</td>
        <td>~1 500€</td>
      </tr>
      <tr>
        <td>🎯 Olympique</td>
        <td>~1 000€</td>
        <td>~2 500€</td>
      </tr>
      <tr>
        <td>💪 70.3</td>
        <td>~2 000€</td>
        <td>~4 500€</td>
      </tr>
      <tr>
        <td>🏆 Ironman 140.6</td>
        <td>~3 500€</td>
        <td>~8 000€+</td>
      </tr>
    </tbody>
  </table>
  <p>*Budget matériel uniquement, hors inscription, licence et déplacements.</p>
</div>

<p>Chaque section ci-dessous est <strong>autonome</strong> : allez directement à votre distance cible. Tout est classé en trois niveaux, indispensable, fortement conseillé, upgrade.</p>

<h2 id="sprint">🚀 Sprint &amp; XS : le kit complet</h2>

<p>750m de nage, 20km de vélo, 5km de run. Le format idéal pour débuter : accessible financièrement, et physiquement réalisable avec 3 mois de préparation sérieuse. Un VTT ou vélo hybride est autorisé, mais si vous comptez progresser, autant partir sur du bon matériel dès le départ.</p>

<div class="cards">
  <div class="box">
    <p>Budget serré</p>
    <p>~800€</p>
    <p>vélo d'occasion (300€) + accessoires + montre + trifonction</p>
    <p>215€ accessoires + 300€ vélo + 100€ montre + 80€ trifonction + 100€ cales</p>
  </div>
  <div class="info">
    <p>Budget confort</p>
    <p>~1 800€</p>
    <p>vélo route neuf + montre GPS + full équipement</p>
  </div>
</div>

<div class="row">
  <span>🔴 Indispensables</span>
  <span>Minimum pour l'entrainement/Jour J</span>
</div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="bad">Équipement</th>
        <th class="bad">Budget serré</th>
        <th class="bad">Budget normal</th>
        <th class="bad">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🏊 Lunettes de natation</td><td>15€</td><td>25€</td><td>2 paires : miroir (eau libre) + transparentes (bassin)</td></tr>
      <tr><td>🏊 Maillot</td><td>15€</td><td>30€</td><td>D'une marque reconnue pour la résistance au chlore</td></tr>
      <tr><td>🏊 Bonnet silicone fluo</td><td>5€</td><td>10€</td><td>Rouge ou vert, visible pour les bateaux</td></tr>
      <tr><td>🏊 Bouée de sécurité</td><td>25€</td><td>40€</td><td>Recommandé en eau libre</td></tr>
      <tr><td>🚴 Vélo</td><td>0–1000€</td><td>1000-4000€</td><td>VTT/hybride accepté en Sprint. Route dès que tu progresses</td></tr>
      <tr><td>🚴 Casque vélo</td><td>30€</td><td>80€</td><td>Blanc de préférence (thermique). Obligatoire en course</td></tr>
      <tr><td>🚴 Kit mécanique</td><td>25€</td><td>50€</td><td>2 chambres à air + démonte-pneu + mini-pompe</td></tr>
      <tr><td>🏃 Chaussures de running</td><td>80€</td><td>120€</td><td>Test de foulée en magasin spécialisé, ne pas négliger</td></tr>
      <tr><td>🏃 Ceinture porte-dossard</td><td>5€</td><td>8€</td><td>Se retourne du vélo vers le devant pour le run</td></tr>
      <tr><td>🚴 Bidon vélo</td><td>5€</td><td>10€</td><td>Indispensable à l'entraînement, utile en course même sur 20km</td></tr>
      <tr><td>🚴 Lunettes de vélo</td><td>10€</td><td>40€</td><td>Protection contre le vent, poussière et insectes, sécurité</td></tr>
    </tbody>
  </table>
</div>
<div class="row">
  <span>🟡 Fortement conseillés</span>
  <span>Ça change vraiment la préparation</span>
</div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="mid">Équipement</th>
        <th class="mid">Budget serré</th>
        <th class="mid">Budget normal</th>
        <th class="mid">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>⌚ Montre GPS</td><td>100€</td><td>150–400€</td><td>Indispensable pour suivre un plan à l'entraînement</td></tr>
      <tr><td>🩱 Trifonction</td><td>80€</td><td>150–250€</td><td>1 vêtement pour les 3 sports, transitions plus rapides</td></tr>
      <tr><td>🚴 Cales vélo + chaussures</td><td>100-130€</td><td>130–200€</td><td>+5 à 10% de puissance transmise, rentable dès le Sprint</td></tr>
    </tbody>
  </table>
</div>

<h2 id="olympique">🎯 Olympique : le kit complet</h2>

<p>1,5km de nage, 40km de vélo, 10km de run. C'est ici que la fatigue cumulée des trois disciplines commence à se faire vraiment sentir. La combinaison néoprène devient un achat très recommandé (3 à 5 min gagnées sur 1,5km). La montre GPS passe du statut "optionnel" à "indispensable", piloter ses zones de fréquence cardiaque change tout.</p>

<div class="cards">
  <div class="box">
    <p>Budget serré</p>
    <p>~1 100€</p>
    <p>vélo occasion + combi néoprène + home trainer entrée</p>
    <p>810€ indispensables + 120€ combi + 150€ home trainer</p>
  </div>
  <div class="info">
    <p>Budget confort</p>
    <p>~2 500€</p>
    <p>vélo route neuf + combi + montre + home trainer smart</p>
  </div>
</div>

<div class="row">
  <span>🔴 Indispensables</span>
  <span>Sans ça, tu ne termines pas</span>
</div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="bad">Équipement</th>
        <th class="bad">Serré</th>
        <th class="bad">Normal</th>
        <th class="bad">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🏊 Lunettes de natation</td><td>15€</td><td>25€</td><td>2 paires : miroir eau libre + transparentes bassin</td></tr>
      <tr><td>🏊 Maillot</td><td>15€</td><td>30€</td><td>D'une marque reconnue pour la résistance au chlore</td></tr>
      <tr><td>🏊 Bonnet silicone fluo</td><td>5€</td><td>10€</td><td>Rouge ou vert, visible pour les bateaux</td></tr>
      <tr><td>🏊 Bouée de sécurité</td><td>25€</td><td>40€</td><td>Sécurité en eau libre, non négociable</td></tr>
      <tr><td>🩱 Trifonction</td><td>60€</td><td>250€</td><td>1 vêtement pour les 3 sports, transitions plus rapides</td></tr>
      <tr><td>🚴 Vélo de route</td><td>300€</td><td>900€</td><td>VTT accepté mais pénalisant sur 40km</td></tr>
      <tr><td>🚴 Casque vélo</td><td>30€</td><td>80€</td><td>Blanc de préférence (thermique). Obligatoire en course</td></tr>
      <tr><td>🚴 Pédales clipless</td><td>25€</td><td>60€</td><td>+5 à 10% de puissance transmise vs pédales plates</td></tr>
      <tr><td>🚴 Chaussures à cales</td><td>60€</td><td>150€</td><td>Serrage BOA pour transitions rapides</td></tr>
      <tr><td>🚴 Kit mécanique</td><td>25€</td><td>50€</td><td>2 chambres à air + démonte-pneu + mini-pompe</td></tr>
      <tr><td>🚴 Bidon vélo</td><td>5€</td><td>15€</td><td>Indispensable à l'entraînement, utile en course même sur 40km</td></tr>
      <tr><td>🚴 Lunettes de vélo</td><td>10€</td><td>30€</td><td>Protection vent, poussière et insectes, sécurité</td></tr>
      <tr><td>🏃 Chaussures de running</td><td>80€</td><td>120€</td><td>Test de foulée en magasin spécialisé, ne pas négliger</td></tr>
      <tr><td>🏃 Ceinture porte-dossard</td><td>5€</td><td>8€</td><td>Se retourne du vélo vers le devant pour le run</td></tr>
      <tr><td>⌚ Montre GPS</td><td>150€</td><td>250€</td><td>Piloter les zones FC sur 10km de run, devient indispensable ici</td></tr>
    </tbody>
  </table>
</div>

<div class="row">
  <span>🟡 Fortement conseillés</span>
  <span>Ça change vraiment la préparation</span>
</div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="mid">Équipement</th>
        <th class="mid">Budget serré</th>
        <th class="mid">Budget normal</th>
        <th class="mid">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🏊 Combinaison néoprène</td><td>120€</td><td>260€</td><td>+3 à 5 min sur 1,5km. Autorisée &lt;22°C, obligatoire &lt;16°C</td></tr>
      <tr><td>🚴 Home trainer</td><td>150€</td><td>500€</td><td>Sessions indoor par mauvais temps, accumulation volume</td></tr>
      <tr><td>🍌 Nutrition testée</td><td>30€/mois</td><td>60€/mois</td><td>Gels, boisson isotonique, à tester à l'entraînement, jamais le J</td></tr>
    </tbody>
  </table>
</div>

<h2 id="703">💪 70.3 : le kit complet</h2>

<p>1,9km de nage, 90km de vélo, 21km de run. Entre 4 et 6 heures d'effort. À ce niveau, les petits inconforts deviennent des douleurs, les mauvais choix d'équipement ruinent une préparation de plusieurs mois. La combinaison néoprène n'est plus optionnelle. Le home trainer non plus, accumuler du volume par mauvais temps, c'est ce qui fait la différence.</p>

<div class="cards">
  <div class="box">
    <p>Budget serré</p>
    <p>~1 500€</p>
    <p>vélo occasion + combi + home trainer + capteur puissance entrée</p>
    <p>975€ indispensables + 90€ nutrition (3 mois) + 150€ home trainer + 200€ capteur</p>
  </div>
  <div class="info">
    <p>Budget confort</p>
    <p>~4 500€</p>
    <p>vélo neuf + smart trainer + capteur puissance + montre tri</p>
  </div>
</div>

<div class="row">
  <span>🔴 Indispensables</span>
  <span>Sans ça, tu souffres ou tu n'arrives pas</span>
</div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="bad">Équipement</th>
        <th class="bad">Serré</th>
        <th class="bad">Normal</th>
        <th class="bad">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🏊 Lunettes de natation</td><td>15€</td><td>25€</td><td>2 paires : miroir eau libre + transparentes bassin</td></tr>
      <tr><td>🏊 Maillot</td><td>15€</td><td>30€</td><td>D'une marque reconnue pour la résistance au chlore</td></tr>
      <tr><td>🏊 Bonnet silicone fluo</td><td>5€</td><td>10€</td><td>Rouge ou vert, visible pour les bateaux</td></tr>
      <tr><td>🏊 Bouée de sécurité</td><td>25€</td><td>40€</td><td>Sécurité en eau libre, non négociable</td></tr>
      <tr><td>🏊 Combinaison néoprène</td><td>120€</td><td>300€</td><td>1,9km en eau froide sans combi, ça se paie, gain flottaison + thermique</td></tr>
      <tr><td>🩱 Trifonction</td><td>60€</td><td>250€</td><td>1 vêtement pour les 3 sports, transitions plus rapides</td></tr>
      <tr><td>🚴 Vélo de route</td><td>300€</td><td>900€</td><td>Route obligatoire sur 90km</td></tr>
      <tr><td>🚴 Casque vélo</td><td>30€</td><td>80€</td><td>Blanc de préférence (thermique). Obligatoire en course</td></tr>
      <tr><td>🚴 Pédales clipless</td><td>25€</td><td>60€</td><td>+5 à 10% de puissance transmise vs pédales plates</td></tr>
      <tr><td>🚴 Chaussures à cales</td><td>60€</td><td>150€</td><td>Serrage BOA pour transitions rapides</td></tr>
      <tr><td>🚴 Prolongateurs aéro</td><td>40€</td><td>100€</td><td>Position TT, gain 4 à 8 min sur 90km</td></tr>
      <tr><td>🚴 Kit mécanique</td><td>25€</td><td>50€</td><td>2 chambres à air + démonte-pneu + mini-pompe</td></tr>
      <tr><td>🚴 Bidon vélo</td><td>5€</td><td>15€</td><td>Indispensable à l'entraînement, utile en course même sur 90km</td></tr>
      <tr><td>🚴 Lunettes de vélo</td><td>10€</td><td>30€</td><td>Protection vent, poussière et insectes, sécurité</td></tr>
      <tr><td>🏃 Chaussures de running</td><td>80€</td><td>120€</td><td>Test de foulée en magasin spécialisé, ne pas négliger</td></tr>
      <tr><td>🏃 Ceinture porte-dossard</td><td>5€</td><td>8€</td><td>Se retourne du vélo vers le devant pour le run</td></tr>
      <tr><td>⌚ Montre GPS</td><td>150€</td><td>250€</td><td>FC, allure, distance, piloter les 4 à 6h d'effort</td></tr>
      <tr><td>🍌 Nutrition testée</td><td>30€/mois</td><td>80€/mois</td><td>Gels, barres, boisson, testez à l'entraînement, jamais le jour J</td></tr>
      <tr><td>🧴 Crème anti-frottement</td><td>5€</td><td>15€</td><td>Vaseline ou Bodyglide, sous les bras, cuisses, cou sous la combi</td></tr>
    </tbody>
  </table>
</div>

<div class="row">
  <span>🟡 Fortement conseillés</span>
  <span>Ça change vraiment la préparation</span>
</div>
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="mid">Équipement</th>
        <th class="mid">Budget serré</th>
        <th class="mid">Budget normal</th>
        <th class="mid">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🚴 Home trainer</td><td>150€</td><td>500€</td><td>Accumulation volume par mauvais temps, clé sur une prépa de 4 à 6 mois</td></tr>
      <tr><td>⚡ Capteur de puissance</td><td>200€</td><td>400€</td><td>Piloter les watts sur 90km, plus fiable que la FC</td></tr>
      <tr><td>⌚ Montre triathlon</td><td>300€</td><td>600€</td><td>Mode triathlon natif, enchaîne les sports automatiquement</td></tr>
      <tr><td>🚴 Vélo chrono</td><td>1 500€</td><td>4 000€</td><td>Position TT dédiée, gain réel sur 90km si tu enchaînes les 70.3</td></tr>
    </tbody>
  </table>
</div>

<h2 id="ironman">🏆 Ironman 140.6 : le kit complet</h2>

<p>3,8km de nage, 180km de vélo, 42km de run. Entre 9 et 16 heures d'effort. L'Ironman, c'est un autre sport. Chaque choix d'équipement prend une dimension nouvelle, et les postes que les débutants sous-estiment le plus, ce sont la nutrition et la maintenance. Sur une prépa de 6 à 9 mois, vous allez user une chaîne, deux paires de chaussures de running et consommer des centaines d'euros en nutrition.</p>

<div class="cards">
  <div class="box">
    <p>Budget serré</p>
    <p>~2 800€</p>
    <p>vélo chrono occasion + home trainer + capteur + bike fit</p>
    <p>2 040€ indispensables (dont 300€ nutrition 6 mois) + 300€ home trainer + 250€ capteur + 150€ bike fit</p>
  </div>
  <div class="info">
    <p>Budget confort</p>
    <p>~8 000€+</p>
    <p>vélo TT neuf, roues carbone, capteur puissance, montre tri</p>
  </div>
</div>

<div class="row">
  <span>🔴 Indispensables</span>
  <span>Sans ça, tu ne termines pas ou tu te blesses</span>
</div>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="bad">Équipement</th>
        <th class="bad">Serré</th>
        <th class="bad">Normal</th>
        <th class="bad">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🏊 Lunettes de natation</td><td>15€</td><td>25€</td><td>2 paires : miroir eau libre + transparentes bassin</td></tr>
      <tr><td>🏊 Maillot</td><td>15€</td><td>30€</td><td>D'une marque reconnue pour la résistance au chlore</td></tr>
      <tr><td>🏊 Bonnet silicone fluo</td><td>5€</td><td>10€</td><td>Rouge ou vert, visible pour les bateaux</td></tr>
      <tr><td>🏊 Bouée de sécurité</td><td>25€</td><td>40€</td><td>Sécurité en eau libre, non négociable</td></tr>
      <tr><td>🏊 Combinaison néoprène combo</td><td>200€</td><td>400€</td><td>Combo haut de gamme recommandée sur 3,8km, flottaison + thermique essentiels</td></tr>
      <tr><td>🩱 Trifonction</td><td>60€</td><td>250€</td><td>Testée plusieurs fois sur des bricks longs avant le jour J</td></tr>
      <tr><td>🚴 Vélo chrono</td><td>800€</td><td>3 000€</td><td>Position TT dédiée, indispensable sur 180km</td></tr>
      <tr><td>🚴 Casque vélo</td><td>30€</td><td>80€</td><td>Blanc de préférence (thermique). Obligatoire en course</td></tr>
      <tr><td>🚴 Pédales clipless</td><td>25€</td><td>60€</td><td>+5 à 10% de puissance transmise vs pédales plates</td></tr>
      <tr><td>🚴 Chaussures à cales</td><td>60€</td><td>150€</td><td>Serrage BOA pour transitions rapides</td></tr>
      <tr><td>🚴 Kit mécanique</td><td>30€</td><td>60€</td><td>2 chambres à air + CO2 + démonte-pneu, panne à 150km du départ, ça arrive</td></tr>
      <tr><td>🥤 Gourde aéro pour le cockpit</td><td>25€</td><td>60€</td><td>Boire sans lâcher le guidon sur 180km, obligatoire pour la gestion hydrique</td></tr>
      <tr><td>🚴 Lunettes de vélo</td><td>10€</td><td>30€</td><td>Protection vent, poussière et insectes, sécurité</td></tr>
      <tr><td>📱 Compteur GPS vélo</td><td>100€</td><td>350€</td><td>Garmin Edge ou équivalent, navigation + affichage puissance sur 180km</td></tr>
      <tr><td>🏃 Chaussures de running (x2 paires)</td><td>120€</td><td>240€</td><td>Rotation 2 paires pour la prépa, test de foulée en magasin spécialisé</td></tr>
      <tr><td>🏃 Ceinture porte-dossard</td><td>5€</td><td>8€</td><td>Se retourne du vélo vers le devant pour le run</td></tr>
      <tr><td>⌚ Montre GPS multisport avancée</td><td>150€</td><td>600€</td><td>Batterie longue durée, doit tenir 16h</td></tr>
      <tr><td>🔩 Maintenance prépa (chaîne, pneus)</td><td>60€</td><td>150€</td><td>Chaîne tous les 3 000km, pneu arrière tous les 3 000km</td></tr>
      <tr><td>🍌 Nutrition testée</td><td>50€/mois</td><td>150€/mois</td><td>Gels, barres, solide, testez sur sorties 5h+ avant la course, jamais le jour J</td></tr>
      <tr><td>🧴 Crème anti-frottement</td><td>5€</td><td>15€</td><td>Vaseline ou Bodyglide, cuisses, aisselles, cou sous la combi</td></tr>
    </tbody>
  </table>
</div>

<div class="warn">
  <strong>La règle des 2x :</strong> Pour un Ironman, doublez mentalement le prix de l'inscription pour estimer le coût total réel de la course (transport + hébergement + logistique + bike box si déplacement loin).
</div>

<div class="row">
  <span>🟡 Fortement conseillés</span>
  <span>Ça change vraiment la préparation</span>
</div>
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="mid">Équipement</th>
        <th class="mid">Budget serré</th>
        <th class="mid">Budget normal</th>
        <th class="mid">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>🚴 Home trainer smart</td><td>300€</td><td>600€</td><td>Accumuler le volume sur 6 à 9 mois de prépa malgré la météo</td></tr>
      <tr><td>⚡ Capteur de puissance</td><td>250€</td><td>500€</td><td>Piloter les watts sur 180km, la FC est trop lente pour éviter d'exploser</td></tr>
      <tr><td>🔧 Bike fit professionnel</td><td>150€</td><td>200€</td><td>Chaque degré compte sur 180km, douleurs hanche/genou évitées</td></tr>
     </tbody>
  </table>
</div>

<h2 id="liste-courses-triathlon">🛒 Liste de courses complète : récapitulatif 2026</h2>

<p>Tous les produits mentionnés dans ce guide, regroupés par discipline. Liens affiliés, petite commission sans surcoût pour vous.</p>

<div class="info">
  <p>🏊 Natation</p>
  <div class="cards">
    <a href="https://link.amazon/B0bhCYUpf" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/61IIBmbGv8L._AC_SL1500_.jpg" alt="Arena Air Speed Mirror" class="product-img" loading="lazy">
        <p>Arena Air Speed Mirror</p>
        <p>Eau libre, anti-buée</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0jfOEjdR" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51e-u3BAvML._AC_SL1500_.jpg" alt="Bonnet Arena silicone" class="product-img" loading="lazy">
        <p>Bonnet Arena silicone</p>
        <p>Fluo, visible en eau libre</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B07UdrLrb" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51SNgy+6y6L._AC_SL1200_.jpg" alt="Bouée de natation" class="product-img" loading="lazy">
        <p>Bouée eau libre</p>
        <p>Sécurité + repérage</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0aVxYbcI" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/31DUyD7WjxL._AC_SR38,50_.jpg" alt="Maillot de bain homme" class="product-img" loading="lazy">
        <p>Maillot natation homme</p>
        <p>Compétition / entraînement</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B07BgBX22" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51Tc0O4DpBL._AC_SX679_.jpg" alt="Maillot de bain femme" class="product-img" loading="lazy">
        <p>Maillot natation femme</p>
        <p>Compétition / entraînement</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="info">
  <p>🩱 Trifonction</p>
  <div class="cards">
    <a href="https://www.z3r0d.com/fr/produits/produit-ttsuit-racer-homme-2319.html" rel="noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://www.z3r0d.com/produits/photos/zoom/ttsuitracerhomme-2-20230623120408.jpg" alt="Z3R0D TTSuit Racer homme" class="product-img" loading="lazy">
        <p>Z3R0D TTSuit Racer homme</p>
        <p>Nage → vélo → run sans changer</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://www.z3r0d.com/fr/produits/produit-ttsuit-racer-femme-2328.html" rel="noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://www.z3r0d.com/produits/photos/norm/ttsuitracerfemme-2-20230623115821.jpg" alt="Z3R0D TTSuit Racer femme" class="product-img" loading="lazy">
        <p>Z3R0D TTSuit Racer femme</p>
        <p>Nage → vélo → run sans changer</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="info">
  <p>🚴 Vélos</p>
  <div class="cards">
    <a href="https://www.decathlon.be/fr/p/velo-route-endurance-microshift-sword-2x10v-edr-af-gris-fonce/343660/c383m8771991" target="_blank" rel="noopener noreferrer">
      <div class="product">
        <img src="https://contents.mediadecathlon.com/p2920298/k$251dcbf08196bab41628242025dc206b/picture.jpg" alt="Van Rysel Microshift Sword 2x10v" class="product-img" loading="lazy">
        <p>Van Rysel Sword 2x10v</p>
        <p>Meilleur rapport Q/P entrée gamme</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://www.canyon.com/fr-fr/velos-de-route/velos-endurance/endurace/cf/endurace-cf-7-ltd/4375.html" target="_blank" rel="noopener noreferrer">
      <div class="product">
        <img src="https://dma.canyon.com/image/upload/w_1100,c_fit/b_rgb:F2F2F2/f_auto/q_auto/v1751271533/2026_FULL_endurace_cf-7-ltd_4375_R076_P09_pzhh2o" alt="Canyon Endurace CF7 LTD" class="product-img" loading="lazy">
        <p>Canyon Endurace CF7 LTD</p>
        <p>Carbone, milieu de gamme</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://www.canyon.com/nl-be/racefietsen/triathlon-fietsen/speedmax/cf/speedmax-cf-7-di2-race/4137.html" target="_blank" rel="noopener noreferrer">
      <div class="product">
        <img src="https://dma.canyon.com/image/upload/w_1100,c_fit/b_rgb:F2F2F2/f_auto/q_auto/v1754289490/2026_FULL_speedmax_cf-7-di2-race_4137_R073_P11_nutrab" alt="Canyon Speedmax CF7 Di2" class="product-img" loading="lazy">
        <p>Canyon Speedmax CF7 Di2</p>
        <p>Vélo chrono, position TT</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="info">
  <p>🚴 Accessoires vélo</p>
  <div class="cards">
    <a href="https://link.amazon/B0c3fX1wy" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/712tk7-JZsL._AC_SX679_.jpg" alt="Casque Abus Macator" class="product-img" loading="lazy">
        <p>Casque Abus Macator</p>
        <p>Léger, bien ventilé, blanc</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B09EPqZRL" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51hySP8TlsL._AC_SY695_.jpg" alt="Chaussures vélo BOA" class="product-img" loading="lazy">
        <p>Chaussures vélo BOA</p>
        <p>Serrage rapide, transitions</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0azbCMSl" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/71e3jt74RzL._AC_SX679_.jpg" alt="Cuissard vélo" class="product-img" loading="lazy">
        <p>Cuissard vélo</p>
        <p>Confort longue distance</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B06hbFZoU" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/61-4nSEkgrL._AC_SL1500_.jpg" alt="Garmin Edge 530" class="product-img" loading="lazy">
        <p>Garmin Edge 530</p>
        <p>GPS vélo, navigation + puissance</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B04ZRHIL0" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/610D8yjOYzL._AC_SL1500_.jpg" alt="Wahoo Kickr Core Zwift" class="product-img" loading="lazy">
        <p>Home trainer Kickr Zwift</p>
        <p>Volume indoor, mauvais temps</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="info">
  <p>🏃 Chaussures de running</p>
  <div class="cards">
    <a href="https://link.amazon/B016R1j9N" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51aBsg4-JTL._AC_SY695_.jpg" alt="Hoka Mach 5" class="product-img" loading="lazy">
        <p>Hoka Mach 5</p>
        <p>Légère, polyvalente triathlon</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0ivLjGWe" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/71hljoGjRRL._AC_SY695_.jpg" alt="Nike Pegasus 41" class="product-img" loading="lazy">
        <p>Nike Pegasus 41</p>
        <p>Bestseller polyvalent, homme</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0eOLdo7K" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
         <img src="https://m.media-amazon.com/images/I/51FVoNMhycL._AC_SY695_.jpg" alt="Asics Novablast femme" class="product-img" loading="lazy">
        <p>Asics Novablast femme</p>
        <p>Amorti maximal, femme</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="info">
  <p>🏃 Accessoires run</p>
  <div class="cards">
    <a href="https://link.amazon/B06sqhXeB" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51xT2l2IlzL._AC_SL1000_.jpg" alt="Ceinture porte dossard" class="product-img" loading="lazy">
        <p>Ceinture porte-dossard</p>
        <p>Retourne pour le run</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B020F9BdQ" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51bLzLgM6CS._AC_SL1500_.jpg" alt="Lunettes Oakley" class="product-img" loading="lazy">
        <p>Lunettes Oakley</p>
        <p>Run + vélo, soleil / vent</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0bUf2MPl" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/81VjEyKWSHL._AC_SL1500_.jpg" alt="Casquette Salomon Shakeout" class="product-img" loading="lazy">
        <p>Casquette Salomon Shakeout</p>
        <p>Chaleur, protection soleil</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="info">
  <p>⌚ Montres GPS</p>
  <div class="cards">
    <a href="https://link.amazon/B08VcboMj" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/61zIe+LogJL._AC_SL1200_.jpg" alt="Garmin Forerunner 55" class="product-img" loading="lazy">
        <p>Garmin Forerunner 55</p>
        <p>GPS multisport, entrée de gamme</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0fySkVhZ" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/71NC77GMLVL._AC_SL1500_.jpg" alt="Garmin Forerunner 965" class="product-img" loading="lazy">
        <p>Garmin Forerunner 965</p>
        <p>Triathlon, haut de gamme</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<h2 id="frais-invisibles">Les "Frais Invisibles" : Ce que vous découvrez dans la prépa</h2>

<h3>📋 Licences, certificats médicaux et inscriptions</h3>
<p>La <strong>licence FFTri</strong> est obligatoire pour participer à une compétition officielle : comptez environ <strong>40€/an</strong>. Le <strong>certificat médical</strong> est également requis (~25€ chez votre généraliste). Les frais d'inscription varient selon le format :</p>
<ul>
  <li><strong>XS / Sprint</strong> : 30 à 60€</li>
  <li><strong>Distance Olympique</strong> : 60 à 100€</li>
  <li><strong>70.3</strong> : 150 à 250€ (les épreuves Ironman branded dépassent souvent 400€)</li>
  <li><strong>Ironman 140.6</strong> : 500 à 800€, les places partent parfois en quelques heures</li>
</ul>
<div class="info">
  <strong>Conseil :</strong> Inscrivez-vous tôt, les tarifs early bird peuvent vous faire économiser 20 à 30% sur le prix final.
</div>

<h3>🔩 Budget "consommables" : ce qui s'use avec le volume</h3>
<ul>
  <li><strong>Chaîne vélo</strong> : à changer toutes les 3 000 à 5 000 km (~15€). Une chaîne usée détruit la cassette (~60€) et les plateaux (~80€).</li>
  <li><strong>Pneus</strong> : comptez un pneu arrière tous les 3 000 km (~30€).</li>
  <li><strong>Chaussures de running</strong> : 700 à 900 km. Sur une prépa 70.3 ou Ironman, prévoyez 1 à 2 paires par saison.</li>
  <li><strong>Nutrition</strong> : gels, barres, boissons. Sur un plan 70.3 ou Ironman : 50 à 150€/mois selon le volume.</li>
  <li><strong>Abonnement piscine</strong> : 20 à 40€/mois selon la municipalité, souvent oublié.</li>
</ul>

<h3>🚗 Logistique et déplacements</h3>
<ul>
  <li><strong>Voiture + carburant + péages</strong> : 40 à 150€.</li>
  <li><strong>Hébergement</strong> : pour un 70.3 ou Ironman, il faut souvent arriver la veille. Comptez 80 à 200€/nuit.</li>
  <li><strong>Transport du vélo en avion</strong> : bike box (location 50–100€, achat 200–400€) + surcharge bagage (50–150€ A/R).</li>
</ul>

<!--COACHING-->

<h2 id="materiel-vs-entrainement">Matériel vs Entraînement : Où est le meilleur ROI ?</h2>

<p>Un cadre carbone allégé de 200g coûte 1 000€. Perdre 2kg de masse grasse grâce à un entraînement structuré, c'est gratuit ou presque. La règle des 80/20 est brutale : <strong>80% de votre performance vient de l'entraînement, du sommeil et de la régularité</strong>. Le matériel pèse 20%, et encore, seulement quand vous atteignez un niveau où les secondes comptent vraiment.</p>

<p>La "minute la moins chère" :</p>
<ul>
  <li><strong>Roue carbone disque (2 000€)</strong> : ~2 min gagnées sur un Olympique → <strong>1 000€ la minute</strong></li>
  <li><strong>Combinaison néoprène (200€)</strong> : 3 à 5 min sur 1,5km → <strong>40 à 65€ la minute</strong></li>
  <li><strong>Plan d'entraînement structuré</strong> : un nageur moyen gagne 5 min sur 1,5km en 3 mois → <strong>quelques euros la minute</strong></li>
</ul>

<div class="info">
  <strong>Le vrai calcul :</strong> Un vélo à 3 000€ vs un vélo à 900€ + un plan d'entraînement structuré sur 6 mois. Le second vous rendra presque certainement plus rapide.
</div>

<h2 id="strategie-achat">Stratégie d'achat 2026 : Comment s'équiper intelligemment</h2>

<h3>🛒 Le marché de l'occasion</h3>
<p>Le marché de l'occasion en triathlon est particulièrement sain, beaucoup de triathlètes upgradent régulièrement. Les meilleures plateformes :</p>
<ul>
  <li><strong><a href="https://buycycle.com" rel="noopener noreferrer" target="_blank">Buycycle.com</a></strong> : marketplace dédiée aux vélos d'occasion, gère l'emballage et la livraison.<br><a href="https://buycycle.com" rel="noopener noreferrer" target="_blank"><img src="https://www.gravelrepublic.cc/wp-content/uploads/2024/09/image-9-png-webp.webp" alt="Buycycle" class="content-img" loading="lazy"></a></li>
  <li><strong>Groupes Facebook triathlon locaux</strong> : souvent les meilleures affaires, entre sportifs de confiance.</li>
</ul>
<p><strong>Points à vérifier sur un vélo d'occasion :</strong> état du cadre (micro-fissures en carbone), usure de la transmission, état des câbles, jeu dans le boîtier de pédalier. Si vous n'êtes pas sûr, faites inspecter par un vélociste (~30€).</p>

<h3>📅 Le calendrier des bonnes affaires</h3>
<ul>
  <li><strong>Septembre – Octobre</strong> : fin de saison, soldes vélos et roues, meilleur moment pour acheter.</li>
  <li><strong>Novembre (Black Friday)</strong> : meilleures promos Garmin, Wahoo, montres GPS et home trainers.</li>
  <li><strong>Janvier – Février</strong> : soldes d'hiver, textile, chaussures, combinaisons de la saison précédente.</li>
  <li><strong>Avril – Mai</strong> : à éviter, la demande repart et les prix remontent.</li>
</ul>

<h3>🔄 Location vs Achat</h3>
<p>Vous voulez tenter un Ironman une seule fois ? Acheter un vélo de CLM à 3 000€ pour une seule saison n'a aucun sens. La location est une option sérieuse :</p>
<ul>
  <li><strong>Vélo CLM</strong> : certains vélocistes proposent des locations à la semaine (100 à 200€).</li>
  <li><strong>Combinaison néoprène</strong> : certains clubs proposent des locations à la journée (~20 à 40€).</li>
  <li><strong>Bike box</strong> : pour transporter votre vélo en avion (~50 à 100€ la semaine).</li>
</ul>
<p>La règle simple : si vous prévoyez d'utiliser le matériel moins de 2 saisons, l'occasion ou la location sont presque toujours plus rentables que l'achat neuf.</p>

<h2 id="faq">FAQ — Budget triathlon</h2>

<!--FAQ-->
`,
};
