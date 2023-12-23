import React, { createContext, useEffect, useState } from "react";
import { items } from "../data/items";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < items.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const cartData = localStorage.getItem("cartItem");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setCartItems(parsedCart);
    }
  }, []);

  const saveCartToLocalStorage = (cart) => {
    const cartJson = JSON.stringify(cart);
    localStorage.setItem("cartItem", cartJson);
  };

  const addToCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCart = { ...prevItems, [itemId]: prevItems[itemId] + 1 };
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCart = { ...prevItems, [itemId]: prevItems[itemId] - 1 };
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const updateItemCartAmount = (newAmount, itemId) => {
    setCartItems((prevItem) => ({ ...prevItem, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = items.find((i) => i.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCartAmount,
    getTotalCartAmount,
    saveCartToLocalStorage,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
