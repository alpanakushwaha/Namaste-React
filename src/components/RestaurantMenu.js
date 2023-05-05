import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  console.log(params);
  return (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h3>Namaste Restaurant!!!</h3>
    </div>
  );
};

export default RestaurantMenu;
