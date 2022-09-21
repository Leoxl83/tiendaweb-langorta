import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ lista }) => {

  return (
    <div className='list'>
      {
        lista.map((item) => (
          <Link key={item.id} to= {'/item/' + item.id}>
            <div className='card' >
              <Item
                image={item.image}
                name={item.name}
                price={item.price}
              />
                <button> Ver Detalles </button>
            </div>   
          </Link>          
        ))
      }
    </div>
  );  
}

export default ItemList