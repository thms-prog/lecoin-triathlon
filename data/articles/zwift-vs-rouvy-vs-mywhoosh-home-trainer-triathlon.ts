import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "zwift-vs-rouvy-vs-mywhoosh-home-trainer-triathlon",
  title: "Zwift vs Rouvy vs MyWhoosh : quel logiciel home trainer pour le triathlon ?",
  seoTitle: "Zwift vs Rouvy vs MyWhoosh 2026 : home trainer triathlon",
  description: "Zwift a racheté Rouvy en 2026. Comparatif des 3 applis : prix, parcours Ironman officiels, test FTP, communauté. Qui l'emporte pour le triathlon ?",
  keywords: ["zwift vs rouvy 2026","zwift rachète rouvy","zwift acquisition rouvy","zwift vs mywhoosh","rouvy vs mywhoosh","meilleur logiciel home trainer triathlon","zwift triathlon","rouvy ironman parcours officiels","rouvy fulgaz ironman","mywhoosh gratuit","home trainer triathlon","logiciel vélo intérieur","zwift rouvy mywhoosh comparatif","application home trainer triathlon","FTP home trainer","smart trainer logiciel"],
  date: "2026-05-31",
  dateModified: "2026-11-01",
  category: "Vélo",
  image: "/demo/blog/zwift.png",
  coaching: {
    title: "Ton home trainer dans un vrai plan triathlon",
    text: "Ton coach construit tes séances vélo sur ta FTP réelle et les intègre avec la natation et la course, jusqu'à ta date de course.",
  },
  faq: [
    {
      "q": "Zwift est-il vraiment le meilleur logiciel home trainer ?",
      "a": "Zwift est le plus populaire et le plus mature, avec la communauté la plus grande. Mais \"meilleur\" dépend de tes critères. Pour un triathlète préparant un Ironman, Rouvy avec ses parcours officiels peut être plus pertinent. Pour quelqu'un qui ne veut pas payer, MyWhoosh est clairement supérieur."
    },
    {
      "q": "MyWhoosh est-il vraiment gratuit ? Y a-t-il des limites ?",
      "a": "Oui, MyWhoosh est entièrement gratuit à ce jour, sans limite de temps ni de fonctionnalités cachées derrière un paywall. La plateforme se finance via des partenariats institutionnels. Cela peut évoluer à l'avenir, mais pour l'instant l'accès est complet et sans restriction."
    },
    {
      "q": "Peut-on utiliser ces logiciels sans smart trainer ?",
      "a": "Oui. Avec un capteur de puissance, tu as les données watts mais sans résistance automatique. Avec un capteur de vitesse et cadence, tu peux estimer la puissance. La résistance automatique (le home trainer qui durcit dans les côtes) nécessite un smart trainer compatible."
    },
    {
      "q": "Rouvy et Ironman : quels parcours sont disponibles ?",
      "a": "Le catalogue évolue régulièrement. Les grands Ironman (Kona, Nice, Barcelone, Hamburg...) et de nombreux 70.3 sont disponibles. Vérifie directement sur l'application Rouvy la liste à jour des parcours Ironman, qui s'enrichit chaque année."
    },
    {
      "q": "Zwift a racheté Rouvy : est-ce que mon abonnement change ?",
      "a": "Non. L'acquisition a été annoncée le 29 avril 2026, mais les deux plateformes restent indépendantes : abonnements séparés, équipes séparées, roadmaps séparées. Petr Samek reste CEO de Rouvy. Le seul changement pratique concerne le hardware : le Zwift Ride et le Zwift Click V2 sont désormais compatibles avec Rouvy sans restriction. Aucun bundle ni fusion des catalogues n'est prévu à ce stade."
    }
  ],
  content: `
<p>L'hiver approche, la météo est pourrie, et tu n'as aucune envie de rouler sous la pluie. Ou alors tu prépares un Ironman et tu veux maximiser chaque séance vélo sans te soucier de la circulation. Dans les deux cas, la question est la même : <strong>quel logiciel home trainer utiliser ?</strong></p>

<p>Zwift, Rouvy, MyWhoosh : les trois poids lourds du marché. Chacun a ses forces, ses faiblesses, et surtout son profil d'utilisateur. Ce guide compare les trois en profondeur, avec un angle précis : <strong>ce qui compte vraiment pour un triathlète</strong>.</p>

<div class="row">
  <span>⚡</span>
  <div>
    <p>Mise à jour · mai 2026</p>
    <p><strong>Zwift a racheté Rouvy le 29 avril 2026.</strong> Les deux plateformes continuent d'opérer indépendamment : mêmes abonnements, même équipe, même roadmap. Seule nouveauté concrète : le hardware Zwift (Zwift Ride, Zwift Click V2) est désormais compatible avec Rouvy. Le reste du comparatif reste valide.</p>
  </div>
</div>

<nav>
  <p>Sommaire</p>
  <ul>
    <li>📊 <a href="#comparatif-rapide">Tableau comparatif rapide</a></li>
    <li>💶 <a href="#prix">Prix : quel budget prévoir ?</a></li>
    <li>🎥 <a href="#realisme">Réalisme &amp; immersion</a></li>
    <li>🏁 <a href="#parcours-ironman">Parcours officiels &amp; partenariat Ironman</a></li>
    <li>⚡ <a href="#seances-ftp">Séances structurées &amp; test FTP</a></li>
    <li>👥 <a href="#communaute">Communauté &amp; courses en ligne</a></li>
    <li>📱 <a href="#compatibilite">Facilité d'utilisation &amp; compatibilité</a></li>
    <li>📡 <a href="#capteurs-integrations">Capteurs &amp; intégrations</a></li>
    <li>🎯 <a href="#quel-profil">Quel logiciel pour quel profil ?</a></li>
    <li>⚠️ <a href="#limites">Les limites de ces logiciels pour le triathlon</a></li>
    <li>❓ <a href="#faq">Questions fréquentes</a></li>
  </ul>
</nav>

<h2 id="comparatif-rapide">📊 Tableau comparatif rapide</h2>

<p>Avant de rentrer dans le détail, voici un aperçu global des trois logiciels. Les cases vertes sont des points forts, les cases oranges des points faibles.</p>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Critère</th>
        <th>Zwift</th>
        <th>Rouvy</th>
        <th>MyWhoosh</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Prix mensuel</td>
        <td>~19,99€</td>
        <td>~19,99€</td>
        <td class="good">Gratuit</td>
      </tr>
      <tr>
        <td>Réalisme visuel</td>
        <td>Monde virtuel</td>
        <td class="good">Vidéo réelle ✓</td>
        <td>Monde virtuel</td>
      </tr>
      <tr>
        <td>Parcours Ironman</td>
        <td class="bad">✗</td>
        <td class="good">✓ Partenaire officiel</td>
        <td class="bad">✗</td>
      </tr>
      <tr>
        <td>Test FTP intégré</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
      </tr>
      <tr>
        <td>Plans d'entraînement</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
      </tr>
      <tr>
        <td>Communauté</td>
        <td class="good">Très large ✓</td>
        <td>Moyenne</td>
        <td>En croissance</td>
      </tr>
      <tr>
        <td>Courses en ligne</td>
        <td class="good">Nombreuses ✓</td>
        <td>Limitées</td>
        <td>En développement</td>
      </tr>
      <tr>
        <td>Smart trainer requis</td>
        <td>Non (mais conseillé)</td>
        <td>Non (mais conseillé)</td>
        <td>Non (mais conseillé)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="prix">💶 Prix : quel budget prévoir ?</h2>

<p>Le prix est souvent le premier critère. Et là, la comparaison est sans appel.</p>

<h3>Zwift : 19,99€/mois</h3>
<p>L'abonnement mensuel est à <strong>19,99€/mois</strong>. Zwift propose aussi une formule annuelle à 199,99€, soit deux mois offerts, environ 16,67€/mois. En pratique, si tu es triathlète et que tu roules principalement en intérieur l'hiver (novembre à mars), l'abonnement mensuel est souvent plus intelligent : tu paies 4 à 5 mois, tu coupes à l'arrivée des beaux jours, et tu reprends l'hiver suivant. Inutile de payer 12 mois pour 5 mois d'utilisation réelle.</p>
<div>
  <img src="/blog/img/zwift-prix.jpg" alt="Tarifs Zwift 2026, abonnement mensuel et annuel" class="content-img" loading="lazy">
</div>

<h3>Rouvy : 19,99€/mois ou 15€/mois en annuel</h3>
<p>Rouvy est affiché à <strong>19,99€/mois</strong> en mensuel, ou <strong>15€/mois</strong> avec un engagement annuel (environ 180€/an). Même logique que Zwift : l'annuel n'est intéressant que si tu l'utilises vraiment toute l'année. Et si tu n'es vraiment pas fan des sorties outdoor, réfléchis bien à ton choix. Zwift avec sa communauté plus large et ses courses virtuelles sera probablement plus motivant sur la durée.</p>
<div>
  <img src="/blog/img/prix-rouvy.jpg" alt="Tarifs Rouvy 2026, abonnement mensuel et annuel" class="content-img" loading="lazy">
</div>
<h3>MyWhoosh : 100% gratuit</h3>
<p>C'est l'argument massue de MyWhoosh : <strong>le logiciel est entièrement gratuit</strong>. Accès complet aux mondes virtuels, aux séances structurées, aux événements et aux courses en ligne, sans débourser un euro. La plateforme se finance via des partenariats (notamment avec l'Abu Dhabi Sports Council) plutôt que via les abonnements. Pour un triathlète qui démarre le home trainer ou qui n'a pas envie d'ajouter un abonnement de plus, c'est un argument difficile à ignorer.</p>

<div class="info">
  <p><strong>En résumé sur le prix :</strong> MyWhoosh gagne haut la main. Si le budget est une contrainte, la décision est prise. Si tu es prêt à investir pour des fonctionnalités spécifiques, lis la suite.</p>
</div>

<h2 id="realisme">🎥 Réalisme &amp; immersion : vidéo réelle vs monde virtuel</h2>

<p>C'est peut-être la différence la plus visible entre les trois logiciels, et elle a un impact réel sur ta motivation à rester dans la selle pendant 2 heures.</p>

<h3>Zwift, l'univers jeu vidéo assumé</h3>
<p>Zwift a fait le choix d'un monde virtuel stylisé : Watopia (une île imaginaire), New York, Londres, Paris, Innsbruck... Des décors colorés, un avatar qui pédale à ta place, des effets visuels soignés. Ce n'est pas réaliste au sens photographique, et c'est complètement voulu. Personnellement, je préfère cette approche : regarder une vraie route défiler sur écran pendant 2 heures, c'est plus fatigant pour les yeux que de naviguer dans un monde cartoon. L'effet jeu vidéo aide aussi à décrocher mentalement : tu oublies que tu es dans ton salon, tu suis les autres avatars, tu surveilles ton wattage. Certains n'accrochent pas au style graphique après quelques semaines. <strong>C'est avant tout une question de sensibilité personnelle.</strong></p>

<div>
  <img src="https://surdeuxroues.org/wp-content/uploads/2022/01/271854475_649074809845416_4133692082472116041_n.jpg?w=750" alt="Zwift, monde virtuel et avatar cycliste" class="content-img" loading="lazy">
</div>

<h3>Rouvy, la vraie route dans ton salon</h3>
<p>Rouvy utilise de <strong>vraies vidéos filmées sur route</strong>. Tu roules sur la montée du Ventoux en regardant le Ventoux défiler sous tes roues. Le col du Tourmalet, les routes de Toscane, les côtes de Malte, les mythiques parcours Ironman. Des milliers de routes du monde entier, filmées en haute définition. La résistance de ton home trainer s'adapte en temps réel au profil de la route, et ton avatar est superposé sur la vidéo (c'est ce qu'ils appellent la "réalité augmentée"). C'est probablement le plus spectaculaire des trois sur le papier. Pour autant, je n'ai personnellement pas réussi à accrocher à ce format. Regarder une route filmée sur écran pendant des heures, ça ne m'a pas convaincu autant que je l'espérais. <strong>Mais pour une préparation Ironman spécifique (reconnaître le parcours, gérer les portions difficiles, calibrer son effort), Rouvy est tout simplement inégalable.</strong></p>

<div>
  <img src="https://i0.wp.com/surdeuxroues.org/wp-content/uploads/2025/10/rouvy-ironman-nice-course-finish-.jpg?fit=1200%2C675&amp;ssl=1&amp;w=640" alt="Rouvy, parcours Ironman Nice en vidéo réelle" class="content-img" loading="lazy">
</div>

<h3>MyWhoosh, entre monde virtuel et géographies réelles</h3>
<p>MyWhoosh propose des mondes virtuels style jeu vidéo, comme Zwift, mais avec une approche intéressante : plutôt que d'inventer des îles imaginaires, ils ont <strong>recréé en 3D des endroits réels</strong> : la Suisse, la Belgique, l'Australie, les Émirats arabes unis... Tu roules dans un monde virtuel, mais inspiré de vraies géographies. Ce n'est pas le réalisme photographique de Rouvy, ni le polish de Zwift, mais ça donne un sentiment de familiarité géographique agréable. Et gratuitement, difficile de s'en plaindre.</p>

<div>
  <img src="https://preview.redd.it/issues-with-mywhoosh-v0-ry1rbwtbnsid1.jpg?width=1680&amp;format=pjpg&amp;auto=webp&amp;s=9d799844d78816f74937cfd7ce1bb2b1f86b79ba" alt="MyWhoosh, monde virtuel inspiré de lieux réels" class="content-img" loading="lazy">
</div>

<h2 id="parcours-ironman">🏁 Parcours Ironman officiels : l'avantage clef de Rouvy</h2>

<p>C'est le point qui fait clairement pencher la balance pour les triathlètes visant une course longue distance.</p>

<p><strong>Rouvy est plateforme digitale officielle de la série mondiale Ironman et Ironman 70.3.</strong> Ce partenariat est né en janvier 2025, quand Rouvy a racheté FulGaz, qui appartenait jusque-là au groupe Ironman Group lui-même. Le rachat de FulGaz incluait le contrat de partenariat exclusif avec les parcours Ironman filmés en haute définition. Rouvy hérite ainsi de toute la bibliothèque : les vrais profils de Kona, Nice, Barcelone, Hamburg, Francfort, découpables par segments de 30 km, avec la résistance qui suit le dénivelé en temps réel. Tu repères les côtes piégeuses, tu calibres ton effort sur le vrai parcours, tu arrives le jour J avec une vraie connaissance du terrain. Pour un triathlète longue distance, <strong>c'est la raison principale de choisir Rouvy</strong>.</p>

<p><strong>Ce partenariat reste intact après le rachat de Rouvy par Zwift</strong> (avril 2026). Les deux plateformes opèrent indépendamment, Rouvy garde son contrat Ironman.</p>

<div class="tip">
  <p class="good">Zwift et MyWhoosh sur ce point</p>
  <p>Zwift a des parcours inspirés de vraies courses (Tour de France Femmes, Critérium du Dauphiné...) mais aucun parcours Ironman officiel filmé : le rachat de Rouvy n'a pas fusionné les catalogues. MyWhoosh est partenaire UCI côté cyclisme pur, sans contenu triathlon comparable à Rouvy.</p>
</div>

<h2 id="seances-ftp">⚡ Séances structurées &amp; test FTP</h2>

<p>Pour un triathlète sérieux, le logiciel home trainer ne sert pas qu'à meubler une sortie. Il doit permettre de faire des <strong>séances structurées basées sur ta FTP</strong>. Sur ce point, les trois logiciels sont assez similaires.</p>

<h3>Le test FTP</h3>
<p>Les trois plateformes proposent un test FTP intégré : ramp test, test de 20 minutes ou test court. Le format diffère légèrement mais l'objectif est le même : déterminer ta <a href="/blog/comprendre-la-ftp-en-velo">puissance seuil</a> pour calibrer toutes tes séances vélo en pourcentage de cette valeur. C'est la donnée de base sans laquelle les zones d'entraînement ne veulent rien dire. Une fois ton FTP connu, chaque intervalle s'exprime en watts précis. Plus d'approximation, tu sais exactement à quelle intensité travailler.</p>
<div class="info">
  <p><strong>💡 Conseil pratique :</strong> Quel que soit le logiciel que tu choisis, note ton FTP et rentre-le dans le logiciel : tes séances structurées afficheront directement tes watts cibles, plus besoin de faire le calcul mental en plein effort.</p>
</div>

<h3>Les plans d'entraînement intégrés</h3>
<p>Les trois plateformes proposent des plans d'entraînement intégrés, toutes avec des plans spécifiques triathlon, ce qui est un vrai plus. Tu peux suivre un programme structuré sur plusieurs semaines directement depuis l'application, sans avoir à chercher tes séances ailleurs. Mieux encore, les trois permettent de créer tes propres séances sur mesure : si tu as un intervalle spécifique à travailler (VO2max, seuil, tempo...), tu le construis et tu le lances. Sur ce point, les différences entre les trois sont minimes : c'est davantage une question de préférence d'interface que de fonctionnalité.</p>

<p><strong>Attention cependant :</strong> ces plans restent des <strong>plans cyclisme</strong>. Ils ne tiennent pas compte de ta natation, de ta course à pied, ni de ton volume global triathlon. Pour une préparation cohérente, utilise ces logiciels pour les séances vélo, et appuie-toi sur un plan triathlon global pour orchestrer l'ensemble.</p>

<h2 id="communaute">👥 Communauté &amp; courses en ligne</h2>

<p>C'est souvent là que la vraie différence se joue au quotidien : combien de monde roule en même temps que toi, combien de courses sont disponibles, à quelle fréquence les événements se lancent.</p>

<h3>Zwift, la référence incontestée</h3>
<p>Zwift a franchi le cap du <strong>million d'abonnés actifs en 2024</strong>, avec jusqu'à 41 000 utilisateurs connectés simultanément en janvier 2026 (source : Zwift Insider). Côté courses, c'est sans comparaison : <strong>environ 4 à 5 courses démarrent chaque heure</strong>, 24h/24, soit près de 1 000 courses par semaine (source : Zwift Insider, Racing Landscape). Catégories par FTP, classements, dossards, ligue officielle e-sport reconnue par l'UCI. Plus de 80 000 coureurs ont participé à des courses en 90 jours. Si la compétition compte pour toi, Zwift est dans une catégorie à part.</p>

<h3>Rouvy, des événements moins fréquents mais plus ciblés triathlon</h3>
<p>Rouvy revendique <strong>près de 300 000 utilisateurs actifs</strong>, dont 250 000 abonnés payants (source : DC Rainmaker, juillet 2025). Côté courses, BikeRadar recense environ <strong>100 événements officiels par semaine</strong> en basse saison, jusqu'à 150 en hiver, soit environ une course toutes les 1 à 2 heures. Moins que Zwift, mais la plateforme mise sur la qualité plutôt que la quantité, avec des <strong>challenges sur parcours Ironman officiels</strong> où tu peux te comparer à d'autres sur le même tracé que ta future course. Un groupe ride avec Wout van Aert a réuni 6 500 participants en 2025.</p>

<h3>MyWhoosh, encore peu de courses disponibles</h3>
<p>MyWhoosh ne publie pas de chiffres officiels. Côté événements, la plateforme propose des <strong>bot rides toutes les 3 heures et des group rides toutes les 30 minutes</strong>, mais les vraies courses restent rares, quelques événements par semaine seulement (source : Cyclingnews). En pratique, tu peux te retrouver avec 2 courses dans la même heure, puis rien pendant un moment. La plateforme compense avec son prestige : elle accueille les <strong>Championnats du Monde UCI de cyclisme virtuel depuis 2024</strong>. Mais pour s'entraîner avec de la compétition régulière, elle n'est pas encore au niveau de Zwift ou Rouvy.</p>

<h2 id="compatibilite">📱 Facilité d'utilisation &amp; compatibilité</h2>

<p>Un bon logiciel home trainer doit s'installer facilement, se connecter à ton home trainer sans galère, et fonctionner de manière stable. Rien de plus frustrant qu'un déco Bluetooth en plein bloc seuil.</p>

<h3>Compatibilité appareils</h3>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Appareil</th>
        <th>Zwift</th>
        <th>Rouvy</th>
        <th>MyWhoosh</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PC / Mac</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
      </tr>
      <tr>
        <td>iPhone / iPad</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
      </tr>
      <tr>
        <td>Android</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
        <td class="good">✓</td>
      </tr>
      <tr>
        <td>Apple TV</td>
        <td class="good">✓</td>
        <td class="bad">✗</td>
        <td class="good">✓</td>
      </tr>
    </tbody>
  </table>
</div>

<p>PC, Mac, iPhone, Android : les trois couvrent l'essentiel. Le seul écart notable : <strong>Rouvy n'est pas disponible sur Apple TV</strong>, là où Zwift et MyWhoosh le sont. Si ton setup home trainer repose sur une Apple TV branchée à la télé, c'est un frein concret à prendre en compte avant de choisir Rouvy.</p>

<h3>Connectivité home trainer</h3>
<p>Les trois logiciels supportent les protocoles <strong>ANT+ et Bluetooth Smart</strong>, compatibles avec la quasi-totalité des home trainers smart du marché (Wahoo, Tacx, Elite, Saris, Garmin...). En pratique, <strong>Zwift</strong> est réputé le plus stable. Sa maturité technique (10 ans de développement, 1M d'utilisateurs) se ressent sur la fiabilité des connexions. <strong>Rouvy</strong> et <strong>MyWhoosh</strong> ont progressé ces dernières années, mais les retours utilisateurs signalent encore ponctuellement plus de déconnexions qu'avec Zwift.</p>

<h3>Sans smart trainer ?</h3>
<p>Les trois fonctionnent avec un simple capteur de puissance ou capteur de cadence + vitesse. Tu perds la résistance automatique dans les côtes, mais tu peux faire toutes tes séances structurées en watts ou RPE. Un bon point d'entrée si tu veux tester avant d'investir dans un smart trainer.</p>

<h2 id="capteurs-integrations">📡 Capteurs &amp; intégrations</h2>

<h3>Les capteurs compatibles</h3>
<p>Un home trainer smart suffit pour démarrer, mais l'expérience s'enrichit avec des capteurs supplémentaires, tous compatibles ANT+ ou Bluetooth avec les trois plateformes :</p>
<ul>
  <li><strong>Ceinture cardiaque :</strong> affiche ta fréquence cardiaque en temps réel, indispensable pour contrôler ton intensité en zones cardiaques</li>
  <li><strong>Capteur de cadence :</strong> suit tes tours de pédale par minute, utile pour travailler ta technique et optimiser ton économie de pédalage</li>
  <li><strong>Capteur de puissance :</strong> si tu utilises un home trainer classique (non smart), il te donne les watts sans résistance pilotable</li>
</ul>
<p>En combinant home trainer smart + ceinture cardio + capteur de cadence, tu as un tableau de bord complet : watts, cadence, fréquence cardiaque. Ce sont exactement les mêmes données qu'en compétition.</p>

<p>*liens affiliés Amazon</p>

<div class="cards">
  <a href="https://link.amazon/B04ZRHIL0" rel="sponsored noopener noreferrer" target="_blank">
    <div class="product">
      <img src="https://m.media-amazon.com/images/I/51LVUzR-SZL._AC_SL1500_.jpg" alt="Wahoo KICKR Core 2" class="product-img" loading="lazy">
      <p>Wahoo KICKR Core 2</p>
      <p>Home trainer smart, ANT+ &amp; Bluetooth</p>
      <div>
        <span>Voir →</span>
      </div>
    </div>
  </a>
  <a href="https://link.amazon/B00EHYp0J" rel="sponsored noopener noreferrer" target="_blank">
    <div class="product">
      <img src="https://m.media-amazon.com/images/I/61VNq3XoxBL._AC_SL1500_.jpg" alt="Garmin HRM-600" class="product-img" loading="lazy">
      <p>Garmin HRM-600</p>
      <p>Ceinture cardiaque, mesure haute précision</p>
      <div>
        <span>Voir →</span>
      </div>
    </div>
  </a>
  <a href="https://link.amazon/B04lbgBF9" rel="sponsored noopener noreferrer" target="_blank">
    <div class="product">
      <img src="https://m.media-amazon.com/images/I/61CRclq4OaL._AC_SL1500_.jpg" alt="Magene S3+" class="product-img" loading="lazy">
      <p>Magene S3+</p>
      <p>Capteur vitesse &amp; cadence, ANT+ &amp; BT</p>
      <div>
        <span>Voir →</span>
      </div>
    </div>
  </a>
</div>

<h3>Synchro Strava &amp; exports</h3>
<p>Les trois plateformes synchronisent automatiquement tes séances avec <strong>Strava</strong>. Tes activités apparaissent dans le fil d'actualité avec watts moyens, distance et dénivelé simulé. Sur ce point, pas de différence notable entre les trois.</p>
<p>Les divergences apparaissent sur les exports plus avancés :</p>
<ul>
  <li><strong>Zwift</strong> : export automatique vers Strava, Garmin Connect, Wahoo, TrainingPeaks et Apple Health. L'écosystème le plus large.</li>
  <li><strong>Rouvy</strong> : synchro Strava + export Garmin Connect et TrainingPeaks. Les données FTP sont également exportables vers des applis tierces.</li>
  <li><strong>MyWhoosh</strong> : synchro Strava disponible. Les options d'export vers des plateformes tierces sont plus limitées que Zwift ou Rouvy.</li>
</ul>

<h2 id="quel-profil">🎯 Quel logiciel pour quel profil de triathlète ?</h2>

<p>Voilà la vraie question. Il y a <strong>le bon choix pour toi</strong>, c'est tout.</p>

<div>

  <div class="info">
    <p>✅ Choisis Zwift si...</p>
    <ul>
      <li>Tu as besoin de motivation sociale : rouler seul sur le home trainer ne te suffit pas</li>
      <li>Tu veux des vraies courses compétitives, avec classement et catégories FTP, disponibles à toute heure</li>
      <li>Tu utilises Apple TV pour afficher l'appli sur ta télé</li>
      <li>Tu fais beaucoup de volume vélo l'hiver et tu veux la bibliothèque de workouts la plus complète</li>
    </ul>
  </div>

  <div class="box">
    <p>✅ Choisis Rouvy si...</p>
    <ul>
      <li>Tu prépares un Ironman ou un 70.3 et tu veux rouler le vrai parcours depuis ton salon</li>
      <li>L'immersion en vidéo réelle compte plus pour toi qu'un monde virtuel en 3D</li>
      <li>Tu veux te comparer à d'autres sur les mêmes segments Ironman avant ta course</li>
      <li>Tu n'utilises pas Apple TV (PC, Mac ou tablette)</li>
    </ul>
  </div>

  <div class="tip">
    <p class="good">✅ Choisis MyWhoosh si...</p>
    <ul>
      <li>Tu débutes le home trainer et tu ne veux pas payer avant de savoir si ça t'accroche</li>
      <li>Tu veux tester les séances structurées en FTP sans aucun engagement financier</li>
      <li>Tu prépares un Sprint ou un Olympique sans besoin de reconnaître un parcours spécifique</li>
      <li>Tu es à l'aise avec une plateforme en croissance, moins mature que Zwift ou Rouvy</li>
    </ul>
  </div>

</div>

<div class="box">
  <p>Zwift et Rouvy sont maintenant sous le même toit : est-ce que ça change le choix ?</p>
  <p>Non. Les deux plateformes continuent avec leurs propres abonnements, leurs propres fonctionnalités et leurs propres communautés. Il n'y a pas de bundle ni de fusion prévus. Le seul changement pratique : le hardware Zwift (Zwift Ride, Zwift Click V2) fonctionne désormais avec Rouvy. Pour le reste, tu choisis toujours selon ton profil et tes objectifs, pas selon qui est propriétaire de qui.</p>
</div>

<h3>Et si je ne sais pas encore ?</h3>
<p>Commence par <strong>MyWhoosh</strong>. C'est gratuit, tu n'as rien à perdre. Au bout d'un mois tu sauras exactement ce qui manque. Si c'est la communauté et les courses, passe à Zwift. Si c'est le réalisme et les parcours Ironman, passe à Rouvy. Dans tous les cas, tu auras appris à faire des séances structurées en watts, ce qui est l'essentiel.</p>

<!--COACHING-->

<h2 id="limites">Les limites de ces logiciels pour la préparation triathlon</h2>

<p>Zwift, Rouvy ou MyWhoosh te donnent le cadre d'une séance vélo. Mais ils ne savent pas que tu as nagé hier, que tu reprends la course à pied après une blessure, ou que ton Ironman est dans 14 semaines. Ils n'ont aucune vision de ta saison triathlon dans son ensemble.</p>

<p>C'est exactement pourquoi un vrai plan triathlon se construit différemment : le vélo est intégré avec la natation et la course à pied, la progression tient compte de ta date de course, et les watts de chaque séance vélo sont calculés sur ta FTP réelle. Rouvy ou Zwift restent parfaits pour exécuter les séances vélo de ce plan.</p>

<div class="cards">
  <a href="https://www.zwift.com" target="_blank" rel="noopener noreferrer">
    <img src="https://surdeuxroues.org/wp-content/uploads/2022/01/271854475_649074809845416_4133692082472116041_n.jpg?w=750" alt="Zwift, monde virtuel" class="product-img" loading="lazy">
    
    <p>Zwift →</p>
  </a>
  <a href="https://rouvy.com" target="_blank" rel="noopener noreferrer">
    <img src="https://i0.wp.com/surdeuxroues.org/wp-content/uploads/2025/10/rouvy-ironman-nice-course-finish-.jpg?fit=1200%2C675&amp;ssl=1&amp;w=640" alt="Rouvy, parcours Ironman Nice" class="product-img" loading="lazy">
    
    <p>Rouvy →</p>
  </a>
  <a href="https://www.mywhoosh.com" target="_blank" rel="noopener noreferrer">
    <img src="https://preview.redd.it/issues-with-mywhoosh-v0-ry1rbwtbnsid1.jpg?width=1680&amp;format=pjpg&amp;auto=webp&amp;s=9d799844d78816f74937cfd7ce1bb2b1f86b79ba" alt="MyWhoosh, monde virtuel" class="product-img" loading="lazy">
    
    <p>MyWhoosh →</p>
  </a>
</div>

<h2 id="faq">Questions fréquentes (FAQ)</h2>

<!--FAQ-->
`,
};
