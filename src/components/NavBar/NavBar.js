import React from "react";
import logo from '../../img/seinfeldlogo.png';

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <a href="/">
                <img src={logo} className="navbar-logo" alt="logo" />
            </a>

            <ul className="navbar-menu">
                <li className="navbar-link"><a href="/">Productos</a></li>
                <li className="navbar-link"><a href="/">Nosotros</a> </li>
                <li className="navbar-link"><a href="/">Carrito</a> </li>
            </ul>
        </nav>
    )
        
}

export default NavBar;

