/*
PARCEL:
Created a server
HMR -Hot module Replacement
File Watcher algorithm-C++
Bundling
Differential Bundling=> supports older browser 
MINIFY
Cleaning our Code
Dev and Production Build
Different development & production bundles
Super Fast build algorithm
Image Optimization
Caching while development
Compression
Compatible with older version of browsers
HTTPS on dev
Handels multiple port numbers
Consistent Hashing Algorithms
Zero config
Error Handling
Tree Shaking -removes unused code
*/

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement(
  "h1",
  { key: "heading1" },
  "This h1 is a ReactElement."
);

const h2 = React.createElement(
  "h2",
  { key: "heading2" },
  "This h2 is a ReactElement."
);

const h3 = React.createElement(
  "h3",
  { key: "heading3" },
  "This h3 is a ReactElement."
);

const div = React.createElement(
  "div",
  { className: "title", key: "division" },
  h1,
  h2,
  h3
);

root.render(div);
