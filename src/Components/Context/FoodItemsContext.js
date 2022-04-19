import React from "react";
const FoodItems = [
  {
    name: "Sushi",
    detail: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    detail: "A germen Speciality",
    price: 16.5,
  },
  {
    name: "Burger",
    detail: "Hot and Crispy",
    price: 14.3,
  },
  {
    name: "Bar B Q",
    detail: "Spicy and Juicy",
    price: 15.1,
  },
];
const FoodItemsContext = React.createContext(FoodItems);

export const FoodItemsContextProvider = (props) => {
  return (
    <FoodItemsContext.Provider value={FoodItems}>
      {props.children}
    </FoodItemsContext.Provider>
  );
};
export default FoodItemsContext;
