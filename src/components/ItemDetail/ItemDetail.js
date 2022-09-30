import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {

  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

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
          <button onClick={() => onAdd(item)}>Agregar al carrito</button>
          <Link to={'/cart'}> <button className="btnFinalizar" onClick={finalizar} >Finalizar mi compra</button></Link>
        </section>
      </div>
    </div>
  )
}

export default ItemDetail