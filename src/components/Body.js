import { restaurantListObj } from "../config/mockData";
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
      <img
        src={CDN_IMG_URL
           +
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
