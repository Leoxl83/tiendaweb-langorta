import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ lista }) => {

  return (
    <div className='list'>
      {
        lista.map((product) => (
          <Link key={product.id} to= {'/item/' + product.id}>
            <div className='card' >
              <Item
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>             
          </Link>          
        ))
      }
    </div>
  );
  
}

export default ItemList