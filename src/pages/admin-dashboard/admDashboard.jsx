import React from 'react'
// import './AdmDashboard.css'
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
  RiUpload2Line,
  RiMenuFill
} from 'react-icons/ri'
import {
  MdShoppingCart,
  MdVerifiedUser
} from 'react-icons/md'
import Dani from '../../assets/devs/Daniel.jpeg'

const AdmDashboard = () => {

  let list = document.querySelectorAll('.navAdm li');
  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('hovered'));
    this.classList.add('hovered');
  }
  list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

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
          <div className="toggle">
            <RiMenuFill />
          </div>

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

        <div className="detailsAdm">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" className="btn">View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td><span className="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$110</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$620</td>
                  <td><span className="status return">Return</span></td>
                </tr>
                <tr>
                  <td>Hp Laptop</td>
                  <td>$110</td>
                  <td><span className="status inprogress">In Progress</span></td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td><span className="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Wall Fan</td>
                  <td>$110</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Adidas Shoes</td>
                  <td>$620</td>
                  <td><span className="status return">Return</span></td>
                </tr>
                <tr>
                  <td>Denim Shirts</td>
                  <td>$110</td>
                  <td><span className="status inprogress">In Progress</span></td>
                </tr>
                <tr>
                  <td>Casual Shoes</td>
                  <td>$575</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Wall Fan</td>
                  <td>$110</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Denim Shirts</td>
                  <td>$110</td>
                  <td><span className="status inprogress">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tr>
                <td width="60px"><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 1<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 2<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 3<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 4<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 5<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 6<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 7<br /></h4></td>
              </tr>
              <tr>
                <td><div className="imgBx"><img src={Dani} /></div></td>
                <td><h4>User 8<br /></h4></td>
              </tr>

            </table>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AdmDashboard