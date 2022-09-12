import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function validate(input){
  let errors = {};

if(!input.email){
  errors.email = "El email es requerido"
}
else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)){
  errors.email = "correo no valido"
}
else if (!input.password){
  errors.password = ("contraseña es requerida")
}
return errors
}

function LoginApp() {
const navigate = useNavigate()

const [errors, setErrors] = useState([""])

  const [input, setInput] = useState({
    email: "", 
    password: "",
  })

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
  setErrors(
    validate({
        ...input,
        [e.target.name] : e.target.value
    })
)
}

const  handleSubmit =async(e)=> {
  e.preventDefault();

  try {
      const response = await axios({
        url: "http://localhost:3000/user/login",
        method: 'POST',
        data: input
    })
      localStorage.setItem('token', JSON.stringify(response.data))
      if(response.data.Rol === "USER"){
      navigate('/userprofile')
      }
      if(response.data.Rol === "ADMIN"){
      navigate('./admin')
      }
     setInput({
        email: "",
        password: "",
    })
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: 'Usuario no se encuentra registrado',
      icon: 'error',
      confirmButtonText: 'cerrar'
    })
  }
}
console.log(errors)
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://previews.123rf.com/images/galamar/galamar1601/galamar160101219/51191399-el-arte-pop-icono-de-c%C3%B3mics-hola.jpg" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
           {errors && errors.email ? <span className="text-red-600"> {errors.password} </span> : null}
          <MDBInput value={input.email} name="email" onChange={handleChange} wrapperClass='mb-4' label='Correo electronico' id='formControlLg' type='email' size="lg"/>

          {errors && errors.password ? <span className="text-red-600"> {errors.password} </span> : null}
          <MDBInput value={input.password} name="password"  onChange={handleChange}  wrapperClass='mb-4' label='contraseña' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <a href="!#">olvido su contraseña?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn type='submit' onClick={handleSubmit} className="mb-0 px-5" size='lg' disabled={Object.keys(errors).length === 0 ? false : true}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">No tienes cuenta? <a href="#!" className="link-danger">Registro</a></p>
          </div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginApp;