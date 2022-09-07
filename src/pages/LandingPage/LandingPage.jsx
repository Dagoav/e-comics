import React from 'react'
import "./LandingPage.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoRed2.png'
import comic from '../../assets/xmenCover.jpg'

const LandingPage = () => {
  return (
    <>
      <section>
        <header className='shadow-lg sticky bg-gray-100  border-b-2 border-gray-100'>
          <Link to="/home"><img src={logo} alt="logo" className='logo' /></Link>
          <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/signup'>Sign Up</a></li>
          </ul>
        </header>
        <div className="cont">
          <div className="textBox">
            <h2>It`s not just Comics <br /><span>It`s E-Comics</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint et rem provident officiis vitae laborum, facilis quasi fugit dolor voluptas dignissimos impedit iure vero distinctio labore fuga. Mollitia, nobis.</p>
            <a href="">Learn More...</a>
          </div>
          <div className='imgBox'>
            <img src={comic} width={400} height={450} alt="comic" className='Comic' />
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage