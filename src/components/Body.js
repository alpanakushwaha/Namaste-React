import restaurantListObj from "../config/mockData";
import { CDN_IMG_URL } from "../config/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
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
    resLi.data?.cuisines
      .flatMap((x) => x.split(" "))
      .join("")
      .includes(searchText)
  );

  return filterData;
}

// what is state, react-Hooks, useState?

const Body = () => {
  let [restObj, setRestObj] = useState([]); //removed old data // handle the map error// using Shimmer
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  // call happens asynchronously (can use async-await(preferred) or promises)
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    ); // calling this API-data link by fetch, and awaiting for it.

    // initially Expected error=> browser blocking our local server, CORS Error,
    const json = await data.json(); // data(readable stream) converted into json object
    console.log(json);
    setRestObj(json?.data?.cards?.[2]?.data?.data?.cards);
  }

// Conditional rendering
// if restaurant is empty (in initial rendering) => load Shimmer UI
// if restaurant has data=> load actual data UI


  return restObj.length === 0 ? (
    <Shimmer />
  ) : (
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
  );
};

export default Body;
