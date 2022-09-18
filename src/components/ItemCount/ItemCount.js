import './ItemCount.css';

const ItemCount = ({setCount, count}) => {

  const stock = 5;
  const agregar = () => count < stock ? setCount(count +1) : alert("Alcanzo el maximo de productos");
  const quitar = () => count > 0 ? setCount(count -1) : alert("Ya no tiene productos");
  return (
    <>
      <div>Stock {stock}</div>
      <div>
        <button className='btnCount' onClick={quitar}>-</button> 
        <span>{count}</span>       
        <button className='btnCount' onClick={agregar}>+</button>
      </div>     
    </>  
  );
}

export default ItemCount;