#### Polyfills

[https://developer.mozilla.org/en-US/docs/Glossary/Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

- Babel (transpiler)

- add scripts for **start** and **build** with parcel commands
  => start: parcel index.html
  => build: parcel build index.html

==> npx = npm run
==> npm run start = npm start

###### babel-plugin-transform-remove-console

- .babelrc is a configuration file

* React keeps track of **Key-attribute**
* It is preffered to give **unique key** to each sibling element as react does not uniquly identifies same kind of sibling tags, to make if easy for **Diff algo** to identify the element changed when react is updating the DOM
  => _reconcilliation algo_

* updating the DOM => render, re-render

* react.createElement() present in node-modules
  ==> react.createElement converts the code into => object=> converts into HTML => puts up on DOM

* Creating elements using react.createElement() requires lot of code to write
* therefore, we use JSX, which is HTML-like syntax

### What is JSX?

- JSX is HTML-like code written in Javascript file.
- JSX code is internally converted to React code, this React code is converted into HTML code, inturn this HTML code is rendered by ReactDOM.

---

### Diffrence between JSX and HTML

[HTML vs JSX](https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/#:~:text=HTML%20is%20a%20very%20important,a%20syntactic%20sugar%20for%20React.)
 1> eg: _tabindex_ in HTML
and _tabIndex_ in JSX

2> self-closing tags
3> camel-casing

### Superpowers of JSX?

- Readability
- Maintainability
- Developer friendly
- easy syntax (like HTML)
- modularity (no repetition, short)

---

### Role of **_type_** attribute in script tag? What options can be used there?

Role of **type** attribute in script tag are:

- **module** : this value makes the javascript file to be

```javascript
<script type="module"> script.js</script>
```

treated as **Javascript Module**

- **MIME type** i.e. javascript or application

```javascript
<script type="javascript/application"> script.js</script>
```

- **importmap** : this value indicates the presence of an import map that is JSON object

```javascript
<script type="importmap"> script.js</script>
```

---

### `{TitleComponent}` V/s `{<TitleComponent/>}` v/s `{<TitleComponent></TitleComponent>}` in JSX

`{TitleComponent}` This convention is a ReactElement named **TitleComponent** written in JSX and passed inside a Functional Component.
`{<TitleComponent/>}` This is how a Functional Component named **TitleComponent** is passed inside another functional Component. Also called as **Composition of Component**
`{<TitleComponent></TitleComponent>}` is same as `{<TitleComponent/>}` i.e. composition of Components
