import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './login.css'
import { loginUser } from '../../redux/actions';
import axios from 'axios';

// function validate(input){
//   let errors = {};

// if(!input.email){
//   errors.email = "El email es requerido"
// }
// else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)){
//   errors.email = "correo no valido"
// }
// else if (!input.password){
//   errors.password = ("contraseña es requerida")
// }
// return errors
// }

function LoginApp() {

const dispatch = useDispatch()
//const [errors, setErrors] = useState([""])


  const [input, setInput] = useState({
    email: "", 
    password: "",
  })

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
//   setErrors(
//     validate({
//         ...input,
//         [e.target.name] : e.target.value
//     })
// )
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
    
    setInput({
        email: "",
        password: "",
    })
  
  } catch (error) {
    
  }
}

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBInput value={input.email} name="email" onChange={handleChange} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>

          <MDBInput value={input.password} name="password"  onChange={handleChange}  wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn type='submit' onClick={handleSubmit} className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  
      </div>

    </MDBContainer>
  );
}

export default LoginApp;