import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/helpers";
import LoggedInUser from "./LoggedInUser";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = cart
    .map((cartItem) => cartItem.totalPrice)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <LoggedInUser />
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{<CartItem pizza={item} />}</li>
        ))}
      </ul>
      <h3>Total: {formatCurrency(cartTotal)}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
