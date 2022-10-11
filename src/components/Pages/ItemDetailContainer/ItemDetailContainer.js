import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    getItem();
  },)

  const getItem = () => {
    const db = getFirestore();
    const queryDoc = doc(db, 'items', id);
    getDoc(queryDoc).then((res) => {
      setItemDetail({ id: res.id, ...res.data() });
    })
    .catch((err) => console.log(err));

  }
  
  return <>{itemDetail && <ItemDetail item={itemDetail} />} </>   
  
}

export default ItemDetailContainer