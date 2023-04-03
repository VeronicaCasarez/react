import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';

const ItemDetail = ({ item }) => {
  const {addItem}=useContext(CartContext)

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (count) => {
    addItem(item,count)
    setCartCount(count);
   
      console.log(`Se agregaron ${count} elementos al carrito.`);
   
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.name}</Card.Text>
        <ItemCount stock={item.stock}  onClick={() => handleAddToCart(cartCount)} /> 
        <br />
        <Link to="/cart"><Button variant="primary" >
       Terminar mi compra
        </Button></Link>
        
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
