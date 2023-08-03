#### Polyfills

[https://developer.mozilla.org/en-US/docs/Glossary/Polyfill] (https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

### What is JSX?

- JSX is HTML-like code written in Javascript file.
- JSX code is internally converted to React code, this React code is converted into HTML code, inturn this HTML code is rendered by ReactDOM.

---

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
