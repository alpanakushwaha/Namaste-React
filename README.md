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

- created Shimmer

---

##### Formik (pkg(a library) to make /build forms without tears........)
---

- installed react-router-dom (**npm i react-router-dom**)

* About.js component file created, (shortcut key=> rafce)
  - write the code within

to go to => http://localhost:1234/about => should take me to About page

```javascript
import { createBrowserRouter } from "react-router-dom";
```

the above statement helps us to create routing.

```javascript
const approuter = createBrowserRouter([
  {
    // creating routing configuration
    // has list of paths
  },
]);
```

=>> wrong order

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);
// this order, i.e, appRouter before Applayout will give Hoisting Error
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
```

> > correct way: as shown below

```javascript
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);
```

=> RouterProvider imported

- rendering should happen according to path, not a spacific js file like script.js,
- so,

```javascript
root.render(<RouterProvider router={appRouter} />); // router is props
```

- now if you search **http://localhost:1234/about**, this will go to about page.

- **http://localhost:1234/xyz** will show an Unexpected Application Error! 404 Not Found ..... (a good UI for showing error , great User experience)

---

- created an Error Component, to read error, as a message in dev-console

```javascript
errorElement: <Error />;
```

- now, a hook named **useRouteError**

```javascript
import { useRouteError } from "react-router-dom";
```

- using anchor tag has a problem, that it **refreshes the whole page** when we click on the text or image applied having the anchor tag. **_This is undesirable_**
-

* therefore, we have a concept of **Single Page Configuration** (SPA), that does not reloads(does not makes network-call) for each change in UI.
  => example: (_without SPA_) from home to about page, fetch is done, after making a network-call

* _Two types of routing_ : 1. **client side routing** 2. **server-side-routing** => web-pages coming from server

> > _client-side-routing_: a webpage loads without any network-call, as components are in local server.

> > to **avoid reloading**, react-router-dom gives **Link**

```javascript
import { Link } from "react-router-dom";

<Link to="/about" className="about_page">
  <li>About </li>
</Link>;
```

- who developed the link tag?
  "Remix developers"

* React-router-dom is keeping track of all the links.
* Link component is converted to anchor-tag which is understood by browser.
* ---
* **Nested -Routing**
  > > example: to make the About Component between Header and Footer component
  > > using, **Outlet** that renders according to the config.
  - _Outlet_ is a component
    > > acc. to route, all the children components will go to Outlet

```javascript
<>
  <Header />
  {/*{Outlet}*/}
  <Outlet />
  <Footer />
</>;

children: [
  {
    path: "/",
    element: <Body />,
  },
];
```

---

#### Dynamic Routing

- When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router.

---

> > RestaurantMenu.js Added

- with for extension **http://localhost:1234/restaurant/anyID**

* Now, we want to _read_ the ID of this restaurant menu.
* can read the ID by using **useParams** Hook

```javascript
{
        path: "/restaurant/:id", // :id or :anyKeyThing
        element: <RestaurantMenu />,
      }
```

- using useParams hook, we can **read any dynamic URL**
