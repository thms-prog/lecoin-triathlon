import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "debuter-triathlon-guide-complet",
  title: "Comment débuter le triathlon : guide complet pour se lancer",
  seoTitle: "Débuter le triathlon en 2026 : guide complet pour se lancer",
  description: "Matériel, plan d'entraînement, tests VMA/FTP, erreurs à éviter : tout ce qu'il faut pour réussir son premier triathlon en 2026.",
  keywords: ["debuter triathlon","premier triathlon","entrainement triathlon debutant","format triathlon","materiel triathlon","tests VMA FTP","choisir course triathlon","erreurs debutant triathlon","guide triathlon complet"],
  date: "2026-02-09",
  dateModified: "2026-11-01",
  category: "Débuter",
  image: "/demo/blog/debuter.webp",
  coaching: {
    title: "Ton premier triathlon, accompagné",
    text: "Un vrai coach construit tes premières semaines à partir de ton niveau et de tes disponibilités, et répond à tes questions sous 24 h.",
  },
  faq: [
    {
      "q": "Combien de temps faut-il pour se préparer à un premier triathlon ?",
      "a": "En général, 8 à 12 semaines suffisent pour un format Sprint si tu pars d'un niveau correct en endurance. L'important est de construire une base progressive et de ne pas brûler les étapes."
    },
    {
      "q": "Quel est le meilleur triathlon pour un débutant ?",
      "a": "Un XS ou un Sprint plat, proche de chez toi, avec une eau pas trop froide et une bonne organisation. Privilégie une course locale pour limiter le stress logistique et te concentrer sur l'expérience."
    },
    {
      "q": "Est-ce qu'il faut savoir bien nager pour débuter ?",
      "a": "Il faut être à l'aise sur la distance, mais tu peux progresser rapidement avec 1 à 2 séances techniques par semaine. La natation est le sport le plus technique des trois, mais c'est aussi celui où les débutants progressent le plus vite avec de bons conseils."
    },
    {
      "q": "Puis-je faire un triathlon avec un VTC ?",
      "a": "Oui, sur les formats XS ou Sprint, un VTC en bon état suffit largement. Le casque reste obligatoire. L'important est de te sentir à l'aise sur ton vélo, le matériel performant viendra plus tard si tu accroches."
    },
    {
      "q": "Quelle est la première chose à faire quand on veut se lancer ?",
      "a": "Choisis une date cible, puis cale un planning simple : 3 séances par semaine pendant 8 semaines. Ensuite, tu ajustes. Avoir une échéance concrète te donne une direction et te motive à rester régulier."
    },
    {
      "q": "Combien coûte un premier triathlon (équipement + inscription) ?",
      "a": "Compte 300 à 800 euros pour débuter : vélo d'occasion (150-400€), cuissard et casque (100€), lunettes et bonnet (30€), inscription + licence 1 jour (50-80€). Tu peux réduire les coûts en empruntant ou louant du matériel au début."
    },
    {
      "q": "Faut-il rejoindre un club de triathlon pour débuter ?",
      "a": "Ce n'est pas obligatoire, mais c'est un vrai accélérateur : tu bénéficies de conseils techniques, de sorties en groupe et d'une vraie émulation. Si tu préfères l'autonomie, des plans en ligne bien structurés peuvent suffire pour commencer."
    }
  ],
  content: `
<nav>
  <h2>Sommaire</h2>
  <ul>
    <li>✅ <a href="#pourquoi-debuter">Pourquoi debuter le triathlon ?</a></li>
    <li>🏊‍♂️ <a href="#format-choisir">Quel format de triathlon choisir pour commencer ?</a></li>
    <li>🧰 <a href="#equipement">Equipement necessaire pour debuter le triathlon</a></li>
    <li>📆 <a href="#entrainement">Comment s'entrainer pour son premier triathlon ?</a></li>
    <li>🧪 <a href="#tests-utiles">Tests utiles pour bien demarrer</a></li>
    <li>🎯 <a href="#choisir-course">Comment choisir sa premiere course ?</a></li>
    <li>⚠️ <a href="#erreurs">Les erreurs frequentes des debutants</a></li>
    <li>❓ <a href="#faq">FAQ - Debuter le triathlon</a></li>
  </ul>
</nav>

<h2 id="pourquoi-debuter">Pourquoi débuter le triathlon ?</h2>
<h3>Un sport complet, accessible, qui casse la routine</h3>
<p>Le triathlon enchaîne trois sports (natation, vélo, course à pied). C'est ultra-complet, mais surtout accessible, même si tu ne viens d'aucune des trois disciplines. Tu travailles l'endurance, la force, le mental et la gestion de l'effort, avec une vraie dimension de nutrition selon la distance. En France, le calendrier est dense et l'ambiance est souvent incroyable.</p>
<p>Il y a aussi un côté "reconnaissance" : terminer un triathlon, et encore plus un format long type Ironman, reste un accomplissement personnel rare. C'est une fierté simple, un cap perso.</p>
<h3>Un sport qui fait voyager et ouvre le terrain de jeu</h3>

<p>Ce que j'ai le plus aimé, c'est l'exploration. Le vélo t'emmène loin : des sorties de 60 à 100 km te font découvrir des routes et des coins proches de chez toi que tu n'aurais jamais pris en voiture. Tu changes d'horizon, tu sors du quotidien, et tu reviens avec des paysages plein la tête.</p>
<p>Tu voyages aussi pour faire des compétitions. Un ami part en vacances en fonction de son futur Ironman : il arrive sur place 2 semaines avant, au moment où le volume d'entraînement diminue. Il en profite avec sa famille et les a avec lui le jour J. Tout le monde est gagnant 😊</p>
<figure>
  <img src="/blog/img/ironman-nice.jpg" alt="ironman nice vue de la ligne d'arrivé" class="content-img" loading="lazy">
  <figcaption>Ironman Nice : vue de la ligne d'arrivée.</figcaption>
</figure>
<h3>Des progrès rapides quand on débute</h3>
<p>Quand tu commences, les progrès sont les plus rapides. Tu vas découvrir les 3 sports, ou au moins l'un d'entre eux, et forcément bien progresser dans chacun si tu débutes. Tu vas même peut-être te trouver un point fort inattendu.</p>
<p>Pour ma part, je courais depuis 8 ans et j'ai découvert que je n'étais pas mauvais en vélo, même si je suis assez lourd. Pour la natation, je savais que mon niveau était très bas et surtout aucune gestion de la respiration. Je m'arrêtais toutes les 2 longueurs... Ça a été rattrapé en 3-4 séances techniques, actuellement j'ai encore une allure assez lente par rapport au niveau moyen sur Triathlon L mais la progression est constante.</p>
<h3>Un état d'esprit bienveillant et une vraie communauté</h3>
<p>Le triathlon est un sport individuel, mais la communauté est très soudée. En compétition, tu vivras des moments d'émotion incroyables. Selon l'organisation, l'ambiance peut être vraiment dingue, surtout sur un format long ou un vrai défi. Je te conseille de choisir une course qui en vaut le coup pour vivre cette sensation à fond. Et si tu as accès à un club, c'est encore mieux : sorties longues, objectifs partagés, et une motivation qui grimpe quand tu t'entraînes en groupe. Petit bonus : en club, tu progresses plus vite en natation grâce aux retours techniques et au rythme collectif.</p>

<h2 id="format-choisir">Quel format de triathlon choisir pour commencer ?</h2>
<h3>XS, Sprint ou Olympique : quel format choisir ?</h3>
<p>La réponse dépend vraiment de ton contexte. Un format XS, c'est l'idéal pour découvrir : tu testes les transitions, tu comprends ta cadence, et tu n'as pas de prise de tête. Un Sprint est court mais efficace, et même les athlètes expérimentés s'y retrouvent grâce aux transitions optimisées.</p>
<p>Personnellement, j'ai commencé sur un format L car j'avais déjà de l'endurance en course à pied. Commencer le vélo à ce moment-là m'a permis de découvrir que j'avais une bonne capacité en cyclisme. La natation, c'est une autre histoire, mais ça s'apprend.</p>
<p>En règle générale, pour un premier triathlon : choisis un petit format, pas cher, histoire de le vivre comme une vraie découverte plutôt qu'une épreuve.</p>
<h3>Le temps disponible : le vrai critère décisif</h3>
<p>Le facteur principal, c'est le temps que tu peux consacrer chaque semaine. Si tu as 2 à 3 h par semaine, un Sprint est parfait. Si tu peux monter à 5-6 h, un Olympique devient accessible. Avec 14 h par semaine, un Ironman est techniquement possible en premier triathlon, mais attention : partir sur une très longue distance peut te dégoûter du sport si tu la "subis" plutôt que de la "vivre". Mieux vaut progresser progressivement.</p>

<div class="tip row">
  <img src="/blog/img/distance-triathlon.webp" alt="Guide des distances triathlon" class="content-img" loading="lazy">
  <div>
    <h4>📏 Comprendre les distances</h4>
    <p>
      <strong>XS • Sprint • Olympique • Half • Full Ironman</strong>
    </p>
    <p class="good">
      Comparatif complet des formats : temps d'entraînement, budget, progression et conseils pour choisir celui qui te convient.
    </p>
    <a href="/blog/distances-triathlon-guide-complet">
      Voir le guide complet →
    </a>
  </div>
</div>

<h2 id="equipement">Équipement nécessaire pour débuter le triathlon</h2>
<h3>L'essentiel pour commencer sans exploser le budget</h3>
<p>En triathlon, tu vas vite comprendre que la discipline qui fait exploser le budget, c'est le vélo. On va faire simple et clair, avec l'essentiel par sport. Pour un <a href="/blog/budget-triathlon-2026-guide-ultime">chiffrage complet par distance</a>, consulte notre guide budget.</p>
<ul>
  <li><strong>Natation</strong> : un maillot type speedo, une bonne paire de lunettes (avec verres UV, utile en eau libre) et un bonnet bien visible. Pour la combi néoprène, un modèle Decathlon suffit largement pour débuter. Ajoute une bouée de sécurité pour l'eau libre : c'est indispensable, et pratique pour glisser tes affaires quand tu nages seul.</li>
  <li>
    <div class="info">
      <div class="row">
        <p>Exemples produits natation</p>
        <p>*liens affiliés Amazon</p>
      </div>
      <div class="cards">
        <a href="https://link.amazon/B0bhCYUpf" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/61IIBmbGv8L._AC_SL1500_.jpg" alt="Lunettes eau libre" class="product-img" loading="lazy">
            <p>Lunettes eau libre</p>
            <p>Verres UV + bon confort</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
        <a href="https://link.amazon/B0jfOEjdR" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/51e-u3BAvML._AC_SL1500_.jpg" alt="Bonnet Arena silicone" class="product-img" loading="lazy">
            <p>Bonnet Arena silicone</p>
            <p>Visibilite en eau libre</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
        <a href="https://link.amazon/B07UdrLrb" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/51SNgy+6y6L._AC_SL1200_.jpg" alt="Bouee de securite" class="product-img" loading="lazy">
            <p>Bouée de sécurité</p>
            <p>Indispensable en solo</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </li>
  <li><strong>Course à pied</strong> : une paire de chaussures confortable, un short ou collant, un t-shirt et une casquette si ça cogne. Des lunettes de vitesse pour être encore plus rapide ! 😂</li>
  <li>
    <p class="mid"><strong>Note sur les lunettes :</strong> Les paires en exemple sont haut de gamme, mais elles en valent l'investissement. Une bonne paire de lunettes est utile aussi en vélo : l'accroche au visage, la protection UV et le maintien affectent vraiment ton confort.</p>
  </li>
  <li>
    <div class="info">
      <div class="row">
        <p>Exemples produits running</p>
        <p>*liens affiliés Amazon</p>
      </div>
      <div class="cards">
        <a href="https://link.amazon/B016R1j9N" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/51aBsg4-JTL._AC_SY695_.jpg" alt="Hoka Mach 5" class="product-img" loading="lazy">
            <p>Hoka Mach 5</p>
            <p>Chaussure réactive</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
        <a href="https://link.amazon/B0bUf2MPl" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/81VjEyKWSHL._AC_SL1500_.jpg" alt="Casquette Salomon Shakeout" class="product-img" loading="lazy">
            <p>Casquette Salomon Shakeout</p>
            <p>Légère avec visière</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
        <a href="https://link.amazon/B020F9BdQ" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/51bLzLgM6CS._AC_SL1500_.jpg" alt="Lunettes Oakley" class="product-img" loading="lazy">
            <p>Lunettes Oakley</p>
            <p>Protection UV totale</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </li>
  <li><strong>Vélo</strong> : c'est le gros sujet. Pour débuter, un vélo de route suffit largement. Le vélo chrono est inutile si tu ne fais pas uniquement des formats L/XL, et il est souvent interdit quand le drafting est autorisé. Petit budget ? Un <a href="https://buycycle.com/" target="_blank" rel="noopener noreferrer">vélo d'occasion</a> en frein à jante reste le plus accessible. L'avantage : moins cher à l'achat et à l'entretien. L'inconvénient : upgrader des roues en frein patin sera plus limité qu'en disque, mais pour débuter c'est parfait.
  <br>
  Pour la position, un bike fit n'est pas obligatoire au début, mais régler ta hauteur de selle et ton recul évite 80 % des douleurs (au moins se renseigner, se faire aider ou même YouTube est ton ami). Niveau équipement : un cuissard correct, un maillot avec de vraies poches, et un casque suffisent. Les chaussures automatiques sont, pour moi, à prendre dès le début : tes pédales auront des cales, c'est un vrai game changer dans la façon de pédaler. Autant prendre le bon mouvement dès le début (pousser/tirer).</li>
  <li>
    <div class="info">
      <div class="row">
        <p>Exemples produits vélo</p>
        <p>*liens affiliés Amazon</p>
      </div>
      <div class="cards">
        <a href="https://link.amazon/B0c3fX1wy" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/71h1OUKWxcL._AC_SL1500_.jpg" alt="Casque Abus" class="product-img" loading="lazy">
            <p>Casque Abus</p>
            <p>Sécurité et confort</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
        <a href="https://link.amazon/B0azbCMSl" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/71e3jt74RzL._AC_SX679_.jpg" alt="Cuissard rembourré" class="product-img" loading="lazy">
            <p>Cuissard rembourré</p>
            <p>Confort long distance</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
        <a href="https://link.amazon/B01Y7US6o" rel="sponsored noopener noreferrer" target="_blank">
          <div class="product">
            <img src="https://m.media-amazon.com/images/I/711b2awj+BL._AC_SX679_.jpg" alt="Maillot cycliste" class="product-img" loading="lazy">
            <p>Maillot cycliste</p>
            <p>Respirant avec poches</p>
            <div>
              <span>Voir →</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </li>
</ul>
<h3>Ce qui peut vraiment faire la différence</h3>
<p>Dans l'équipement "bonus" qui sert pour les trois sports, la trifonction change tout. Une marque reconnue et un modèle autour de 100 euros, ça se trouve. Une montre multisport est aussi un gros plus : elle gère natation, vélo et course en une seule séance. Perso, ma montre a un bracelet quick release et j'ai fixé une attache de cadran sur mon vélo : en deux secondes, elle devient mon GPS vélo, même sur des sorties de 100 km. Le GPS vélo est donc optionnel si ta montre fait déjà le boulot, mais il devient pratique si tu veux un écran plus grand. Côté nutrition, ça dépendra surtout de la distance : sur un Sprint tu peux rester simple, sur un format long c'est un vrai sujet à préparer.</p>
<div class="info">
  <div class="row">
    <p>Équipement bonus - meilleure qualité/fonctionnalité/prix</p>
    <p>*liens affiliés Amazon (sauf trifonction)</p>
  </div>
  <div class="cards">
    <a href="https://link.amazon/B0fySkVhZ" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/71NC77GMLVL._AC_SL1500_.jpg" alt="Montre triathlon haut de gamme" class="product-img" loading="lazy">
        <p>Forerunner 965</p>
        <p>Montre triathlon</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B06hbFZoU" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/61-4nSEkgrL._AC_SL1500_.jpg" alt="Garmin Edge 530" class="product-img" loading="lazy">
        <p>Garmin Edge 530</p>
        <p>GPS cyclisme pure</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://ap3x.eu/fr-eu/products/trifonction-personnalisee" target="_blank" rel="noopener noreferrer">
      <div class="product">
        <img src="https://ap3x.eu/cdn/shop/files/Sans_titre-1_95ac9bc4-c4c4-4777-a692-18ac51225099.jpg?v=1746486468&amp;width=2000" alt="Trifonction AP3X personnalisée" class="product-img" loading="lazy">
        <p>Trifonction AP3X</p>
        <p>Personnalisable</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<h2 id="entrainement">Comment s'entraîner pour son premier triathlon ?</h2>
<h3>La base : minimum 3 séances par semaine</h3>
<p>Le minimum, c'est de pratiquer les 3 sports chaque semaine. Si tu débutes, tu vas devoir consacrer tes premières semaines à la technique, surtout en natation : c'est le plus compliqué quand on part de zéro. Ensuite, la gestion du vélo avec les cales automatiques demande aussi un peu d'habitude. La course à pied reste la plus simple car la plus accessible en général.</p>
<p>Si tu débutes, je te conseille de partir sur un format Sprint pour ta première course. Notre programme gratuit te guide semaine après semaine :</p>

<h3>Le mix qui fait progresser vite</h3>
<p>Alterne endurance fondamentale et séances un peu plus soutenues (fractionné court ou tempo). Pas besoin d'être expert : l'essentiel est la régularité et une charge progressive. Une séance longue le weekend, deux séances techniques en semaine, et tu progresses déjà bien.</p>
<p>Si tu veux aller plus loin et structurer un vrai plan sur mesure, notre guide complet te donne toutes les clés :</p>

<!--COACHING-->

<h2 id="tests-utiles">Tests utiles pour bien démarrer en triathlon(et éviter les erreurs)</h2>
<h3>VMA et FTP : deux repères simples et efficaces</h3>
<p>Les plans sont toujours calculés sur des données précises. Quand tu débutes, ces données évoluent vite, donc il faut les réévaluer régulièrement. La VMA te sert à caler tes allures de course à pied. La FTP te donne une base claire pour tes zones de puissance en vélo. En pratique, refais un test toutes les 6 à 8 semaines pour rester juste.</p>
<p><strong>VMA (course à pied)</strong> : c'est ta vitesse maximale aérobie. Tu peux l'estimer avec un test de 6 minutes (distance parcourue) ou un demi-Cooper (distance en 6 min). Ensuite, tu déduis des allures simples : endurance fondamentale autour de 65-75 % VMA, allure tempo vers 80-85 %, fractionné court entre 95-105 %.</p>
<p><strong>FTP (vélo)</strong> : c'est la puissance moyenne que tu peux tenir environ 1 heure. Le test le plus courant est un effort de 20 minutes à bloc, puis tu prends 95 % de la puissance moyenne pour estimer ta FTP. Tu obtiens ensuite tes zones : endurance (zone 2), tempo (zone 3) et seuil (zone 4), ce qui te permet d'éviter le piège du « trop vite trop tôt ».</p>
<p>Tu peux commencer avec un test VMA simple et un test FTP 20 minutes. On a détaillé tout ça ici : Guide VMA et <a href="/blog/comprendre-la-ftp-en-velo">Comprendre la FTP</a>.</p>
<h3>Le test de vitesse critique en natation</h3>
<p>Le test 400 m en natation est utile pour caler tes allures, comme en course et en vélo.</p>
<p><strong>CSS (Critical Swim Speed)</strong> : c'est ton allure de référence en natation. Méthode simple : nage un 400 m à fond, puis un 200 m à fond (avec récupération complète). Note les temps en secondes : Temps en secondes pour 400m et en secondes pour 200m. Calcule ensuite la différence, puis divise par 2.
<br>
Le résultat te donne ton temps moyen pour 100 m. Exemple : 400 m en 7'20 (440 s) et 200 m en 3'30 (210 s) → (440-210)/2 = 115 s, soit 1'55/100 m. Tu utilises ensuite cette allure pour calibrer tes séances (endurance, tempo, séries plus rapides).</p>
<figure>
  <img src="/blog/img/natation.jpg" alt="Sprint natation entre 2 nageurs" class="content-img" loading="lazy">
  <figcaption>Sprint natation entre 2 nageurs.</figcaption>
</figure>
<h3>⚠️ Piège à éviter pour les débutants</h3>
<p>Si tu pars vraiment de zéro, je te conseille de <strong>ne pas faire immédiatement</strong> ces 3 tests. Pourquoi ? Ils sont très exigeants et le résultat sera faussé si tu n'as pas l'habitude de te mettre "dans le rouge". Le risque : partir trop fort et craquer en cours de route, ce qui invalide le test.</p>
<p>Avant de passer les tests VMA, FTP et CSS, crée d'abord une base d'endurance dans les 3 sports : capable de courir au moins 20 minutes sans t'arrêter, 40 minutes de vélo non-stop, 600 m de natation sans pause. Ça peut sembler simple, mais c'est cette base qui fait la différence. Me concernant : avec une VMA de 16 et l'habitude de courrir, je suis quand même en souffrance totale dès le 3e/6e tour de piste d'un test VMA. Le mental et l'habitude doivent être là.</p>
<p>Entre-temps, entraîne-toi à la sensation avec une échelle de 1 à 10 : endurance autour de 6/10, tempo de course à 8/10, intervalles courts à 10/10. C'est moins optimisé que les tests, mais ce n'est pas grave. Ces quelques semaines avant les vrais tests suffiront pour caler tes allures.</p>

<h2 id="choisir-course">Comment choisir sa première course ?</h2>
<h3>Le triptyque simple : date, accès, profil</h3>
<p>Choisis une compétition <strong>proche de chez toi</strong>. C'est déjà un facteur stress éliminé : moins de trajet matériel, moins de stress logistique. Cherche un triathlon <strong>pas trop cher</strong>, idéalement un format Sprint dans 8 à 12 semaines. Regarde le profil du parcours : terrain plat, eau non agitée et pas trop froide si possible. Pourquoi ? Si tu n'as pas encore de combinaison néoprène, c'est ok. Et sache que certains triathlon Sprint proposent même la natation en bassin, ce qui enlève une grosse source d'angoisse pour ta première fois.</p>
<h3>Vérifier les détails avant d'acheter ton dossard</h3>
<p>Avant de finaliser ton inscription, prends le temps de vérifier quelques points essentiels. Lis bien le règlement de la course : tu devras aussi payer une licence triathlon d'un jour (les organisateurs t'expliquent tout lors de l'inscription, pas de stress).</p>
<p>Voici les points à checker :</p>
<ul>
  <li><strong>Type de vélo autorisé</strong> : un vélo de route passe partout, mais ne t'inscris pas par erreur sur un cross triathlon si tu n'as pas de VTT !</li>
  <li><strong>Combinaison néoprène</strong> : obligatoire ou autorisée selon la température de l'eau. Compare avec les éditions précédentes pour anticiper.</li>
  <li><strong>Disponibilité complète</strong> : garde ton weekend entier de libre. Certaines courses imposent d'amener ton vélo la veille, et des briefings de sécurité peuvent avoir lieu le jour J-1.</li>
</ul>
<p>Si tu as choisi un triathlon proche de chez toi comme conseillé, toute cette logistique reste gérable facilement.</p>

<h2 id="erreurs">Les erreurs fréquentes des débutants (et comment les éviter)</h2>
<h3>En faire trop, trop vite</h3>
<p>La blessure arrive souvent quand on veut aller trop vite. Passer de 0 à 8 heures d'entraînement par semaine, c'est la meilleure façon de se casser. Garde une progression lente : <strong>+10% maximum de volume par semaine</strong>, et intègre une semaine de récupération allégée toutes les 3 à 4 semaines. Ton corps a besoin de temps pour s'adapter à la charge.</p>
<p>N'oublie pas le renforcement musculaire : 1 à 2 séances par semaine deviennent indispensables dès que tu montes en volume. C'est ta meilleure assurance contre les blessures.</p>
<h3>Sous-estimer la natation et les transitions</h3>
<p>La natation est la partie la plus technique. Faire quelques séances techniques t'évite de paniquer le jour J. Pense aussi à travailler les transitions : 5 minutes bien gérées valent parfois 1 km de course. Installe ton coin dans le parc à vélos, visualise les gestes, et répète-les une ou deux fois à l'entraînement.</p>
<figure>
  <img src="/blog/img/transition-velo.jpg" alt="Parc de transition vélo à course à pied la T2" class="content-img" loading="lazy">
  <figcaption> T2, déposer le vélo pour passer sur le run.</figcaption>
</figure>
<h3>Se perdre dans le matériel</h3>
<p>Le piège du matos haut de gamme : dépenser 5 000 euros dans un vélo alors que tu débutes, ce n'est pas ce qui te fera progresser. Un bon vélo d'occasion bien réglé fait largement l'affaire pour commencer. Concentre-toi sur la constance, la technique et la nutrition : c'est là que tu gagneras vraiment du temps.</p>
<p>Je vais être direct car il faut marquer les esprits : si tu veux gagner 2 kg sur ton vélo pour 2 000 euros alors que tu as toi-même du poids à perdre, autant travailler sur ton corps gratuitement plutôt que sur le vélo. Je parle de cas extrêmes ici, mais l'idée est là : sois logique dans tes priorités. Pareil pour un vélo ultra-profilé, ça fait des différences qu'à une certaine vitesse constante.</p>
<p>Si tu stagnes, investir dans quelques séances avec un coach ou un bike fit te fera progresser 10 fois plus qu'un nouveau vélo. Le matériel suit la progression, pas l'inverse. Après, si tu as un budget all-in et que tu es passionné, 0 frein 😊. 
<br> Mais pour débuter, garde les priorités dans l'ordre : entraînement &gt; technique &gt; matériel.</p>

<h2 id="faq">FAQ - Débuter le triathlon</h2>

<!--FAQ-->
`,
};
