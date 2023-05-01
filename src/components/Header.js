import { useState } from "react";
import { REDIRECT_LINK_ON_LOGO_URL } from "../config/constants";
import { LOGO_URL } from "../config/constants";
import { USER_ICON_URL } from "../config/constants";
import { CART_ICON_URL } from "../config/constants";

const TitleLogo = () => {
  // <h1 id="title" key="h2">
  //   Food Villa
  // </h1>
  return (
    <a href={REDIRECT_LINK_ON_LOGO_URL}>
      <img className="logoImage" src={LOGO_URL} alt="logo" />
    </a>
  );
};

const UserIcon = () => <img className="user-icon" src={USER_ICON_URL}></img>;

const CartIcon = () => (
  <a href="#">
    <img
      className="cart-icon"
      src={CART_ICON_URL}
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

export default Header;
