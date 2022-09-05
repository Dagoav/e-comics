import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from "react-redux";
import { getLogin } from "../../redux/actions";
// import { Link } from "react-router-dom";
// import Login from "../login/Login";
import "./Account.css"

const Account = () => {
    const dispatch = useDispatch();

    const auth0_login = () => {
        dispatch(getLogin())
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
                            Login
                        </span>
                    </div>
                </div>
            </NavDropdown.Item>
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