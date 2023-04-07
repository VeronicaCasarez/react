import React from 'react';
import "./item.css";
import { Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ item}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/item/${item.id}`}> 
        <Card.Img variant="top" src={item.image}title="Ver detalle"/>
      </Link>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.name}</Card.Text>
        <Card.Text>Precio: $ {item.price}</Card.Text>
        <Button variant="dark" as={Link} to={`/item/${item.id}`}>
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;