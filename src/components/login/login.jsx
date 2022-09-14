import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import './Login.css'
import {useAuthContext} from '../../context/authContext'

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
      localStorage.setItem('token', JSON.stringify(response.data))
      localStorage.setItem("user", JSON.stringify(response.data.name))
      localStorage.setItem("ROL", JSON.stringify(response.data.Rol))
      localStorage.setItem("id", JSON.stringify(response.data.id))
      
      
      // if (response.data.Rol === "USER") {
      //   navigate('/userprofile')
      //   //localStorage.setItem("MY_AUTH", true)
      // }
      // if (response.data.Rol === "ADMIN") {
      //   navigate('./dashboard/admin')
      //   //localStorage.setItem("MY_AUTH", true)
      // }
      setInput({
        email: "",
        password: "",
      })
      login()
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario no se encuentra registrado',
        icon: 'error',
        confirmButtonText: 'cerrar'
      })
    }
  }



  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://previews.123rf.com/images/galamar/galamar1601/galamar160101219/51191399-el-arte-pop-icono-de-c%C3%B3mics-hola.jpg" className="img-fluid" alt="Sample image" />
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

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginApp;