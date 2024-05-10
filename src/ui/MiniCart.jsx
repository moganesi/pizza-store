import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";
import { useNavigate } from "react-router-dom";

function MiniCart() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const totalNamberOfPizzas = cart
    .map((cartItem) => cartItem.quantity)
    .reduce((a, b) => a + b, 0);
  const message = cart.map(
    (cartItem) => `${cartItem.name}  ${cartItem.quantity}`
  );

  return (
    <div>
      <Tooltip
        content={`You have ${message.join(" ")} pizzas in cart`}
        direction="right"
      >
        <button onClick={() => navigate("/cart")}>
          Your Cart has {totalNamberOfPizzas} pizzas
        </button>
      </Tooltip>
    </div>
  );
}

export default MiniCart;
