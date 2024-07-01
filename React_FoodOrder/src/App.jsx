import { CartContextProvider } from "./store/CartContext.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
