import restaurantListObj from "../config/mockData";
import { CDN_IMG_URL } from "../config/constants";
import { useState } from "react";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  avgRating,
  deliveryTime,
  area,
}) => {
  return (
    <div className="res-card">
      <img src={CDN_IMG_URL + cloudinaryImageId} />
      <div className="short-desc">
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>₹{costForTwo / 100} for two</h5>
        <h6>{avgRating} *</h6>
        <h6>at your doorstep within {deliveryTime} minutes</h6>
        <h6>{area} </h6>
      </div>
    </div>
  );
};

// what is state, react-Hooks, useState?

const Body = () => {
  let searchText = "North Indian"; // hard-coded

  // searchingText is a local variable
  let [searchingText, setSearchingText] = useState(searchText); // returns [var name, func() to update the variable]

  const [searchClick, setSearchClick] = useState("false");

  // To create state variable
  return (
    <div className="body">
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            // value={searchText} // one-way data-Binding
            value={searchingText} // Two-way data-Binding
            onChange={(e) => {
              setSearchingText(e.target.value); // writing
            }}
          ></input>
          {
            searchingText // reading
          }
          <button
            className="search-btn"
            onClick={() => {
              if (searchClick === "true") setSearchClick("false");
              else setSearchClick("true");
            }}
          >
            Search
          </button>
          {searchClick}
        </div>
        <div className="RestaurantList">
          {restaurantListObj.map((restaurantListObj) => {
            return (
              <RestaurantCard
                {...restaurantListObj.data}
                key={restaurantListObj.data.id}
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Body;
