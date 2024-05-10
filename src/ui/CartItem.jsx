import { formatCurrency } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addPizza, deletePizza } from "../features/Cart/cartSlice";

/* eslint-disable react/prop-types */
function CartItem({ pizza }) {
  // const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  //   const item = {
  //     id: pizza.id,
  //     name: pizza.name,
  //     quantity: 1,
  //     unitPrice: pizza.price,
  //     totalPrice: pizza.price,
  //   };
  return (
    <div>
      <p>{pizza.name}</p>
      <p>{pizza.quantity}</p>
      <p>{formatCurrency(pizza.unitPrice)}</p>
      <p>{formatCurrency(pizza.totalPrice)}</p>
      <button onClick={() => dispatch(addPizza(pizza))}>AddToCart</button>
      <button onClick={() => dispatch(deletePizza(pizza))}>
        RemoveFromCart
      </button>
    </div>
  );
}

export default CartItem;
