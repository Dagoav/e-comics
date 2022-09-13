import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import {
  RiUser3Fill,
  RiSettings3Fill,
  RiLogoutBoxRLine,
  RiUpload2Line,
} from 'react-icons/ri'

import './DashboardNav.css'
import { useEffect } from 'react'

const DashboardNav = () => {
  useEffect(() => {

    let list = document.querySelectorAll('.navAdm ul li')

    list.forEach(elem => {
      elem.addEventListener("click", (e) => {
        elem.classList.add("selected")
        console.log(e.target);
        list.forEach(elem => {
          elem.classList.remove("selected")
        })

      })
    })

    // function activeLink() {
    //   list.forEach((item) =>
    //     item.classList.remove('hovered'))
    //   this.classList.add('hovered');
    // }
    // list.forEach((item) =>
    //   item.addEventListener('mouseover', activeLink))
  })

  return (
    <div className="contAdm">
      <div className='navAdm'>
        <ul>
          <li className='mt-2'>
            <Link to={"/dashboard"}>
              <span className='icon'>
                <span className="material-symbols-outlined pt-2" style={{ fontSize: '2.5rem' }}>
                  admin_panel_settings
                </span>
              </span>
              <span className='title'>E-Comics</span>
            </Link>
          </li>
          <li>
            <NavLink to={"/admin/dashboard"} >
              <span className='icon'>
                <span className="material-symbols-outlined pt-2" style={{ fontSize: '2.5rem' }}>
                  dashboard
                </span>
              </span>
              <span className='title'>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/users"}>
              <span className='icon'><RiUser3Fill /></span>
              <span className='title'>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/settings"} >
              <span className='icon'><RiSettings3Fill /></span>
              <span className='title'>Settings</span>
            </NavLink>
          </li>
          {/* <li>
            <a href="#">
            <span className='icon'><RiLockPasswordLine /></span>
            <span className='title'>Password</span>
            </a>
          </li> */}
          <li>
            <NavLink to={"/dashboard/upload"} >
              <span className='icon'><RiUpload2Line /></span>
              <span className='title'>Subir comic</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/logout"}>
              <span className='icon'><RiLogoutBoxRLine /></span>
              <span className='title'>Exit</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default DashboardNav