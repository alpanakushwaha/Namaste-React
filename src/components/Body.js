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

function filterData(searchText, restObj) {
  const filterData = restObj.filter((resLi) =>
    resLi.data?.cuisines.includes(searchText)
  );

  return filterData;
}

// what is state, react-Hooks, useState?

const Body = () => {
  let [restObj, setRestObj] = useState(restaurantListObj);
  let [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-filter-btn"
            onClick={() => {
              const resData = filterData(searchText, restObj);

              setRestObj(resData);
            }}
          >
            Search
          </button>

          <button
            className="avgRating-filter-btn"
            onClick={() => {
              restObj = restObj.filter((res) => res.data?.avgRating > 4.0);

              // console.log(restObj);
              setRestObj(restObj);
            }}
          >
            Top-rated Restaurants
          </button>
        </div>
        <div className="RestaurantList">
          {restObj.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Body;
