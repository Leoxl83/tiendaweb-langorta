import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const { category } = useParams();
  const [itemList, setItemList] = useState([])

  const getItems = () => {

    const db = getFirestore();    //inicio mi base de datos
    const querySnapshot = collection(db, 'items');

    if (category) {
      const queryFilter = query(
        querySnapshot,
        where('categoryId', '==', category)
      );

      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setItemList(data);
      });
    } else {
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setItemList(data);
      });
    }
  };
  useEffect(() => {
    getItems();
  },);

  return (
    <>
      <ItemList lista={itemList} />
    </>
  )
}

export default ItemListContainer