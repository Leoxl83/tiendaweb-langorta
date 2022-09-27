import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert('Ya esta en el carrito');
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const removeItem = (productId) => {
        let nuevoArreglo = [];
        cart.forEach(product => {
            if (product.id !== productId) {
                nuevoArreglo.push(product)
            }
        })
        setCart(nuevoArreglo);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};