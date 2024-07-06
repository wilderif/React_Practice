import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart.js";
import Layout from "./components/Layout/Layout.js";
import Products from "./components/Shop/Products.js";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://redux-practice-f9a22-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
