---
title: Toutes les façons de créer un composant dans React
date: 2020-06-04T10:23:57.816Z
featured image: /assets/1200px-react-icon.png
type: blog
tags:
  - react
  - javascript
---
Avec [React](https://fr.reactjs.org), nous sommes tous habitués à un certains nombres de procédés et de syntaxes spécifiques, notamment lorsqu'il s'agit de créer un composant. Mais sommes-nous bien sûrs de comprendre tout le code que nous écrivons ? Pour aller plus loin dans React, il faut nous éloigner des simples tutos et "soulever le capot" de cette librairie afin de mieux comprendre les différents mécanismes à l'œuvre lorsque nous crééons un composant.  

## Le mot clé class

Il s'agit de la manière la plus répandue de créer un composant dans React. Elle s'appuie sur le mot clé `class` introduit par ECMAScript 2015, connue également sous le nom de ES6. Pour résumer, Le mot-clé class est en fait un sucre syntaxique qui facilite la création d'instances d'objet. 

Nous pouvons commencer à créer le composant comme ceci:

```javascript
class MonComposant extends React.Component {
  ...
}
```

Premier exemple d'une syntaxe que certains d'entre nous ont l'habitude d'utiliser dans React mais peut-être pas ailleurs. Et pour ces derniers, les quelques lignes de code ci-dessus peuvent être perturbantes. Que venons-nous de faire ? Nous venons de créer une classe `MonComposant` qui héritera, via le mot clé `extends` des propriétés et méthodes définies dans la classe `Component` de React. `MonComposant` est donc une **sous-classe** de `React.Component`. 

> Une classe n'est pas un objet mais plutôt un outil de construction d'objets. En réalité, une classe est une fonction spéciale dédiée à la création d'objets. 

On s'en rend mieux compte si on ajoute `console.log(this.__proto__.__proto__)` dans la méthode `render()` et qu'on observe le résultat dans la console. Pour rappel, La propriété `__proto__` renvoie le prototype de l'objet concerné.

```
// Résultat
Object { isReactComponent: {}, setState: setState(partialState, callback), forceUpdate: forceUpdate(callback), … }
```

On retrouve notamment la méthode `setState` que l'on utilise pour mettre à jour l'état du composant. Il faut donc remonter deux échelons dans la chaine d'héritage pour retrouver `React.Component`.

### render()

La seule méthode **requise** pour définir une sous-classe de `React.Component` est `render()`. Toutes les autres sont facultatives. C'est dans cette méthode que nous déterminons quels éléments constituent notre composant et vont donc s'afficher dans le DOM au moment du montage.

```javascript
class MonComposant extends React.Component {
  render() {
    <h1>Hello World !</h1>
  }
}
```

### constructor()

Comme dans toute classe, on peut y retrouver une méthode `constructor()` qui permettra de définir les méthodes et propriétés propre à chaque instance de classe, à la manière d'une fonction constructeur (comme son nom l'indique). Si nous n'avons pas besoin d'initialiser de propriété d'état pour ce composant, la méthode `constructor()` est inutile et nous pouvons l'oublier.

Autrement, voici les premier pas pour la définir:

```javascript
class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
  ...
}
```

Regardons tout cela de plus près. Le mot-clé `super()` est utilisé pour accéder à la fonction constructeur du parent (dans notre cas React.Component). Sans cela, `this.props` renverrait `undefined`. On pourrait également écrire : 

```javascript
constructor(props) {
  this.props = props ;
}
```

## En utilisant une fonction

Using the traditional javascript function statement :

```javascript
function MyComponent(props) {
  return <div>{this.props.count}</div>
}
```

Or the ES6 arrow function declaration :

```javascript
const MyComponent = (props) => (
  <div>{props.count}</div>
)
```