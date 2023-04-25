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

const SearchBar = () => (
  <div className="search-Bar">
    <form className="search-form" action="">
      <h3>
        <label class="label1" for="subjects">
          <img
            className="search-icon"
            src="https://thumbs.dreamstime.com/b/outline-search-icon-vector-illustration-isolated-transparent-background-sign-symbol-black-white-style-207070400.jpg"
          ></img>
        </label>
        <select class="dropDown1" name="subjects" id="subjects">
          <option value="val0">Search</option>
          <option value="val1">
            <a href="#"> item1</a>
          </option>
          <option value="val2">item2</option>
          <option value="val3" required>
            item3
          </option>
          <option value="val4" disabled>
            item4
          </option>
          <option value="val5" required>
            item5
          </option>
        </select>
      </h3>
    </form>
  </div>
);

const UserIcon = () => (
  <img
    className="user-icon"
    src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg "
  ></img>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <TitleLogo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

root.render(HeaderComponent());
