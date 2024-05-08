import { useQuery } from "react-query";
import { getPizzas } from "../services/apiRestaurant";
function Menu() {
  const { data: pizzas, error, isLoading } = useQuery("getPizzas", getPizzas);
  console.log(pizzas);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {pizzas.map((pizza) => (
        <li key={pizza.name}>{pizza.name}</li>
      ))}
    </ul>
  );
}

export default Menu;
