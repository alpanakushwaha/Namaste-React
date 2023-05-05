import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams(); // destructuring on the fly
  console.log({ id });
  return (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h3>Namaste Restaurant!!!</h3>
    </div>
  );
};

export default RestaurantMenu;
