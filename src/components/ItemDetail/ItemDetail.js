import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  return (
    <div className='funkoCardDetail'>
      <img className="funkoCardDetail_img" src={item.image} alt = {item.name}/>
      <h2>{item.name}</h2>
      <h4>{item.price}</h4>
      <ItemCount initial={1} stock={5}/>
    </div>
  )
}

export default ItemDetail