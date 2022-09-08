import ItemCount from '../ItemCount/ItemCount';

const Item = ({name, price, image}) => {

  return (
    <div className='funkoCard'>
        <img width={`150px`}  src={image} alt = {name}/>
        <h2>{name}</h2>
        <h4>{price}</h4>
        <ItemCount initial={1} stock={5}/>
    </div>
  )
  
}
export default Item