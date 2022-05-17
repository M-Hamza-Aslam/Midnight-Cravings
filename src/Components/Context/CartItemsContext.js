import React from "react";
import { useReducer } from "react";
const defaultState = {
  CartItems: [],
  Total: 0,
  TotalCartItems: 0,
  isCartEmpty: true,
};
const CartItemsContext = React.createContext([defaultState]);

function RoundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

const CartItemsReducer = (prevstate, actions) => {
  //
  if (actions.type === "CLEAR") {
    return defaultState;
  }
  let UpdatedTotal;
  let UpdatedCartItems;
  let updatedCartStatus;
  let UpdatedTotalCartItems;
  const index = prevstate.CartItems.findIndex((cartItem) => {
    return cartItem.name === actions.cartItem.name;
  });
  if (actions.type === "ADD") {
    UpdatedTotal =
      prevstate.Total + actions.cartItem.price * actions.cartItem.quantity;
    UpdatedTotal = RoundToTwo(UpdatedTotal);
    UpdatedTotalCartItems =
      prevstate.TotalCartItems + actions.cartItem.quantity;
    if (index === -1) {
      UpdatedCartItems = [...prevstate.CartItems, actions.cartItem];
    } else {
      UpdatedCartItems = [...prevstate.CartItems];
      UpdatedCartItems[index].quantity += actions.cartItem.quantity;
    }
  }
  if (actions.type === "REMOVE") {
    UpdatedTotal = prevstate.Total - actions.cartItem.price;
    UpdatedTotal = RoundToTwo(UpdatedTotal);
    UpdatedTotalCartItems =
      prevstate.TotalCartItems - actions.cartItem.quantity;
    UpdatedCartItems = [...prevstate.CartItems];
    UpdatedCartItems[index].quantity -= actions.cartItem.quantity;
    if (UpdatedCartItems[index].quantity <= 0) {
      UpdatedCartItems.splice(index, 1);
    }
  }
  if (UpdatedCartItems.length === 0) {
    updatedCartStatus = true;
  } else {
    updatedCartStatus = false;
  }
  return {
    CartItems: UpdatedCartItems,
    Total: UpdatedTotal,
    TotalCartItems: UpdatedTotalCartItems,
    isCartEmpty: updatedCartStatus,
  };
};

export const CartItemsContextProvider = (props) => {
  const [CartState, DispatchCartItems] = useReducer(
    CartItemsReducer,
    defaultState
  );

  const AddItemToCartHandler = (cartItemInfo) => {
    DispatchCartItems({ type: "ADD", cartItem: cartItemInfo });
  };
  const RemoveItemFromCartHandler = (cartItemInfo) => {
    DispatchCartItems({ type: "REMOVE", cartItem: cartItemInfo });
  };
  const clearCartHandler = () => {
    DispatchCartItems({ type: "CLEAR" });
  };
  return (
    <CartItemsContext.Provider
      value={{
        CartItems: CartState.CartItems,
        Total: CartState.Total,
        TotalCartItems: CartState.TotalCartItems,
        isCartEmpty: CartState.isCartEmpty,
        addItem: AddItemToCartHandler,
        removeItem: RemoveItemFromCartHandler,
        clearCart: clearCartHandler,
      }}
    >
      {props.children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsContext;
