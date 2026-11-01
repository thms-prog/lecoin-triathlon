import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "comprendre-la-ftp-en-velo",
  title: "Qu'est-ce que la FTP ? Définition et Tests",
  seoTitle: "FTP vélo : définition, 3 tests et zones d'entraînement",
  description: "FTP vélo : définition claire, 3 tests fiables (20 min, ramp), calcul pas à pas, zones d'entraînement et conseils concrets pour progresser vite.",
  keywords: ["FTP","Functional Threshold Power","test FTP","test FTP 20 minutes","ramp test","Zwift FTP","puissance vélo","sweet spot","zones d'entraînement FTP","améliorer FTP","cyclisme","triathlon"],
  date: "2026-01-14",
  dateModified: "2026-11-01",
  category: "Vélo",
  image: "/demo/blog/ftp.webp",
  coaching: {
    title: "Faire monter ta FTP avec un vrai plan",
    text: "Des séances vélo construites autour de ta FTP, des zones recalculées à chaque test, et un coach qui ajuste quand ça coince.",
  },
  faq: [
    {
      "q": "C'est quoi la FTP en vélo ?",
      "a": "La FTP (Functional Threshold Power) est la puissance maximale que tu peux maintenir environ 1 heure sans accumulation excessive de lactate. C'est le repère de base pour calibrer tes zones d'entraînement."
    },
    {
      "q": "Quel est le test FTP le plus fiable ?",
      "a": "Le test 20 minutes avec capteur de puissance est la référence. Tu prends la puissance moyenne sur 20 min et tu multiplies par 0,95 pour estimer la FTP."
    },
    {
      "q": "À quelle fréquence faut-il tester sa FTP ?",
      "a": "Tous les 6 à 8 semaines est idéal pour ajuster tes zones et suivre ta progression."
    }
  ],
  content: `
<nav>
  <p>Sommaire</p>
  <ul>
    <li>🧠 <a href="#definition-ftp">Qu'est-ce que la FTP et pourquoi c'est fondamental</a></li>
    <li>🔬 <a href="#physiologie-ftp">Physiologie : aérobie vs anaérobie</a></li>
    <li>🧪 <a href="#tests-ftp">3 tests précis pour mesurer ta FTP</a></li>
    <li>📊 <a href="#calculer-ftp">Comment calculer ta FTP (étape par étape)</a></li>
    <li>🎯 <a href="#zones-ftp">Zones d'entraînement selon ta FTP</a></li>
    <li>📈 <a href="#progression-ftp">Améliorer ta FTP et progresser</a></li>
    <li>⚠️ <a href="#fiabilite-zwift">Fiabilité des tests (Zwift, home-trainer)</a></li>
    <li>📌 <a href="#valeur-ftp">Valeurs FTP de référence</a></li>
    <li>🧰 <a href="#outils-ftp">Outils FTP interactifs</a></li>
    <li>❓ <a href="#faq">FAQ</a></li>
    <li>✅ <a href="#conclusion-ftp">Conclusion : Prochaines Étapes</a></li>
  </ul>
</nav>

            <h2 id="definition-ftp">Qu'est-ce que la FTP et pourquoi c'est fondamental</h2>

<p><strong>La FTP</strong> (Functional Threshold Power) est la puissance maximale que tu peux maintenir pendant environ une heure sans accumuler trop d'acide lactique. En simple : c'est le seuil au-delà duquel ton corps passe en mode anaérobie et la fatigue s'accélère.</p>

            <h3>Les points clés à retenir</h3>

<div class="cards">
  <div class="info">
    <p>Pas ta puissance max</p>
    <p>Tu peux faire plus de watts en sprint, mais tu ne tiendras que quelques secondes.</p>
  </div>
  <div class="info">
    <p>Durée typique</p>
    <p>Tu peux maintenir ta FTP entre 45 min et 1h30 selon ton niveau et ta préparation.</p>
  </div>
  <div class="info">
    <p>Au-delà de la FTP</p>
    <p>Tu passes en mode anaérobie, générant du lactate et une fatigue rapide.</p>
  </div>
  <div class="info">
    <p>Le chiffre de base</p>
    <p>Connais ta FTP pour calibrer TOUS tes entraînements à vélo et en triathlon.</p>
  </div>
</div>

<p>Pourquoi ça change tout ? Parce que connaître ta FTP, c'est comme avoir un GPS pour l'entraînement. Sans elle, tu roules "au feeling". Avec elle, tu optimises chaque séance, tu progresses plus vite, et tu évites le surentraînement ou le sous-entraînement.</p>

            <h3>Histoire et popularité de la FTP</h3>

<p>La FTP a été popularisée par Andrew Coggan, physiologiste du sport, dans les années 2000. Ensuite, des plateformes comme Zwift l'ont rendue accessible aux amateurs. Aujourd'hui, c'est devenu l'outil standard pour structurer l'entraînement cyclisme et triathlon.</p>

            <h2 id="physiologie-ftp">Physiologie : Comment marche la FTP dans ton corps</h2>

            <h3>Aérobie vs Anaérobie : les deux systèmes énergétiques</h3>

<p>Ton corps utilise deux systèmes pour produire de l'énergie quand tu pédales :</p>

<ul>
  <li><strong>Système aérobie (avec oxygène)</strong> : tu utilises l'oxygène pour brûler les graisses et glucides. C'est efficace, tu peux tenir longtemps. La FTP marque le plafond de ce système.</li>
  <li><strong>Système anaérobie (sans oxygène)</strong> : au-delà de la FTP, tu utilises de l'énergie sans oxygène, produisant du lactate. C'est très fatigant, tu ne peux pas tenir plus de quelques minutes.</li>
</ul>

            <h3>Le seuil lactique : la clé</h3>

<p>Pendant l'effort, tes muscles produisent du lactate. À faible intensité, ton corps l'élimine plus vite qu'il n'est produit. À haute intensité (au-delà de la FTP), le lactate s'accumule. C'est cette accumulation qui crée la sensation de "brûlure". La FTP est le point où l'accumulation lactique devient un facteur limitant majeur.</p>

<figure>
  <img src="/blog/img/vo2max-velo.jpg" alt="Test VO2MAX en laboratoire sur vélo" class="content-img" loading="lazy">
  <figcaption>Un homme réalise un test VO2MAX sur vélo en laboratoire pour mesurer sa consommation maximale d’oxygène.</figcaption>
</figure>
            <h2 id="tests-ftp">3 tests précis pour mesurer ta FTP</h2>

<p>Il y a 3 façons principales de tester ta FTP. Le choix dépend de ton équipement, du contexte (home-trainer ou route) et de ta préférence. Regarde celle qui te correspond le mieux.</p>

            <h3>📊 Option 1 : Test FTP avec Home-Trainer (Zwift, Rouvy, TrainerRoad)</h3>

<p><strong>Idéal pour :</strong> conditions contrôlées, pas de route, météo mauvaise, facile à intégrer dans l'entraînement structuré.</p>

<p><strong>Matériel requis :</strong> Home-trainer + capteur puissance (intégré ou externe) + app Zwift/TrainerRoad/Rouvy + montre/téléphone avec app</p>

<p>En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises. Les liens produits ci-dessous sont des liens partenaires.</p>

<div class="info cards">
  <a href="https://link.amazon/B05r4ytc6" target="_blank" rel="sponsored noopener noreferrer">
    <img src="https://m.media-amazon.com/images/I/51LVUzR-SZL._AC_SL1500_.jpg" alt="Home-trainer Wahoo KICKR Core 2 avec Zwift Cog and Click" class="product-img" loading="lazy">
  </a>
  <div>
    <p>Matériel conseillé pour ce test</p>
    <p>Wahoo KICKR Core 2 (avec Zwift Cog &amp; Click)</p>
    <p>Home-trainer à transmission directe avec puissance intégrée, compatible Zwift, Rouvy et TrainerRoad : la base pour un test 20 min ou un ramp test répétable au watt près.</p>
    <a href="https://link.amazon/B05r4ytc6" target="_blank" rel="sponsored noopener noreferrer" class="amz-btn">Voir sur Amazon →</a>
  </div>
</div>

<h4>📋 Checklist avant le test</h4>

<ul>
  <li><strong>Équipement</strong> : home-trainer stable, pédale/vélo sans perte de chaîne, roue arrière bien serrée.</li>
  <li><strong>Capteur</strong> : étalonner le capteur (spin-down calibration sur l'app) = CRUCIAL pour précision.</li>
  <li><strong>Environnement</strong> : salle 18-22°C idéal, ventilateur puissant pointé sur toi, tapis de sol pour sueur.</li>
  <li><strong>Hydratation</strong> : prépare 1-2L d'eau/boisson d'effort à proximité.</li>
  <li><strong>Internet</strong> : connexion stable Zwift/TrainerRoad pour pas de lag.</li>
  <li><strong>Repos</strong> : 48h minimum sans séance intense avant le test.</li>
</ul>

<h4>🚴 Protocole détaillé : Test Ramp (Zwift)</h4>

<p><strong>Durée totale : ~30 min</strong></p>

<ol>
  <li><strong>Calibrage (2 min)</strong>
    <ul>
      <li>Lance Zwift, rentre ton poids exact (important pour calcul de FTP)</li>
      <li>Fais un "spin-down calibration" = Zwift te guide</li>
    </ul>
  </li>
  <li><strong>Échauffement (10-12 min)</strong>
    <ul>
      <li>Minutes 1-5 : allure très facile (100-120W pour homme moyen)</li>
      <li>Minutes 6-7 : zone 2 facile (140-160W)</li>
      <li>Minutes 8-9 : augmente à zone 3 tempo (170-190W)</li>
      <li>Minutes 10-11 : 2-3 accélérations courtes 30sec à zone 5, puis cool</li>
      <li>Minute 12 : repos, juste entretien</li>
    </ul>
  </li>
  <li><strong>Test Ramp (10-15 min)</strong>
    <ul>
      <li>Zwift augmente +20W par minute automatiquement</li>
      <li>Toi : tu dois tenir l'allure (cadence stable 90-100 rpm)</li>
      <li>À un moment, tu peux plus = c'est ton max</li>
      <li>Note le dernier wattage atteint ou l'app l'enregistre auto</li>
    </ul>
  </li>
  <li><strong>Calcul FTP automatique</strong>
    <ul>
      <li>Zwift estime : FTP ≈ 75% du wattage max ramp</li>
      <li>Ex : si tu cragues à 320W, FTP estimée ≈ 240W</li>
      <li>L'app te le dit direct après le test</li>
    </ul>
  </li>
  <li><strong>Cooldown (5 min)</strong>
    <ul>
      <li>Très facile, récupération complète</li>
    </ul>
  </li>
</ol>

<h4>🔴 Erreurs courantes à éviter</h4>

<div class="warn">
  <ul>
    <li><strong>❌ Pas de calibrage</strong> → FTP +/- 5-10% incorrect</li>
    <li><strong>❌ Home-trainer sale</strong> → friction = wattage faux</li>
    <li><strong>❌ Poids mal rentré</strong> → calcul puissance au kg décalé</li>
    <li><strong>❌ Pas assez chaud</strong> → jambes pas prêtes = FTP basse artificielle</li>
    <li><strong>❌ Trop manger avant</strong> → mal au ventre pendant effort</li>
  </ul>
</div>

<div class="info">
  <p><strong>💡 Astuce home-trainer :</strong> Environ 5-10% FTP plus basse qu'en route (chaleur + pas de vent = moins d'effort). Compare tes watts home vs route après plusieurs séances pour ajuster. Exemple : 240W home = ~260W route. Note ce ratio pour toi.</p>
</div>

<p><strong>Précision :</strong> ⭐⭐⭐⭐⭐ Très haute (si capteur bien étalonné)</p>

<figure>
  <img src="/blog/img/hometrainer.jpg" alt="Vélo sur home-trainer avec Zwift" class="content-img" loading="lazy">
  <figcaption>Test FTP sur home-trainer avec Zwift : conditions contrôlées et reproductibles.</figcaption>
</figure>

            <h3>🚴 Option 2 : Test FTP avec Capteur de Puissance (Route)</h3>

<p><strong>Idéal pour :</strong> cyclistes sérieux, conditions réelles, vous avez un capteur de puissance (pédale, pédalier, ou moyeu).</p>

<p><strong>Matériel requis :</strong> Capteur de puissance (Garmin Vector, Assioma, Stages, etc.) + montre de cyclisme (Garmin, Bryton) + app Strava</p>

<div class="info cards">
  <a href="https://link.amazon/B01qLBfOi" target="_blank" rel="sponsored noopener noreferrer">
    <img src="https://m.media-amazon.com/images/I/61tiLR5mc8L._AC_SL1500_.jpg" alt="Magene P715, capteur de puissance à pédales" class="product-img" loading="lazy">
  </a>
  <div>
    <p>Matériel conseillé pour ce test</p>
    <p>Magene P715 — capteur de puissance à pédales</p>
    <p>Capteur de puissance aux pédales : installation en quelques minutes, transférable d'un vélo à l'autre, idéal pour le test 20 min sur route.</p>
    <a href="https://link.amazon/B01qLBfOi" target="_blank" rel="sponsored noopener noreferrer" class="amz-btn">Voir sur Amazon →</a>
  </div>
</div>

<h4>📍 Choisir le bon parcours</h4>

<ul>
  <li><strong>Terrain</strong> : route plate ou très légère pente (pas de montée !)</li>
  <li><strong>Circulation</strong> : peu ou pas de feu rouge, de carrefour, ou d'arrêts</li>
  <li><strong>Distance</strong> : minimum 5-6 km (pour avoir 20 min tranquille)</li>
  <li><strong>Météo</strong> : sans vent de face si possible (vent de côté/arrière ok)</li>
  <li><strong>Heure</strong> : le matin (jambes fraiches) mieux que le soir</li>
  <li><strong>Même route</strong> : fais tous tes tests sur le même parcours pour pouvoir comparer année après année</li>
</ul>

<h4>🔧 Avant le test : préparation vélo</h4>

<ul>
  <li><strong>Capteur</strong> : vérifie batterie, étalonner si demandé (spin-down sur montre)</li>
  <li><strong>Chaîne</strong> : propre et lubrifiée (moins de friction = plus de wattage exact)</li>
  <li><strong>Pneus</strong> : bien gonflés à pression optimale</li>
  <li><strong>Montre</strong> : batterie chargée, synchro capteur faite</li>
</ul>

<h4>⏱️ Protocole détaillé : Test 20 minutes sur route</h4>
<p><strong>Durée totale : ~50 min de sortie, dont 20 min de test</strong></p>

<ol>
  <li><strong>Trajet vers le parcours de test (10-15 min)</strong>
    <ul>
      <li>Allure très cool, juste échauffer les jambes</li>
      <li>Cadence facile (85-90 rpm), zone 1</li>
    </ul>
  </li>
  <li><strong>Échauffement sur place (10 min)</strong>
    <ul>
      <li>Minutes 1-5 : zone 2 facile (allure facile, conversable)</li>
      <li>Minutes 6-7 : augmente légèrement zone 3 (tempo)</li>
      <li>Minutes 8-9 : 2 accélérations courtes 1-2 min zone 5 (VO2 max), puis cool 1 min entre</li>
      <li>Minute 10 : 2 min cool avant le test</li>
    </ul>
  </li>
  <li><strong>Test 20 minutes (LE VRAI TEST)</strong>
    <ul>
      <li><strong>Lance ton chrono/app</strong> au point de départ du test</li>
      <li><strong>Les 3 premières minutes</strong> : augmente progressivement l'effort</li>
      <li><strong>Minutes 4-20</strong> : stabilise-toi à une allure que tu penses pouvoir tenir 1 heure. NE REGARDE PAS ta montre ! Travaille au feeling.</li>
      <li><strong>Effort mental</strong> : tu dois être "dur" mais pas "in-the-red". Entre zone 4-5.</li>
      <li><strong>Respiration</strong> : tu parles pas avec quelqu'un, mais pas à bout de souffle non plus</li>
      <li><strong>Dernière minute</strong> : si tu peux, maintiens. Si crêtes, c'est bon de crêtes à la fin</li>
      <li><strong>Fin du test</strong> : arrête chrono exactement à 20 min</li>
    </ul>
  </li>
  <li><strong>Cooldown / Trajet retour (10 min)</strong>
    <ul>
      <li>Allure très easy, récupération progressive</li>
    </ul>
  </li>
  <li><strong>Calcul FTP</strong>
    <ul>
      <li>À la maison, télécharge la donnée sur Strava ou l'app capteur</li>
      <li>Note ta <strong>puissance moyenne exacte</strong> pendant les 20 min</li>
      <li><strong>FTP = puissance moyenne × 0,95</strong></li>
      <li>Exemple : moyenne 260W → FTP = 247W</li>
    </ul>
  </li>
</ol>

<h4>🔴 Erreurs communes en route</h4>

<div class="warn">
  <ul>
    <li><strong>❌ Regarder ta puissance pendant le test</strong> → tu psychotes et tu fausses l'effort</li>
    <li><strong>❌ Parcours avec montée/descente</strong> → wattage fluctue, pas représentatif</li>
    <li><strong>❌ Vent très fort de face</strong> → ça fausse ta FTP du test (basse artificielle)</li>
    <li><strong>❌ Pas assez reposé</strong> → si t'as eu une grosse séance hier, ta FTP sera basse</li>
    <li><strong>❌ Oublier calibrage capteur</strong> → résultats imprécis</li>
  </ul>
</div>

<div class="info">
  <p><strong>💡 Astuce route :</strong> Si tu testes plusieurs années sur le MÊME parcours, tu peux vraiment comparer ta progression. Évite les jours très venteux ou très chauds qui faussent. Le matin en temperature 15-18°C c'est idéal.</p>
</div>

<p><strong>Précision :</strong> ⭐⭐⭐⭐⭐ Très haute (meilleures conditions réelles)</p>

<figure>
  <img src="/blog/img/cycliste-test-ftp.jpg" alt="Cycliste sur vélo chrono réalisant un test FTP avec capteur de puissance" class="content-img" loading="lazy">
  <figcaption>Test FTP sur route avec capteur de puissance : mesure fidèle des watts en conditions réelles.</figcaption>
</figure>

            <h3>💪 Option 3 : Test FTP sans Capteur (Estimation par Fréquence Cardiaque + Effort)</h3>

<p><strong>Idéal pour :</strong> n'as pas encore de capteur, tu veux démarrer l'entraînement structuré, ou besoin rapide.</p>

<p><strong>Matériel requis :</strong> Montre avec fréquence cardiaque (ou ceinture HR) + app GPS (Strava) + calculatrice !</p>

<div class="info cards">
  <a href="https://link.amazon/B00EHYp0J" target="_blank" rel="sponsored noopener noreferrer">
    <img src="https://m.media-amazon.com/images/I/61VNq3XoxBL._AC_SL1500_.jpg" alt="Garmin HRM-600, moniteur de fréquence cardiaque" class="product-img" loading="lazy">
  </a>
  <div>
    <p>Matériel conseillé pour ce test</p>
    <p>Garmin HRM-600 — ceinture de fréquence cardiaque</p>
    <p>Ceinture cardio précise pour caler ton seuil et estimer ta FTP quand tu n'as pas encore de capteur de puissance.</p>
    <a href="https://link.amazon/B00EHYp0J" target="_blank" rel="sponsored noopener noreferrer" class="amz-btn">Voir sur Amazon →</a>
  </div>
</div>

<div class="note">
  <p><strong>⚠️ Honnêteté :</strong> C'est une ESTIMATION, pas ta vraie FTP. Précision : environ 80-85%. Quand tu achèteras un capteur, il faudra recalibrer. Mais c'est mieux que rien pour commencer !</p>
</div>

<h4>📊 Méthode 1 : Par Fréquence Cardiaque (FréqCard)</h4>

<p><strong>Idée</strong> : on connaît ta FréqCard max (FCmax), et ta FTP est liée à ton seuil cardiaque.</p>

<h5>Étape 1 : Trouver ta FCmax</h5>

<ul>
  <li><strong>Formule approx</strong> : FCmax = 220 - ton âge (sauf si tu fais de l'effort intense régulièrement)</li>
  <li><strong>Exemple</strong> : 35 ans → FCmax estimée = 220 - 35 = 185 bpm</li>
  <li><strong>Teste sur toi</strong> : au lieu de la formule, fais un vrai test FCmax (sprint 3 min max) = plus précis</li>
</ul>

<h5>Étape 2 : Faire un effort de 30 minutes à seuil</h5>

<ol>
  <li><strong>Échauffement (15 min)</strong> : très facile</li>
  <li><strong>Test 30 min</strong> : 
    <ul>
      <li>Effort que tu pourrais tenir ~1h</li>
      <li>Respiration : un peu dur, mais pas au limite</li>
      <li><strong>Lance ton app GPS</strong> (Strava)</li>
      <li><strong>Note ta FC moyenne</strong> des 30 min</li>
      <li><strong>Note ta vitesse moyenne</strong> (km/h)</li>
    </ul>
  </li>
  <li><strong>Cooldown (10 min)</strong> : très easy</li>
</ol>

<h5>Étape 3 : Calculer FTP par fréquence cardiaque</h5>

<p>Formule : <strong>Seuil FC = 85-90% de ta FCmax</strong></p>

<ul>
  <li><strong>Si ta FC moyenne test ≈ 85-90% FCmax</strong> → tu as trouvé ton seuil</li>
  <li><strong>Si ta FC &lt; 85% FCmax</strong> → augmente intensité prochaine fois</li>
  <li><strong>Si ta FC &gt; 90% FCmax</strong> → tu as poussé trop, c'était anaérobie</li>
</ul>

<p><strong>Exemple concret :</strong></p>
<ul>
  <li>Tu as 35 ans → FCmax = 185 bpm</li>
  <li>Test 30 min : FC moyenne = 158 bpm</li>
  <li>158 / 185 = 85.4% ✅ Parfait, c'est ton seuil</li>
  <li>Vitesse moyenne = 26 km/h</li>
  <li>Ta FTP approximative = 26 km/h</li>
</ul>

<div class="info">
  <p><strong>💡 Astuce :</strong> Même sans capteur, cette méthode te permet de structurer ton entraînement (utiliser les zones). Elle est moins précise qu'un capteur, mais 100x mieux que "rouler au feeling" sans repère !</p>
</div>

<p><strong>Précision :</strong> ⭐⭐⭐ Moyenne (estimation ~80-85%)</p>

            <h3>📈 Récapitulatif : Quel test choisir ?</h3>

<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Contexte</th>
      <th>Meilleure Option</th>
      <th>Précision</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Home-trainer + Capteur</td>
      <td>Ramp test Zwift (10 min) ou test 20 min</td>
      <td>Très haute</td>
    </tr>
    <tr>
      <td>Route + Capteur</td>
      <td>Test 20 min classique</td>
      <td>Très haute</td>
    </tr>
    <tr>
      <td>Pas de capteur</td>
      <td>Test 30 min "feeling" + estimation</td>
      <td>Moyenne</td>
    </tr>
  </tbody>
</table></div>

            <h2 id="calculer-ftp">Comment calculer ta FTP (étape par étape)</h2>

            <h3>Avant le test : préparation cruciale</h3>

<ul>
  <li><strong>Repos</strong> : n'effectue pas de séance intense 48 heures avant le test.</li>
  <li><strong>Hydratation</strong> : sois bien hydraté, mange légèrement 2 heures avant.</li>
  <li><strong>Échauffement</strong> : 15 min minimum avec accélérations progressives.</li>
  <li><strong>Conditions</strong> : température stable, bonne ventilation.</li>
  <li><strong>Capteur</strong> : vérifie l'étalonnage de ton capteur de puissance.</li>
</ul>

<div class="info">
  <p><strong>🎯 Étape suivante :</strong> une fois ta puissance 20 min connue, calcule ta FTP et ton niveau FTP/kg avec notre <a href="#outil-ftp-calculateur">calculateur de niveau FTP</a>.</p>
</div>

            <h2 id="zones-ftp">Zones d'entraînement selon ta FTP</h2>

<p>Maintenant que tu connais ta FTP, tu dois comprendre les zones d'entraînement. Il existe 2 systèmes : le modèle Coggan (7 zones FTP) et le modèle cardiaque classique (5 zones FC). Les deux se croisent !</p>

            <h3>📊 Tableau comparatif : Zones FTP vs Zones Cardiaques</h3>

<p>Voici comment les 7 zones FTP correspondent aux 5 zones cardiaques traditionnelles :</p>

<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Zone FTP</th>
      <th>% FTP</th>
      <th>Zone Cardio</th>
      <th>% FCmax</th>
      <th>Objectif</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Z1 - Récup Active</strong></td>
      <td>&lt;55%</td>
      <td><strong>Z1</strong></td>
      <td>50-60%</td>
      <td>Récupération active, décrassage</td>
    </tr>
    <tr>
      <td><strong>Z2 - Endurance</strong></td>
      <td>56-75%</td>
      <td><strong>Z2</strong></td>
      <td>60-70%</td>
      <td>Endurance base, sorties longues</td>
    </tr>
    <tr>
      <td><strong>Z3 - Tempo</strong></td>
      <td>76-90%</td>
      <td><strong>Z3</strong></td>
      <td>70-80%</td>
      <td>Tempo, endurance intensive</td>
    </tr>
    <tr>
      <td><strong>Z4 - Sweet Spot</strong></td>
      <td>88-95%</td>
      <td><strong>Z4</strong></td>
      <td>80-90%</td>
      <td>Seuil lactique, meilleure zone progrès</td>
    </tr>
    <tr>
      <td><strong>Z5 - VO2max</strong></td>
      <td>96-105%</td>
      <td><strong>Z4-Z5</strong></td>
      <td>85-95%</td>
      <td>VO2max, efforts intenses 3-8 min</td>
    </tr>
    <tr>
      <td><strong>Z6 - Anaérobie</strong></td>
      <td>106-120%</td>
      <td><strong>Z5</strong></td>
      <td>95-100%</td>
      <td>Capacité anaérobie, efforts 1-3 min</td>
    </tr>
    <tr>
      <td><strong>Z7 - Neuro</strong></td>
      <td>&gt;120%</td>
      <td><strong>Z5</strong></td>
      <td>100%</td>
      <td>Sprint max, efforts &lt;30 sec</td>
    </tr>
  </tbody>
</table></div>

            <h3>🎯 Pourquoi 7 zones FTP vs 5 zones cardio ?</h3>

<p>Le modèle FTP (Coggan) a 7 zones parce que la puissance est plus précise que la fréquence cardiaque. Voici pourquoi :</p>

<ul>
  <li><strong>Puissance = instantané</strong> : elle réagit immédiatement à l'effort. La fréquence cardiaque prend 30-60 sec pour s'adapter.</li>
  <li><strong>FTP divise mieux les efforts seuil</strong> : zone 4 (sweet spot 88-95%) vs zone 5 (VO2max 96-105%) permet un entraînement ultra-précis.</li>
  <li><strong>Cardio simplifie</strong> : 5 zones suffisent pour l'entraînement cardiaque car moins granulaire.</li>
</ul>

            <h3>💪 Les zones essentielles pour progresser</h3>

<p>Voici où tu dois passer ton temps selon tes objectifs :</p>

<div class="info">
  <h4><strong>🥇 Zone 2 (Endurance) : 60-70% du volume</strong></h4>
  <p>C'est LA BASE. Sorties longues, faciles, construction aérobie. Tu dois pouvoir parler pendant l'effort.</p>
  <p><strong>Exemple :</strong> Sortie 2h à 65% FTP (140W si FTP=215W)</p>
</div>

<div class="info">
  <h4><strong>🥈 Zone 4 (Sweet Spot) : 15-20% du volume</strong></h4>
  <p>C'est la MEILLEURE zone pour progresser en FTP. Efforts soutenus 10-20 min, "dur mais tenable".</p>
  <p><strong>Exemple :</strong> 3 × 12 min à 90% FTP (194W) avec 3 min récup</p>
</div>

<div class="info">
  <h4><strong>🥉 Zone 5 (VO2max) : 5-10% du volume</strong></h4>
  <p>Efforts très intenses 3-8 min, augmente ta capacité aérobie maximale.</p>
  <p><strong>Exemple :</strong> 5 × 4 min à 105% FTP (226W) avec 3 min récup</p>
</div>

<div class="note">
  <p><strong>⚠️ Erreur fréquente :</strong> Beaucoup de cyclistes passent trop de temps en zone 3 (tempo). C'est la "zone grise" : assez dur pour fatiguer, pas assez intense pour vraiment progresser. Privilégie Z2 + Z4 !</p>
</div>

            <!--COACHING-->

<h2 id="progression-ftp">Améliorer ta FTP et progresser</h2>

            <h3>7 stratégies pour augmenter ta FTP</h3>

<ul>
  <li><strong>Structurer l'entraînement</strong> : construire une base solide avec sorties régulières.</li>
  <li><strong>Sweet spot</strong> (85-95% FTP) : c'est la MEILLEURE zone pour progresser vite.</li>
  <li><strong>Intervalles soutenus</strong> : over/unders, pyramides d'intensité, répétitions au seuil.</li>
  <li><strong>Sortie longue hebdomadaire</strong> : pour l'endurance aérobie.</li>
  <li><strong>Tester régulièrement</strong> : tous les 6-8 semaines.</li>
  <li><strong>Récupération et nutrition</strong> : essentielles pour progresser.</li>
  <li><strong>Utiliser un plan structuré</strong> : suivre un programme calibré sur ta FTP.</li>
</ul>

            <h3>Plan d'entraînement personnalisé</h3>

<p>Si tu veux progresser vraiment en FTP, utilise un plan structuré. Le vélo représente 50-60% du triathlon - c'est là que se font les différences !</p>

            <h2 id="fiabilite-zwift">Fiabilité des tests (Zwift, home-trainer)</h2>

            <h3>Tests Zwift : précision et limites</h3>

<ul>
  <li><strong>Test 20 min Zwift</strong> : le plus précis, très fiable.</li>
  <li><strong>Ramp Test Zwift</strong> : rapide mais peut sur/sous-estimer.</li>
  <li><strong>Auto-détection</strong> : pratique mais moins précis qu'un test dédié.</li>
</ul>

            <h3>Conseils de fiabilité</h3>

<ul>
  <li><strong>Étalonnage</strong> : crucial, même 1-2% d'erreur fausse le résultat.</li>
  <li><strong>Régularité</strong> : toujours le même protocole et le même matériel.</li>
  <li><strong>Conditions</strong> : même heure, même repos, même ventilation.</li>
  <li><strong>Hydratation</strong> : en home-trainer, la chaleur accumule vite.</li>
</ul>

            <h2 id="valeur-ftp">Valeurs FTP de référence</h2>

<p>Repères en W/kg selon le niveau (amateurs) :</p>

<div class="table-wrap"><table>
  <thead>
    <tr>
      <th>Niveau</th>
      <th>FTP/kg Hommes</th>
      <th>FTP/kg Femmes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Débutant</td>
      <td>1,5-2,0</td>
      <td>1,2-1,6</td>
    </tr>
    <tr>
      <td>Intermédiaire</td>
      <td>2,0-3,0</td>
      <td>1,6-2,4</td>
    </tr>
    <tr>
      <td>Confirmé</td>
      <td>3,0-4,5</td>
      <td>2,4-3,5</td>
    </tr>
    <tr>
      <td>Très confirmé</td>
      <td>4,5-6,0+</td>
      <td>3,5-5,0+</td>
    </tr>
  </tbody>
</table></div>

<p><strong>Pour comparer précisément ton niveau :</strong> consulte le <a href="#outil-ftp-tableau">tableau interactif FTP/kg</a> en bas de page.</p>

<h2 id="outils-ftp">🧰 Outils FTP interactifs</h2>

<p>Utilise nos outils pour calculer ta FTP et situer ton niveau rapidement :</p>

<p>
  Accès direct : <a href="#outil-ftp-calculateur">Calculateur de niveau FTP</a> •
  <a href="#outil-ftp-tableau">Tableau de référence FTP/kg</a>
</p>

<!--FTPTOOLS-->

<div>
  <p><strong>Calculateur de niveau FTP</strong> : renseigne ta puissance 20 min et ton poids pour obtenir ta FTP estimée et ton niveau.</p>
  <p><strong>Tableau FTP/kg</strong> : compare ton ratio W/kg à des repères clairs (hommes/femmes) pour te situer immédiatement.</p>
</div>

<h2 id="faq">FAQ — FTP vélo</h2>

<!--FAQ-->

<h2 id="conclusion-ftp">Conclusion : Prochaines Étapes</h2>

<p>Maintenant que tu comprends la FTP, voici comment progresser concrètement :</p>

<ol>
  <li><strong>1. Investis dans un capteur</strong> : c'est l'outil de base (capteur de pédale ou home-trainer).</li>
  <li><strong>2. Fais ton premier test</strong> : test 20 min (précis) ou ramp test (facile).</li>
  <li><strong>3. Calcule ta FTP/kg</strong> : c'est ton repère d'or pour comparer.</li>
  <li><strong>4. Structure tes séances</strong> : utilise les zones (Z2 récup, Z4 sweet spot).</li>
  <li><strong>5. Teste régulièrement</strong> : tous les 6-8 semaines.</li>
  <li><strong>6. Suis un programme</strong> : des séances vélo structurées autour de ta FTP, avec des zones recalculées à chaque test. </li>
</ol>

<p><strong>La FTP est ton GPS de l'entraînement.</strong> Mesure-la, travaille autour, teste-la régulièrement, et tu verras des résultats. Bon entraînement ! 🚴‍♂️💪</p>
`,
};
