# Espace client : architecture

Référence pour construire l'espace athlète / coach sans dette. Design validé le 2 novembre 2026 :
variante D de `/variantes` (branche `feat/espace-variantes`).

## Qui a un compte

| Profil | Comment il arrive | Ses séances | Coach | Messagerie |
|---|---|---|---|---|
| **Coach** (Thomas) | e-mail listé dans `COACH_EMAILS` | — | — | toutes les conversations |
| **Athlète coaché** (tier 2) | créé par le coach (plus tard : questionnaire + abonnement Stripe) | écrites par le coach, semaine par semaine | oui | oui |
| **Acheteur de programme** (tier 1, après la V1) | achat Stripe d'un programme de 8 semaines | le programme posé sur ses dates à partir de son jour de départ | non | non (invitation au coaching) |

Le public gratuit (séance du jour) n'a **pas** de compte.

Une seule interface pour les athlètes : les fonctions dépendent du **type de plan**, jamais d'une copie du code.

```
plan = { kind: "coaching" }                                   → séances écrites par le coach
plan = { kind: "programme", programme: "force-velo", start }  → séances du programme, décalées depuis start
```

## Les séances : un seul format

Tout s'écrit dans le format texte du programme gratuit (`data/programme/FORMAT.md`), lu par
`lib/programme.ts` :

- **Coaching** : le coach écrit une semaine dans l'éditeur de son espace (texte + aperçu en direct),
  enregistrée par athlète et par lundi. Jamais par le code ni un déploiement.
- **Programmes 8 semaines** : écrits une fois dans le dépôt avec des jours relatifs
  (`## Semaine 1 · Lundi · Vélo · …`), posés sur les dates de l'acheteur.

Une seule source de vérité pour le calcul de charge : la charge prévue d'un bloc vient de sa durée et
de son intensité (% FTP / VMA / CSS ou RPE). Une séance **validée** compte sa charge prévue, une séance
manquée ne compte rien. Forme (moyenne 42 j), fatigue (7 j), fraîcheur = forme − fatigue.

## Données (Redis Upstash en production, fichier local en développement)

| Clé | Contenu |
|---|---|
| `user:{id}` | `{ id, email, name, role, plan, createdAt }` |
| `user-by-email:{email}` | id |
| `users` | ensemble des ids athlètes |
| `metrics:{id}` | historique des tests `{ date, ftp?, vma?, css?, weight? }[]` |
| `week:{id}:{lundi}` | texte de la semaine écrite par le coach (coaching) |
| `log:{id}:{date}` | validation `{ status: done/missed, rpe?, comment?, at }` |
| `thread:{id}` | messages `{ from: athlete/coach, text, at }[]` + lu / non lu |
| `login:{hash}` | jeton de lien magique (haché, usage unique, expire en 20 min) |
| `session:{hash}` | `{ userId, expires }`, glissante 90 jours |

## Sécurité

- Lien magique : jeton aléatoire de 32 octets, **stocké haché** (SHA-256), usage unique, 20 minutes.
- Cookie de session : identifiant opaque, `HttpOnly`, `Secure`, `SameSite=Lax`, 90 jours glissants.
- Toute lecture passe par la couche d'accès (`lib/auth.ts`) : session lue côté serveur, rôle vérifié.
- Toute écriture passe par une Server Action qui **revérifie** la session et le rôle (un athlète ne
  touche qu'à ses propres données ; seul le coach écrit les semaines et lit toutes les conversations).
- Lecture de session derrière `<Suspense>` (Cache Components) ; rien de personnel dans le shell statique.
- Envoi des liens : par e-mail via Resend quand le domaine sera vérifié ; d'ici là, le coach génère
  le lien depuis son espace et l'envoie lui-même.

## Phases

1. **Fondations** : stockage, modèle, lien magique, sessions, rôles, pages `/connexion`, `/espace`, `/coach`,
   création d'un athlète et lien de connexion depuis l'espace coach.
2. **Plans et suivi** : éditeur de semaine du coach, espace athlète (variante D) sur les vraies données,
   validation des séances, messagerie.
3. **Calculs** : charge, forme, fatigue, fraîcheur, volume, régularité, tests (saisis par le coach).
4. **Programmes 8 semaines** : format à jours relatifs, achat Stripe, allures personnelles.
5. **Questionnaire coaching** → abonnement → compte athlète.
