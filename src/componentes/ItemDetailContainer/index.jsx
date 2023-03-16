import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import products from '../../mocks/products';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(products[0]);

  useEffect(() => {
    setTimeout(() => {
      setItem(products[0]);
    }, 2000);
  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;