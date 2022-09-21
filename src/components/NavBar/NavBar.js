import logo from '../../img/seinfeldlogo.png';
import CartWidget from "../CartWidget/CartWidget";
import './NavBarStyles.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/">
        <img src={logo} className="navbar-logo" alt="SeinfeldShop Logo"/>
      </NavLink>

      <ul className="navbar-menu">
        <li >
          <NavLink to="/category/Funkopop" className="navbar-link" 
            style={({isActive}) => isActive ? {color: "rgb(184, 20, 20)", fontWeight:"bold"} : {color: "black"}}>FunkoPops!</NavLink>
          <NavLink to="/category/Taza" className="navbar-link" 
            style={({isActive}) => isActive ? {color: "rgb(184, 20, 20)", fontWeight:"bold"} : {color: "black"}}>Tazas</NavLink> 
        </li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;

