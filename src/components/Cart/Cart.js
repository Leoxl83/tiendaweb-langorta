import "./Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, removeItem, clear, totalCartPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    buyer: {
      name: '',
      phone: 0,
      email: '',
    },
    items: cart,
    total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: moment().format('DD/MM/YYYY, h:mm:ss a'),
  });

  const db = getFirestore();

  const createOrder = () => {
    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => {
        console.log(id);
        updateStockProducts();
        Swal.fire({
          icon: "success",
          position: "center",
          title: `Felicidades ${userName} por tu compra!
                  Tu codigo de rastreo es: ${id}`,
          showConfirmButton: false,
          timer: 3500
        })
      })
      .catch(() => Swal.fire({
        icon: "error",
        position: "center",
        title: "Tu compra no pudo ser realizada, intentalo mas tarde",
        showConfirmButton: false,
        timer: 2000
      }))
  }

  const updateStockProducts = () => {
    cart.forEach((item) => {
      const queryUpdate = doc(db, 'items', item.id);
      updateDoc(queryUpdate, {
        categoryId: item.categoryId,
        image: item.image,
        price: item.price,
        name: item.name,
        stock: item.stock - item.quantity,
      })
        .then(() => {
          if (cart[cart.length - 1].id === item.id) {
            clear();
            navigate('/');
          }
        })
        .catch(() => {
          console.log('error al actualizar stock');
        });
    });
  };

  let userName = order.buyer.name;

  console.log("cart", cart);

  const handleInputChange = (e) => {
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="carrito">
      {cart.length === 0 ? (
        <>
          <h2>No hay productos en tu carrito</h2>
          <Link to={"/item"}><button>Volver</button></Link>
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

          {totalCartPrice() > 0 ? <h3 className="totalText">Total: ${totalCartPrice()}</h3> : ""}

          <div className="form">
            <h2>Ingresa tus datos para finalizar tu compra</h2>
            <div>
              <label>Nombre</label>
              <input name="name" type="text" value={order.buyer.name} onChange={handleInputChange} />
            </div>
            <br />
            <div>
              <label>Correo</label>
              <input name="email" type="email" value={order.buyer.email} onChange={handleInputChange} />
            </div>
            <br />
            <div>
              <label>Telefono</label>
              <input name="phone" type="number" value={order.buyer.phone} onChange={handleInputChange} />
            </div>
            <br />
            <div>
              <label>Direccion</label>
              <input name="address" type="text" value={order.buyer.address} onChange={handleInputChange} />
            </div>
            <div className="cajaBotones">
              <Link to={"/"}><button>Volver</button></Link>
              <button onClick={createOrder}>Crear Orden</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

}

export default Cart