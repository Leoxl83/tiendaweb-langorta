import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  return (
    <div className='detail'>
      <div className="cardDetail">
        <div className="cardDetailLeft">
          <img className="card_img" src={item.image} alt = {item.name}/>
        </div>
        <div className= "cardDetailRight">
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
          <ItemCount initial={1} stock={5}/>
        </div>
        
      </div>
            
    </div>
  )
}

export default ItemDetail