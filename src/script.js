import React from "react";
import ReactDOM from "react-dom/client";
import NavigationBar, * as Heading from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Heading.Header />
      <NavigationBar />
      <Body />
      <Footer />
    </>
  );
};

root.render(AppLayout());
