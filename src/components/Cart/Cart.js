import "./Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { cart, removeItem, clear, totalCartPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    buyer: {
      name: '',
      phone: '',
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
        timer: 1500
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
          <h2>No hay productos en su carrito</h2>
        </>
      ) : (
        <div className="carritoContenido">
          <h2>Detalle de su carrito</h2>
          {cart.map((item) => (
            <div className="carritoCaja" key={item.id}>
              <>
                <section>
                  <img src={item.image} alt={item.name} className="imgCarrito" />
                  <h3>{item.name}</h3>
                </section>
                <section>
                  <h4>Precio </h4>
                  <h5>U$S {item.price}</h5>
                </section>
                <section>
                  <h4>Cantidad </h4>
                  <h5>{item.quantity}</h5>
                </section>
                <section>
                  <h4>Sub-Total </h4>
                  <h5>U$S {item.price * item.quantity}</h5>
                </section>
                <BsTrash className="trashIcon" onClick={() => removeItem(item.id)}></BsTrash>
              </>
            </div>
          ))}

          {totalCartPrice() > 0 ? <h3 className="totalText">Total: ${totalCartPrice()}</h3> : ""}

          <div class="form">
            <h2 className="tituloFin">Ingrese sus datos para finalizar la compra</h2>
            <input class="inputs" type="name" name="name" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
            <input class="inputs" type="text" name="adress" placeholder="Direccion" value={order.buyer.address} onChange={handleInputChange} />
            <input class="inputs" type="number" name="phone" placeholder="Telefono" value={order.buyer.phone} onChange={handleInputChange} />
            <input class="inputs" type="email" name="email" placeholder="E-Mail" value={order.buyer.email} onChange={handleInputChange} />
            <button className="btnOrden" onClick={createOrder}>Crear Orden</button>
          </div>
        </div>
      )}
      <Link to={"/item"}><button>Volver a la tienda</button></Link>

    </div>
  )

}

export default Cart