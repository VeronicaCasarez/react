import React, {  useState } from 'react';
import { Button } from 'react-bootstrap';


import "./itemCount.css"


const ItemCount = ({ stock,addItem,initialValue}) => {

  const [count, setCount] = useState(initialValue);

   
 
  const handleIncrement = () => {
   
    if (count < stock) {
      setCount(count + 1);
      addItem(item, setCount)
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <div>
      <Button  variant="outline-dark" className='my-btn' onClick={handleDecrement}>-</Button>
      <span>{count}</span>
      <Button variant="outline-dark" className='my-btn' onClick={handleIncrement}>+</Button>
      <Button variant="outline-dark" className='my-btn' onClick={() => addItem(count)} 
      disabled={stock === 0}>
        Agregar al carrito
      </Button>
      {stock === 0 && <p>No hay stock disponible</p>}
    </div>
  );
};

export default ItemCount;
