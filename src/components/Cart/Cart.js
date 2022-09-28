import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";


const Cart = () => {
   const { cart, removeItem } = useContext(CartContext);
   console.log("cart", cart);

   return (
      <div className="carrito">
         {cart.length === 0 ? (
            <>
               <h2>No hay productos en tu carrito</h2>
               <Link to={"/"}>Volver</Link>
            </>
         ) : (
            <div className="carritoContenido">
               {cart.map((item) => (
                  <div className="carritoCaja" key={item.id}>
                     <>
                        <section>
                           <img src={item.image} alt={item.name} className="imgCarrito" />
                           <h3>{item.name}</h3>
                        </section>
                        <section>
                           <h4>Precio: </h4>
                           <h5>U$S {item.price}</h5>
                        </section> 
                        <section>
                           <h4>Cantidad: </h4>
                           <h5>{item.quantity}</h5>
                        </section>
                        <section>
                           <h4>Total: </h4>
                           <h5>U$S {item.price * item.quantity}</h5>
                        </section>                       
                        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                     </>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}


export default Cart