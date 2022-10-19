import './ItemCount.css';
import Swal from 'sweetalert2';

const ItemCount = ({stock, setCount, count}) => {

  const agregar = () => count < stock ? setCount(count +1) : Swal.fire({
    icon: 'error',
    title: 'No hay mas stock disponible!',
  })
  const quitar = () => count > 1 ? setCount(count -1) : Swal.fire({
    icon: 'error',
    title: 'Debe seleccionar un producto!',
  });
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