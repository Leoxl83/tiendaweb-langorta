import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/Data';
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getItem.then((response) => {
      const dataFiltrada = response.filter((product) => product.id === id);
      setProductDetail(...dataFiltrada);
  })
},)

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  });

  return (
    <ItemDetail item={productDetail} />    
  )
}

export default ItemDetailContainer