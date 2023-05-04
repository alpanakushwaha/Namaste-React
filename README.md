# NamasteReact course 🙏 🚀 - taught by Akshay Saini (the Mentor, the superstar, the Cool teacher)

---

### Chapter 06- Exploring the world

    * talking (fetching) an API that our local app does not has locally (obviously)

-
- Monoliths

  > > 1 company, 1 project, 1 service handling UI, messages, notifications, database, etc..

  > > had to deploy whole project for single change.

- Microservices
  > > 1 company, 1 project divided into 100's of microservices (like mini-project ot sub-project => apps)
  > > seperate sub-project for each kind of functionality (responsibility), like, UI, database , back-end, notification, messages etc..
  > > **Seperation of Concern** => single responsibility

> > each microservice can work on different tech stack

> > Food-Villa is the UI-microservice- app that is being built

---

- ### how do you make an API call in JavaScript?

=> fetch() => functionality provided by window-object(global-object) , JS-Engine
=> promises
=> AJAX

- feature =>as n when page loads, call API, fill the data.

=> _way 1>_ website load => call API => render Page
=> **way 2>** load website => show initial render => API-call => render Page(updated UI)

---

#### when does the component renders?

=> on every state change
=> on every props change

---

- **CORS error**

- **conditional Rendering**

- **Diff algorithm** is present in _React_

- read about hooks other than useEffect() and useState()

---

### Chapter 07

```javascript
 useEffect(() => {
   API call
   getRestaurants();
  }); // no dependancy will make useEffect change after every render
```

- **never** create a component inside a component body
  because, the component inside will be **created everytime** the outer component is rendered ( like in _for-loop_)

---

```javascript
// never do this
if (true) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
}
```

because, react won't know the presence of searchText, that will lead to **in-consistency**.

---

```javascript
// never do this
for (initialisation, condition..., increment) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
}
```

because, then creates a lot of searchText, that will lead to **in-consistency**.

---

- **never** use useState to create a local state variable outside the functional component.
  => always create state variable using useState within a functional component.

---

- allowed to create any number of useEffects

- why is CDN a great place to host the imagaes
  => the images are already optimised when loaded to CDN

---
