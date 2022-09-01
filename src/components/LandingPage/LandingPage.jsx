import React from 'react'
import background from '../../assets/comiclanding2.webp'
import boom from '../../assets/Boom.png'
import welcome from '../../assets/Welcome.png'
import "./LandingPage.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <img className="background" src={background} />
      <img className='welcome' src={welcome} width="700" />
      <Link to="/home">
        <img className="boom" src={boom} width="350" />
      </Link>
    </>
  )
}

export default LandingPage