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

- **never** create a component inside a component
