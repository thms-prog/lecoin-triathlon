# Écrire le programme

Un fichier par mois : `2026-11.md`, `2026-12.md`… Le site lit ces fichiers tout seul :
la séance du jour apparaît sur l'accueil le jour J, et reste consultable 3 jours.
Ce même format servira aux plans des athlètes coachés.

## Une séance

```
## Lundi 3 novembre · Vélo · Faible cadence 4×5'
Séance de force : 55-60 rpm assis, ça doit tirer dans les jambes, pas dans les poumons.
- 10' · 60% FTP · échauffement progressif, cadence normale
- 4 × [5' · 75% FTP · assis 55-60 rpm | 3' · 55% FTP · récup cadence libre]
- 10' · 60% FTP · retour au calme
> Option extérieur : mêmes blocs sur une montée régulière, gros braquet.
```

1. **Titre** : `## Jour date mois · Discipline · Titre de la séance`
   - Discipline : `Nage`, `Vélo`, `Course` ou `Repos` (pour un repos, pas besoin de titre ni de blocs).
2. **Explication** : une ou plusieurs lignes de texte libre, juste sous le titre.
3. **Blocs** : une ligne par bloc, qui commence par `- `, en 3 parties séparées par ` · ` :
   - **durée ou distance** : `10'`, `45''`, `1h`, `1h30`, `400 m`, `1,5 km`
   - **intensité** (facultative) : `75% FTP`, `90% VMA`, `85% CSS`, une fourchette `55-65% FTP`, ou `RPE 6`
   - **consigne** : texte libre
4. **Répétitions** : `4 × [bloc | bloc]`, chaque bloc entre crochets au même format, séparés par `|`.
   Le site dessine chaque répétition sur le profil (5' / 3' / 5' / 3'…).
5. **Note sans durée** : une ligne qui commence par `> ` (option, matériel, conseil).

## Exemples par discipline

```
## Mardi 4 novembre · Nage · Technique et allure CSS
Éducatifs en début de séance, puis allure seuil sur des 200.
- 300 m · RPE 3 · échauffement crawl et dos
- 4 × [50 m · RPE 4 · éducatif rattrapé | 15'' · récup]
- 5 × [200 m · 95% CSS · régulier | 30'' · récup]
- 200 m · RPE 2 · retour au calme

## Mercredi 5 novembre · Course · Footing endurance
- 45' · 70% VMA · aisance respiratoire totale, tu dois pouvoir parler

## Jeudi 6 novembre · Repos
```

Une récupération sans intensité (`15'' · récup`) apparaît en barre basse sur le profil et compte dans la durée.
Pour qu'elle ait sa vraie hauteur, donne-lui une intensité (`3' · 55% FTP · récup`).
