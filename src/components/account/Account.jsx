import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
 import { useDispatch } from "react-redux";
 import { getLogin } from "../../redux/actions";
// import { Link } from "react-router-dom";
// import Login from "../login/Login";
import "./Account.css"
import { Link } from "react-router-dom";

import Login1 from "../login/Login";
import Logout from '../login/Logout'
import Profile from '../login/Profile'
import { useAuth0 } from '@auth0/auth0-react';


const Account = () => {
  // const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0()

  const auth0_login = () => {
    // dispatch(getLogin())
    console.log("auth0");
  }

  return (
    <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
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
                <Login1 />
              )}
            </span>
          </div>
        </div>
      </NavDropdown.Item>
      <NavDropdown.Item href="#action5" className='d-flex'>
        <span className="material-symbols-outlined">
          book
        </span>
        <span className='ms-2'>
          <Link to='/fav'><button>Favoritos</button></Link>
        </span>

      </NavDropdown.Item>
      <NavDropdown.Item href="#action6" className='d-flex'>
        <span className="material-symbols-outlined">
          upload_file
        </span>
        <span className='ms-2'>
          Subir Comic
        </span>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action7" className='d-flex'>
        <span className="material-symbols-outlined">
          {<Logout />}
        </span>
        <span className='ms-2'>
          Salir
        </span>
      </NavDropdown.Item>
    </NavDropdown >
  )
}

export default Account;