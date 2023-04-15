# NamasteReact 🙏 🚀 
## Chapter 01-Inception 
### Theory Assignment 

### What is Emmet ?
* emmet is a toolkit to write code using abbrevations for languages such as HTML, XML and CSS, PHP etc . 
* the user needs to know a bunch of shortcuts keys to get the expansion of the shortcut text

   * example 1: typing '!' will give the HTML boiler plate

* example 2: 


```html
ul>li*2
```
will expand as 
```html
<ul>
    <li></li>
    <li></li>
</ul>

```
---

### What is the difference between library and framework?

Library: 
* pre-written code such as functions, methods, objects, classes to optimize program/task, also to solve  specific common problems.
* example: NumPy for ML, Matplotlib for Python, Apache Spark for Scala, Python, Java and SQL, React, Redux, jQuery
* can be replaced by another library, if a particular one doesn't solve a problem/ do a specified task.
* the programmer has control over the application flow, when and where to contact the library. 
* needs less code, hence improving the performance and load time

Framework: 
* Frameworks generally includes a present architecture or design that developers must work within. Frameworks often focus on functioning as an all-in-one solution for a specific methodology.
* Includes a vareity of APIs, compilers, support applications, libraries, etc.
* can't be replaced easily
* inversion of control, i.e. the framework calls us, i.e. the framework controls the flow.
* large amount of code, that reduces the performance and increases load time.
* examples of framework are Angular, Django, Express, SpringRails

 ---

### What is CDN ? Why do we use it?

* CDN is a network of servers to speed up the content delivery of web page content such as HTML, CSS or Javascript, images, videos, etc, by temporarily storing thse files (i.e. caching) and sending these content to user

* We use it for the number of advantages CDN provides those are as follows:
   * **performance** due to 
      * reducing the distance between origin server and user hence, reducing the response time
      * reducing the file size that increase the load speed                

   * **Reliability**: that balances the load of network traffic 
   * **Redundancy** : if a server/ a data center goes down, CDN will have content from other networks to deliver to the user.
   * **Cost saving** : reducing the number of trips **to and from the origin server** reduces the charge of data transfer between origin-server and User (called as bandwidth cost)
   * **Resilience against attack** : CDNs defends websites from  denial-of-service (DoS) and distributed denial-of-service (DDoS) attacks that is capable to absorbs a large amount of traffic.

---

### Why is React known as React?
* React is one of many libraries and it’s completely frontend and specializes in things that the user interacts with when they’re using a website like mouse clicking, submitting and typing.
* while using React, the website is divided into smaller **components** like header, title, images, texts, footer etc. 
Changing a component will re-render the particular component, not the whole website.
* **JSX** allows to build components using properties which makes it possible to insert custom data into the components.

*  **Virtual DOM**
* React create a Virtual DOM using JSX and compares it with the actual DOM, and then replaces wherever the changes are observed clled as **Selective Updating** resulting in **better load time** and **computing power**.

 ---
 
 ### What is crossorigin in Script tag?
* crossOrigin is an HTML attribute that sets the mode of the request of resources (images, audio, video, scripts, fonts etc.) and provides support for CORS.
* CORS is used to manage cross-origin requests.
* Cross-origin-resourse-Sharing--> is a mechanism to allow when the resourses of a web-page is requested by a domain (or scheme or port) that is outside the wep-pages domain.
* defines a way a browser and a server interacts and decide if the cross-origin request is safe or not.
* CORS relies on a mechanism by which a "preflight" is made from browser to request the server that is hosting the cross-origin resources, to check the permit of actual request by sending headers  of HTTP methods and actual request.

---

### What is the difference between react and reactDOM. Also why both are available over CDN link?
* **React** library has react source for creating components, state, props. 
* **ReactDOM** library is responsible to actually render UI in the browser i.e. mounting the application to the index.html file with ReactDOM.render().
* The reason React and ReactDOM were split into two libraries was due to the arrival of React Native.
* **React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.**
---

 ### What is difference between react.development.js and react.production.js files via CDN?
* During development, you're building and running the application on your local machine. Going to production is the process of making your application ready to be deployed and consumed by users.
* **react.development.js** file in CDN is used by developers to build, test the app before deployment. 
  Developers will be running the code locally using the development mode where React provides us with many helpful warnings and tools for easily detecting and fixing problems in our application code and eliminating potential bugs. However, these extra codes increase bundle size and hence, a slower running app. 
 * **react.production.js** is Minified and optimized because this version of the app is ready for deployment for customers use and thereby making it smooth to run on their device.

---
### What is async and defer?

* **Async** in script tag is a way to load and execute the script file asynchronously.
in this case, the script file is loaded and executed first, blocking the parsing of HTML file.

* **Defer** in script tag is a way to parse the HTML file first before the execution of the script file. in this case, the script file is loaded simultaneously with parsing of HTML file. The script file gets loaded and waits for HTMl file to finish parsing.

