import React from 'react'
import cart from '../../img/cartwidget.svg';
import './CartWidgetStyles.css';

const CartWidget = () => {
  return (
    <a href='/'>
      <img src={cart} className="cart" alt="cart" />
    </a>
  )
}

export default CartWidget