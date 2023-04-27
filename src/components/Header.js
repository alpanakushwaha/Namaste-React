export const TitleLogo = () => {
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

export const UserIcon = () => (
  <img
    className="user-icon"
    src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg "
  ></img>
);

export const CartIcon = () => (
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

export const Header = () => {
  return (
    <div className="header">
      <TitleLogo />
      <NavBar />
    </div>
  );
};

export default NavBar; 
// only Default-Component can be Renamed for importing

// no point in changing the name of Named-Component for importing, (that's why it is 'Named' export or import)
