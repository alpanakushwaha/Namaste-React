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
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  let [allRestObj, setALLRestObj] = useState([]);
  let [filteredRestObj, setFilteredRestObj] = useState([]);
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

    // optional Chaining
    setALLRestObj(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredRestObj(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  // Conditional rendering
  // if restaurant is empty (in initial rendering) => load Shimmer UI
  // if restaurant has data=> load actual data UI
  console.log("allResObj", allRestObj);
  if (!allRestObj) return null; //early return

  if (filteredRestObj?.length === 0)
    return <h1>No Restaurants available that you searched..!</h1>;

  return allRestObj?.length === 0 ? (
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
            // console.log("searchText b4 filter: ", searchText);
            // console.log("allRestObj b4 filter", allRestObj);
            const resData = filterData(searchText, allRestObj);

            // if (resData.length === 0)
            //   return <h1>No restaurants available as per your Search.</h1>;

            // console.log("searchText after filter:", searchText);
            // console.log("allRestObj after filter: ", allRestObj);
            // console.log("resData", resData);

            setFilteredRestObj(resData); // or (allResObj)
          }}
        >
          Search
        </button>

        <button
          className="avgRating-filter-btn"
          onClick={() => {
            allRestObj = allRestObj.filter((res) => res.data?.avgRating > 4.6);

            // console.log(restObj);

            // if (filteredRestObj?.length === 0)
            //   return <h1>No Restaurants available that you searched..!</h1>;

            setFilteredRestObj(allRestObj);

            // setFilteredRestObj(filteredRestObj);
          }}
        >
          Top-rated Restaurants
        </button>
      </div>
      <div className="RestaurantList">
        {/* {console.log("filteredRestObj: ", filteredRestObj)} */}
        {filteredRestObj.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
