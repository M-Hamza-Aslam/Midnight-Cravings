import "bootstrap/dist/css/bootstrap.min.css";
import MenuList from "./Components/MenuList/MenuList";
import Header from "./Components/Header/Header";
import IntroCard from "./Components/IntroCard/IntroCard";
import { FoodItemsContextProvider } from "./Components/Context/FoodItemsContext";
import { CartItemsContextProvider } from "./Components/Context/CartItemsContext";
function App() {
  //variables:
  return (
    <CartItemsContextProvider>
      <FoodItemsContextProvider>
        <Header></Header>
        <IntroCard></IntroCard>
        <MenuList />
      </FoodItemsContextProvider>
    </CartItemsContextProvider>
  );
}

export default App;
