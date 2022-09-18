import ItemCount from "../ItemCount/ItemCount";
import {useState} from 'react';
import './ItemDetail.css';
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

  const [count, setCount] = useState(0);

  const finalizar = () => {
    console.log (count);
  }

  return (
    <div className='detail'>
      <div className="cardDetail">
        <section className="cardDetailLeft">
          <img className="card_img" src={item.image} alt = {item.name}/>
        </section>
        <section className= "cardDetailRight">
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
          <ItemCount setCount={setCount} count={count}/>
          <button onClick={()=>{console.log(`Agregaste ${count} productos al carrito`)}}>Agregar al carrito</button>

          <Link to={'/cart'}> <button onClick={finalizar} >Finalizar mi compra</button></Link>
        </section>        
      </div>            
    </div>
  )
}

export default ItemDetail