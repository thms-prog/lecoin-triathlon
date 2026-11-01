import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
// Changements : styles en ligne retirés (le design vient de .article dans globals.css),
// encarts Club Tri-Lab remplacés par le coaching 1v1 et le matériel affilié.
export const article: Article = {
  slug: "plan-entrainement-triathlon-avec-chatgpt",
  title: "Faire son plan d'entraînement triathlon avec ChatGPT : le guide (prompts inclus)",
  seoTitle: "Plan triathlon avec ChatGPT : guide + prompts (2026)",
  description:
    "Comment demander un plan triathlon à ChatGPT : le prompt qui marche, ce qu'il produit vraiment, les 5 erreurs qui plombent le résultat, et quand l'IA ne suffit plus.",
  keywords: [
    "plan triathlon chatgpt",
    "plan entrainement triathlon avec ia",
    "faire son plan triathlon avec chatgpt",
    "prompt plan triathlon",
    "chatgpt plan ironman",
    "plan triathlon ia",
    "chatgpt entrainement triathlon",
    "generer plan triathlon chatgpt",
    "chatgpt plan 70.3",
    "plan sprint triathlon chatgpt",
    "prompt entrainement triathlon",
    "chatgpt coach triathlon",
  ],
  date: "2026-09-10",
  dateModified: "2026-11-01",
  category: "Entraînement",
  image: "/demo/blog/chatgpt.jpg",
  gear: [
    { asin: "B0FLQDCR7X", why: "Home trainer connecté : il mesure tes watts et te permet de faire ton test FTP à la maison." },
    { asin: "B0FBGDR81B", why: "Capteur de puissance sur pédales : tes vrais watts, aussi sur la route." },
    { asin: "B0BS1TN8QL", why: "Montre GPS : allure, cardio et chronos de référence pour tes tests 5 et 10 km." },
  ],
  faq: [
    {
      q: "Peut-on vraiment faire un plan d'entraînement triathlon avec ChatGPT ?",
      a: "Oui. ChatGPT génère sans problème une structure de plan cohérente sur plusieurs semaines : répartition natation / vélo / course, alternance intensité / endurance, semaines de décharge. Ses limites sont ailleurs : si vous lui donnez vos tests il chiffre les allures, mais avec un ratio générique souvent faux pour vous ; il invente les volumes quand vous ne lui donnez pas votre niveau ; il propose souvent trop d'intensité ; il ne connaît pas le parcours de votre course ; il ne s'adapte pas d'une semaine à l'autre. Un plan ChatGPT correct demande un prompt détaillé et plusieurs corrections à la main.",
    },
    {
      q: "Quel prompt utiliser pour un plan Ironman avec ChatGPT ?",
      a: "Le prompt doit contenir : la distance et la date exacte de la course, votre niveau chiffré (chronos récents en course, FTP vélo, temps au 100 m ou 400 m natation), le nombre de séances réalistes par semaine et vos créneaux, votre matériel (home trainer, capteur de puissance, montre), votre historique de blessures, et votre objectif (finir ou viser un chrono). Sans ces informations, ChatGPT produit un plan générique inexploitable. Le prompt complet est fourni dans cet article.",
    },
    {
      q: "ChatGPT calcule-t-il mes allures d'entraînement ?",
      a: "Oui, si vous lui donnez vos chronos et votre FTP : il sort alors des allures au kilomètre, des watts, un temps au 100 m. Mais il les déduit d'un ratio moyen, pas de votre physiologie. L'allure « facile » qu'il calcule est souvent trop rapide, ce qui fait courir toutes les séances d'endurance trop fort, sur des semaines. À recaler sur votre ressenti ou votre cardio.",
    },
    {
      q: "ChatGPT peut-il remplacer un coach de triathlon ?",
      a: "Non. ChatGPT construit un plan de départ, mais un coach fait autre chose : il adapte la charge chaque semaine selon votre fatigue, votre sommeil et vos imprévus, il ajuste après une séance ratée ou une maladie, il connaît le terrain de votre course, et il vous tient responsable. ChatGPT n'a aucune mémoire d'une conversation à l'autre : il ne sait pas que vous avez sauté deux séances la semaine dernière.",
    },
    {
      q: "ChatGPT se souvient-il de mes séances d'une semaine à l'autre ?",
      a: "Non, sauf si vous lui redonnez le contexte à chaque fois. Chaque nouvelle conversation repart de zéro. Même dans une conversation longue, il perd le fil du plan initial au bout de plusieurs échanges. En pratique, si vous voulez un suivi hebdomadaire, vous devez recoller tout l'historique à chaque prompt : votre plan, ce que vous avez fait, ce que vous avez ressenti.",
    },
    {
      q: "Quelle est la meilleure IA pour faire un plan d'entraînement triathlon ?",
      a: "ChatGPT reste le choix par défaut : c'est l'IA la plus utilisée, donc celle sur laquelle on trouve le plus d'exemples et de retours pour cet usage. Claude et Gemini donnent un résultat comparable et gèrent parfois mieux l'export en document ou en tableau (Google Sheets pour Gemini, artefact téléchargeable pour Claude). Sur le fond, les trois commettent les mêmes erreurs décrites ici : elles inventent votre niveau si vous ne le donnez pas, déduisent les allures d'un ratio moyen, mettent trop d'intensité et ne gardent pas votre plan en mémoire d'une conversation à l'autre. La méthode de cet article s'applique à n'importe laquelle.",
    },
    {
      q: "ChatGPT est-il gratuit pour faire un plan triathlon ?",
      a: "Oui, la version gratuite suffit pour générer un plan. L'abonnement payant (environ 20 € par mois) apporte un modèle plus fin et une conversation qui garde le fil plus longtemps, utile sur un plan de plusieurs mois, mais ce n'est pas indispensable. Dans tous les cas, prévoyez du temps pour relire et corriger le résultat.",
    },
    {
      q: "Combien de temps faut-il pour faire un plan triathlon avec ChatGPT ?",
      a: "Comptez 30 à 60 minutes : rassembler vos repères (chronos récents, FTP, temps au 100 m, créneaux disponibles), coller un prompt détaillé, puis faire deux ou trois allers-retours pour baisser l'intensité, recaler les allures faciles et vérifier les volumes. Demander le plan semaine par semaine plutôt qu'en un seul bloc évite d'avoir à tout reprendre ensuite.",
    },
  ],
  content: `
<div class="brief">
  <p class="brief-title">En bref</p>
  <p><strong>Oui, ChatGPT peut générer un plan d'entraînement triathlon</strong>, et la structure est correcte : combien de séances, comment les répartir, quand décharger. Il pèche sur trois points : les <strong>allures justes</strong> (il les chiffre à partir de tes tests, mais avec un ratio générique souvent faux, ce qui pousse à courir trop vite), l'<strong>intensité globale</strong> (trop élevée pour un premier objectif), et l'<strong>adaptation</strong> (il ne suit pas ta semaine réelle).</p>
  <p>Un bon plan avec ChatGPT tient en trois temps : un <strong>prompt détaillé</strong> (pas « fais-moi un plan Ironman »), <strong>plusieurs allers-retours</strong> pour baisser l'intensité et recaler les allures faciles, et une <strong>relecture critique</strong> de ce qu'il sort.</p>
</div>

<p class="aside">Pas envie de gérer tout ça toi-même ? <a href="/#coaching">Un vrai coach</a> le fait pour toi, sans un seul prompt.</p>

<nav class="toc" aria-label="Sommaire">
  <ul>
    <li><a href="#sait-faire">ChatGPT peut-il faire un plan d'entraînement triathlon ?</a></li>
    <li><a href="#prompt-base">Pourquoi « fais-moi un plan triathlon » ne suffit pas</a></li>
    <li><a href="#infos">Quelles infos donner à ChatGPT</a></li>
    <li><a href="#prompt-complet">Le prompt complet pour un plan triathlon (à copier)</a></li>
    <li><a href="#plan-complet-reel">Le plan complet généré par ChatGPT : ce qui cloche</a></li>
    <li><a href="#suivi-hebdo">Faire évoluer son plan ChatGPT chaque semaine</a></li>
    <li><a href="#erreurs">Les 5 erreurs à éviter avec un plan ChatGPT</a></li>
    <li><a href="#pas-remplacer">Ce que ChatGPT ne remplace pas</a></li>
    <li><a href="#vs">Plan ChatGPT ou coach de triathlon</a></li>
    <li><a href="#pour-qui">Pour qui ChatGPT suffit-il ?</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</nav>

<h2 id="sait-faire">ChatGPT peut-il faire un plan d'entraînement triathlon ?</h2>

<p>ChatGPT a lu des milliers de plans et d'articles de coaching : il en restitue une moyenne cohérente. Assez pour dégrossir, pas pour un plan qu'on suit tel quel.</p>

<div class="table-wrap">
<table>
  <thead>
    <tr><th>ChatGPT s'en sort bien</th><th>ChatGPT décroche</th></tr>
  </thead>
  <tbody>
    <tr><td class="good">Structure générale : nombre de séances, répartition des 3 sports, ratio endurance / intensité</td><td class="bad">Allures justes : il les chiffre si tu lui donnes tes tests, mais via un ratio générique souvent faux pour toi</td></tr>
    <tr><td class="good">Types de séances : sortie longue, seuil, VO2, technique, brique</td><td class="bad">Progression du volume : annoncée à +10 %/semaine, pas toujours respectée entre les phases</td></tr>
    <tr><td class="good">Vocabulaire et principes : surcompensation, spécificité, décharge</td><td class="bad">Périodisation adaptée à VOTRE course : parcours, dénivelé, chaleur, date</td></tr>
    <tr><td class="good">Idées de séances quand tu es en panne d'inspiration</td><td class="bad">Adaptation semaine à semaine : fatigue, maladie, séance ratée, imprévu</td></tr>
    <tr><td class="good">Explication du « pourquoi » d'une séance</td><td class="bad">Mémoire : il oublie ton plan et ton historique d'une conversation à l'autre</td></tr>
  </tbody>
</table>
</div>

<p>En clair : ChatGPT te donne un <strong>squelette</strong>. À toi de mettre les bons chiffres et de vérifier que l'ensemble tient debout, ce qui suppose de savoir quoi lui demander.</p>

<h2 id="prompt-base">Pourquoi « fais-moi un plan triathlon » ne suffit pas</h2>

<p>Voilà le prompt que la plupart des gens tapent en premier :</p>

<div class="prompt">
  <div class="prompt-head"><span>Prompt v1 · le minimum</span><button type="button" data-copy>Copier</button></div>
  <pre>Fais-moi un plan d'entraînement pour un triathlon 70.3 dans 4 mois. Je m'entraîne 5 fois par semaine.</pre>
</div>

<p>On a posé exactement ce prompt à ChatGPT, puis on lui a demandé « <em>ok fais-moi un tableau des 2 premières semaines</em> ». Voici sa réponse, condensée.</p>

<div class="ai-reply">
  <p class="ai-reply-head">Réponse de ChatGPT (extrait condensé)</p>
  <p>« <em>Je pars du principe que tu as déjà une base correcte en natation, vélo et course, sans blessure en cours.</em> »</p>
  <p class="label">Les 16 semaines</p>
  <div class="table-wrap">
    <table class="compact">
      <tr><td>Sem. 1 à 4</td><td>Base</td><td>6 à 8 h/sem</td></tr>
      <tr><td>Sem. 5 à 8</td><td>Endurance</td><td>7 à 9 h/sem</td></tr>
      <tr><td>Sem. 9 à 12</td><td>Spécifique 70.3</td><td>8 à 10 h/sem</td></tr>
      <tr><td>Sem. 13 à 14</td><td>Pic de charge</td><td>9 à 11 h/sem</td></tr>
      <tr><td>Sem. 15</td><td>Affûtage</td><td>6 à 7 h</td></tr>
      <tr><td>Sem. 16</td><td>Course</td><td>3 à 5 h + compétition</td></tr>
    </table>
  </div>
  <p class="muted">Règle de récupération citée à part : « <em>une semaine sur quatre, réduis le volume d'environ 20 à 30 % pour récupérer</em> ». Elle n'apparaît donc pas dans les deux premières semaines détaillées ci-dessous.</p>
  <p class="label">Semaine 1 (environ 6 h 30)</p>
  <ul>
    <li>Lundi : repos</li>
    <li>Mardi : natation 50 à 60 min (300 m éch. + 8×100 m « allure confortable » + 4×50 m technique + 200 m)</li>
    <li>Mercredi : vélo 1 h 15, endurance + 4×5 min « légèrement soutenues »</li>
    <li>Jeudi : natation 55 à 60 min (4×200 m endurance + 8×50 m technique)</li>
    <li>Vendredi : repos</li>
    <li>Samedi : vélo 2 h 15 facile + 10 min de course juste après</li>
    <li>Dimanche : course 1 h 05, « allure permettant de parler facilement »</li>
  </ul>
  <p class="muted">Semaine 2 : même structure, environ 7 h 20, avec un peu plus de vélo et « 3×10 min à allure cible 70.3 ».</p>
  <p class="label">Ses 5 règles</p>
  <p>80 % de l'entraînement facile · le vélo est prioritaire · entraîne ta nutrition · fais régulièrement des enchaînements · ne rattrape pas une séance manquée.</p>
  <p class="muted">« <em>Si tu me donnes ton niveau actuel (temps sur 1 500 m natation, 40 km vélo et 10 km course), je peux te transformer ça en planning précis, séance par séance.</em> »</p>
</div>

<p><strong>Sur la forme, rien à jeter.</strong> La structure est correcte : les trois sports sont répartis, la sortie longue tombe le week-end, une semaine sur quatre est allégée, il y a des enchaînements vélo-course, deux semaines d'affûtage et cinq règles de bon sens. Ça, ChatGPT le fait bien. Ce qui coince, c'est ce qu'il a mis à la place des informations qu'il n'avait pas.</p>

<ol>
  <li><strong>Il a inventé ton niveau.</strong> Sans que tu le demandes, il annonce « <em>je pars du principe que tu as déjà une base correcte</em> », puis parle d'« <em>un niveau intermédiaire</em> ». Tout le plan est calé sur ce triathlète imaginaire : 6 à 8 h par semaine, 2 h 15 de vélo dès la première semaine. Si tu débutes, c'est trop. Si tu as trois saisons dans les jambes, c'est trop peu.</li>
  <li><strong>Aucune intensité exploitable.</strong> « <em>Allure confortable</em> », « <em>légèrement soutenues</em> », « <em>allure permettant de parler facilement</em> », « <em>allure cible 70.3</em> ». Pas une seule allure au kilomètre, pas un watt. Sur le terrain, tu roules et tu cours au ressenti : trop vite sur l'endurance, pas assez sur les blocs.</li>
  <li><strong>Il te le dit lui-même.</strong> Sa dernière phrase te réclame ton niveau pour « <em>transformer ça en planning précis</em> ». Il sait que ce qu'il vient de produire est un canevas, pas un plan.</li>
</ol>

<p>À son crédit : tu demandes deux semaines, il donne deux semaines, sans dérouler tout le plan d'un coup. Garde ce réflexe : valide chaque bloc avant de générer la suite. Le reste se corrige en amont : un bon plan avec ChatGPT dépend d'abord de <strong>ce que tu mets en entrée</strong>.</p>

<h2 id="infos">Quelles infos donner à ChatGPT pour un plan triathlon exploitable</h2>

<p>Un coach te poserait ces questions au premier rendez-vous. ChatGPT ne les pose pas : rassemble-les avant d'ouvrir la conversation.</p>

<ul>
  <li><strong>La course :</strong> distance + date exacte (« 70.3 le 14 juin 2026 »). Elle fixe la périodisation.</li>
  <li><strong>Ton niveau, chiffré :</strong> chronos 5 et 10 km, FTP vélo, temps sur 100 ou 400 m nage. Le point le plus important. À défaut, une estimation honnête.</li>
  <li><strong>Séances + créneaux réels :</strong> pas « 5 fois », mais « lundi 45 min midi, mardi 1 h soir, jeudi 1 h, samedi 2-3 h, dimanche 1 h ».</li>
  <li><strong>Matériel :</strong> home trainer connecté, capteur de puissance, montre GPS, accès piscine (fréquence, bassin ou eau libre).</li>
  <li><strong>Historique :</strong> blessures, discipline la plus faible, sport d'endurance pratiqué avant le triathlon.</li>
  <li><strong>L'objectif réel :</strong> « finir » et « moins de 5 h 30 » ne donnent pas le même plan. Sois précis.</li>
  <li><strong>Contraintes :</strong> semaines de voyage, boulot chargé, vacances. Donne les dates.</li>
  <li><strong>Le format voulu :</strong> « un tableau par semaine, une ligne par séance : discipline, durée, contenu, intensité en allure / watts / temps au 100 m ».</li>
</ul>

<!--GEAR-->

<h2 id="prompt-complet">Le prompt complet pour un plan triathlon avec ChatGPT (à copier)</h2>

<p>Remplace tout ce qui est entre crochets par tes infos, puis colle dans ChatGPT. Plus tu es précis, moins il improvise.</p>

<div class="prompt">
  <div class="prompt-head"><span>Prompt v2 · le prompt complet</span><button type="button" data-copy>Copier</button></div>
  <pre>Tu es un préparateur physique spécialisé en triathlon. Construis-moi un plan d'entraînement.

COURSE
- Distance : [Sprint / Olympique / 70.3 / Ironman]
- Date : [JJ/MM/AAAA]
- Objectif : [finir / viser un chrono de X]
- Parcours : [nage en lac / mer / bassin], [D+ à vélo], [profil course à pied : plat / vallonné], [météo probable]

MON NIVEAU (repères mesurés récemment)
- Course : 5 km en [temps], 10 km en [temps]
- Vélo : FTP [X] W
- Natation : [X] au 400 m (ou [X] au 100 m)
- Expérience : [nombre] triathlons finis. Autre endurance : [ex : 2 semi-marathons en 1h35, années de vélo, natation en club...]
- Poids / taille : [X] kg pour [X] m

DISPONIBILITÉ
- [N] séances par semaine. Créneaux : [ex : 1 h par jour en semaine + samedi disponible]
- Séance longue possible le : [jour], durée max : [X h]
- Accès piscine : [X] fois par semaine
- Matériel : home trainer [oui/non], capteur de puissance [oui/non], montre GPS [oui/non]

CONTRAINTES / SANTÉ
- Blessures passées ou fragilités : [détail ou « aucune »]
- Semaines indisponibles : [dates ou « aucune »]

CE QUE JE VEUX EN SORTIE
- Un plan semaine par semaine jusqu'à la course, sous forme de calendrier.
- Découpe en phases (base, spécifique, affûtage) et indique la phase de chaque semaine.
- Une semaine de décharge toutes les 4 semaines, à environ 60 % du volume.
- Progression de volume hebdo : +10 % maximum d'une semaine à l'autre.
- Format : un tableau par semaine (jour, discipline, durée, contenu détaillé de la séance, intensité).
- L'intensité en ALLURE au km / WATTS / TEMPS au 100 m, calculés à partir de mes repères ci-dessus. Pas de pourcentages seuls.
- Commence par me donner UNIQUEMENT 2 semaines situées au milieu du programme, en détail. Je te ferai un retour avant que tu génères la suite.</pre>
</div>

<p>On a envoyé ce prompt rempli avec un vrai profil : 70.3 en janvier 2027, objectif sub-6 h, 5 km en 21'10, FTP 270 W, 400 m en 7'31, premier triathlon, 93 kg. Voici sa réponse, condensée.</p>

<div class="ai-reply">
  <p class="ai-reply-head">Réponse de ChatGPT (extrait condensé)</p>
  <p class="label">Il commence par convertir les tests en allures</p>
  <ul>
    <li>Course : 5 km 21'10 → 4'14/km, 10 km 44' → 4'24/km. Endurance ≈ 5'00 à 5'30/km, allure 70.3 visée ≈ 4'40 à 4'50/km.</li>
    <li>Vélo : FTP 270 W → endurance 175 à 205 W, tempo/70.3 210 à 225 W, seuil 245 à 260 W.</li>
    <li>Natation : 400 m 7'31 → 1'53/100 m. Endurance 2'00 à 2'10/100 m, soutenu 1'50 à 1'56/100 m.</li>
  </ul>
  <p class="label">Puis 2 semaines du milieu du programme (phase spécifique)</p>
  <p>Semaine 10 (≈ 7 h 20) et semaine 11 (≈ 8 h 00, soit +9 %). Extrait de la semaine 10 :</p>
  <ul>
    <li>Lundi, course 1 h : 15' éch. + 3×10' à 4'35 à 4'45/km (récup 5'15 à 5'30) + 10' calme</li>
    <li>Mercredi, vélo 1 h : 3×10' tempo à 215 à 225 W</li>
    <li>Vendredi, brick 1 h : vélo 40' dont 20' à allure 70.3, transition, puis 20' course de 5'00 vers 4'40/km</li>
    <li>Samedi, sortie longue 2 h 20 : vélo 1 h 55 (blocs 210 à 225 W) puis 25' course à 4'50 à 5'00/km</li>
  </ul>
  <p class="muted">Ses commentaires : ne pas transformer le vélo en contre-la-montre (viser 210 à 225 W sur le plat malgré 270 W de FTP), le temps se gagne en sortant du vélo assez frais pour courir efficace, la natation doit surtout développer l'endurance et l'eau libre.</p>
</div>

<p><strong>La différence est nette.</strong> Cette fois, les intensités sont des vrais chiffres (4'35/km, 220 W, 1'53/100 m), calculés depuis les tests. Il a respecté la demande (2 semaines du milieu, pas tout le plan d'un coup), et son commentaire tactique colle au profil : premier triathlon, gros gabarit, tendance à rouler trop près de la FTP. On est passé d'un canevas générique à quelque chose d'exécutable.</p>

<h2 id="plan-complet-reel">Le plan complet généré par ChatGPT : ce qui cloche</h2>

<p>On lui a ensuite demandé le plan entier « en PDF ». Sa réponse : « <em>l'outil de création de document n'est pas disponible dans cette session</em> », il faut activer Canvas. Après insistance, il l'a construit directement dans le fil, sous forme de tableaux collés, semaine par semaine. Voici l'ossature, condensée.</p>

<div class="ai-reply">
  <p class="ai-reply-head">Réponse de ChatGPT (extrait condensé)</p>
  <p class="label">Plan 70.3 sub-6 h, 19 semaines (14 sept. 2026 → course le 20 janvier 2027)</p>
  <p class="label">Repères d'entraînement fournis en tête</p>
  <ul>
    <li>Nage : facile 2'02 à 2'10/100 m · spécifique 1'55 à 2'00 · seuil 1'48 à 1'54</li>
    <li>Vélo : facile 175 à 205 W · spécifique 205 à 220 W · seuil 235 à 255 W</li>
    <li>Course : facile 5'05 à 5'35/km · spécifique 4'40 à 4'55 · seuil 4'15 à 4'30</li>
  </ul>
  <p class="label">Découpage</p>
  <ul>
    <li>S1 à 4 Base · S5 à 8 construction · S9 à 12 spécifique 70.3 · S13 à 16 pic · S17 à 19 affûtage</li>
    <li>Décharge toutes les 4 semaines (S4, S8, S12, S16)</li>
    <li>Volume de ~6 h (S1) à ~8 h (S15), progression annoncée à 10 % max</li>
  </ul>
  <p class="label">Exemple : semaine 1 (~6 h)</p>
  <ul>
    <li>Lun, course 50' : endurance continue, 5'10 à 5'30/km</li>
    <li>Mar, nage 55' : 300 + 8×50 éduc. + 8×100 + 4×200 + 200 (100 m en 2'00 à 2'05)</li>
    <li>Mer, vélo 55' : 15' facile + 3×8' tempo / 4' facile, 205 à 215 W</li>
    <li>Jeu, nage 55' : 300 + 4×50 + 6×200 + 200 (200 m en 4'05 à 4'15)</li>
    <li>Ven, course 50' : 15' facile + 6×3' soutenu / 2' facile, 4'35 à 4'45/km</li>
    <li>Sam, brick 2 h : vélo 1 h 35 endurance + 25' course</li>
    <li>Dim : repos</li>
  </ul>
  <p class="muted">Il termine par une stratégie de course détaillée : nage 35 à 38', vélo 2 h 50 à 3 h 00 (190 à 220 W, pics à 240 W en côte), course 1 h 35 à 1 h 40 en négatif split (5'00/km puis 4'40).</p>
</div>

<p><strong>Ce qui cloche.</strong> Le plan a de l'allure. Il a aussi cinq problèmes de fond, dont un potentiellement dangereux.</p>

<ol>
  <li><strong>Les allures « faciles » sont trop rapides.</strong> Il déduit l'endurance d'un ratio générique appliqué à ton allure de course : ici 5'05-5'35/km. Sur le papier c'est de l'endurance ; dans les faits, le rythme vraiment relâché de cet athlète tourne autour de 6'00/km. Résultat : des séances censées rester très faciles courues 30 à 50 s/km trop vite, semaine après semaine, sur un premier plan où presque tout devrait être lent. C'est le terreau classique de la blessure.</li>
  <li><strong>Trop d'intensité, partout.</strong> Dès la phase spécifique : 4 à 5 séances de qualité par semaine, blocs seuil à 240-250 W, samedis qui s'allongent vers 2 h 45 - 3 h en pic de charge. Pour un premier 70.3 avec 1 h par jour, c'est intenable sur 19 semaines. Un plan de base, c'est ~80 % d'endurance vraiment facile ; ici, quasi rien.</li>
  <li><strong>Il précise à moitié.</strong> « 8×50 m éducatifs » chaque semaine, sans jamais dire lesquels. Tu complètes toi-même une bonne partie des séances.</li>
  <li><strong>Il ne réévalue jamais les allures.</strong> Celles de la semaine 1 sont encore là en semaine 18, alors que ton niveau est censé bouger. Il donne bien une stratégie de course chiffrée, mais tout à la fin : une projection à environ 5 h 15, large sous l'objectif sub-6 h, qu'il ne confronte jamais au reste du plan et qui ne sert ni à caler la progression ni à te fixer des cibles d'ici la course.</li>
  <li><strong>Contraintes « à peu près », usage pénible.</strong> Samedi plafonné à 3 h → il monte à 2 h 55. « Décharge à 60 % » → plutôt 65-70 %. Et pas de document : des tableaux à recopier, du contexte à re-servir à chaque échange.</li>
</ol>

<p>Aucun n'est rédhibitoire si tu sais le repérer et que tu repars à la charge, point par point : baisser l'intensité, recaler les allures faciles sur ton ressenti, tenir tes créneaux, réclamer une projection de temps, faire relire le plan. Beaucoup de corrections à demander toi-même, et il faut savoir lesquelles.</p>

<!--COACHING:corrections-->

<h2 id="suivi-hebdo">Faire évoluer son plan ChatGPT semaine après semaine</h2>

<p>Un plan figé ne suit pas ta vraie vie : une séance sautée, une semaine de fatigue, une petite douleur. Le seul levier avec ChatGPT, c'est de lui faire un bilan une fois par semaine (séances faites ou manquées, ressenti général, ce qui a coincé) et de lui demander de réajuster la suite.</p>

<p>Ça peut aider. Mais sa mémoire lâche vite. Au bout de quelques échanges, il perd le fil du plan d'origine : il oublie des contraintes que tu avais posées, modifie tes allures sans raison, réintroduit une phase déjà passée, ou te propose une semaine qui n'a plus grand-chose à voir avec la structure de départ. À la semaine 8, tu peux te retrouver avec un programme <strong>complètement décalé du premier</strong>, sans forcément t'en apercevoir.</p>

<p>Pour limiter la casse, il faut recoller tout le contexte à chaque bilan : le plan complet, la phase en cours, tes allures, ton compte rendu. C'est fastidieux, et même comme ça le suivi reste approximatif. C'est la limite de fond : ChatGPT ne garde pas ton entraînement en mémoire, il le redécouvre à chaque message.</p>

<h2 id="erreurs">Les 5 erreurs à éviter avec un plan d'entraînement ChatGPT</h2>

<div class="warn">
  <p class="warn-title">1. Demander « un plan Ironman » sans donner ton niveau</p>
  <p>C'est l'erreur numéro un. Sans repères chiffrés, ChatGPT applique une moyenne : souvent 10 à 15 h par semaine, des sorties longues de 5 h, une charge que 80 % des amateurs ne tiennent pas. Ou l'inverse, un plan trop light si tu as déjà des années de fond. Donne tes chronos, toujours.</p>
</div>

<div class="warn">
  <p class="warn-title">2. Garder les intensités en pourcentages</p>
  <p>« 75 % VMA », « zone 2 », « allure seuil » : sur le terrain, tu ne sais pas ce que ça veut dire en min/km ou en watts. Un plan que tu ne peux pas exécuter précisément est un plan que tu exécutes au feeling, donc trop vite sur les séances faciles et pas assez sur les séances dures. Demande-lui de convertir chaque pourcentage en allure, watts ou temps au 100 m.</p>
</div>

<div class="warn">
  <p class="warn-title">3. Accepter la première version</p>
  <p>La première réponse est un brouillon. Elle est générique parce que ChatGPT joue la sécurité. Il faut au moins deux ou trois allers-retours pour qu'elle devienne utilisable.</p>
</div>

<div class="warn">
  <p class="warn-title">4. Générer tout le plan d'un coup</p>
  <p>Sur un plan long, ChatGPT perd la cohérence en cours de route : la semaine 12 ne « sait » plus ce qu'il y avait en semaine 3, la progression fait des sauts, la décharge tombe au mauvais moment. Et tu ne relis pas 19 tableaux en détail. Demande semaine par semaine, ou au minimum phase par phase.</p>
</div>

<div class="warn">
  <p class="warn-title">5. Ne pas vérifier les volumes toi-même</p>
  <p>ChatGPT sous-dose souvent la natation, propose parfois des semaines où le volume bondit de 30 %, et cale la plus grosse semaine trop près de la course. Demande-lui de relire son propre plan, et garde un œil critique : si une semaine te paraît absurde, elle l'est probablement.</p>
</div>

<h2 id="pas-remplacer">Ce que ChatGPT ne remplace pas pour préparer un triathlon</h2>

<p>Admettons que tu aies fait un prompt parfait et corrigé tous les défauts ci-dessus. Il reste des choses que ChatGPT ne fera pas, par construction :</p>

<ul>
  <li><strong>L'adaptation hebdomadaire.</strong> Tu es fatigué, tu as mal dormi trois nuits, ta séance de seuil est un échec : un plan figé continue comme si de rien n'était. L'ajustement, c'est 80 % de la valeur d'un accompagnement.</li>
  <li><strong>Des allures vraiment individualisées.</strong> Même en lui donnant tes tests, il applique un ratio moyen, pas ta physiologie : l'allure « facile » ressort trop rapide (vu plus haut), et elle n'est jamais réajustée quand ton niveau progresse.</li>
  <li><strong>La spécificité de ta course.</strong> Un 70.3 vallonné avec 1200 m de D+ ne se prépare pas comme un 70.3 plat. La chaleur, l'altitude, un parcours vélo technique : ChatGPT n'a pas ces infos, sauf si tu les lui donnes en détail, et même là il ne sait pas vraiment quoi en faire.</li>
  <li><strong>Les briques dans une vraie logique de progression.</strong> L'enchaînement vélo-course est la compétence la plus spécifique du triathlon. ChatGPT en met, mais à peu près identiques de la semaine 1 à la semaine 18, sans les allonger ni les intensifier à l'approche de la course.</li>
  <li><strong>Le fait de ne pas avoir à re-prompter chaque dimanche soir.</strong> C'est trivial dit comme ça, mais sur 4 mois, la charge mentale de piloter soi-même son plan via une IA fait abandonner beaucoup de gens.</li>
</ul>

<h2 id="vs">Plan ChatGPT ou coach de triathlon : le comparatif</h2>

<div class="table-wrap">
<table>
  <thead>
    <tr><th></th><th>ChatGPT</th><th>Coach individuel</th></tr>
  </thead>
  <tbody>
    <tr><td class="row">Prix</td><td>Gratuit / ~20 €/mois</td><td>80 à 120 €/mois</td></tr>
    <tr><td class="row">Qui construit le plan</td><td class="mid">Toi + l'IA</td><td class="good">Ton coach</td></tr>
    <tr><td class="row">Allures calées sur tes tests</td><td class="bad">Approximatif, à forcer</td><td class="good">Oui, affiné en continu</td></tr>
    <tr><td class="row">Calé sur ta date de course + affûtage</td><td class="mid">Si tu l'imposes</td><td class="good">Oui, sur mesure</td></tr>
    <tr><td class="row">Adaptation à ton ressenti et à ta fatigue</td><td class="bad">Non (re-prompt manuel, réponses incohérentes)</td><td class="good">Oui, en continu</td></tr>
    <tr><td class="row">Si tu rates une séance</td><td class="bad">Rien, à re-demander</td><td class="good">Il réajuste la semaine</td></tr>
    <tr><td class="row">Ce qui te fait t'y tenir</td><td class="bad">Rien</td><td class="good">Le suivi + l'abonnement engagé</td></tr>
  </tbody>
</table>
</div>

<p><strong>Le coach reste le plus complet.</strong> Il adapte à ton planning réel, à ton ressenti, aux déséquilibres qui s'installent au fil des semaines. Et le simple fait de payer chaque mois t'engage à t'y tenir. Son prix le réserve à ceux qui visent vraiment un objectif.</p>

<p><strong>Le coaching 1v1 Lecoin-Triathlon est dans cette catégorie</strong>, au bas de la fourchette : 80 € par mois, sans engagement. Un vrai coach, pas une IA : ton programme est écrit et ajusté à la main, et sous chaque séance tu racontes ce qui s'est passé, il te répond sous 24 h.</p>

<p><strong>ChatGPT, lui, te donne un plan de départ</strong>, et c'est tout : pas d'allures fiables, pas d'adaptation, pas de mémoire. À toi de piloter.</p>

<h2 id="pour-qui">Pour qui ChatGPT suffit-il pour préparer un triathlon ?</h2>

<div class="split">
  <div class="yes">
    <p class="split-title">ChatGPT peut suffire si…</p>
    <ul>
      <li>tu débutes et ton objectif est de <strong>finir</strong></li>
      <li>tu aimes bricoler, comprendre, ajuster toi-même</li>
      <li>tu as déjà une base d'endurance et tu sais lire tes sensations</li>
      <li>tu prépares une distance courte (Sprint, Olympique)</li>
      <li>tu es prêt à re-prompter et relire ton plan chaque semaine</li>
    </ul>
  </div>
  <div class="no">
    <p class="split-title">ChatGPT ne suffit pas si…</p>
    <ul>
      <li>tu vises un <strong>chrono précis</strong></li>
      <li>tu montes gros en volume sans repère de fatigue fiable (le risque, c'est la blessure)</li>
      <li>tu as peu de temps et tu veux « juste savoir quoi faire »</li>
      <li>tu as un historique de blessures qui demande de la prudence</li>
      <li>tu sais que tu n'iras pas re-piloter ton plan toutes les semaines</li>
    </ul>
  </div>
</div>

<p>Si tu es plutôt dans la colonne de droite, ChatGPT te coûtera plus de temps qu'il ne t'en fait gagner. Un <a href="/#coaching">coach</a> construit ton plan à partir de tes tests, garde des allures faciles vraiment faciles, et réajuste chaque semaine selon ta fatigue et tes imprévus. Sans avoir à écrire un seul prompt.</p>

<!--COACHING:plan-->

<h2 id="faq">FAQ : plan triathlon avec ChatGPT</h2>

<!--FAQ-->

<p class="aside">Pour aller plus loin : <a href="/blog/construire-plan-entrainement-triathlon">comment construire un plan d'entraînement triathlon</a>, <a href="/blog/comprendre-la-ftp-en-velo">comprendre et tester sa FTP</a>, <a href="/blog/endurance-fondamentale-triathlon">trouver sa vraie allure d'endurance fondamentale</a>.</p>
`,
};
