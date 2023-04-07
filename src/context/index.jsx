import React, { createContext, useState,useEffect } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 

  const addItem = (item,count) => {
           
    setCartItems((prevState)=>prevState.concat({...item,count}));

 
    };

  const removeItem = () => {
    //setCartItems(cartItems.filter((item) => item.id !== id));
    const tempCart=cartItems.slice(1);
    setCartItems(tempCart)
  };

// ELIMINAR ESTE USE EFFECT. es solo para control
  useEffect(() => {
  console.log({ cartItems }); 
 }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
