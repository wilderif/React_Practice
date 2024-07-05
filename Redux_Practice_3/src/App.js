import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart.js";
import Layout from "./components/Layout/Layout.js";
import Products from "./components/Shop/Products.js";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
