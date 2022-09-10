import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  RiUser3Fill,
  RiSettings3Fill,
  RiLogoutBoxRLine,
  RiUpload2Line,
} from 'react-icons/ri'

import './DashboardNav.css'

const DashboardNav = () => {

  // let list = document.querySelectorAll('.navigation li')

  // function activeLink() {
  //   list.forEach((item) =>
  //     item.classList.remove('hovered'))
  //   this.classList.add('hovered');
  // }
  // list.forEach((item) =>
  //   item.addEventListener('mouseover', activeLink))

  return (
    <div className="contAdm">
      <div className='navAdm'>
        <ul>
          <li className='mt-2'>
            <Link to={"/"}>
              <span className='icon'>
                <span className="material-symbols-outlined pt-2" style={{ fontSize: '2.5rem' }}>
                  admin_panel_settings
                </span>
              </span>
              <span className='title'>E-Comics</span>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/admin"}>
              <span className='icon'>
                <span className="material-symbols-outlined pt-2" style={{ fontSize: '2.5rem' }}>
                  dashboard
                </span>
              </span>
              <span className='title'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/users"}>
              <span className='icon'><RiUser3Fill /></span>
              <span className='title'>Users</span>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/settings"}>
              <span className='icon'><RiSettings3Fill /></span>
              <span className='title'>Settings</span>
            </Link>
          </li>
          {/* <li>
            <a href="#">
            <span className='icon'><RiLockPasswordLine /></span>
            <span className='title'>Password</span>
            </a>
          </li> */}
          <li>
            <Link to={"/dashboard/upload"}>
              <span className='icon'><RiUpload2Line /></span>
              <span className='title'>Subir comic</span>
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <span className='icon'><RiLogoutBoxRLine /></span>
              <span className='title'>Exit</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default DashboardNav