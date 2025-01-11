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


<!-- ### Prérequis -->


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

### Correction
- [x] [main.ts](./src/main.ts) `uiDisplay` en erreur avec *cityCard* qui est null
- [ ] Refactoriser le code
<!-- 

FOR NEXT UPDATES! (March 2025)
### API en elle-même :gear:
- mettre une image de la ville dans le cadre (autre APi?)
- Implémenter un mode dark
- Mettre en carré/grille les résultats
- remplacer le message rouge agressif par un message doux "Aucune ville retrouvée. Réessayer" à la place des grilles si les résultats sont vides
- Si l'APi n'est pas joignable afficher un message à l'utilisateur

- [ ] Si en France, afficher par défaut la ville de l'utilisateur

#### Prioritaires :warning:
- [ ] Permettre à l'utilisateur d'entrer des valeurs sans accents

### Structurer le code
- [ ] Scinder la fonction `getCityInformations` en d'autres fonctions (trop de logiques!)


 -->


## :key: Propriétaire

Créé par Loïck CHERIMONT  

Sous Licence MIT  

Dernière édition : 2025-01-11
