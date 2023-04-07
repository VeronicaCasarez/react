import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/index';
import ItemCount from '../componentes/ItemCount'; 

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext); 


  const [total, setTotal] = useState(0);

  useEffect(() => {
    function calculateTotal() {
      let sum = 0;
      for (let i = 0; i < cartItems.length; i++) {
        sum += cartItems[i].price * cartItems[i].quantity;
      }
      setTotal(sum);
    }

    calculateTotal();
  }, [cartItems]);

  function handleQuantityChange(id, newQuantity) {
    let newCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);

  }

  function handleRemoveFromCart(id) {
    let newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
  }

  function handleCheckout() {
    props.history.push('/checkout');
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <ItemCount
                  initial={item.quantity}
                  min={1}
                  max={10}
                  onQuantityChange={newQuantity => handleQuantityChange(item.id, newQuantity)}
                />
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total:</td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  );
}

export default Cart;



// import React, { useState, useEffect, useContext } from 'react';
// import { CartContext } from '../context/index';

// function Cart(props) {
//   const { cartItems, setCartItems } = useContext(CartContext); 
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     function calculateTotal() {
//       let sum = 0;
//       for (let i = 0; i < cartItems.length; i++) {
//         sum += cartItems[i].price * cartItems[i].quantity;
//       }
//       setTotal(sum);
//     }

//     calculateTotal();
//   }, [cartItems]);

//   function handleQuantityChange(id, newQuantity) {
//     let newCartItems = cartItems.map(item => {
//       if (item.id === id) {
//         return { ...item, quantity: newQuantity };
//       } else {
//         return item;
//       }
//     });
//     setCartItems(newCartItems);
//   }

//   function handleCheckout() {
//     props.history.push('/checkout');
//   }

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Producto</th>
//             <th>Precio</th>
//             <th>Cantidad</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map(item => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>
//                 <input type="number" min="1" value={item.quantity} onChange={event => handleQuantityChange(item.id, event.target.value)} />
//               </td>
//               <td>{item.price * item.quantity}</td>
//             </tr>
//           ))}
//           <tr>
//             <td colSpan="3">Total:</td>
//             <td>{total}</td>
//           </tr>
//         </tbody>
//       </table>
//       <button onClick={handleCheckout}>Finalizar compra</button>
//     </div>
//   );
// }

// export default Cart;
