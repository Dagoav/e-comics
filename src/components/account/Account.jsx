import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from "react-router-dom";
// import Login from "../login/Login";
import "./Account.css"

const Account = () => {

    return (
        <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
            {/* <Link to={"http://127.0.0.1:3000/user/login"}> */}
                <div className='me-4'>
                    <div className='d-flex' >
                        <span className="material-symbols-outlined" >
                            account_circle
                        </span>
                        <span className='ms-2'>
                            {/* <Login /> */}
                            Login
                        </span>
                    </div>
                </div>
            {/* </Link> */}
            <NavDropdown.Item href="#action5" className='d-flex'>
                <span className="material-symbols-outlined">
                    book
                </span>
                <span className='ms-2'>
                    Favoritos
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
                    logout
                </span>
                <span className='ms-2'>
                    Salir
                </span>
            </NavDropdown.Item>
        </NavDropdown >
    )
}

export default Account;