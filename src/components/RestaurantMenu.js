import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../config/constants";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // destructuring on the fly
  const [restaurant1Menu, setRestaurant1Menu] = useState([]);
  const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);

  console.log({ resId });

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(RESTAURANT_MENU_URL);

    const jsondata = await data.json();

    // main Loogic to get Restaurant menu
    const menuArray = await jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards;
    const moveInsideMenuArray = await menuArray?.map((x) => {
      return x?.card?.card?.itemCards;
    });

    const storingMenu = [];
    for (let i = 0; i < moveInsideMenuArray.length; i++) {
      if (moveInsideMenuArray[i]) {
        for (let j = 0; j < moveInsideMenuArray[i].length; j++) {
          if (moveInsideMenuArray[i][j]) {
            storingMenu.push(moveInsideMenuArray[i][j]);
          } else {
            continue;
          }
        }
      } else {
        continue;
      }
    }

    console.log(menuArray);
    console.log(moveInsideMenuArray);
    console.log(storingMenu);

    setRestaurant1Menu(jsondata?.data?.cards[0].card?.card?.info);
    setRestaurantMenuItems(storingMenu);
  }

  // return (
  //   <div>
  //     <h1>Restaurant id {resId}</h1>
  //     <h3>Namaste Restaurant!!!</h3>
  //   </div>
  // );

  if (restaurantMenuItems.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div className="restaurantInfo">
        <h2 className="restMenuID">Restaurant Id : {resId}{restaurant1Menu.resId}</h2>
        <h2>{restaurant1Menu.name}</h2>
        <img className="mainRestImgForMenu" src={CDN_IMG_URL + restaurant1Menu.cloudinaryImageId} />
        <h3>{restaurant1Menu.area}</h3>
        <h5>{restaurant1Menu.city}</h5>
        <h5>{restaurant1Menu.avgRating} Stars</h5>
        <h5>{restaurant1Menu.costForTwoMessage}</h5>
      </div>

      <div className="restaurantMenu">
        <h3>Menu :</h3>
        <ul >
          {restaurantMenuItems.map((x, index) => (
            <li key={index}>
              {x?.card?.info?.name} Price-Rs.{
              x?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
