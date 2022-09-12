import React from 'react'
import background from '../../assets/comiclanding2.webp'
import boom from '../../assets/Boom.png'
import welcome from '../../assets/Welcome.png'
import "./LandingPage.css"
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { useEffect } from 'react'
import { getAllVolumes } from '../../redux/actions'

const LandingPage = () => {
  return (
    <>
      <img className="background" src={background} />
      <img className='welcome' src={welcome} width="900" />


     
    
      <Link to = "/home" > 🤜🤜🤜<button > HOME </button>
        <img className="boom" src={boom} width="350" />
        </Link>
    </>
  )
}

export default LandingPage