# API_VillesFrance_TypeScript :fr:

<!-- replace this sample image by an app screenshot -->
![Avant gout de l'appli.](/github/main-screen.png)


## :information_source: A propos  

API cherchant les villes de France grâce à un formulaire  
Objectif : Travailler TypeScript avec les API.


## :wrench: Outils de développement
- [API de Découpage Administratif](https://api.gouv.fr/documentation/api-geo 'Site officiel des API du Gouvernement Français')
- [TypeScript 5.6.2](https://www.typescriptlang.org/ 'Site officiel de TypeScript') 
- [Bootstrap 5.3.3](https://getbootstrap.com/ 'Site officiel de Bootstrap')


<!-- ### Prérequis

Conçu en utilisant les *modules*, pour lancer le projet, il est nécessaire de passer par un serveur

1. Ouvrer un terminal de commandes

2. Entrer les lignes qui suivent

```bash
npx http-server 
```

3. Après installation et lancement du serveur, le terminal affiche :

```bash
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080 # Cliquez sur ce lien en maintenant Ctrl enfoncé
  http://192.168.1.198:8080 # Cliquez sur le lien en maintenant Ctrl enfoncé
Hit CTRL-C to stop the server
```

4. Vous êtes sur la page principale!

![Page principale](/github/main-screen.png) -->


## :inbox_tray: Installation

1. Lancer votre terminal
2. Récupérer le projet dans votre espace de travail avec la commande suivante:
```bash
git clone https://github.com/loickcherimont/api-villesfrance-ts
```
3. Entrer dans le dossier, créer et lancer le projet avec les lignes suivantes:
```bash
cd api-villesfrance-ts
npm install
npm run dev
```


### Comment marche -t-elle?

1. Entrer le nom d'une ville de France

> Ex: Paris (peu importe si majuscule ou minuscule)

2. Appuyer sur le bouton de **Recherche**

3. L'application renvoie une ou plusieurs cartes sur la ville recherchée avec quelques informations

> :information_source: En cas de saisie non valide, l'application renvoie un message d'erreur

## :hammer_and_wrench: Maintenance
### :rocket: Fonctionnalités
- Ajouter le nom du département

### Correction
- [main.ts](./src/main.ts) `uiDisplay` en erreur avec *cityCard* qui est null
<!-- 
### API en elle-même :gear:
- [x] Traiter les doublons (Saint-Denis), créer de nouvelles cartes d'informations pour chacun
- [ ] Si en France, afficher par défaut la ville de l'utilisateur

#### Prioritaires :warning:
- [x] Sécuriser l'API contre les malfaiteurs (Injection code, etc)
- [ ] Permettre à l'utilisateur d'entrer des valeurs sans accents

### Donnons lui du beau :sparkles:
- [ ] Formater l'affichage des **codes postaux**
- [x] Afficher message d'erreur si nom de ville non identifiée/vide
- [x] Rendre le formulaire case-insensitive
- [x] Préparer la requête avant soumission (trim, ...)
- [ ] Afficher les villes en grille (Flexbox) en gardant les résultats au-dessus

### Structurer le code
- [ ] Scinder la fonction `getCityInformations` en d'autres fonctions (trop de logiques!)


 -->


## :key: Propriétaire

Créé par Loïck CHERIMONT  

Sous Licence MIT  

Dernière édition : 2025-01-06
