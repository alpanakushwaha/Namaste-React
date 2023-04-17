import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const div = (
  <div className="title">
    <h1>This h1 is reactElement written in JSX.</h1>
    <h2>This h2 is reactElement written in JSX.</h2>
    <h3>This h3 is reactElement written in JSX.</h3>
  </div>
);

root.render(div);
