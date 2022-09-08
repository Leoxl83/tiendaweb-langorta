import React, {useState} from 'react';

const ItemCount = (props) => {

  const [items, setItems] = useState(0);

  const agregar = () => items < props.stock ? setItems(items + 1) : alert("Alcanzo el maximo de productos");
  const quitar = () => items > 0 ? setItems(items - 1) : alert("Ya no tiene productos");
  return (
    <>
      <div>Stock {props.stock}</div>
      <div>
        <button onClick={quitar}>-</button> 
        <span>{items}</span>       
        <button onClick={agregar}>+</button>
      </div>     
      <button onClick={()=>{console.log(`Agregaste ${items} productos al carrito`)}}>Agregar al carrito</button>
    </>  
  );
}

export default ItemCount;