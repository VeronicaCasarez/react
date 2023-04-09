import React, { useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';

const ItemDetail = ({ item }) => {

  const {addItem}=useContext(CartContext)

  const [cartCount, setCartCount] = useState(0);


  function onAddProduct(count){
    addItem(item,count);
    setCartCount(count);

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '30rem', display: 'flex', justifyContent: 'center' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Title className="card-detail-small">{item.detail}</Card.Title>
          <Card.Text>Stock: {item.stock}</Card.Text>
          <Card.Text>Precio: $ {item.price}</Card.Text>
          <div>
            {cartCount === 0 && (
              <ItemCount stock={item.stock} addItem={onAddProduct} initialValue={1} />
            )}

            <Link to="/cart">
              <Button variant="dark">
                Ir al carrito
              </Button>
            </Link>


          </div>
        </Card.Body>
      </Card>
    </div>
  );
  
        
}

export default ItemDetail;