import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {

  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const notify = () =>
    toast.success(` ${item.name} agregado al carrito!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const rutaImagen = '../images/';

  function onAdd(item) {
    addToCart(item, count);
  }

  const finalizar = () => {
    console.log(count);
  }

  return (
    <div className='detail'>
      <div className="cardDetail">
        <section className="cardDetailLeft">
          <img className="card_img" src={rutaImagen + item.image} alt={item.name} />
          <Link to='/'>Volver</Link>
        </section>
        <section className="cardDetailRight">
          <h2>{item.name}</h2>
          <h4>U$S {item.price}</h4>
          <ItemCount setCount={setCount} count={count} />
          <button onClick={() => { onAdd(item); notify() }}>Agregar al carrito</button>
          <Link to={'/cart'}> <button className="btnFinalizar" onClick={finalizar} >Finalizar mi compra</button></Link>

          <ToastContainer/>
               
        </section>
      </div>
    </div>
  )
}

export default ItemDetail