import React from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../login/Logout'
import Profile from '../login/Profile'
import ModalLogin from "./ModalLogin";

import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Account.css"


const Account = () => {
  // const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0()  
  const auth0_login = () => {
  }
 
  
  return (
    <NavDropdown title="Account" id="navbarScrollingDropdown">
      <NavDropdown.Item className='d-flex' onClick={() => auth0_login()}>
        <div className='me-4'>
          <div className='d-flex' >
            <span className="material-symbols-outlined" >
              account_circle
            </span>
            <span className='ms-2'>
              {/* <Login /> */}

              {isAuthenticated ? (
                <>
                  <Profile />
                  <Logout />
                </>
              ) : (

              localStorage.getItem("token")?
              <Link to = '/userprofile'> 
              {localStorage.getItem("user").replace(/['"]+/g, '')}
              </Link>:
      
                <ModalLogin />

              )}
            </span>
          </div>
        </div>
      </NavDropdown.Item>

      <NavDropdown.Item href="#action5" className='d-flex'>
        <span className="material-symbols-outlined">
          book
        </span>

        {/* loa favoritoas van a estar en el panel de administracion */}
        {/* <span className='ms-2'>
          <Link to='/fav'><button>perfil</button></Link>
        </span> */}

      </NavDropdown.Item>
      <NavDropdown.Item href="#" className='d-flex'>
        <span className="material-symbols-outlined">
          dashboard
        </span>
        <span className='ms-2'>
          <Link to='/dashboard/admin'>
            <button>Dashboard
            </button>
          </Link>
        </span>

      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action7" className='d-flex'>
        <span className="material-symbols-outlined">
          {<Logout />}
        </span>
        <span className='ms-2'>
          Exit
        </span>
      </NavDropdown.Item>
    </NavDropdown >
  )
}

export default Account;