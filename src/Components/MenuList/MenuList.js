import FoodItemsContext from "../Context/FoodItemsContext";
import { useContext } from "react";
import Item from "./Item";
import { Card } from "react-bootstrap";
import styles from "./MenuList.module.css";

const MenuList = () => {
  const FoodItems = useContext(FoodItemsContext);

  return (
    <Card body className={styles.Card}>
      {FoodItems.map((item) => {
        return <Item key={Math.random()} item={item}></Item>;
      })}
    </Card>
  );
};
export default MenuList;
