import React, { createContext, useState,useEffect } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
  
    // if(item==cartItems.length){
    //   preventDefault();

    // }else
                    
    // setCartItems([...cartItems, item]);
    setCartItems((oldState)=>oldState.concat({}))
  
    
  
    ;
  };

  const removeItem = () => {
    // setCartItems(cartItems.filter((item) => item.id !== id));
    const tempCart=cartItems.slice(1);
    setCartItems(tempCart)
  };

// ELIMINAR ESTE USE EFFECT. es solo para control
  useEffect(() => {
  console.log({ cartItems }); 
 }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
