import data from "../../Data/Data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = () => {

  const { category } = useParams();
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    getItems.then((response) => {
      category ? setItemList(response.filter((item) => item.category === category)): setItemList(response);
    })
    .catch (error => console.log(error))
  });

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  });
  
  return (
    <>
      <ItemList lista={itemList} />
    </>
  )
}

export default ItemListContainer