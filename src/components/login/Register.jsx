import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function validate(input) {
  let errors = {};

  if (!input.username) {
    errors.username = "El nombre de usuario es requerido";
  } else if (!input.email) {
    errors.email = "El email es requerido";
  } else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      input.email
    )
  ) {
    errors.email = "correo no valido";
  } else if (!input.password) {
    errors.password = "contraseña es requerida";
  } else if (input.password !== input.repeatpassword) {
    errors.repeatpassword = "Las contraseñas no coinciden";
  }
  return errors;
}

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([""]);
  
  console.log(errors);
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

  console.log(input);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "http://localhost:3000/user/singup",
        method: "POST",
        data: {
          username: input.username,
          email: input.email,
          password: input.password,
        },
      });
      setInput({
        username: "",
        email: "",
        password: "",
        repeatpassword: "",
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/881/857/non_2x/comic-lettering-speech-bubble-for-emotion-with-text-welcome-comic-style-vector.jpg"
            className="img-fluid"
            alt="Sample image"
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
              label="Nombre de usuario"
              id="formControlLg"
              type="user"
              size="lg"
            />
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="envelope me-3" size="lg" />
            {errors && errors.email ? (
              <span className="text-red-600"> {errors.password} </span>
            ) : null}
            <MDBInput
              value={input.email}
              name="email"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Correo electronico"
              id="formControlLg"
              type="email"
              size="lg"
            />
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size="lg" />
            {errors && errors.password ? (
              <span className="text-red-600"> {errors.password} </span>
            ) : null}
            <MDBInput
              value={input.password}
              name="password"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Contraseña"
              id="formControlLg"
              type="password"
              size="lg"
            />
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size="lg" />
            <MDBInput
              value={input.repeatpassword}
              name="repeatpassword"
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Repite tu contraseña"
              id="formControlLg"
              type="password"
              size="lg"
            />
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn
              type="submit"
              onClick={handleSubmit}
              className="mb-0 px-5"
              size="lg"
              disabled={Object.keys(errors).length === 0 ? false : true}
            >
              Registro
            </MDBBtn>
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

