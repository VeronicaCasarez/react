import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

function Cart(props) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('products').onSnapshot(snapshot => {
      const newProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(newProducts);
    });
    return unsubscribe;
  }, []);

  function handleCheckout() {
    props.history.push('/checkout');
  }

  function calculateTotal() {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price * products[i].quantity;
    }
    setTotal(sum);
  }

  function handleQuantityChange(id, newQuantity) {
    let newProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }

  useEffect(() => {
    calculateTotal();
  }, [products]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <input type="number" min="1" value={product.quantity} onChange={event => handleQuantityChange(product.id, event.target.value)} />
              </td>
              <td>{product.price * product.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total:</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  );
}

export default Cart;
