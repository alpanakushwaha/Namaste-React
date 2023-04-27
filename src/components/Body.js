import { restaurantListObj } from "../config/mockData";
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
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
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
  return (
    <div className="body">
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
    </div>
  );
};

export default Body;
