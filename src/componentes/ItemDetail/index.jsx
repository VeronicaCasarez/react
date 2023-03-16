
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item}) => {
 
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
       
        <Card.Text>{item.name}</Card.Text>
        <Button variant="primary">
         Comprar
        </Button>

      </Card.Body>
    </Card>
    );
  };
  
  export default ItemDetail;