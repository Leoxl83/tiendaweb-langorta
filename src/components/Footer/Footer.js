import './Footer.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const clickGithub = () => {
  window.open('https:/www.github.com/leoxl83', '_blank')
}
const clickLinkedin = () => {
  window.open('https:/www.linkedin.com/leonardo-langorta', '_blannk')
}

const Footer = () => {
  return (
    <div className='footer'>
        <BsGithub className='footer_icono'onClick={clickGithub} />
        <p>Sitio creado por Leonardo Langorta</p>
        <BsLinkedin className='footer_icono' onClick={clickLinkedin} />
      </div>
  )
}

export default Footer