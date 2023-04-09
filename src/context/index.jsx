import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 
  const addItem = (item, count) => {
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualizar su cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count += count;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agregarlo
      setCartItems(prevState => [...prevState, { ...item, count }]);
    }
  };

  // const addItem = (item,count) => {
           
  //   setCartItems((prevState)=>prevState.concat({...item,count}));

 
  //   };

  const removeItem = () => {
   
    const tempCart=cartItems.slice(1);
    setCartItems(tempCart)
  };



  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
