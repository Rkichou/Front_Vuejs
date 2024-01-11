# Application Vue.js - Composants

## Accueil

Le composant Accueil représente la page d'accueil de l'entreprise. Il affiche une présentation de l'entreprise, les services proposés et les objectifs. Les utilisateurs peuvent explorer les sections à propos et, en survolant un service ou un objectif, un overlay et une ombre sont ajoutés pour une meilleure expérience. Le footer contient l'adresse de l'entreprise et un lien mailto pour contacter par e-mail.

## Joueurs

Le composant Joueurs affiche la liste de tous les joueurs sous forme de cartes empilées. En survol, les cartes s'inclinent légèrement et brillent en doré. Lorsqu'un joueur est cliqué, l'utilisateur est redirigé vers une autre page avec les détails complets du joueur.

## Club

Le composant Club affiche la liste des clubs en partenariat avec l'entreprise. Les utilisateurs peuvent explorer les clubs partenaires pour en savoir plus sur eux, y compris leur nom, pays d'origine et réalisations.

## Offres

Le composant Offres permet aux utilisateurs de visualiser les offres reçues pour les joueurs. Il affiche les détails des offres, y compris le nom du club offrant, le montant proposé, les conditions contractuelles, etc. Cela permet à l'entreprise de gérer les offres et de prendre des décisions éclairées pour ses joueurs.

## Nous-contacter

Le composant Nous-contacter représente une page de contact où les utilisateurs peuvent remplir un formulaire pour contacter l'entreprise. Le formulaire permet aux clients intéressés par les services de l'entreprise de poser des questions, de demander des informations supplémentaires ou de demander un suivi de leur demande.

Ces cinq composants sont essentiels pour fournir une expérience utilisateur complète dans l'application Vue.js. Ils permettent aux utilisateurs d'explorer les joueurs, les clubs partenaires, les offres et de contacter l'entreprise facilement avec des données interactives.


## Installation des dépendances

```sh
npm install
```

### Routage

- Le routage est déjà installé avec une configuration minimale présent dans le dossier src/router

### Gestion de l'état avec Pinia

- Un store minimal est déjà installé présent dans le dossier src/stores

### Lancer le serveur de développement

```sh
npm run dev
```

### Avoir un rendu pour la production

```sh
**Auteur :** Rayan Kichou

npm run build
```
