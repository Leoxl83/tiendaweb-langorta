import cart from '../../img/cart.png';
import './CartWidgetStyles.css';

const CartWidget = () => {
  return (
    <a href='/'>
      <img src={cart} className="cart" alt="cart" />
    </a>
  )
}

export default CartWidget