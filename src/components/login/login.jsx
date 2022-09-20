import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import {useAuthContext} from '../../context/authContext'
import LoginAuth from '../Logingoogle/Login';

const backendURL = process.env.REACT_APP_API;

function validate(input) {
  let errors = {};

  if (!input.email) {
    errors.email = "El email es requerido"
  }
  else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
    errors.email = "correo no valido"
  }
  else if (!input.password) {
    errors.password = ("contraseña es requerida")
  }
  return errors
}

function LoginApp() {

  const {login} = useAuthContext()
  const navigate = useNavigate()


  const [errors, setErrors] = useState([""])
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: (`${backendURL}/user/login`),
        method: 'POST',
        data: input
      })
      localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.name))
      localStorage.setItem("ROL", JSON.stringify(response.data.Rol))
      localStorage.setItem("id", JSON.stringify(response.data.id))
      
      setInput({
        email: "",
        password: "",
      })
      login()
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'cerrar'
      })
    }
  }



  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://media.dcbservice.com/xlarge/OCT207144.jpg" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          {input.email.length && errors && errors.email ? (
            <span className="texterror"> {errors.email} </span>
          ) : null}
          <MDBInput value={input.email} name="email" onChange={handleChange} wrapperClass='mb-4' label='Correo electronico' id='formControlLg' type='email' size="lg" />

          <MDBInput value={input.password} name="password" onChange={handleChange} wrapperClass='mb-4' label='contraseña' id='formControlLg' type='password' size="lg" />
          {input.password.length && errors && errors.password ? (
            <span className="text-danger position-absolute"> {errors.password} </span>
          ) : null}

          <div className="d-flex justify-content-between mb-4">
            <a href="!#">olvido su contraseña?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Button type='submit' onClick={handleSubmit} className="mb-0 px-5" size='lg' disabled={Object.keys(errors).length === 0 ? false : true}>Login</Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">No tienes cuenta? <Link to='/singup'> <a className="link-danger">Registro</a>  </Link></p>
          </div>

            <br />
            <br />
            <div className='textgoogle'>
            <p >O inicia sesion con google</p>
            </div>


          <div  className='botonGoogle'>
          <LoginAuth login={login}/>
          </div>
          
          <br />
          <br />

            <div className='tohome'>
              <Link to={'/home'}>
              <button type="button" class="btn btn-outline-secondary">Home</button>
              </Link>
            </div>
          
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginApp;