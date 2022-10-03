import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ lista }) => {

  return (
    <div className='list'>
      {
        lista.map((item) => (
            <div className='card'key={item.id}>
              <Item
                image={item.image}
                name={item.name}
                price={item.price}
              />
              <Link to={'/item/' + item.id}> <button> Ver Detalles </button></Link>
            </div>
        ))
      }
    </div>
  );
}

export default ItemList