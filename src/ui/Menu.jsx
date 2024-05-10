import { useQuery } from "react-query";
import { getPizzas } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";
import MiniCart from "./MiniCart";
import LoggedInUser from "./LoggedInUser";
function Menu() {
  const {
    data: pizzas,
    error,
    isLoading,
  } = useQuery("getPizzas", getPizzas, { staleTime: 60000 });

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <MiniCart />
      <LoggedInUser />
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <MenuItem pizza={pizza} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
