import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <p>No hay stock disponible</p>}
    </div>
  );
};

export default ItemCount;