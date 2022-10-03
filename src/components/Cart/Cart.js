import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { collection, addDoc, getFirestore} from 'firebase/firestore';


const Cart = () => {
   const {cart, removeItem} = useContext(CartContext);
   const createOrder = () =>{
       const db = getFirestore();
       const order = {
           buyer: {
                   name: "",
                   phone: "",
                   email: ""
           },
           items: cart,
           total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
           date: moment().format(),
       };
       const query = collection(db, "orders");
       addDoc(query, order)
       .then(({id}) => {
           console.log(id);
           alert ("Felicidades por tu compra")})
       .catch(() => alert("Tu compra no pudo ser realizada, intentalo mas tarde"))
       
   }

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
         <div>
            <button onClick={createOrder}>Crear Orden</button>
         </div>
      </div>
   )
}


export default Cart