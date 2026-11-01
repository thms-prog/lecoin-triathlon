import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "transitions-triathlon-guide-complet",
  title: "Les transitions en triathlon : guide complet T1 et T2",
  seoTitle: "Transitions triathlon : guide complet T1 et T2",
  description: "Maîtrise T1 et T2 en triathlon : organisation de ta zone, gestes clés, règles à connaître, techniques avancées et erreurs à éviter pour gagner en course.",
  keywords: ["transition triathlon","T1 T2 triathlon","zone de transition triathlon","transition triathlon débutant","réussir ses transitions triathlon","transition natation vélo triathlon","transition vélo course triathlon","4e discipline triathlon","brick workout triathlon","chaussures clipées triathlon"],
  date: "2026-04-27",
  dateModified: "2026-11-01",
  category: "Course",
  image: "/demo/blog/transitions.jpg",
  coaching: {
    title: "Des enchaînements dans ta semaine, pas seulement le jour J",
    text: "Ton coach intègre des séances vélo-course à ta préparation, avec une progression jusqu'à la course.",
  },
  faq: [
    {
      "q": "Qu'est-ce que la zone de transition en triathlon ?",
      "a": "La zone de transition est l'espace où les triathlètes rangent leur matériel entre les trois disciplines. C'est là que se font T1 (passage natation → vélo) et T2 (passage vélo → course à pied). Le chronomètre ne s'arrête jamais pendant les transitions."
    },
    {
      "q": "Quelle est la règle la plus importante en transition ?",
      "a": "Le casque doit être mis ET attaché AVANT de toucher ou de déplacer ton vélo. Ne pas respecter cette règle entraîne une disqualification immédiate. C'est la règle numéro un, sans exception."
    },
    {
      "q": "Comment aller plus vite en transition ?",
      "a": "Les gains viennent de la préparation (matériel bien organisé, repères visuels, casque à l'envers sur le guidon), de l'équipement (lacets élastiques, chaussures pré-clipées, vaseline sur les chevilles) et de l'entraînement régulier des enchaînements via des brick workouts."
    }
  ],
  content: `
<p>Tu peux nager proprement, rouler fort et courir vite mais perdre plusieurs minutes en transition parce que tu ne savais pas où regarder, que ton casque était coincé ou que ta combinaison ne voulait pas s'ouvrir. En triathlon, <strong>les transitions ne sont pas un entre-deux</strong>. Ce sont des segments à part entière, chronométrés du premier au dernier centième de seconde.</p>

<p>On parle souvent de la transition comme de la <strong>« 4e discipline »</strong> du triathlon, et ce n'est pas une métaphore. Une T1 ou une T2 ratée peut effacer une belle natation ou une bonne montée en vélo. À l'inverse, une transition rapide et fluide peut te faire gagner du terrain sur des concurrents qui nagent ou roulent mieux que toi. C'est l'un des rares endroits en triathlon où les gains sont accessibles à tout le monde, quel que soit ton niveau.</p>

<p>Dans ce guide, on va couvrir tout ce qu'il faut savoir : comment organiser ta zone, enchaîner T1 et T2 geste par geste, les règles à ne jamais oublier sous peine de disqualification, les techniques qui font gagner des secondes, et comment intégrer l'entraînement des transitions dans ta préparation.</p>

<nav>
  <h2>Sommaire</h2>
  <ul>
    <li>⏱️ <a href="#pourquoi">Pourquoi les transitions font gagner (ou perdre) une course</a></li>
    <li>📋 <a href="#regles">Les règles à connaître absolument</a></li>
    <li>🎒 <a href="#avant">Tout se joue avant le départ : préparer sa zone</a></li>
    <li>🏊 <a href="#t1">T1 : de la natation au vélo</a></li>
    <li>🚴 <a href="#t2">T2 : du vélo à la course à pied</a></li>
    <li>⚡ <a href="#avance">Les techniques qui font gagner des secondes</a></li>
    <li>🔁 <a href="#entrainement">Comment entraîner ses transitions</a></li>
    <li>❌ <a href="#erreurs">Les erreurs classiques à éviter</a></li>
    <li>✅ <a href="#checklist">Checklist complète pour le jour de course</a></li>
    <li>❓ <a href="#faq">FAQ</a></li>
  </ul>
</nav>

<h2 id="pourquoi">Pourquoi les transitions font gagner (ou perdre) une course</h2>

<p>En triathlon sprint, une T1 et une T2 bien exécutées peuvent représenter <strong>1 à 3 minutes de gagnées</strong> par rapport à un concurrent de même niveau physique qui ne les a pas préparées. Sur une course qui dure 1h15, c'est considérable. En triathlon olympique ou en 70.3, les marges sont différentes mais l'impact reste réel.</p>

<p>La pro américaine Heather Jackson l'a dit directement : <em>"J'ai gagné une course parce que j'étais plus rapide en transition que la fille arrivée deuxième."</em> Ce n'est pas une anecdote isolée. Dans le peloton amateur, les transitions sont souvent l'endroit où se creusent les vrais écarts, pas parce que les gens sont lents physiquement, mais parce qu'ils ne savent pas quoi faire.</p>

<div>
  <img src="https://cdn.triathlete.com/wp-content/uploads/2016/07/HeatherJacksonIMLP_RW.jpg?auto=webp&amp;width=1200&amp;quality=75&amp;fit=cover" alt="Heather Jackson en transition à l'Ironman Lake Placid" class="content-img" loading="lazy">
  <p>Heather Jackson — Ironman Lake Placid · © Triathlete.com</p>
</div>

<p>La bonne nouvelle, c'est que contrairement à ta VMA ou ta FTP qui demandent des mois de travail pour progresser, <strong>les transitions s'améliorent très vite</strong>. Il suffit de comprendre la séquence, de l'organiser correctement et de la répéter. En quelques semaines, tu peux gagner du temps sans changer un gramme de ta condition physique.</p>

<p>Enfin, les transitions comptent d'autant plus que la distance est courte. En sprint, chaque seconde pèse lourd. En Ironman, les transitions sont plus longues structurellement (sacs séparés, tente de changement) et l'enjeu est davantage de ne pas se tromper que d'aller vite. On y reviendra discipline par discipline.</p>

<h2 id="regles">Les règles à connaître absolument</h2>

<p>Avant de parler de technique, voilà les règles que tout triathlète doit connaître par cœur. Les ignorer, même par inadvertance, peut coûter une pénalité ou une disqualification.</p>

<div class="warn">
  <p class="bad">🚨 La règle numéro un : le casque</p>
  <p class="bad">Ton casque doit être mis <strong>ET la jugulaire attachée</strong> avant de toucher ou de déplacer ton vélo. Pas une main sur le guidon d'abord. Pas le casque posé sur la tête non attaché. Casque sur la tête, jugulaire cliquée, puis tu touches le vélo. Ne pas respecter cette règle = <strong>disqualification immédiate</strong>, sans appel. C'est la règle la plus appliquée par les juges de course.</p>
</div>

<ul>
  <li><strong>Ne pas monter sur le vélo avant la ligne de montée désignée.</strong> Chaque course a une ligne clairement marquée. Tu peux courir avec ton vélo, mais tu ne peux pédaler qu'après l'avoir franchie. Idem à l'arrivée : tu descends du vélo avant la ligne de démontage, pas après.</li>
  <li><strong>Le casque reste sur la tête jusqu'à ce que ton vélo soit raccroché au rack.</strong> En T2, tu ne retires pas ton casque avant d'avoir posé le vélo. Même chose : règle appliquée.</li>
  <li><strong>La zone de transition est fermée aux supporters.</strong> Personne ne peut t'aider depuis l'extérieur. Tu es seul avec ton matériel, c'est pour ça qu'il faut tout avoir préparé toi-même.</li>
  <li><strong>En Ironman 140.6</strong>, le système fonctionne différemment : tu as des sacs de transition séparés (T1 bag, T2 bag) déposés la veille, et une tente de changement. La logique est la même mais l'organisation est plus complexe, on y reviendra dans la section spécifique.</li>
</ul>

<div>
  <img src="https://cdn.lepape-info.com/media/2017/01/Transition-Triathlon.jpg" alt="Zone de transition triathlon" class="content-img" loading="lazy">
  <p>Zone de transition · © Lepape-Info</p>
</div>

<h2 id="avant">Tout se joue avant le départ : préparer sa zone de transition</h2>

<p>Une transition rapide commence des heures avant le coup de pistolet. <strong>La qualité de ta préparation le matin de la course détermine directement ta fluidité en T1 et T2.</strong> Un emplacement mal organisé, un repère introuvable, un casque mal placé et tu perds du temps là où tu aurais pu en gagner.</p>

<h3>Repérer ta position dans la zone</h3>

<p>La zone de transition peut regrouper des centaines de vélos. Le matin de la course, une fois ton vélo raccroché, prends le temps de <strong>compter les rangées depuis chaque entrée et chaque sortie</strong> de la zone pas seulement depuis l'entrée. En T1, tu arrives en courant depuis la natation, souvent sous l'adrénaline. En T2, tu arrives depuis le parc à vélos. Ces deux trajectoires ne sont pas les mêmes.</p>

<p>Attache un <strong>repère visuel coloré</strong> à ton emplacement : un élastique vif sur le rail du rack, une serviette de couleur bien visible au sol, ou un petit drapeau. Dans le chaos d'une transition avec 200 vélos noirs et gris, le cerveau a besoin d'un signal clair pour trouver son emplacement sans chercher.</p>

<h3>Organiser ton matériel dans l'ordre d'utilisation</h3>

<p>Le principe est simple : <strong>chaque objet doit être prêt à être utilisé dans l'ordre exact où tu en auras besoin</strong>. Rien ne doit être replié, coincé, retourné ou à chercher. Moins tu penses en transition, plus tu vas vite.</p>

<p>Voici comment disposer ton matériel :</p>

<ul>
  <li><strong>Casque :</strong> posé à l'envers sur le guidon (ouverture vers le haut), jugulaire dépliée et ouverte. Tu le retournes, tu le poses sur la tête et tu cliques.</li>
  <li><strong>Lunettes de soleil :</strong> rangées à l'intérieur du casque retourné. Elles sont là, elles ne traînent pas, tu les prends au même moment que le casque.</li>
  <li><strong>Ceinture dossard :</strong> posée sur le guidon ou sur la selle, dossard déjà attaché. Tu n'as qu'à la boucler autour de la taille en courant si nécessaire.</li>
  <li><strong>Chaussures de vélo :</strong> soit posées au sol devant la roue avant, ouverture vers l'extérieur ; soit déjà clipées aux pédales (technique avancée traitée plus loin).</li>
  <li><strong>Chaussures de course :</strong> posées au sol sous le vélo, lacets ouverts ou élastiques prêts, ouverture vers l'extérieur.</li>
  <li><strong>Nutrition et accessoires :</strong> bidons déjà sur le vélo, gels et barres dans la boîte à bento ou dans les poches de maillot. Ce qui est pour la course à pied est prêt au sol ou dans les poches.</li>
</ul>

<div class="tip">
  <p class="good">💡 La règle du minimum</p>
  <p class="good">Moins tu as d'objets en transition, moins tu as de décisions à prendre. Chaque objet supplémentaire est une occasion de perdre du temps. Si tu n'en as pas absolument besoin, laisse-le dans ton sac. Une serviette standard au sol suffit à délimiter ton espace pas besoin de seau, de chaise ou d'un kit de survie.</p>
</div>

<h3>Préparer son vélo</h3>

<p>Ton vélo doit être prêt à partir dès que tu arrives. Vérifie ces points avant de quitter la zone :</p>

<ul>
  <li>Braquet adapté au départ, évite le grand plateau si tu pars sur une montée, tu auras du mal à clipper proprement.</li>
  <li>Bidons remplis et bien fixés.</li>
  <li>Compteur/GPS allumé ou prêt à démarrer.</li>
  <li>Pneus gonflés (à faire le matin même, pas la veille, la pression chute légèrement avec la température).</li>
  <li>Si tu utilises des chaussures pré-clipées : élastiques en place pour maintenir les chaussures horizontales.</li>
</ul>

<div>
  <img src="https://i.pinimg.com/736x/06/79/02/067902b6075f2c789e9b12c95d0c02e8.jpg" alt="Préparation vélo zone de transition triathlon" class="content-img" loading="lazy">
</div>

<h2 id="t1">T1 : de la natation au vélo</h2>

<p>T1, c'est le passage le plus brutal du triathlon. Tu passes d'une position horizontale dans l'eau à une course à pied, puis à un effort cycliste tout ça en quelques minutes. L'adrénaline est au maximum, le cœur monte en flèche, et le cerveau doit gérer une séquence précise pendant que le corps sort de l'eau. C'est pour ça qu'il faut que cette séquence soit <strong>automatique</strong>.</p>

<h3>Dans les dernières longueurs de natation</h3>

<p>La préparation de T1 commence avant de sortir de l'eau. Dans les <strong>5 dernières minutes de natation</strong>, active progressivement les jambes avec des battements plus intenses. Tes membres inférieurs ont été peu sollicités, les remettre en route avant la sortie de l'eau réduit la lourdeur dans les premières secondes de course.</p>

<p>Dans les derniers mètres dans l'eau, quand tu commence à marcher/courir, <strong>pousse tes lunettes sur ton bonnet</strong>, commence à dézipper ta combinaison si tu en portes une. Certains sortent les deux bras de la combinaison avant même d'être sur le sol hors de l'eau, optimise un maximum.</p>

<h3>La sortie de l'eau et la course vers la zone</h3>

<p>Dès que tu es hors de l'eau, <strong>cours</strong>. Le réflexe de marcher les premières secondes coûte du temps. Si tu as la tête qui tourne à cause de la transition horizontale → verticale, c'est normal ça passe en quelques secondes, essaie de vider l'eau qui serait rentrée dans tes oreilles pour avoir ça peut jouer sur ton équilibre.</p>

<p>Pendant que tu cours vers la zone, descends ta combinaison jusqu'aux hanches. Bonnet et lunettes dans une main, ou posés sur la tête jusqu'à ton emplacement ou bien personnellement je les cales dans une manche de ma combi. <strong>Ne t'arrête pas pour enlever la combinaison avant d'arriver à ta zone de T1</strong> fais-le en marchant ou en trottinant jusqu'à ton emplacement.</p>

<div class="info">
  <p>Le petit point technique : retirer la combinaison rapidement</p>
  <p>La combinaison néoprène colle à la peau mouillée, surtout aux poignets et aux chevilles. L'astuce pro : avant de la mettre, enduis tes <strong>poignets et tes chevilles de vaseline ou d'huile pour bébé</strong>. La combinaison glisse beaucoup plus facilement. Pour la descendre des jambes, utilise la technique du pied qui marche dessus : pose un pied sur la combinaison au niveau de la cheville opposée et tire, elle sortira en un mouvement. Pratique ça chez toi avant la course.</p>
</div>

<h3>La séquence à ton emplacement</h3>

<p>Une fois à ton vélo, voici la séquence à respecter dans l'ordre :</p>

<ol>
  <li>Pose bonnet et lunettes de natation au sol</li>
  <li>Finit d'enlever la combinaison et laisse-la au sol</li>
  <li><strong>Mets ton casque ET attache la jugulaire</strong>, c'est le premier geste obligatoire</li>
  <li>Mets tes lunettes de soleil</li>
  <li>Mets ta ceinture dossard (dossard dans le dos pour le vélo)</li>
  <li>Chaussures de vélo, soit tu les mets au sol, soit elles sont déjà sur le vélo</li>
  <li>Prends ton vélo par le guidon ou la selle et <strong>cours</strong> jusqu'à la ligne de montée</li>
  <li>Monte sur le vélo après avoir franchi la ligne désignée</li>
</ol>

<p>Pas de chaussettes en sprint et en olympique pour la grande majorité des triathlètes, ça prend du temps et ça ne change pas grand-chose sur ces distances. Cependant, si en entraînement tu as mal réagi à cette technique, ne prends pas de risque. Pour ma part, au-dessus de 5 km sans chaussettes je sais que ça ne me correspond pas, j'ai les pieds qui s'abîment vite et l'habitude n'y change rien. Si tu as les pieds sensibles, mets du <strong>talc à l'intérieur de tes chaussures</strong> à l'avance : ça absorbe l'humidité et réduit les frottements sans avoir besoin de chaussettes.</p>

<div>
  <img src="https://rumilly-triathlon.fr/wp-content/uploads/2025/03/T1-RUN-4-FFWPU-scaled.jpg" alt="Transition T1 triathlon sortie natation" class="content-img" loading="lazy">
</div>

<h2 id="t2">T2 : du vélo à la course à pied</h2>

<p>T2 est généralement plus courte que T1. Moins de matériel à gérer, pas de combinaison à enlever. Mais elle a ses propres pièges, notamment la fatigue accumulée après le vélo et le changement de groupe musculaire qui rend les premières foulées très particulières.</p>

<h3>Les derniers kilomètres de vélo</h3>

<p>T2 commence avant d'entrer dans la zone. Dans les <strong>2 à 3 derniers kilomètres</strong>, augmente ta cadence de pédalage et diminue la puissance, tu vas réactiver une meilleur circulation dans les jambes, si t'étais en position aéro redresse toi, calme un peu les bpm pour ne pas arriver trop rincé pour la T2, c'est aussi le moment de desserrer légèrement tes chaussures dépendant de la technique que tu choisis pour sortir du vélo.</p>

<p>Commence à <strong>visualiser mentalement ta transition</strong> : où est ton rack, par quelle entrée tu arrives, la séquence exacte de tes gestes. Ce « film » mental ancre la séquence avant même d'être dans la zone.</p>

<h3>La descente de vélo et l'entrée en zone</h3>

<p>Tu descends du vélo <strong>avant la ligne de démontage</strong>, pas après. Puis tu cours vers ton emplacement en tenant ton vélo par la selle — cette prise est plus naturelle pour courir sans marcher sur les pédales. Attention : <strong>le casque reste attaché jusqu'à ce que le vélo soit sur le rack</strong>.</p>

<h3>La séquence à ton emplacement</h3>

<ol>
  <li>Accroche ton vélo au rack</li>
  <li>Enlève ton casque</li>
  <li>Enfile tes chaussures</li>
  <li>Retourne ta ceinture dossard sur le devant (le numéro doit être visible en course)</li>
  <li>Casquette ou visière si tu en portes une</li>
  <li>Nutrition pour la course si nécessaire, l'organisation propose normalement des ravitos sur le parcours</li>
  <li>Let's go</li>
</ol>

<div class="note">
  <p class="mid">⚠️ Les premières foulées vont sembler étranges</p>
  <p>Après le vélo, les jambes passent d'un mouvement circulaire à un mouvement linéaire. Les premières centaines de mètres de course sont souvent lourdes, voire douloureuses. C'est <strong>parfaitement normal</strong> c'est l'effet "jambes de bois" du triathlon. Ne panique pas, vas y au mental, penses à toute ta préparation et pourquoi tu le fais. Ça passe généralement après 500 m à 1 km. L'entraînement des enchaînements (brick workouts) réduit cet effet progressivement.</p>
</div>

<h3>T2 en Ironman 70.3 et 140.6</h3>

<p>Sur les longues distances, le format est différent. Tu déposes un <strong>sac T2</strong> la veille de la course avec tout ton matériel de course à pied. En T2, tu récupères ton sac, tu entres dans une zone spécifique de changement et tu te prépares. C'est plus lent mais aussi plus confortable, tu peux t'asseoir, mettre des chaussettes, prendre le temps de bien manger quelque chose. Sur un Ironman, aller vite en transition est utile mais pas primordial, mais ne pas faire d'erreur ça l'est.</p>

<div>
  <img src="https://www.sundried.com/cdn/shop/files/flying-dismount-transition-triathlon.jpg?v=1537516711" alt="Flying dismount triathlon transition vélo" class="content-img" loading="lazy">
</div>

<h2 id="avance">Les techniques qui font gagner des secondes</h2>

<p>Ces techniques sont réservées aux triathlètes qui ont déjà quelques courses dans les jambes et qui cherchent à optimiser leurs transitions. <strong>Ne les tente pas en première course</strong>, les risques de chute ou d'erreur coûtent plus de temps que ce que tu espères gagner.</p>

<h3>Les chaussures déjà clipées aux pédales</h3>

<p>Au lieu de mettre tes chaussures à ton emplacement, tu les attaches à l'avance directement sur les pédales. En T1, tu pars pieds nus, tu clippes une fois lancé sur le vélo. En T2, tu déclippes avant la ligne de démontage et tu laisses les chaussures sur le vélo.</p>

<p>Pour que les chaussures restent horizontales pendant que tu cours avec le vélo, utilise de petits <strong>élastiques</strong> tendus entre la chaussure et le cadre. L'élastique casse au premier tour de pédale, la chaussure tombe en position naturelle. Chaussure gauche attachée côté roue libre, chaussure droite côté dérailleur.</p>

<div class="info">
  <p>💡 Comment pratiquer cette technique</p>
  <p>Entraîne-toi d'abord sur une pelouse ou dans un parking vide, lentement. Le geste de glisser le pied dans la chaussure tout en pédalant s'apprend en quelques séances. Commence à basse vitesse, concentre-toi sur la fluidité du mouvement avant de chercher la rapidité. Une fois maîtrisée, cette technique fait gagner 15 à 30 secondes en T1 et T2 combinées.</p>
</div>

<div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZA_kF-WXiKySUfplRQTlCjG9B67cCq0Afw&amp;s" alt="Flying mount triathlon" class="content-img" loading="lazy">
</div>

<h3>Le flying mount et le flying dismount</h3>

<p>Le <strong>flying mount</strong> consiste à monter sur le vélo en mouvement d'un saut, sans s'arrêter. Le <strong>flying dismount</strong> c'est l'inverse : descendre du vélo en mouvement en passant une jambe par-dessus le cadre, puis courir avant même que le vélo ne soit arrêté. Ces techniques sont utilisées par les élites et les triathlètes expérimentés. Elles demandent plusieurs heures de pratique avant d'être fiables en course. <strong>Ne les tente jamais sans les avoir maîtrisées à l'entraînement</strong> — une chute en zone transition devant 200 personnes, c'est du temps perdu et une blessure potentielle.</p>

<div>
  <img src="https://images.giant-bicycles.com/h7pp3bjiycdetlwi3x16/preview.jpg" alt="Flying mount triathlon vélo en mouvement" class="content-img" loading="lazy">
</div>

<h2 id="entrainement">Comment entraîner ses transitions</h2>

<p>Les transitions s'entraînent. Le corps doit apprendre à enchaîner les efforts, à gérer le passage d'une position à l'autre, à courir avec des jambes fatiguées par le vélo. <strong>Cette adaptation ne vient pas toute seule</strong> : elle se construit séance après séance, pour la transition en elle même tu vas devoir travailler des drills, facilement trouvable sur youtube</p>

<h3>Les brick workouts : la base</h3>

<p>Un <strong>brick workout</strong> (ou séance brique) est une séance qui enchaîne deux disciplines sans récupération. Le plus courant et le plus important : vélo immédiatement suivi de course à pied.</p>

<p>Le minimum utile : après chaque sortie vélo ou home trainer, <strong>chausse directement et cours 15 à 20 minutes</strong>. Même à allure fondamentale. Ce seul geste, fait régulièrement, va considérablement réduire l'effet "jambes de bois" en course.</p>

<p>Pour aller plus loin, voici une structure de séance brique efficace :</p>

<ul>
  <li>10 min vélo en échauffement facile</li>
  <li>4 à 6 répétitions de : <strong>8 min vélo à allure course + 4 min course à allure endurance</strong></li>
  <li>10 min de retour au calme vélo</li>
</ul>

<p>L'enchaînement natation → vélo est plus difficile à reproduire à l'entraînement. Si tu as accès à une piscine proche d'un endroit où tu peux rouler, fais-le ponctuellement. Sinon, la visualisation et la pratique du retrait de combinaison à la maison font une vraie différence. Le plus important ne sera pas forcément le passage sur le vélo mais la sortie de l'eau, le passage du plan horizontal à vertical peut créer un désiquilibre, ce qui sera non négociable c'est de l'entrainement spécifique en eau libre avec retrait de combinaison en fin de nage, ça servra a se mettre en confiance pour le J-J</p>

<h3>La visualisation mentale</h3>

<p>Ferme les yeux et parcours mentalement ta transition, dans l'ordre exact. Tu sors de l'eau, tu cours, tu arrives à ton rack, tu identifies ton repère coloré, tu fais chaque geste dans l'ordre. <strong>Répéter cette séquence mentalement ancre les mêmes circuits neurologiques que la pratique physique.</strong> Les sportifs de haut niveau utilisent la visualisation systématiquement pas parce que c'est mystique, mais parce que ça marche, c'est du + il suffit d'écouter des podcast de sportif de haut niveau, même en dehors du triathlon, j'ai pour exemple le combattant de MMA Français Benoit St-Denis qui à une routine respiration et "image mental". </p>

<!--COACHING-->

<h2 id="erreurs">Les erreurs classiques à éviter</h2>

<h3>1. Toucher le vélo avant d'attacher le casque</h3>
<p>On l'a dit mais ça mérite d'être répété. C'est l'erreur la plus courante chez les débutants et la seule qui entraîne une disqualification immédiate. En T1, peu importe l'adrénaline : casque d'abord, vélo ensuite.</p>

<h3>2. Ne pas repérer sa position à l'avance</h3>
<p>Rentrer dans une zone avec 300 vélos en cherchant le sien visuellement peut coûter 30 secondes à 1 minute. Prends 5 minutes le matin pour faire le tour de la zone, compter les rangées depuis chaque point d'entrée/sortie, et poser ton repère coloré.</p>

<h3>3. Trop de matériel en zone</h3>
<p>Certains triathlètes arrivent avec une serviette géante, un seau, des chaussures supplémentaires, une banane, une veste au cas où. Chaque objet inutile est un obstacle potentiel. <strong>Ce que tu n'as pas en transition ne peut pas te ralentir.</strong> Réduis au strict nécessaire.</p>

<h3>4. Se précipiter et faire des erreurs</h3>
<p>L'adrénaline pousse à aller trop vite, ne pas confondre vitesse et précipitation. Tu rates le rack, tu mets le casque à l'envers, tu ne retrouves pas ta ceinture. Une transition méthodique et fluide est presque toujours plus rapide qu'une transition précipitée et chaotique. <strong>Calme, séquence, précision.</strong></p>

<h3>5. Monter sur le vélo trop tôt (ou descendre trop tard)</h3>
<p>Les lignes de montée et démontage sont clairement signalées. Les juges de course sont précisément positionnés à ces endroits. La pénalité de temps (souvent 1 ou 2 minutes) est beaucoup plus coûteuse que les quelques mètres gagnés.</p>

<h3>6. Ne jamais avoir pratiqué les transitions avant la course</h3>
<p>Beaucoup de triathlètes s'entraînent natation, vélo et course, mais ne s'entraînent jamais à enchaîner. Résultat : en T2, les jambes de bois les surprennent totalement, ils paniquent et perdent du temps. Un seul brick workout par semaine suffit à éviter ça.</p>

<h2 id="checklist">Checklist complète pour le jour de course</h2>

<p>Voici la checklist à passer en revue avant de quitter la zone de transition :</p>

<h3>Matériel T1 (natation → vélo)</h3>
<ul>
  <li>✅ Combinaison néoprène (si eau froide) — vaseline sur poignets et chevilles</li>
  <li>✅ Bonnet et lunettes de natation (fournis ou les tiens)</li>
  <li>✅ Casque à l'envers sur le guidon, jugulaire ouverte</li>
  <li>✅ Lunettes de soleil fitté sur le casque</li>
  <li>✅ Chaussures de vélo au sol ou clipées avec élastiques</li>
  <li>✅ Ceinture dossard sur le guidon, dossard dans le dos</li>
  <li>✅ Talc dans les chaussures si pas de chaussettes</li>
  <li>✅ Bidons remplis sur le vélo</li>
  <li>✅ Nutrition sur le vélo (gel, barre dans la boîte)</li>
  <li>✅ Repère coloré visible sur ton emplacement</li>
</ul>

<div class="info">
  <p>🏊→🚴 Kit T1 — Natation vers Vélo</p>
  <div class="cards">
    <a href="https://link.amazon/B0bhCYUpf" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/61IIBmbGv8L._AC_SL1500_.jpg" alt="Arena Air Speed Mirror" class="product-img" loading="lazy">
        <p>Arena Air Speed Mirror</p>
        <p>Lunettes eau libre, anti-buée</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B0c3fX1wy" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/712tk7-JZsL._AC_SX679_.jpg" alt="Casque Abus Macator" class="product-img" loading="lazy">
        <p>Casque Abus Macator</p>
        <p>Léger, bien ventilé</p>
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
  </div>
</div>

<h3>Matériel T2 (vélo → course à pied)</h3>
<ul>
  <li>✅ Chaussures de course lacets élastiques, ouverture vers l'extérieur</li>
  <li>✅ Casquette ou visière (optionnel)</li>
  <li>✅ Gels/nutrition pour la course si nécessaire</li>
  <li>✅ Lunettes de soleil (si pas déjà récupérées en T1)</li>
</ul>

<div class="info">
  <p>🚴→🏃 Kit T2 — Vélo vers Course</p>
  <div class="cards">
    <a href="https://link.amazon/B06sqhXeB" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51xT2l2IlzL._AC_SL1000_.jpg" alt="Ceinture porte-dossard" class="product-img" loading="lazy">
        <p>Ceinture porte-dossard</p>
        <p>Retourne pour le run</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
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

<h3>Vérifications avant de quitter la zone</h3>
<ul>
  <li>✅ Tu as compté les rangées depuis l'entrée T1 ET l'entrée T2</li>
  <li>✅ Tu connais le sens de circulation dans la zone</li>
  <li>✅ Tu as repéré les lignes de montée et démontage vélo</li>
  <li>✅ Ton vélo est au bon braquet pour le départ</li>
  <li>✅ Tu as fait le film mental de ta T1 et T2</li>
</ul>

<h2 id="faq">FAQ — Transitions en triathlon</h2>

<!--FAQ-->
`,
};
