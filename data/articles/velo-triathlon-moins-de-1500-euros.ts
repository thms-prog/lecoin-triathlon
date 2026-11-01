import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "velo-triathlon-moins-de-1500-euros",
  title: "Vélo triathlon moins de 1500€ : 5 vélos de route et 2 CLM en occasion",
  seoTitle: "Vélo triathlon moins de 1500€ : 5 vélos + 2 CLM (2026)",
  description: "Vélo triathlon moins de 1500€ : 5 vélos de route et 2 CLM en occasion, avec taille de cadre, frein à disque et méthode pour négocier au bon prix.",
  keywords: ["velo triathlon moins de 1500 euros","velo route moins de 1500 euros","velo route occasion carbone","guide achat velo triathlon","velo triathlon occasion","shimano ultegra occasion","buycycle triathlon","taille cadre velo route","velo clm occasion","meilleur velo triathlon pas cher"],
  date: "2026-07-23",
  dateModified: "2026-11-01",
  category: "Vélo",
  image: "/demo/blog/velo-1500.jpg",
  coaching: {
    title: "Ton nouveau vélo mérite un vrai programme",
    text: "Ton coach construit tes séances vélo autour de tes watts et de tes allures, en équilibre avec la natation et la course.",
  },
  faq: [
    {
      "q": "Faut-il absolument un vélo carbone pour le triathlon à ce budget ?",
      "a": "Pas absolument, mais à moins de 1500€ en occasion, le carbone devient accessible et offre un net avantage en poids et en confort par rapport à l'aluminium neuf au même prix. C'est pour ça que cet article se concentre sur des cadres carbone d'occasion plutôt que sur de l'aluminium neuf."
    },
    {
      "q": "Comment vérifier l'état d'un cadre carbone d'occasion ?",
      "a": "Inspecte surtout les zones qui encaissent le plus de contraintes : autour du boîtier de pédalier, de la douille de direction et des bases arrière. Cherche des fissures, des zones ternes ou des impacts. En cas de doute, un cadreur ou un magasin spécialisé peut faire un contrôle plus poussé avant achat."
    },
    {
      "q": "Shimano 105 suffit-il pour débuter en compétition ?",
      "a": "Largement. Le Shimano 105 actuel a hérité de beaucoup de technologie Ultegra et Dura-Ace, l'écart de performance réel s'est beaucoup resserré ces dernières générations. Ultegra et Di2 sont des upgrades de confort et de précision, pas un prérequis pour bien performer."
    },
    {
      "q": "Vaut-il mieux prioriser le cadre ou le groupe de vitesses à budget égal ?",
      "a": "Le cadre en priorité. Il définit la rigidité, le poids et la géométrie du vélo, et il est quasiment impossible à améliorer après achat. Le groupe, lui, se change progressivement et à moindre coût par la suite (passer de 105 à Ultegra plus tard, c'est un budget raisonnable)."
    },
    {
      "q": "Vélo de route avec prolongateurs ou vrai vélo de contre-la-montre pour débuter ?",
      "a": "À ce budget, un vélo de route avec des prolongateurs clip-on est souvent le choix le plus polyvalent et le plus satisfaisant : les vrais CLM disponibles sous 1500€ sont plus anciens et moins aboutis aérodynamiquement que les modèles récents. Réserve le CLM dédié pour du format L ou XXL sur parcours roulant, une fois que tu es sûr de ton engagement sur la discipline."
    },
    {
      "q": "Où trouver les meilleures affaires en occasion ?",
      "a": "Commence par Buycycle pour établir un prix de référence fiable et transparent, puis cherche les mêmes modèles sur Facebook Marketplace et Le Bon Coin en local. Tu peux négocier un vendeur particulier jusqu'au prix Buycycle hors livraison (environ 150€ d'économie), la plupart ne connaissant pas le prix de marché exact de leur vélo."
    }
  ],
  content: `
<nav>
  <p>Sommaire</p>
  <nav class="toc" aria-label="Sommaire"><ul>
    <li><a href="#taille">Quelle taille de cadre choisir</a></li>
    <li><a href="#pourquoi-disque">Pourquoi exclure les freins à patins</a></li>
    <li><a href="#methode">Ma méthode pour dégoter une occasion au bon prix</a></li>
    <li><a href="#checklist">Checklist : vérifier un vélo avant achat</a></li>
    <li><a href="#route">Les 5 vélos de route à moins de 1500€</a></li>
    <li><a href="#clm">Les 2 vélos contre-la-montre à moins de 1500€</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul></nav>
</nav>

<p>À moins de 1500€, tu es sur le budget le plus intéressant pour progresser sérieusement en triathlon sans te ruiner : cadre carbone en occasion, groupe Shimano de niveau course, frein à disque moderne. Ce guide détaille comment bien choisir, et te donne ma sélection de vélos de route et de contre-la-montre à ce budget.</p>

<h2 id="taille">Avant de choisir un vélo : la taille du cadre</h2>

<p>C'est le critère le plus important de tout cet article, plus important que le prix, la marque ou le groupe de freinage. Un vélo mal dimensionné, aussi beau soit-il sur le papier, sera inconfortable voire dangereux à piloter, et impossible à bien positionner.</p>

<p>Deux mesures comptent : ta taille et ton entrejambe (mesuré pieds nus, de la plante du pied jusqu'à l'entrejambe). L'entrejambe est la donnée la plus fiable, deux personnes de même taille peuvent avoir des entrejambes différents.</p>

<div class="note">
  <p><strong>Attention :</strong> il n'existe pas de tableau universel fiable, chaque marque a sa propre géométrie et son propre système de tailles. Un 54 chez Trek ne correspond pas forcément à un 54 chez Canyon ou Specialized. Avant d'acheter, vérifie toujours le tableau de tailles officiel de la marque du vélo qui t'intéresse, et si possible fais-toi conseiller en magasin ou compare avec un vélo que tu as déjà et qui te va bien. Perso je mesure 1m83, et j'ai volontairement pris un cadre plus petit que ce que la plupart des tableaux recommandent, pour être davantage aéro sur le vélo. C'est un choix courant chez les cyclistes qui recherchent une position basse et agressive plutôt que le confort maximal, à condition d'ajuster potence et tige de selle en conséquence.</p>
</div>

<h2 id="pourquoi-disque">Pourquoi que du frein à disque dans cet article</h2>

<p>Tu trouveras encore de très belles occasions en frein à patins à ce budget, d'anciens hauts de gamme qui étaient le top il y a quelques années. Mais un vélo d'occasion, c'est un vélo que tu vas garder plusieurs années : autant partir sur un standard encore d'actualité plutôt que sur une technologie en fin de vie. On garde les pépites à patins pour l'article moins de 1000€.</p>

<p>Nuance pour la partie triathlon/CLM plus bas dans cet article : le marché de l'occasion à ce budget propose encore beaucoup de frein à patins sur les vélos CLM, les modèles à disque étant plus récents et donc plus chers. Ne t'étonne pas de voir des patins dans la sélection CLM.</p>

<h2 id="methode">Ma méthode pour dégoter ces occasions</h2>

<h3>1. <a href="https://buycycle.com/fr" target="_blank" rel="noopener noreferrer">Buycycle</a> en premier, pour établir un prix de référence</h3>
<p>Mes filtres, dans l'ordre :</p>
<ul>
  <li>Le plus récent d'abord (les meilleures occasions partent vite)</li>
  <li>Ma taille</li>
  <li>Ma fourchette de prix (ici 1000 à 1500€)</li>
  <li>Cadre carbone</li>
  <li>Frein à disque uniquement</li>
</ul>
<p>Ça me donne rapidement les modèles disponibles à ce budget et surtout un prix de marché fiable : Buycycle vérifie l'état des vélos et affiche des prix transparents, c'est une bonne base de comparaison.</p>

<h3>2. <a href="https://www.facebook.com/marketplace/" target="_blank" rel="noopener noreferrer">Marketplace</a> et <a href="https://www.leboncoin.fr" target="_blank" rel="noopener noreferrer">Le Bon Coin</a>, en local</h3>
<p>Une fois les modèles et leur prix Buycycle repérés, je cherche les mêmes marques et modèles sur Facebook Marketplace et Le Bon Coin, en local.</p>

<h3>3. Je négocie au prix Buycycle</h3>
<p>Buycycle facture environ 150€ de frais de livraison en plus du prix du vélo. En négociant un vendeur local jusqu'au prix affiché sur Buycycle (hors livraison), tu obtiens le même vélo, souvent en aussi bon état, sans payer ces 150€. La plupart des vendeurs particuliers ne connaissent pas le prix de marché exact de leur vélo, ce qui laisse de la marge pour négocier.</p>

<h2 id="checklist">Checklist avant d'acheter un vélo d'occasion</h2>

<p>Une fois un vélo repéré et le rendez-vous pris, voici ce que je vérifie systématiquement avant de sortir mon portefeuille :</p>

<div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">Taille confirmée avant de te déplacer</strong><br>Demande la taille exacte du cadre au vendeur pour éviter un aller-retour pour rien.</p>
  </div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">Usure des freins et de la chaîne</strong><br>Plaquettes de frein à disque et chaîne : une chaîne trop élongée use aussi la cassette et le plateau.</p>
  </div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">État du cadre carbone</strong><br>Pas de fissure ni d'impact, surtout autour du boîtier de pédalier, de la douille de direction et des bases arrière, les zones qui encaissent le plus.</p>
  </div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">Passage des vitesses</strong><br>Teste le dérailleur avant et arrière sur tout le développement, du plus petit au plus grand pignon.</p>
  </div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">Jeu dans les roulements</strong><br>Soulève le vélo et fais tourner les roues, elles doivent tourner librement sans bruit. Freins serrés, secoue le guidon d'avant en arrière pour détecter du jeu dans la direction.</p>
  </div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">Historique d'entretien</strong><br>Factures ou révisions si le vendeur peut les fournir, ça en dit long sur l'entretien général.</p>
  </div>
  <div class="tip row">
    <span>✓</span>
    <p class="good"><strong class="good">Essai si possible</strong><br>Même un court tour dans la rue permet de sentir un souci qu'on ne voit pas à l'œil.</p>
  </div>
</div>

<h2 id="route">Les 5 vélos de route à moins de 1500€</h2>

<div class="box">
  <p>Cube Agree C:62 <span>· le vélo que j'ai moi-même choisi</span></p>
  <img src="/blog/img/velo-1500-cube-c62.jpg" alt="Cube Agree C:62, vélo de route carbone occasion moins de 1500€" class="content-img" loading="lazy">
  <p>Le "C:62" dans le nom indique un cadre carbone à 62% de fibre de carbone (38% de résine), avec la technologie Advanced Twin Mold de Cube qui offre un excellent rapport rigidité/poids. Câblage entièrement interne, tige de selle aéro : le profil reste soigné niveau aérodynamisme.</p>
  <p>Ce qui le distingue vraiment, c'est son positionnement hybride endurance/aéro : plus sportif et plus réactif dans les virages que la concurrence typique du segment confort longue distance (Canyon Endurace, Trek Domane), tout en restant confortable sur les longues sorties. Un vélo pensé pour rouler vite et longtemps, pas juste pour amortir les kilomètres passivement.</p>
  <p>Cible réaliste à ce budget en occasion : Shimano Ultegra mécanique. Le Di2 (électronique) existe sur les configurations plus haut de gamme du même cadre, à choper si tu tombes sur la bonne annonce.</p>
</div>

<div class="box">
  <p>Trek Émonda SL5 <span>· le plus beau cadre du lot</span></p>
  <img src="/blog/img/velo-1500-trek-amonde-sl-5.jpg" alt="Trek Émonda SL5, vélo de route carbone Shimano 105" class="content-img" loading="lazy">
  <p>Cadre carbone OCLV Série 500, environ 8,8kg en taille M/L. La géométrie Trek pour l'Émonda vise un équilibre entre confort sur la longueur et efficacité en danseuse, sans tomber dans le tout-confort d'un vélo d'endurance pur. Neuf, c'est le point d'entrée carbone chez Trek à environ 2699€, ce qui donne une bonne idée de la marge de négociation en occasion à moins de 1500€.</p>
  <p>Groupe Shimano 105 sur cette version. Un vélo taillé pour grimper, avec un rendu esthétique qui sort du lot, c'est d'ailleurs mon coup de cœur personnel côté design de cadre.</p>
</div>

<div class="box">
  <p>Giant TCR Advanced Disc 2 <span>· le plus facile à dénicher en occasion</span></p>
  <img src="/blog/img/velo-1500-giant-tcr-advanced-disc-2.jpg" alt="Giant TCR Advanced Disc 2, vélo de route carbone frein à disque" class="content-img" loading="lazy">
  <p>Cadre en composite Advanced-grade, tubes profilés développés en soufflerie et par simulation CFD pour réduire la traînée sans perdre la nervosité qui a fait la réputation de la lignée TCR depuis des années. Un vélo taillé pour la course, réactif dans les relances et les portions vallonnées, tout en restant tolérant sur la durée.</p>
  <p>Groupe Shimano 105. Giant ayant énormément vendu ce modèle en magasin physique en France, c'est statistiquement le plus simple à trouver en occasion à ce budget, ce qui te laisse plus de choix pour comparer et négocier.</p>
</div>

<div class="box">
  <p>Specialized Tarmac SL6 Disc <span>· pour la valeur de prestige</span></p>
  <img src="/blog/img/velo-1500-specialized-tarmac-sl6-disc-sport.jpg" alt="Specialized Tarmac SL6 Disc, vélo de route carbone occasion" class="content-img" loading="lazy">
  <p>Cadre FACT 9r carbon avec la technologie Rider-First Engineered : Specialized optimise chaque taille de cadre individuellement plutôt que de simplement agrandir/réduire un même moule, pour que le comportement reste identique quelle que soit ta taille. Direction précise, transfert de puissance direct, c'est la lignée de vélo que les équipes World Tour ont longtemps couru.</p>
  <p>Version d'entrée de gamme SL6 en Shimano 105. C'est le modèle le plus rare des cinq à ce budget, mais quand tu en trouves un sous les 1500€, tu repars avec un cadre au pedigree course qui vaut largement plus cher neuf que les autres modèles de cette liste.</p>
</div>

<div class="box">
  <p>Scott Addict 30 <span>· la pépite rapport qualité/prix</span></p>
  <img src="/blog/img/velo-1500-scott-addict-30.jpg" alt="Scott Addict 30, vélo de route carbone Shimano 105" class="content-img" loading="lazy">
  <p>Cadre Addict en carbone HMF, une fibre pensée pour l'endurance et l'absorption des vibrations verticales plutôt que la rigidité pure recherchée sur les carbones HMX haut de gamme de la marque. Fourche à pivot conique en carbone pour une direction précise même à haute vitesse.</p>
  <p>Groupe Shimano 105. Le neuf tourne autour de 2799€ pour cette gamme, ce qui en fait objectivement la meilleure affaire du lot si tu en trouves un à moins de 1500€ en occasion : confort et fiabilité au niveau des autres, pour un prix neuf plus élevé, donc une décote en ta faveur.</p>
</div>

<div class="info">
  <p>Pour quel profil, quel vélo ?</p>
  <ul>
    <li><strong>Meilleure transmission disponible :</strong> Cube Agree C:62, trouvable en Ultegra voire en Di2 à ce budget, ce qui est exceptionnel sur une grande marque</li>
    <li><strong>Le plus beau cadre / coup de cœur design :</strong> Trek Émonda SL5</li>
    <li><strong>Le plus simple à trouver rapidement :</strong> Giant TCR Advanced Disc 2</li>
    <li><strong>Le plus gros pedigree course :</strong> Specialized Tarmac SL6 Disc</li>
    <li><strong>Le meilleur rapport qualité/prix :</strong> Scott Addict 30</li>
  </ul>
</div>

<!--COACHING-->

<h2 id="clm">Les 2 vélos contre-la-montre à moins de 1500€</h2>

<p>Soyons honnêtes : à moins de 1500€, un bon CLM est beaucoup plus compliqué à dénicher qu'un bon vélo de route. Tu seras sur des modèles plus anciens, qui font le travail sans être à la pointe niveau aérodynamisme moderne. J'ai moi-même roulé pendant des années sur un Kuota Kalibur de 2013, acheté 800€ : il faisait très bien le travail, même si son profil aéro accuse forcément le coup face aux modèles plus récents, et le design a un charme d'une autre époque. Si ton budget est serré, un des vélos de route ci-dessus, avec des prolongateurs clip-on, te fera probablement plus plaisir et sera plus polyvalent qu'un vieux CLM dépassé.</p>

<p>Ceci dit, il existe deux modèles qui sortent vraiment du lot à ce budget, à prendre les yeux fermés s'ils sont en bon état :</p>

<div class="box">
  <p>BMC Timemachine 02 <span>· vers 2017, Shimano Ultegra</span></p>
  <img src="/blog/img/velo-1500-bmc-timemachine-02.jpg" alt="BMC Timemachine 02, vélo contre-la-montre triathlon occasion" class="content-img" loading="lazy">
  <p>BMC a passé 4 ans de recherche sur cette lignée Timemachine pour optimiser la pénétration dans l'air. Le TM02 se distingue du TM01 sur des éléments de finition (cockpit, fourche), mais garde l'essentiel de l'ADN aéro de la gamme. En 2017, il était proposé en Shimano 105, Ultegra ou Ultegra Di2 selon la version, avec un tarif neuf démarrant à 2899€ pour la version 105. Une transmission Ultegra sur ce cadre à moins de 1500€ en occasion, c'est une très bonne affaire.</p>
</div>

<div class="box">
  <p>Argon 18 E-118 <span>· vers 2015, SRAM Red</span></p>
  <img src="/blog/img/velo-1500-argon-18-e-118.jpg" alt="Argon 18 E-118, vélo contre-la-montre triathlon SRAM Red" class="content-img" loading="lazy">
  <p>Argon 18 est une marque canadienne spécialiste du contre-la-montre et du triathlon depuis 1989, homologuée UCI, reconnue pour ses cadres aéro agressifs. Petite précision utile : le SRAM Red n'est pas l'équivalent du Shimano Ultegra, c'est l'équivalent du Dura-Ace, le tout haut de gamme Shimano (l'équivalent réel d'Ultegra chez SRAM, c'est le Force). Un Argon 18 E-118 en SRAM Red à moins de 1500€, c'est donc une transmission haut de gamme pour le prix d'un vélo d'entrée de gamme.</p>
</div>

<div class="warn">
  <p class="bad">Vérifie la cassette avant d'acheter un CLM</p>
  <p class="bad">Les CLM sont souvent équipés pour des parcours roulants : plateau 53-39 et cassette serrée type 11-23. Sur mon premier CLM (le Kuota), j'étais justement en 11-23. Attaquer un col avec ce genre de développement, il faut vraiment de bonnes jambes, et même de simples bosses peuvent te cramer. Avec le 39 devant et le 23 en pignon le plus grand, dès 6 à 7% de pente, j'envoyais déjà tout ce que j'avais juste pour ne pas tomber du vélo.</p>
  <p class="bad">Vérifie donc le plateau et la cassette montés en fonction du terrain sur lequel tu vas rouler. Et garde en tête qu'un CLM est avant tout pensé pour du format L ou XXL en triathlon, sur un parcours plutôt roulant. Réfléchis bien à ton usage réel avant de te lancer.</p>
</div>

<h2 id="faq">FAQ - Vélo triathlon moins de 1500€</h2>

<!--FAQ-->
`,
};
