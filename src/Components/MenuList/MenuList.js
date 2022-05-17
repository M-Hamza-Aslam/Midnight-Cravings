import { useState, useEffect } from "react";
import Item from "./Item";
import { Card } from "react-bootstrap";
import styles from "./MenuList.module.css";

const MenuList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  const [FoodItems, setFoodItems] = useState([]);
  useEffect(() => {
    const fetchFoodItems = async () => {
      const response = await fetch(
        "https://react-http-7bff7-default-rtdb.firebaseio.com/mealsData.json"
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const FoodItemsArr = [];
      for (const key in data) {
        FoodItemsArr.push(data[key]);
      }
      setFoodItems(FoodItemsArr);
      setIsLoading(false);
    };
    fetchFoodItems().catch((error) => {
      setIsLoading(false);
      setIsError(`Error "${error.message}" has occured`);
    });
  }, []);

  const content = isLoading ? (
    <div className={styles.para}>
      <p>Loading...</p>
    </div>
  ) : isError ? (
    <div className={styles.error}>
      <p>{isError}</p>
    </div>
  ) : (
    <Card body className={styles.Card}>
      {FoodItems.map((item) => {
        return <Item key={Math.random()} item={item}></Item>;
      })}
    </Card>
  );
  return content;
};
export default MenuList;
