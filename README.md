# Révisions Maths

Appli web hors-ligne (PWA) pour réviser dans les transports : fiches mémo, QCM et résumés de cours, avec répétition espacée.

Pas de build, pas de dépendances : ce sont des fichiers statiques.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique |
| `app.js` | Logique : navigation, sessions, répétition espacée, stats |
| `style.css` | Thème sombre, pensé pour être utilisé d'une seule main |
| `data/*.js` | **Tout le contenu**, un fichier par cours (chapitres → résumé, fiches, QCM). Chaque fichier ajoute son cours à `window.COURSES` ; ajouter la balise `<script>` dans `index.html` et le chemin dans `sw.js`. |
| `sw.js` | Service worker : met l'appli en cache pour le hors-ligne |
| `vendor/katex/` | Rendu des formules LaTeX (copie locale de KaTeX 0.16.22, licence MIT) |

## Ajouter ou modifier du contenu

1. Modifier ou créer un fichier dans `data/` (voir le format dans les fichiers existants).
   - Les `id` doivent être uniques et **ne jamais changer** : la progression y est liée.
   - Pour les QCM, `bonne` est l'indice de la bonne réponse dans `choix`. L'ordre est mélangé à l'affichage.
2. **Changer `VERSION` dans `sw.js`**, sinon les téléphones garderont l'ancienne version en cache.
3. Republier les fichiers.

## Répétition espacée

SM-2 simplifié. Notes : Raté / Difficile / Su. Les QCM sont notés automatiquement (bonne réponse = Su, mauvaise = Raté).
Un élément est « maîtrisé » quand son intervalle atteint 7 jours. La progression est stockée dans le `localStorage` du téléphone (clé `rm-progress-v1`), avec export et import dans l'onglet Progrès.

## Tester en local

Il faut un serveur HTTP : le service worker ne fonctionne pas en `file://`. Par exemple :

```bash
npx serve .
```

## Publier sur GitHub Pages

1. Créer un dépôt public sur GitHub (par ex. `revision-maths`).
2. Y envoyer le contenu de ce dossier (`index.html` à la racine du dépôt).
3. Aller dans Settings → Pages → Source : « Deploy from a branch » → `main` / `(root)`.
4. L'appli est disponible à `https://<pseudo>.github.io/revision-maths/`.
