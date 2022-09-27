import './CartWidgetStyles.css';
import { TiShoppingCart  } from "react-icons/ti";
import { useContext } from 'react';
import { CartContext} from '../../context/CartContext';

const CartWidget = () => {

  const {cart} = useContext(CartContext);
  
  return (
    <>
      <TiShoppingCart className='carritoIcon' />
      <span className='carritoTotal'>{cart.reduce((acc,cartItem)=> acc + cartItem.quantity, 0)}</span>
    </>    
  )
}

export default CartWidget

