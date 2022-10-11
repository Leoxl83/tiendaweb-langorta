import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const { category } = useParams();
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    getItems();
  });

  const getItems = () => {

    const db = getFirestore();    //inicio mi base de datos
    const queryBase = collection(db, 'items');
    const querySnapshot = category ? query(queryBase, where('categoryId', '==', category)) : queryBase;

    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setItemList(data);
    });
  };  

  return (
    <>
      <ItemList lista={itemList} />
    </>
  )
}

export default ItemListContainer