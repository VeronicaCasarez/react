import React, { useState,useContext } from 'react';
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import { CartContext } from '../context';
import { Container,Button } from 'react-bootstrap';

function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const db = getFirestore();

  function updateProductStock(productId, newStock) {
    const productRef = doc(db, "items", productId);
    updateDoc(productRef, { stock: newStock });
  }

  function placeOrder() {
    const collectionRef = collection(db, "orders");
    const total = cartItems.reduce(
      (acc, product) => acc + product.count * product.price,
      0
    );

    const order = {
      buyer: { name, email, phone },
      items: cartItems,
      total,
    };

    addDoc(collectionRef, order)
      .then(() => {
        cartItems.map((product) => {
          const newStock = product.stock - product.count;
          updateProductStock(product.id, newStock);
        });
        setCartItems([]); 
        setName('');
        setPhone(''); 
        setEmail(''); 
      })
      .catch((error) => console.log({ error }));
  }

  return (
    <Container className="cart-container">
      {cartItems.map((product) => (
        <div key={product.id}>
          <span>Name: {product.title}</span>
          <br />
          <span>Quantity: {product.count}</span>
        </div>
      ))}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" /> {/* Input para el nombre */}
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" /> {/* Input para el teléfono */}
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> {/* Input para el email */}
      <Button variant="dark" onClick={placeOrder}>Comprar</Button>
    </Container>
  );
}

export default Checkout;



