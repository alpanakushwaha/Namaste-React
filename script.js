/*
PARCEL:
Created a server
HMR -Hot module Replacement
File Watcher algorithm-C++
Bundling
Differential Bundling=> <script type="module">
MINIFY
Cleaning our Code
Dev and Production Build
Super Fast build algorithm
Image Optimization
Caching while development
Compression
Compatible with older version of browsers
HTTPS on dev
Handels multiple port numbers
Consistent Hashing Algorithms
Zero config
*/

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const list1 = React.createElement(
  "li",
  {
    id: "listitem1",
    className: "listClass",
    style: {
      fontSize: "25px",
    },
  },
  "List Item One"
);
const list2 = React.createElement("li", { id: "listitem2" }, "List Item Two");

const unOrderdList = React.createElement(
  "ul",
  {
    id: "unorderedlist",
    style: {
      listStyle: "none",
      color: "#00bb00",
    },
  },
  list1,
  list2
);

const heading = React.createElement(
  "h1",
  {
    id: "heading1",
    style: {
      margin: "20px",
      color: "#0000ff",
    },
  },
  "Hello !!! Namaste React! 🙏",
  unOrderdList
);

root.render(heading);
