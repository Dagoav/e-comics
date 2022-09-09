import React from 'react'
import './AdmDashboard.css'
import {
  RiAdminFill,
  RiHome2Line,
  RiUser3Fill,
  RiSettings3Fill,
  RiLockPasswordLine,
  RiLogoutBoxRLine,
  RiSearch2Line,
  RiEyeLine,
  RiMoneyDollarCircleLine,
  RiUpload2Line
} from 'react-icons/ri'
import {
  MdShoppingCart,
  MdVerifiedUser
} from 'react-icons/md'
import Dani from '../../assets/devs/Daniel.jpeg'

const AdmDashboard = () => {

  let list = document.querySelectorAll('.navigation li')

  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('hovered'))
    this.classList.add('hovered');
  }
  list.forEach((item) =>
    item.addEventListener('mouseover', activeLink))


  return (
    <div className="contAdm">
      <div className='navAdm'>
        <ul>
          <li>
            <a href="#">
              <span className='icon'><RiAdminFill /></span>
              <span className='title'>E-Comics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='icon'><RiHome2Line /></span>
              <span className='title'>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='icon'><RiUser3Fill /></span>
              <span className='title'>Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='icon'><RiSettings3Fill /></span>
              <span className='title'>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='icon'><RiLockPasswordLine /></span>
              <span className='title'>Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='icon'><RiUpload2Line /></span>
              <span className='title'>Subir comic</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className='icon'><RiLogoutBoxRLine /></span>
              <span className='title'>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mainAdm">
        <div className="topbar">

          <div className="search">
            <label>
              <input type="text" placeholder='Search...' />
              <RiSearch2Line className='iconL' />
            </label>
          </div>

          <div className='user'>
            <img src={Dani} alt="logo" />
          </div>
        </div>

        <div className="cardBoxDashboard">
          <div className="cardDashboard">
            <div>
              <div className="numbers">1,500</div>
              <div className="cardName">Daily Users</div>
            </div>
            <div className="iconBx">
              <RiEyeLine />
            </div>
          </div>
          <div className="cardDashboard">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Users Register</div>
            </div>
            <div className="iconBx">
              <MdVerifiedUser />
            </div>
          </div>
          <div className="cardDashboard">
            <div>
              <div className="numbers">203</div>
              <div className="cardName">Comics Selling</div>
            </div>
            <div className="iconBx">
              <MdShoppingCart />
            </div>
          </div>
          <div className="cardDashboard">
            <div>
              <div className="numbers">$5,452</div>
              <div className="cardName">Earning</div>
            </div>
            <div className="iconBx">
              <RiMoneyDollarCircleLine />
            </div>
          </div>
        </div>

        <div className="detail">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AdmDashboard