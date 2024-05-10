import { formatCurrency } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addPizza, deletePizza } from "../features/Cart/cartSlice";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  // const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const item = {
    id: pizza.id,
    name: pizza.name,
    quantity: 1,
    unitPrice: pizza.price,
    totalPrice: pizza.price,
  };
  return (
    <div>
      <p>{pizza.name}</p>
      <p>{pizza.ingredients}</p>
      <p>{formatCurrency(pizza.price)}</p>
      <p>{pizza.soldOut && "sold Out"}</p>
      <button onClick={() => dispatch(addPizza(item))}>AddToCart</button>
      <button onClick={() => dispatch(deletePizza(item))}>
        RemoveFromCart
      </button>
    </div>
  );
}

export default MenuItem;
