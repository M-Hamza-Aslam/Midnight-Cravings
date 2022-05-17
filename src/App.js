import "bootstrap/dist/css/bootstrap.min.css";
import MenuList from "./Components/MenuList/MenuList";
import Header from "./Components/Header/Header";
import IntroCard from "./Components/IntroCard/IntroCard";
import { CartItemsContextProvider } from "./Components/Context/CartItemsContext";
function App() {
  //variables:
  return (
    <CartItemsContextProvider>
      <Header></Header>
      <IntroCard></IntroCard>
      <MenuList />
    </CartItemsContextProvider>
  );
}

export default App;
