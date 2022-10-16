import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const [itemList, setItemList] = useState([]);
  const {category} = useParams();

  
  const getItems = new Promise ((resolve, reject) => {
    
    const db = getFirestore();
    const queryCollection = collection(db, 'items');

    setTimeout(() => {
        const queryCategory = category ? query(queryCollection,
        where('categoryId', '==', category)) : queryCollection
      
        getDocs(queryCategory)
        
        .then((response) => {
          const data = response.docs.map((product) => {
            return {id: product.id, ...product.data()};
          });
          resolve(data);
        });
    }, 500);
  }) 
  
  useEffect(() => {
      getItems
      .then((response) => {
        setItemList(response)
      })
  },); 

  return (
    <>
      <ItemList lista={itemList} />
    </>
  )
}

export default ItemListContainer