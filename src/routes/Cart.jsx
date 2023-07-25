import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/index';
import ItemCount from '../componentes/ItemCount'; 
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "./routes.css"

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext); 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const sum = cartItems.reduce((accumulator, item) => {
        return accumulator + (item.price * item.count);
      }, 0);
      setTotal(sum);
    }
    calculateTotal();
  }, [cartItems]);

  function handleQuantityChange(id, newQuantity) {
    let newCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, count: newQuantity };
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

  return (
    <Container> 
      <div>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
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
                      stock={item.stock}
                      addItem={newQuantity => handleQuantityChange(item.id, newQuantity)}
                      initialValue={item.count}
                    /> 
                  </td>
                  <td>{item.price * item.count}</td>
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
        )}

        {cartItems.length > 0 && (
          <Link to={'/Checkout'} ><button>Finalizar compra</button></Link>
        )}
      </div>
    </Container>
  );
}

export default Cart;
