import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 
  const addItem = (item, count) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count += count;
      setCartItems(updatedCartItems);
     
      
    } else {
     
      setCartItems(prevState => [...prevState, { ...item, count }]);
      Swal.fire({
        text: `Se agregaron: ${count} ${item.title} al carrito.`,
        toast: true,
        position: 'top-right',
        timer:2000
      })
      
    }
  };



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
