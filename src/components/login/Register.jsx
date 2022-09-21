import React,{useState} from "react";
import { useDispatch} from "react-redux";
import { registerUser } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  // MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import "./Register.css";

function validate(input) {
  let errors = {};

  if (!input.username) {
    errors.username = "El nombre de usuario es requerido";
  } 
  
  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
    errors.email = "correo no valido";
  } 
  
  if (input.password.length < 6) {
    errors.password = "Debe contener minimo 6 caracteres";
  } 

  if (input.password !== input.repeatpassword) {
    errors.repeatpassword = "Las contraseñas no coinciden";
  }
  return errors;
}


function Register() {

  const navigate = useNavigate();
  const [errors, setErrors] = useState([""]);
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmit = async (e) => {
    // try {
      e.preventDefault();
      dispatch(registerUser(input))
      setInput({
        username: "",
        email: "",
        password: "",
        repeatpassword: "",
      })

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registered user successfully',
        showConfirmButton: false,
        timer: 1500
      })
     
      
    // } catch (error) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'no se pudo registrar el usuario',
    //     icon: 'error',
    //     confirmButtonText: 'cerrar'
    //   })
    // }
      navigate('/login')
  };


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom"  id="staticBackdrop" data-bs-backdrop="static">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://i.pinimg.com/originals/9c/04/fc/9c04fc0ab5432780d547faa89d6441c7.jpg"
            className="img-fluid"
            alt=""
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="user me-3" size="lg" />
            <MDBInput
              value={input.username}
              name="username"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Username"
              id="formControlLg"
              type="user"
              size="lg"
              />
              {errors && errors.username ? (
                <span className="text-danger" > {errors.username} </span>
              ) : null}
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="envelope me-3" size="lg" />
            <MDBInput
              value={input.email}
              name="email"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Email"
              id="formControlLg"
              type="email"
              size="lg"
              />
              {input.email.length && errors && errors.email ? (
                <span className="text-danger "> {errors.email} </span>
              ) : null}
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size="lg" />
            <MDBInput
              value={input.password}
              name="password"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              />
              {input.password.length && errors && errors.password ? (
                <span  className="text-danger" > {errors.password} </span>
              ) : null}
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size="lg" />
            <MDBInput
              value={input.repeatpassword}
              name="repeatpassword"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="verify your password"
              id="formControlLg"
              type="password"
              size="lg"
              />
              {input.repeatpassword.length &&errors && errors.repeatpassword ? (
                <span className="text-danger"> {errors.repeatpassword} </span>
              ) : null}
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <Button
            variant="primary"
              type="submit"
              onClick={handleSubmit}
              className="mb-0 px-5"
              size="lg"
              disabled={Object.keys(errors).length === 0 ? false : true}
            >
              sign up
            </Button>
          </div>
          <br />
          <br />
          
          <div className="registerhome">
          <Link to={'/home'}>
              <button type="button" class="btn btn-outline-secondary">Home</button>
          </Link>
          </div>

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            rel="stylesheet"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;

