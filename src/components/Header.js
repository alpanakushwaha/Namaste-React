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
  let [title, setTitle] = useState("Food Villa");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <h2>{title}</h2>
      <button
        className="title-btn"
        onClick={() => setTitle("Changed Restaurant tilte")}
      >
        Change Title
      </button>
      <TitleLogo />
      <NavBar />

      {/* {
        let a = 10;  
        console.log(a); // not acceptable syntax
      } */}

      {
        ((a = 10), console.log(a)) // only expression are accepted
      }

      {isLoggedIn ? (
        <button
          className="logout-btn"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="login-btn"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
