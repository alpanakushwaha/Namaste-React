import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const TitleLogo = () => {
  // <h1 id="title" key="h2">
  //   Food Villa
  // </h1>
  return (
  <a href="https://www.facebook.com/foodvillarestaurant1/photos/">
    <img
      className="logoImage"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      alt="logo"
    />
  </a>)
};


const Header = () => {
  return (
    <div className="header">
      <TitleLogo />
   
    </div>
  );
};

root.render(Header());
