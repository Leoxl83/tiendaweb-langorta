import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ lista }) => {

  return (
    <div className='list'>
      {
        lista.map((product) => (
            <div className='card' >
              <Item
                image={product.image}
                name={product.name}
                price={product.price}
              />
              <Link key={product.id} to= {'/item/' + product.id}>
                <button> Ver Detalles </button>
              </Link>          

            </div>             
        ))
      }
    </div>
  );
  
}

export default ItemList