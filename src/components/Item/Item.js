
const Item = ({name, price, image}) => {

  return (
    <div className='Card'>
        <img width={`150px`}  src={image} alt = {name}/>
        <h2>{name}</h2>
        <h4>{price}</h4>
    </div>
  )
}

export default Item