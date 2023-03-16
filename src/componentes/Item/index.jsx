import React from 'react';
import "./item.css";
import { Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ item}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item?.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
       
        <Card.Text>{item.name}</Card.Text>
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>
         Ver detalle
        </Button>

      </Card.Body>
    </Card>
  );
};

export default Item;