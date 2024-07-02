import { useContext } from "react";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import Input from "./UI/Input.jsx";
import { currencyFormatter } from "../util/formatting.js";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const handleCloseCheckout = () => {
    userProgressCtx.hideCheckout();
  };

  const cartTotal = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
      </form>
      <Input label="Full Name" type="text" id="full-name" />
      <Input label="E-Mail Address" type="email" id="email" />
      <Input label="Street" type="text" id="street" />
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" id="city" />
      </div>

      <p className="modal-actions">
        <Button type="button" onClick={handleCloseCheckout} textOnly>
          Close
        </Button>
        <Button>Submit Order</Button>
      </p>
    </Modal>
  );
};

export default Checkout;
