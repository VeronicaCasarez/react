import React, {  useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import Products from '../../mocks/products';

function ItemDetailContainer({ itemId }) {
 
  const [product,setProduct]=useState([Products])


  useEffect(()=>{
    const productPromise=new Promise((resolve, reject) => 
      setTimeout(()=> resolve(Products),2000)
    );
  
    productPromise
    .then ((response)=>{ 
      const productSearch=response.find(elem=>elem.id==itemId)
      setProduct(productSearch);
      })
    .catch((error)=>console.log(error))
    },[itemId]);
 
  

  return (
    <div>
      <ItemDetail item={product} />
      
    </div>
  );
}


export default ItemDetailContainer;