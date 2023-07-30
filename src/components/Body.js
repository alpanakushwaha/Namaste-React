import restaurantListObj from "../config/mockData";
import { CDN_IMG_URL } from "../config/constants";
import { RESTAURANT_LIST_URL } from "../config/constants";
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
  let [filteredRestObj, setFilteredRestObj] = useState();
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_LIST_URL);

    const json = await data.json();
    // console.log("json object calledBack from UseEffect: ", json.data);

    setALLRestObj(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredRestObj(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  if (!allRestObj) return null;

  if (filteredRestObj?.length === 0) {
    return <h1>No Restaurants available that you searched for..!</h1>;
  }
// editing............hdvd
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
            console.log("allRestData b4 filter: ", allRestObj);

            const resData = filterData(searchText, allRestObj);

            console.log("resData after filter: ", resData);

            if (resData.length === 0)
              return <h1>No restaurants available as per your Search.</h1>;
            setFilteredRestObj(resData); // or (allRestObj)
          }}
        >
          Search
        </button>

        <button
          className="avgRating-filter-btn"
          onClick={() => {
            console.log("allRestObj b4 filter: ", allRestObj);
            allRestObj = allRestObj.filter((res) => res.data?.avgRating > 4.0);

            console.log("allRestObj after filter: ", allRestObj);

            // if (filteredRestObj?.length === 0)
            //   return <h1>No Restaurants available that you searched..!</h1>;

            setFilteredRestObj(allRestObj);
          }}
        >
          Top-rated Restaurants
        </button>
      </div>
      <div className="RestaurantList">
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
