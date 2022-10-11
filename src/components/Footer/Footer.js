import './Footer.css'
import { NavLink } from "react-router-dom"
import {BsGithub, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <NavLink to="https:/www.github.com/leoxl83" target="www.github.com/leoxl83"><BsGithub className='footer_icono'/></NavLink>
        <h4>Sitio creado por Leonardo Langorta</h4>
        <NavLink to="https:/www.linkedin.com/leonardo-langorta" target="www.linkedin.com/leonardo-langorta"><BsLinkedin className='footer_icono'/></NavLink>
    </div>
  )
}

export default Footer