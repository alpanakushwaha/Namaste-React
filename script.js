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
    </a>
  );
};

const UserIcon = () => (
  <img
    className="user-icon"
    src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg "
  ></img>
);

const CartIcon = () => (
  <a href="#">
    <img
      className="cart-icon"
      src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
      alt="cart logo"
      width="50"
      height="50"
    />
  </a>
);

const NavBar = () => (
  <div className="navItems">
    <ul>
      <li>Home </li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>

    <UserIcon />
    <CartIcon />
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <TitleLogo />
      <NavBar />
    </div>
  );
};

const RestaurantCard = () => {
    return (
      <div className="res-card">
   
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls"></img>
        <div className="short-desc">
        <h4>Rolls</h4>
        <h5>Fast Food, Wraps</h5>
        <h6>4.1 *</h6>
        </div>
      </div>
    );
  };

const Body = () => {
  return (
  <div>
    <RestaurantCard/>
  </div>
  )
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    // <React.Fragment>
    <>
      <Header />
      <Body />
      <Footer />
    </>
    //</React.Fragment>
  );
};

root.render(AppLayout());
