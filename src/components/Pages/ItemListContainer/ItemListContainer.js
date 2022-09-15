import data from "../../Data/Data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = () => {

  const { category } = useParams();
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts.then((response) => {
      category ? setProductList(response.filter((item) => item.category === category)): setProductList(response);
    })
    .catch (error => console.log(error))
  });

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  });
  
  return (
    <>
      <ItemList lista={productList} />
    </>
  )
}

export default ItemListContainer