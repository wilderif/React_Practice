import { useSelector } from "react-redux";

import Card from "../UI/Card.js";
import CartItem from "./CartItem.js";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
