import React, { useState, useEffect } from 'react';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList';
import './itemListContainer.css';

function ItemListContainer({ greeting, categoryId, isCategoryRoute }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');

    if (isCategoryRoute) {
      const queryResult = query(itemsCollection, where('category', '==', categoryId));
      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setItems(
            docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setItems(
            docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .catch((error) => alert(error));
    }
  }, [categoryId, isCategoryRoute]);


  return (
    <div>
      <div className="greeting">{greeting}</div>

      <div>
        
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default ItemListContainer;
