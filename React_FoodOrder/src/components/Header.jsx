import { useContext } from "react";

import CartContext from "../store/CartContext.jsx";
import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
