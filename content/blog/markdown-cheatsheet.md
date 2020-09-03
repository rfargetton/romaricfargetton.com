---
title: L'indispensable fiche de rappel pour Markdown
date: 2020-09-03T08:23:56.191Z
color: papayawhip
featured image: /assets/pngegg.png
type: blog
tags:
  - divers
---
J'adore Markdown. Pour moi, c'est un outil incontournable qui peut être aussi utile au travail que pour les tâches du quotidien. Personnellement, je m'en sers surtout pour prendre des notes, rédiger mes cours et les articles de ce blog. La rédaction d'une fiche de rappel s'est donc rapidement imposée comme une évidence, et j'ai décidé aujourd'hui de partager ce précieux document 😃.

## Mais qu'est-ce que Markdown ?

Markdown est un langage de balisage qui permet d'ajouter des éléments de mise en forme à du texte brut. **Créé en 2004 par John Gruber et Aaron Swartz**, il est assez simple de prise en main et a grandement gagné en popularité depuis sa création. Il est aujourd'hui possible d'utiliser Markdown sur [Reddit](https://www.reddit.com/), [Github](https://www.github.com) ou [Discord](https://discord.com/), entre autres.

Une fois rédigé, un document Markdown peut être interprété par un logiciel dédié et traduit en HTML ou exporté en PDF par exemple. Ainsi, Markdown peut être utilisé dans toutes sortes de contextes, allant de la rédaction d'articles et contenus de sites web jusqu'à la mise en forme d'emails en passant par la rédaction de documents techniques. 

Voici un extrait de texte utilisant le balisage Markdown:

```markdown
## Mais qu'est-ce que Markdown ?

Markdown est un langage de balisage qui permet d'ajouter des éléments de mise en forme à du texte brut. **Créé en 2004 par John Gruber et Aaron Swartz**, il est assez simple de prise en main et a grandement gagné en popularité depuis sa création. Il est aujourd'hui possible d'utiliser Markdown sur [Reddit](https://www.reddit.com/), [Github](https://www.github.com) ou [Discord](https://discord.com/), entre autres.
```

Vous l'avez compris, le principe est simple. Cependant, Markdown est riche en fonctionnalités et les syntaxes appropriées sont nombreuses. Faisons ensemble le tour des mises en forme proposées par ce langage, ainsi que le résultat en HTML. 

## Texte

```markdown
Normal, **Gras**, *Italique*, ~~Barré~~
```
Normal, **Gras**, *Italique*, ~~Barré~~


## Titres

Vous pouvez utiliser jusqu'à 6 niveaux de titres différents en Markdown, de `#` à `######`.

```markdown
# Titre
## Sous-Titre
```

# Titre
## Sous-Titre

## Liens

```markdown
[Titre du lien](https://www.example.com)
```

[Titre du lien](https://www.example.com)

## Citations

```markdown
> In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, 
> filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole 
> with nothing in it to sit down on or to eat: it was a hobbit-hole, 
> and that means comfort.
```
> In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, 
> filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole 
> with nothing in it to sit down on or to eat: it was a hobbit-hole, 
> and that means comfort.

## Listes

### Liste non ordonnée

```markdown
- Premier élément
- Second élément
- Troisième élément
```

- Premier élément
- Second élément
- Troisième élément

### Liste ordonnée

```markdown
1. Premier élément
2. Second élément
3. Troisième élément
```

1. Premier élément
2. Second élément
3. Troisième élément

### Liste de tâches

```markdown
- [x] Créer une branche
- [ ] Ajouter des commits
- [ ] Ouvrir une pull request
```

- [x] Créer une branche
- [ ] Ajouter des commits
- [ ] Ouvrir une pull request

## Code

### Code en ligne

```markdown
Voici un peu de `code en ligne`.
```
Voici un peu de `code en ligne`.

### Bloc de code

    ```javascript
    {
      firstName: "John",
      lastName: "Smith",
      age: 25
    }
    ```
    
```javascript
{
  firstName: "John",
  lastName: "Smith",
  age: 25
}
```
    
## Images

```markdown
![Un chemin en montagne](https://images.ctfassets.net/9olkiac82a1q/3PkpThJCXct2V6jb757jR/a2e9deca53a874e47530bc04ef4fb42c/Hero.png?q=50)
```

![Un chemin en montagne](https://images.ctfassets.net/9olkiac82a1q/3PkpThJCXct2V6jb757jR/a2e9deca53a874e47530bc04ef4fb42c/Hero.png?q=50)

## Tableaux

```markdown
| Titre 1 | Titre 2 | Titre 3 |
| --- | --- | --- |
| Cellule 1 | Cellule 2 | Cellule 3 |
| Cellule 1 | Cellule 2 | Cellule 3 |
```

| Titre 1 | Titre 2 | Titre 3 |
| --- | --- | --- |
| Cellule 1 | Cellule 2 | Cellule 3 |
| Cellule 1 | Cellule 2 | Cellule 3 |