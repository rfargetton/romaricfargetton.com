---
title: Les générateurs de site statique
date: 2020-10-16T10:17:27.961Z
color: transparent
featured image: /assets/ssg-header-01.png
type: blog
tags:
  - SSG
  - jamstack
---
Les générateurs de sites statiques ou SSG (*static site generator*) offrent une nouvelle option, novatrice et prometteuse, dans la création de sites internet. J'ai moi-même choisi d'utiliser un SSG ([Gatsby](https://www.gatsbyjs.com)) pour la création de ce site internet. Mais comment fonctionnent-ils ? Quels sont leurs points forts ? En quoi sont-ils différents de solutions plus traditionnelles comme WordPress ou Drupal ?

## Qu'est-ce que c'est ?

![SSG](../assets/best-static-site-generator-2020.png)

Le principe est en fait assez simple. Un SSG est un programme qui combine, d'une part, une **collection de templates et composants** et, d'autre part, une **source de contenu donnée** pour générer des **fichiers HTML, CSS et JS** qui constitueront le site final.

Par la suite, la collection de fichiers HTML qui composent le site peuvent simplement être mis en ligne, prêts à être distribués au visiteurs du site. Dans cet article j'utilise le terme SSG mais pour désigner cet assemblage de technologies, on utilise aussi souvent le terme JAMstack.

## Quelle différence avec un site dynamique traditionnel ?

La plus grande différence entre un SSG et un site dynamique se situe au moment ou le visiteur demande la page web.

**Dans le cas d'un site dynamique classique, il faut attendre que le serveur traite la requête et génère la page web** demandée avant de la transmettre au visiteur. Il faut bien comprendre que cette mécanique doit être mise en place à chaque fois qu'un utilisateur demande une page du site. Elle est couteuse en opérations de calcul et de logique pour le serveur et elle est également dommageable pour le visiteur qui doit attendre, parfois longtemps, l'affichage d'une page web.

**Dans le cas d'un SSG, les pages ont déjà été générées lors d'une phase de construction (*build time*) du site**. Elles sont disponibles et prêtes à être envoyées au visiteur. En résulte des temps de réponse optimisés et des pages web qui s'affichent quasi-instantanément !

## Et pour le contenu ?

Les sources de contenu acceptées varient en fonction du générateur choisi mais elles peuvent aller du **CMS** (WordPress, Contenful, Drupal etc) à des données brutes provenant de **services API** en passant par des collections de **fichiers Markdown**. **Les options sont légions** et peuvent être combinées au sein d'un même site. En définitive, on finit toujours par trouver une solution qui convient à l'utilisateur (administrateur, éditeur) et au développeur.

**À chaque fois qu'un contenu du site est modifié par un utilisateur, un phase de construction du site est lancé**, manuellement ou de manière automatisée, et la collection de fichiers qui en résulte est ensuite mise en ligne. Le site a été mis à jour !

## Les points forts

Les sites créés à l'aide d'un SSG bénéficient de nombreux avantages parmi lesquels on retrouve presque toujours les suivants :

* 🔐 **Sécurité**
* 🧘‍♂️ **Fiabilité**
* 🚀 **Performance**
* 🌱 **Évolutivité**
* 💰 **Économie**

### Sécurité

Du fait que l'ensemble des fichiers constituant le site ont été générés en amont, **le serveur qui distribue un site statique est très simple dans les fonctionnalités qu'il endosse**. Il ne fait que traiter la requête et distribuer les fichiers qui correspondent à cette requête. Un serveur qui effectue peu d'opérations de logique est peu vulnérable aux programmes malveillants puisqu'il leur offre **moins de points d'accès**.

La plupart des sites dynamiques que nous connaissons (Drupal, WordPress) utilisent par défaut une base de données pour gérer l'évolution de leur contenu. La présence d'une base de données augmente également la possibilité de failles de sécurité et de fonctionnement. En supprimant la base de données, on améliore la fiabilité du site ainsi que son niveau de sécurité.

### Performance

![performance](https://media.giphy.com/media/SRMt5G2uQqcbvnxihP/giphy.gif)

Il y a presque 10 ans, lorsque j'ai commencé à réaliser des sites web, ces derniers n'étaient que de simple collections de fichier HTML sur lesquels j'intervenais directement pour modifier le contenu. Ce fonctionnement était très archaïque mais j'étais toujours étonné par le niveau de performance et de rapidité de ces sites très simples. Avec les SSG, j'ai pu retrouver cette quasi-instantanéité de réponse.

Comme nous l'avons vu plus haut, les pages demandées par le visiteur sont déjà prêtes. Le processus de génération des pages web étant totalement dissocié de celui de la requête utilisateur, les pages s'affichent très rapidement. **À vous les supers scores de performance !**

![page speed insight tests](../assets/capture-d’écran-2020-09-18-à-16.01.02.png)

### Économie et évolutivité

**L' hébergement d'un site statique est toujours très bon marché**. Le plus souvent, c'est même gratuit. Vous pouvez dès demain lancer et héberger votre premier projet statique avec [Netlify](https://www.netlify.com) et cela ne vous coutera pas un centime.

Par ailleurs, avec un site statique, pas besoin de mettre son plan d'hébergement à jour ou d'ajouter de la puissance de calcul coté serveur pour faire face à un pic de trafic. 

### Et les points faibles ?

Malheureusement, aucune solution n'est parfaite. Certes, les sites statiques sont performants, sûres, simples à déployer et à faire évoluer mais ils ne correspondent pas forcément à tout type de projet. Pour grossir le trait, un SSG convient d'avantage à un site qui requiert peu d'interactions avec l'utilisateur. **Les blogs, sites de documentation et de présentation, *landing page* etc. sont de parfaits candidats pour un premier projet SSG !**

Ceci étant dit, l'environnement JAMstack est actuellement en pleine ébullition. Start-ups, agences digitales et développeurs à travers le monde se tournent de plus en plus vers cette option en raison des nombreux bénéfices qu'elle présente. De nouvelles solutions apparaissent tous les jours et offrent de nouvelles perspectives pour tous ceux qui aiment créer, développer et utiliser des sites statiques. Le framework** [Next.js](htttps://www.nextjs.org)** par exemple,  **peut mêler pages statiques et pages générées coté serveur**, ce qui le rend beaucoup plus polyvalent qu'un SSG classique tel que Gatsby.

## Pour conclure

Les SSG ne constituent peut-être pas la solution idéale pour tous les projets mais cette nouvelle manière de créer des sites web est très enthousiasmante. Ci-dessous quelques liens utiles pour se documenter et peut-être démarrer son premier projet JAMstack !

- [Jamstack.org (en anglais)](https://jamstack.org)
- [C'est quoi la Jamstack au juste ? – Jamstatic](https://jamstatic.fr/2019/02/07/c-est-quoi-la-jamstack/)
- [Welcome to the Jamstack – Netlify (en anglais)](https://www.netlify.com/jamstack/)