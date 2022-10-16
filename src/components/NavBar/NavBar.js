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
        <li className="navbar-link">
          <NavLink to="/category/Funkopop"  
            style={({isActive}) => isActive ? {color: "rgb(184, 20, 20)", fontWeight:"bold"} : {color: "black"}}>FunkoPops!</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/category/Taza" className="navbar-link" 
            style={({isActive}) => isActive ? {color: "rgb(184, 20, 20)", fontWeight:"bold"} : {color: "black"}}>Tazas</NavLink> 
        </li>
        <li className="navbar-link">
          <NavLink to="/category/T-shirt" className="navbar-link" 
            style={({isActive}) => isActive ? {color: "rgb(184, 20, 20)", fontWeight:"bold"} : {color: "black"}}>T-Shirt</NavLink> 
        </li>
      </ul>
      <NavLink to={"/cart"}>
        <CartWidget/>
      </NavLink>
    </nav>
  )
}

export default NavBar;

