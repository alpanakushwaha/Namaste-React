import restaurantListObj from "../config/mockData";
import { CDN_IMG_URL } from "../config/constants";
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

const Body = () => {
  const searchText = "PizzaHut"; // hard-coded
  return (
    <div className="body">
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText} // one-way data-Binding
            // onChange={(e)=> console.log("to show that you are trying to change the input, but can't.")}

            onChange={(e) => {
              searchText = e.target.value;
            }}
            // on-console, you'll see the character being pressed appended with the value
          ></input>
          <button className="search-btn">Search</button>
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
