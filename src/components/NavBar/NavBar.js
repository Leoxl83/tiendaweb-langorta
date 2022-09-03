import logo from '../../img/seinfeldlogo.png';
import CartWidget from "../CartWidget/CartWidget";
import './NavBarStyles.css';

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <a href="/">
        <img src={logo} className="navbar-logo" alt="logo" />
      </a>

      <ul className="navbar-menu">
        <li className="navbar-link"><a href="/">Productos</a></li>
        <li className="navbar-link"><a href="/">Nosotros</a> </li>
      </ul>
      <CartWidget/>
    </nav>
  )

}

export default NavBar;

