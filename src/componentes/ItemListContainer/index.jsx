
import React, { useId,useState, useEffect } from 'react';
import ItemList from '../ItemList';
import Products from '../../mocks/products';

import "./itemListContainer.css";

function ItemListContainer ({greeting,categoryId, isCategoryRoute}){

    const [items, setItems] = useState([]);

    useEffect(() => {
      const promise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(Products), 2000)
      );
      promise
      .then((response) => {
        const filteredProducts = isCategoryRoute
          ? response.filter((product) => product.category === categoryId)
          : response;
        setItems(filteredProducts);
      })
      .catch((error) => alert(error));
   }, [categoryId, isCategoryRoute]);


    return(
     <div>
        <div className="greeting">{greeting}</div>
  
        <div>
          <h2>Productos</h2>
          <ItemList items={items} />
        </div>
    </div>
    ) ;
    
}

export default ItemListContainer;