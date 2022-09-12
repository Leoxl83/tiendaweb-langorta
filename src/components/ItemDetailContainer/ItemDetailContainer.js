import { useEffect, useState } from 'react';
import data from '../Data/Data';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct.then((response) => {
      setProduct(response);
    })
      .catch(error => console.log(error))
  })

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[1])
    }, 2000)
  });

  return (
    <>
      <ItemDetail item={product} />
    </>
  )
}

export default ItemDetailContainer