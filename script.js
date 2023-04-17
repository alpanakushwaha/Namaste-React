import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const TitleComponent = <h1> Interesting Title.</h1>;

const HeaderComponent = () => {
  return (
    <div>
      {TitleComponent}
           
    </div>
  );
};

// root.render(HeaderComponent());
root.render(<HeaderComponent />);
