import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ lista }) => {

  return (
    <div className='funkoList'>
      {
        lista.map((product) => (
          <div className='funkoCard' key={product.id}>
            <Item
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))
      }
    </div>
  );
  
}

export default ItemList