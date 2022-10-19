import React from 'react'
import bannerImage from '../../../img/banner.jpg'
import btnTienda from '../../../img/btnTienda.png'
import './Home.css'
import { Link } from 'react-router-dom'
import {TbTruckDelivery} from "react-icons/tb";
import {BsClockHistory} from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div>
        <img src={bannerImage} width="100%" alt="SeinfeldShop Logo" />
      </div>
      <div className='bannerProducts'>
        <Link to= {'/item'}><img className='btnTienda' src={btnTienda} width="200px" alt="SeinfeldShop Ir a tienda" /></Link>
      </div>
      <div className='bannerInfo'>
        <div className='delivery'>
          <TbTruckDelivery className='bannerIcono'></TbTruckDelivery>
          <p>Envios a todo el pais</p>
        </div>
        <div className='atencion'>
          <BsClockHistory className='bannerIcono'></BsClockHistory>
          <p>Atencion inmediata</p>
        </div>
        
      </div>
    </>
  )
}

export default Home