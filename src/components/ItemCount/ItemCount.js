import React, {useState} from 'react';
import './ItemCount.css';


const ItemCount = (props) => {

  const [items, setItems] = useState(0);

  const agregar = () => items < props.stock ? setItems(items + 1) : alert("Alcanzo el maximo de productos");
  const quitar = () => items > 0 ? setItems(items - 1) : alert("Ya no tiene productos");
  return (
    <>
      <div>Stock {props.stock}</div>
      <div>
        <button className='btnCount' onClick={quitar}>-</button> 
        <span>{items}</span>       
        <button className='btnCount' onClick={agregar}>+</button>
      </div>     
      <button onClick={()=>{console.log(`Agregaste ${items} productos al carrito`)}}>Agregar al carrito</button>
    </>  
  );
}

export default ItemCount;