import React from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../login/Logout'
import Profile from '../login/Profile'
import ModalLogin from "./ModalLogin";
import { useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Account.css"


const Account = () => {
  // const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0()  
  const auth0_login = () => {
  }
 const rol = JSON.parse(localStorage.getItem("ROL"))
 
 
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
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
                </>
              ) : (

              localStorage.getItem("token")?
              <Link to = {rol === "ADMIN"? "/admin" : '/user'}> 
              {localStorage.getItem("user").replace(/['"]+/g, '')}
              </Link>:

              <ModalLogin/>

              )}
            </span>
          </div>
        </div>
      </NavDropdown.Item>

      {/* loa favoritoas van a estar en el panel de administracion  y el libro no tiene funcionalidad*/}
      {/* <NavDropdown.Item href="#action5" className='d-flex'>
        <span className="material-symbols-outlined">
          book
        </span>

        <span className='ms-2'>
          <Link to='/fav'><button>perfil</button></Link>
        </span>

      </NavDropdown.Item> */}

      {/* si se da click al boton con el nombre ya lleva el panel, ya sea de usuario o de admin */}
      {/* <NavDropdown.Item href="#" className='d-flex'>
        <span className="material-symbols-outlined">
          dashboard
        </span>
        <span className='ms-2'>
          <Link to='/dashboard/admin'>
            <button>Dashboard
            </button>
          </Link>
        </span>

      </NavDropdown.Item> */}
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action7" className='d-flex'>
    
          {rol ? 
          <Link to = {rol === "ADMIN"? "/admin/logout" : rol=== 'USER'? '/user/logout': ""}  >
          <span className='ms-2'>
          Exit
          </span>
          </Link>:
          null
}
        
      </NavDropdown.Item>
    </NavDropdown >
  )
}

export default Account;