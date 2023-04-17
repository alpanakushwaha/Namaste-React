import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const h2 = (
  <h2 className="headerTwo" key="keyTwo">
    h2 inside functional component named DividerComponent.
  </h2>
);

const DividerComponent = () => {
  return (
    <div className="title">
      <h1 className="headerOne" key="keyOne">
        h1 inside functional component named DividerComponent.
      </h1>
      {h2}
      <h3 className="headerThree" key="keyThree">
        h3 inside functional component named DividerComponent.
      </h3>
    </div>
  );
};

root.render(<DividerComponent />);
