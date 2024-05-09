import { useQuery } from "react-query";
import { getPizzas } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const { data: pizzas, error, isLoading } = useQuery("getPizzas", getPizzas);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {pizzas.map((pizza) => (
        <li key={pizza.id}>
          <MenuItem pizza={pizza} />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
