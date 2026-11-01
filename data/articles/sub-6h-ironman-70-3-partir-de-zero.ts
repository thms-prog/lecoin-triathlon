import type { Article } from "./types";

// Repris de tri-lab.fr (même slug, même texte, mêmes titres et FAQ pour garder le référencement).
export const article: Article = {
  slug: "sub-6h-ironman-70-3-partir-de-zero",
  title: "Sub 6h sur Ironman 70.3 : même en partant de 0",
  seoTitle: "Sub 6h sur Ironman 70.3 : même en partant de 0",
  description: "Sub 6h sur un Ironman 70.3 en partant de zéro en triathlon, c'est possible. Splits par discipline, 6 mois de préparation, nutrition, budget équipement et gestion du jour J : tout ce qu'il faut savoir.",
  keywords: ["sub 6h ironman 70.3","semi ironman moins de 6h","plan half ironman débutant","70.3 triathlon débutant","préparer semi ironman depuis zéro","splits 70.3 sub 6h","budget équipement triathlon 70.3","nutrition semi ironman","programme triathlon 6 mois","half ironman premier triathlon"],
  date: "2026-05-10",
  dateModified: "2026-11-01",
  category: "Entraînement",
  image: "/demo/blog/sub6h.jpg",
  coaching: {
    title: "Viser le sub 6h avec un vrai coach",
    text: "Des allures fixées à la séance, la nutrition intégrée aux sorties longues, et un plan qui s'adapte quand la semaine déraille.",
  },
  faq: [
    {
      "q": "Est-ce qu'on peut finir un 70.3 en moins de 6h en partant de zéro ?",
      "a": "Oui, à condition d'avoir au minimum 6 mois de préparation structurée. Sub 6h sur un 70.3 représente des splits accessibles : 50 min de natation, 2h50 de vélo et 2h00 de run avec les transitions. Pour quelqu'un qui vient de la course à pied, c'est un objectif très réaliste dès la première année."
    },
    {
      "q": "Quels splits faut-il viser pour finir un 70.3 en moins de 6h ?",
      "a": "Pour finir un 70.3 en moins de 6h, vise : natation 1,9 km en 45-50 min (2h22-2h38 aux 100m), T1 en 4-5 min, vélo 90 km en 2h45-2h55 (31-33 km/h de moyenne), T2 en 3-4 min, et semi-marathon en 1h55-2h05 (5h26-5h55/km). Ces splits sont accessibles avec une préparation sérieuse de 6 mois."
    },
    {
      "q": "Combien de temps faut-il pour se préparer à un 70.3 en partant de zéro ?",
      "a": "Minimum 6 mois de préparation structurée en partant de zéro en triathlon. La préparation se divise en trois phases : 2 mois de base aérobie (apprendre à nager, poser les fondations vélo et run), 2 mois de développement (intensité et briques), et 2 mois de préparation spécifique course avec affûtage final."
    }
  ],
  content: `
<p>Mon premier triathlon était un semi Ironman. Pas un Sprint pour tester l'eau, pas un Olympique pour voir ce que ça fait. Directement un 70.3. 1,9 km de natation, 90 km de vélo, 21 km de course. Et je l'ai bouclé en moins de 6 heures.</p>

<p>Je n'étais pas un phénomène. Je n'avais jamais fait de triathlon de ma vie. Je nageais 200 mètres en étant cuit, je ne savais pas me pacer. En vélo, je n'avais jamais roulé sur un vélo de  course, je faisais du vélo étant enfant comme la plupart mais sans plus. Ce que j'avais, c'était <strong>7 ans de course à pied et un programme structuré de 6 mois</strong>. C'est tout.</p>

<p>Sub 6h sur un 70.3, c'est présenté partout comme <strong>le mur du débutant</strong>, la barrière symbolique que seuls les "vrais" triathlètes franchissent. C'est faux, et je vais te le prouver. Si tu as une base physique sérieuse et que tu te prépares intelligemment pendant 6 mois, ce chrono est à ta portée. Pas "peut-être". Pas "si tout se passe bien". <strong>À ta portée.</strong></p>

<nav>
  <h2>Sommaire</h2>
  <nav class="toc" aria-label="Sommaire"><ul>
    <li><a href="#ce-que-ca-veut-dire">Ce que "sub 6h" veut dire concrètement</a></li>
    <li><a href="#splits">Les splits par discipline pour finir en moins de 6h</a></li>
    <li><a href="#niveau">Quel niveau faut-il vraiment ?</a></li>
    <li><a href="#preparation">6 mois de préparation : les grandes phases</a></li>
    <li><a href="#nutrition">Nutrition : prépa et jour de course</a></li>
    <li><a href="#gestion-course">Gérer son effort le jour J</a></li>
    <li><a href="#budget-equipement">Budget équipement</a></li>
    <li><a href="#budget-course">Budget et logistique le jour de course</a></li>
    <li><a href="#recuperation">Récupération : gérer 6 mois sans se blesser</a></li>
    <li><a href="#par-ou-commencer">Par où commencer cette saison</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul></nav>
</nav>

<figure>
  <img src="https://images.unsplash.com/photo-1658748721978-68fc04f3739b?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Départ natation en triathlon — groupe d'athlètes dans l'eau" class="content-img" loading="lazy">
  <figcaption>Photo : <a href="https://unsplash.com/photos/XcvocqxlQ-A" rel="noopener noreferrer" target="_blank">Markus Spiske</a> · Unsplash</figcaption>
</figure>

<h2 id="ce-que-ca-veut-dire">Ce que "sub 6h" veut dire concrètement sur le 70.3</h2>

<p>Un Ironman 70.3, c'est 1,9 km de natation + 90 km de vélo + 21,1 km de course à pied. Le "70.3" correspond à la somme de ces distances en miles. Le chrono tourne sans jamais s'arrêter :<strong>de la mise à l'eau au passage de la ligne d'arrivée</strong>, transitions comprises.</p>

<p>Sub 6h, ça veut dire franchir la ligne en 5h59 ou moins. Dans le classement général d'un 70.3 amateur en France, c'est situer dans <strong>le tiers supérieur du peloton</strong>. Ce n'est ni le niveau élite, ni le niveau "finisher heureux d'être arrivé". C'est le niveau du triathlète qui a préparé sa course, géré son effort et exécuté son plan.</p>

<p>Pour situer : lors d'un 70.3 en France, le temps médian tourne autour de 5h30-5h45 pour les hommes et 6h10-6h30 pour les femmes. Sub 6h pour un homme ou sub 6h30 pour une femme, c'est se placer légèrement au-dessus de la médiane. C'est ambitieux mais réaliste.</p>

<div class="info">
  <p>Ce que ça n'est PAS</p>
  <p>Sub 6h n'est pas réservé aux anciens nageurs, aux cyclistes confirmés ou aux coureurs semi-pro. C'est la barrière que tu franchis quand tu t'entraînes intelligemment pendant 6 mois sur les 3 disciplines. L'intelligence du plan compte plus que les années d'expérience.</p>
</div>

<h2 id="splits">Les splits par discipline pour finir en moins de 6h</h2>

<p>Avant de parler entraînement, il faut savoir <strong>où aller</strong>. Voici les temps cibles par discipline pour finir en 5h45 (avec une marge confortable sur les 6h) :</p>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Segment</th>
        <th>Distance</th>
        <th>Temps cible</th>
        <th>Allure / vitesse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>🏊 Natation</td>
        <td>1,9 km</td>
        <td>45 – 50 min</td>
        <td>2'22"–2'38" /100m</td>
      </tr>
      <tr>
        <td>T1</td>
        <td>n/a</td>
        <td>4 – 5 min</td>
        <td>,</td>
      </tr>
      <tr>
        <td>🚴 Vélo</td>
        <td>90 km</td>
        <td>2h40 – 2h55</td>
        <td>31 – 33,7 km/h</td>
      </tr>
      <tr>
        <td>T2</td>
        <td>n/a</td>
        <td>3 – 4 min</td>
        <td>,</td>
      </tr>
      <tr>
        <td class="good">🏃 Run</td>
        <td>21,1 km</td>
        <td>1h50 – 2h05</td>
        <td>5'13"–5'55" /km</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>n/a</td>
        <td>5h22 – 5h59</td>
        <td>n/a</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>La natation : le segment qui fait le plus peur, le moins discriminant</h3>

<p>2'22"/100m en natation, ça semble rapide si tu ne nages pas. En réalité, c'est une allure très accessible après 3-4 mois d'entraînement régulier en piscine, même en partant de "je sais à peine nager". La natation en triathlon, c'est surtout une <strong>question de technique et d'aisance dans l'eau</strong>, pas de puissance physique. Prends 2 cours au départ si tu n'es pas à l'aise.</p>

<p>Sur la distance, 50 min est un objectif confortable. Même à 55 min, tu peux encore finir sous les 6h si le reste est bien géré. La natation ne fait pas les 6h, c'est le vélo et le run qui les font ou les défont.</p>

<h3>Le vélo : le segment le plus long, le plus décisif</h3>

<p>90 km à 32 km/h de moyenne, ok c'est rapide mais la plupart des 70.3 sont assez roulant, pour mon 1er j'étais à Vichy, le D+ est de 1100m sur les 90km j'étais donc à 31 de moyenne mais c'est ok si j'avais été a 29 avec ce D+, dans ce cas on adapte le run et natation.  . C'est le segment sur lequel tu passes le plus de temps (environ la moitié du chrono total) et c'est lui qui dicte la qualité de ton run. <strong>Un vélo trop fort = un run explosé.</strong> La règle d'or : sortir du vélo en ayant encore des jambes.</p>

<p>Pas besoin d'un vélo de triathlon à 3000€. Un vélo de route avec les pédales automatiques et une bonne position fait le travail. Ce qui compte, c'est le temps de selle accumulé à l'entraînement.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Trois cyclistes sur route en triathlon" class="content-img" loading="lazy">
  <figcaption>Photo : <a href="https://unsplash.com/photos/K2xGNNcQn_w" rel="noopener noreferrer" target="_blank">Tony Pham</a> · Unsplash</figcaption>
</figure>

<h3>Le run : là où les coureurs reprennent l'avantage</h3>

<p>5h30/km sur un semi après 90 km de vélo, pour quelqu'un qui vient de la course à pied, c'est tout à fait réaliste, à condition d'avoir bien géré le vélo. C'est souvent ici que se creuse l'écart avec les triathlètes purs qui n'ont pas le même background de course.</p>

<p>Les premières centaines de mètres seront lourdes, c'est l'effet "jambes de bois" du triathlon. Tu le connais si tu as fait des briques à l'entraînement, sinon ça surprend. Ça passe après 1 km.</p>

<h2 id="niveau">Quel niveau faut-il vraiment pour y arriver ?</h2>

<p>Beaucoup de gens surestiment le niveau requis pour sub 6h sur un 70.3. Voilà ce dont tu as réellement besoin <strong>avant de commencer ta préparation de 6 mois</strong> :</p>

<ul>
  <li><strong>Run :</strong> être capable de courir 1h sans s'arrêter à allure confortable. Pas besoin de faire 10 km en 40 min.</li>
  <li><strong>Vélo :</strong> avoir un vélo fonctionnel et pouvoir rouler 1h30 sans souffrir, pas dans une allure course, même logique que le run, être chill.</li>
  <li><strong>Natation :</strong> être à l'aise dans l'eau et pouvoir nager 200-300m sans s'arrêter. Le reste s'acquiert pendant la préparation.</li>
</ul>

<div class="tip">
  <p class="good">Ce n'est pas un prérequis de maîtriser les 3 disciplines avant de commencer</p>
  <p class="good">Les 6 mois de préparation sont faits pour t'emmener du niveau "débutant en triathlon" au niveau "sub 6h sur 70.3". Tu n'as pas besoin d'être déjà compétitif dans chaque discipline, tu as besoin d'une base physique générale et de la capacité à t'entraîner régulièrement.</p>
</div>

<p>Le profil qui a l'avantage le plus évident au départ : le coureur à pied. Si tu as plusieurs années de course derrière toi, ton système cardio-vasculaire est déjà développé, tu sais gérer l'effort sur la durée, et le run, segment final et souvent décisif, est ta discipline forte. C'était mon cas. Ça ne veut pas dire que c'est la seule voie, mais c'est un point de départ très favorable.</p>

<h2 id="preparation">6 mois de préparation : les grandes phases</h2>

<p>6 mois, c'est le minimum d'après moi pour partir de zéro en triathlon et arriver à un 70.3 sub 6h tout en kiffant le moment c'est important...500 euros pour mourir sur le guidon de ce vélo sans profiter du paysage, bof. La préparation se divise en trois phases distinctes, chacune avec ses objectifs et ses types de séances.</p>

<h3>Phase 1 : Mois 1 et 2 : Construire la base</h3>

<p>L'objectif de ces deux premiers mois n'est pas la performance, c'est <strong>l'adaptation</strong>. Tu apprends à nager correctement, tu poses des heures dans les jambes en vélo et en course, et tu habitues ton corps à jongler entre 3 disciplines. Volume faible, intensité faible, régularité maximale.</p>

<ul>
  <li>2-3 séances de natation par semaine, priorité à la technique</li>
  <li>1-2 sorties vélo, endurance fondamentale</li>
  <li>2 runs faciles, pas de fractionné</li>
  <li>1 séance de renforcement musculaire</li>
</ul>

<h3>Phase 2 : Mois 3 et 4 : Développer la puissance</h3>

<p>Le volume augmente, l'intensité entre progressivement. C'est ici que tu construis ta capacité à soutenir l'effort sur la durée. Les premières séances brique (vélo → run enchaîné) apparaissent. Tu commences à nager en eau libre si c'est possible.</p>

<ul>
  <li>Natation : premières séances de seuil, travail aux allures CSS</li>
  <li>Vélo : sorties longues 2h-2h30, premières séances à 80% FTP</li>
  <li>Run : fractionné court 1 fois par semaine + sortie longue</li>
  <li>1-2 briques par semaine (vélo → run enchaîné)</li>
</ul>

<h3>Phase 3 : Mois 5 et 6 : Spécifique course et affûtage</h3>

<p>Les 2 derniers mois sont dédiés à te préparer exactement pour les conditions de ta course. Les sorties longues atteignent leurs distances maximales, tu simules des enchaînements complets, et les 2-3 dernières semaines tu réduis progressivement le volume pour arriver reposé le jour J.</p>

<ul>
  <li>Sorties vélo jusqu'à 3h-3h30 à allure course</li>
  <li>Simulation complète natation + vélo 2h + run 40 min</li>
  <li>Taper les 3 dernières semaines : -20% puis -40% puis -60% de volume</li>
  <li>Garder l'intensité, couper le volume</li>
</ul>

<div>

  

  <div class="box">

    <div class="cards">
      <div class="box">
        <div>Phase 1</div>
        <div>Fondation</div>
        <div>S1–S6 · 5–8h</div>
      </div>
      <div class="box">
        <div>Phase 2</div>
        <div>Construction</div>
        <div>S7–S12 · 8–10h</div>
      </div>
      <div>
        <div>Phase 3</div>
        <div>Spécifique</div>
        <div>S13–S18 · 10–12h</div>
      </div>
      <div class="box">
        <div>Phase 4</div>
        <div>Pic</div>
        <div>S19–S21 · 12–13h</div>
      </div>
      <div class="box">
        <div>Phase 5</div>
        <div>Affûtage</div>
        <div>S22–S24 · 8–4h</div>
      </div>
    </div>

    <p>Extrait — Semaine 15 · Phase Spécifique · 11h30 · Intensité en run</p>

    <div>
      <div class="box">
        <div>Lundi</div>
        <div>Repos</div>
      </div>
      <div class="tip">
        <div>Mardi · 🏃 Run · 1h20</div>
        <div>Fractionné 1 km allure course</div>
        <div>15 min à 6:30/km + 6×1 km à 5:00/km (2 min récup) + 11 min retour calme</div>
        <div class="tip">🍬 30 g glucides (gel à 45 min) · 700 ml</div>
      </div>
      <div class="info">
        <div>Mercredi · 🏊 Nage · 1h15</div>
        <div>Volume 3 000 m</div>
        <div>300 m échauffement · 3×600 m à 2:35/100m (1'30" récup) · 3×200 m à 2:25/100m (45" récup) · 300 m retour calme</div>
        <div class="info">💧 Eau seule · 600 ml</div>
      </div>
      <div>
        <div>Jeudi · 🚴 Vélo · 3h</div>
        <div>30 km/h — 2h de bloc</div>
        <div>20 min Z2 + 2h à 30 km/h en continu (léger vallonnement) + 20 min retour calme — séance clé de la semaine</div>
        <div class="note">🍬 80 g glucides (gels à 35'/1h/1h30'/2h05') · 1 300 ml</div>
      </div>
      <div class="info">
        <div>Vendredi · 🏊 Nage · 55 min</div>
        <div>Technique + endurance</div>
        <div>300 m échauffement · 2 400 m à 2:45/100m · 6×50 m technique · 100 m retour calme</div>
        <div class="info">💧 Eau seule · 550 ml</div>
      </div>
      <div>
        <div>Samedi · ⚡ Brique vélo+run · 4h40</div>
        <div>Vélo 30 km/h + Run allure course</div>
        <div>Vélo : 4h (dont 2h à 30 km/h) · Enchaîner · Run : 40 min à 5:30/km</div>
        <div>🍬 Vélo : 100 g glucides + 1 500 ml · Run : 400 ml</div>
      </div>
      <div class="tip">
        <div>Dimanche · 🏃 Run long · 1h50</div>
        <div>Run long Z2</div>
        <div>1h50 à 6:30/km</div>
        <div class="tip">🍬 45 g glucides (gels à 45 min et 1h25) · 1 000 ml</div>
      </div>
    </div>

    

    
    

  </div>
</div>

<h2 id="nutrition">Nutrition : pendant la prépa et le jour de course</h2>

<h3>Pendant les 6 mois de préparation</h3>

<p>Pas besoin de régime spécial ni de calcul calorique pointu pour préparer un 70.3. Le principe de base : <strong>manger autour des séances</strong>. Augmenter les glucides les jours de grosses séances, manger des protéines pour la récupération, ne pas se restreindre pendant la prépa.</p>

<ul>
  <li><strong>Avant une longue sortie (2h+) :</strong> repas riche en glucides 2-3h avant. Riz, pâtes, pain, flocons d'avoine. Pas de graisses ou fibres en excès le matin de la séance.</li>
  <li><strong>Sur les sorties longues :</strong> ravitailler dès 45-60 min. Ne pas attendre d'avoir faim, à ce stade c'est trop tard. 40-60g de glucides par heure en séance.</li>
  <li><strong>Après la séance :</strong> fenêtre de récupération 30-60 min. Protéines + glucides. Yaourt + fruits, riz + poulet, smoothie banane + lait.</li>
  <li><strong>Hydratation :</strong> 500 ml à 1L d'eau par heure de séance selon la chaleur. Ajouter des électrolytes sur les séances de plus de 90 min.</li>
</ul>

<h3>Le jour de course</h3>

<p>La nutrition le jour J se prépare à l'entraînement, ne teste jamais un nouveau gel ou une nouvelle boisson en compétition. Tout ce que tu utilises en course, tu l'as testé en sortie longue au préalable.</p>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Moment</th>
        <th>Quoi</th>
        <th>Quantité</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>J-1 soir</td>
        <td>Repas riche en glucides, peu de fibres</td>
        <td>Portion normale, pas d'excès</td>
      </tr>
      <tr>
        <td>Matin course (3h avant)</td>
        <td>Flocons d'avoine, banane, pain blanc, café</td>
        <td>60-80g de glucides</td>
      </tr>
      <tr>
        <td>Sur le vélo</td>
        <td>1 gel ou barre toutes les 30 min + eau</td>
        <td>40-60g glucides/heure</td>
      </tr>
      <tr>
        <td>Sur le run</td>
        <td>1 gel toutes les 30-35 min + eau à chaque ravito</td>
        <td>30-40g glucides/heure</td>
      </tr>
      <tr>
        <td>Hydratation course</td>
        <td>Eau + boisson isotonique sur le vélo</td>
        <td>500-750 ml/heure</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="warn">
  <p class="bad">⚠️ L'erreur nutrition la plus fréquente sur un 70.3</p>
  <p class="bad">Ne pas manger sur le vélo parce que "ça va encore". À mi-vélo tu te sens bien, c'est le glucose que tu avais en stock le matin. Si tu ne ravitailles pas, tu arrives sur le run avec un compte en banque énergétique vide. Les jambes lourdes du run ne viennent pas toujours du vélo trop fort, elles viennent souvent du manque d'apport glucidique.</p>
</div>

<h2 id="gestion-course">Gérer son effort le jour J : natation, vélo, run, transitions</h2>

<h3>La natation : partir dans la bonne vague</h3>

<p>Sur un 70.3, les départs sont généralement organisés par temps estimé. <strong>Sois honnête sur ton temps de natation</strong>, partir trop en avant avec des nageurs plus rapides te fera nager en zigzag et te fatiguer inutilement. Partir dans ta vague correcte, c'est une natation plus propre, moins de contact, meilleure expérience.</p>

<p>Le départ en eau libre peut surprendre si tu ne l'as jamais fait. Les premiers 200-300m sont chaotiques, des bras qui frappent, des pieds dans la figure, l'adrénaline qui monte. C'est normal. Reste en dehors de l'entonnoir si tu n'es pas à l'aise avec le contact, les premiers mètres passent vite.</p>

<h3>Le vélo : la discipline qui décide du run</h3>

<p>La tentation est de partir fort sur le vélo, tu te sens bien après la natation, les jambes sont fraîches, le peloton roule vite. Résiste. <strong>La règle sur le 70.3 : le vélo doit être géré comme un effort à 75-80% de ta puissance maximale soutenue.</strong> Pas plus.</p>

<p>Si tu as une montre ou un compteur vélo avec la puissance ou la fréquence cardiaque, utilise-le. Sinon, l'indice le plus simple : tu dois pouvoir parler par phrases courtes sur le vélo. Si tu souffles au point de ne plus pouvoir articuler, tu vas trop fort.</p>

<h3>Le run : gérer les jambes de bois et trouver son allure</h3>

<p>Les premières centaines de mètres du run sont toujours étranges après le vélo. Les jambes sont lourdes, la foulée n'est pas naturelle, on a l'impression de courir comme un robot. <strong>Ne règle pas ton allure sur ces premiers 500m</strong>, attends le km 2 pour ajuster.</p>

<p>Sur le run, commence prudemment et accélère si tu te sens bien, jamais l'inverse. Un départ trop rapide sur le run d'un 70.3 se paye cash à partir du km 15.</p>

<h3>Les transitions : pas d'improvisation</h3>

<p>Les transitions peuvent faire gagner ou perdre plusieurs minutes sur un 70.3. Prépare ta zone le matin, fais le film mental, et entraîne-toi à les faire vite à l'entraînement. Pour tout ce qui concerne T1 et T2, <a href="/blog/transitions-triathlon-guide-complet">notre guide complet sur les transitions</a> couvre tout geste par geste.</p>

<h2 id="budget-equipement">Budget équipement : ce dont tu as vraiment besoin</h2>

<p>L'erreur classique du débutant : penser qu'il faut un vélo de triathlon, une combinaison néoprène haut de gamme et une montre à 700€ pour être compétitif. Non. Voilà ce qui est <strong>indispensable</strong> et ce qui est optionnel.</p>

<h3>Le minimum vital : budget ~600-900€</h3>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Équipement</th>
        <th>Budget</th>
        <th>Remarque</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vélo de route</td>
        <td>300-500€</td>
        <td>Occasion suffisant pour débuter</td>
      </tr>
      <tr>
        <td>Casque</td>
        <td>50-100€</td>
        <td>Obligatoire et non négociable</td>
      </tr>
      <tr>
        <td>Pédales automatiques + chaussures vélo</td>
        <td>80-150€</td>
        <td>Gros gain en efficacité vélo</td>
      </tr>
      <tr>
        <td>Combinaison néoprène</td>
        <td>100-200€</td>
        <td>Obligatoire selon la temp. eau</td>
      </tr>
      <tr>
        <td>Lunettes natation</td>
        <td>15-30€</td>
        <td>Prendre un modèle eau libre</td>
      </tr>
      <tr>
        <td>Chaussures de running</td>
        <td>100-150€</td>
        <td>Indispensable, pas sur un 70.3</td>
      </tr>
      <tr>
        <td>Total minimum</td>
        <td>~645-1130€</td>
        <td>Selon l'état du vélo acheté</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Ce qui fait vraiment gagner du temps, budget additionnel</h3>

<ul>
  <li><strong>Montre GPS multisport (150-400€) :</strong> pour gérer les allures en run et la puissance/FC en vélo. Pas indispensable mais très utile pour ne pas partir trop fort.</li>
  <li><strong>Home trainer (150-400€) :</strong> pour les séances vélo quand la météo ne permet pas de sortir. Surtout utile en hiver si ta course est en mai-juin.</li>
  <li><strong>Tri suit (60-120€) :</strong> une tenue pensée pour les 3 disciplines, pas de changement en transition. Gain de temps et de confort.</li>
  <li><strong>Ceinture dossard (5-10€) :</strong> indispensable, pratique, coûte rien.</li>
</ul>

<div class="info">
  <p>⚙️ Kit équipement 70.3 débutant</p>
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
        <img src="https://m.media-amazon.com/images/I/712tk7-JZsL._AC_SX679_.jpg" alt="Casque vélo triathlon" class="product-img" loading="lazy">
        <p>Casque Abus Macator</p>
        <p>Léger, bien ventilé</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
    <a href="https://link.amazon/B06sqhXeB" rel="sponsored noopener noreferrer" target="_blank">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/51xT2l2IlzL._AC_SL1000_.jpg" alt="Ceinture porte dossard triathlon" class="product-img" loading="lazy">
        <p>Ceinture porte-dossard</p>
        <p>Indispensable en course</p>
        <div>
          <span>Voir →</span>
        </div>
      </div>
    </a>
  </div>
</div>

<h2 id="budget-course">Budget et logistique le jour de course</h2>

<figure>
  <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Cycliste sur vélo de route en montagne" class="content-img" loading="lazy">
  <figcaption>Photo : <a href="https://unsplash.com/photos/mR-N67XjTHg" rel="noopener noreferrer" target="_blank">Beau Runsten</a> · Unsplash</figcaption>
</figure>

<p>L'inscription et la logistique d'un 70.3 coûtent souvent plus cher que prévu si on ne les anticipe pas. Voilà les postes à budgéter.</p>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Poste</th>
        <th>Budget estimé</th>
        <th>Remarque</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Inscription 70.3</td>
        <td>250-500€</td>
        <td>Prendre tôt, le prix monte</td>
      </tr>
      <tr>
        <td>Licence triathlon FFTri</td>
        <td>~50€</td>
        <td>Obligatoire pour s'inscrire</td>
      </tr>
      <tr>
        <td>Transport + hébergement</td>
        <td>100-350€</td>
        <td>Selon distance et durée du séjour</td>
      </tr>
      <tr>
        <td>Nutrition course</td>
        <td>20-40€</td>
        <td>Gels, barres, boisson iso</td>
      </tr>
      <tr>
        <td>Vérification mécanique vélo</td>
        <td>30-60€</td>
        <td>Fortement recommandé avant la course</td>
      </tr>
      <tr>
        <td>Total jour de course</td>
        <td>450-1000€</td>
        <td>Hors équipement</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="note">
  <p class="mid">💡 Logistique le jour J, ce qu'on oublie souvent</p>
  <ul>
    <li>Arriver la veille pour le check-in et déposer le vélo en zone transition, ne pas arriver le matin de la course pour la première fois.</li>
    <li>Prévoir le réveil 3h avant le départ pour manger et digérer tranquillement.</li>
    <li>Repérer la zone de transition la veille : compter les rangées, noter les entrées/sorties T1 et T2.</li>
    <li>Gonfler les pneus le matin de la course, pas la veille, la pression baisse avec la température.</li>
  </ul>
</div>

<h2 id="recuperation">Récupération : gérer 6 mois sans se blesser</h2>

<p>Sur 6 mois à s'entraîner sur 3 disciplines, le risque numéro 1 n'est pas le manque de forme, c'est la blessure. Un triathlète blessé à 8 semaines de sa course perd des semaines de travail et parfois toute la saison. La récupération n'est pas du temps perdu, c'est une partie intégrante de la performance.</p>

<h3>Les semaines de récupération : non négociables</h3>

<p>Toutes les 3-4 semaines, une semaine de récupération s'impose : <strong>volume réduit de 30-40%, intensité conservée</strong>. Le corps adapte et consolide les acquis pendant ces semaines, pas pendant les semaines dures. Supprimer ces semaines pour "gagner du temps" est la meilleure façon de finir blessé.</p>

<h3>Les signaux à ne pas ignorer</h3>

<ul>
  <li><strong>Douleur qui ne disparaît pas après 48h :</strong> ne pas forcer, consulter si ça persiste 5-7 jours.</li>
  <li><strong>Fatigue persistante malgré le repos :</strong> signe de surcharge. Couper 3-4 jours complètement.</li>
  <li><strong>FC de repos en hausse de 8-10 bpm :</strong> ton corps signale qu'il est sous stress. Réduis le volume cette semaine.</li>
  <li><strong>Motivation en chute libre :</strong> souvent le premier signe de surentraînement, avant même la douleur physique.</li>
</ul>

<h3>Les habitudes qui protègent</h3>

<ul>
  <li><strong>Sommeil :</strong> 8h minimum pendant les phases de fort volume. Le corps répare la nuit.</li>
  <li><strong>Renforcement musculaire :</strong> 1-2 séances par semaine centrées sur les hanches, les ischio-jambiers et le gainage. Prévient 80% des blessures de course à pied.</li>
  <li><strong>Étirements et mobilité :</strong> 10-15 min après les séances clés, pas avant (froid).</li>
  <li><strong>Hydratation quotidienne :</strong> pas seulement pendant les séances. 2-3L d'eau par jour en période d'entraînement intensif.</li>
</ul>

<!--COACHING-->

<h2 id="par-ou-commencer">Par où commencer cette saison</h2>

<p>Si tu lis cet article en te demandant si sub 6h sur un 70.3 est fait pour toi, c'est probablement le cas. La question n'est pas "ai-je le niveau ?" mais <strong>"est-ce que je suis prêt à m'entraîner sérieusement pendant 6 mois ?"</strong>.</p>

<p>Les étapes concrètes pour démarrer :</p>

<ol>
  <li><strong>Choisir ta course.</strong> Cible un 70.3 dans 6 à 8 mois. Inscris-toi maintenant, l'engagement financier force la régularité à l'entraînement.</li>
  <li><strong>Prendre ta licence FFTri.</strong> Obligatoire pour toute compétition de triathlon en France. Se fait en ligne sur le site de la fédération.</li>
  <li><strong>Évaluer ton niveau de départ.</strong> Fais un test de natation (500m chrono), une sortie vélo de 1h30, et un run de 45 min pour savoir où tu en es dans chaque discipline.</li>
  <li><strong>Structurer ta préparation.</strong> Pas juste "nager, rouler, courir" au feeling. Une vraie progression semaine par semaine avec les bonnes séances au bon moment.</li>
</ol>

<h2 id="faq">FAQ — Sub 6h sur un 70.3</h2>

<!--FAQ-->
`,
};
