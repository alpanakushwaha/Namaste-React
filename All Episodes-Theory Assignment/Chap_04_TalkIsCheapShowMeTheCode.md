### Is JSX mandatory for react?

- No, JSX is not mandatory for React, but preferable.
- Since manipulation the DOM using React Syntax is a bit lenthy code just to make a small change in the DOM
- JSX code is a easy (HTML like), shorter code, that saves a lot of time for a developer.

_(more **formal** answer from sources)_

- Using React without JSX is especially convenient when you don't want to set up compilation in your build environment.
- Each JSX element is just syntactic sugar for calling React. createElement(component, props, ...children)

_this much is sufficient for now,_
_will add on more info Soon..._

---

### Is ES6 mandatory for React?

- React uses ES6, ES6 is not mandatory for React.
- But it is good if you know ES6.

---

## [https://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/] (https://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)

### `{TitleComponent}` V/s `{<TitleComponent/>}` v/s `{<TitleComponent></TitleComponent>}` in JSX

`{TitleComponent}` This convention is a ReactElement named **TitleComponent** written in JSX and passed inside a Functional Component.
`{<TitleComponent/>}` This is how a Functional Component named **TitleComponent** is passed inside another functional Component. Also called as **Composition of Component**
`{<TitleComponent></TitleComponent>}` is same as `{<TitleComponent/>}` i.e. composition of Components

---

### How can I write comments in JSX?
# very very Important question (my God)
- same as that of in a JavaScript file.

```Javascript
const comment =()=>
{
    // Keypad-keys=> Ctrl+/  => for Single line Comment}

    /* Keypad-keys=> Shift+Alt+A => for multi-line Comment */
}
```
---

### What is <React.Fragment></React.Fragment> and <></>
* React.Fragments => is a component which is exported by React-Library
* <React.Fragments></React.Fragments>

  - it is like an **_empty-tag_**
  - **<></>** is the short form of <React.Fragment></React.Fragment>
  - removes the extra empty div, i.e remove extra empty nodes in the DOM.
  - can't give style inside a <React.Fragment style:{}> => no possible


### App Layout

- Header => HIGH level component
  - Logo(Title) => LOW level component
  - Nav items (right side) => low
  - Cart
- Body => HIGH
  - Search Bar => low
  - RestaurantList => low
    - ReataurantCard (many cards) => low
      - Image => low
      - Name => low
      - Rating => low
      - Cuisines => low
- Footer => HIGH
  - links => low
  - Copyright => low

---
