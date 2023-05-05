import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Restaurant id: andfdyID</h1>
      <h3>Namaste Restaurant!!!</h3>
    </div>
  );
};

export default RestaurantMenu;
