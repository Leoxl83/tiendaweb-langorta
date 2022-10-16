import React from 'react'
import bannerImage from '../../../img/banner.jpg'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <img src={bannerImage} width="100%" alt="SeinfeldShop Logo" />
      </div>
      <div className='bannerProducts'>
        <Link to= {'/item'}><button>Conoce nuestros productos!</button></Link>
      </div>
    </>
  )
}

export default Home