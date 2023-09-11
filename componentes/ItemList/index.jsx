import React from 'react';
import Item from '../Item';
import "./itemList.css"

const ItemList = ({ items }) => {
  
  return (
    <div className='card-container-styles'>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;