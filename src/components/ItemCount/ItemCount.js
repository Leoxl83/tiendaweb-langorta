import React, {useState} from 'react';

const ItemCount = (props) => {

  const [items, setItems] = useState(0);

  const agregar = () => items < props.stock ? setItems(items + 1) : alert("Alcanzo el maximo de productos");
  const quitar = () => items > 0 ? setItems(items - 1) : alert("Ya no tiene productos");
  return (
    <>
      <div> {items} items agregados.</div>
      <div>Stock {props.stock}</div>
      <div>
        <button onClick={quitar}>-</button>
        <button onClick={agregar}>+</button>
      </div>     
      <button>Agregar al carrito</button>
    </>  
  );
}

export default ItemCount;