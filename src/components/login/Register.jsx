import React,{useState} from "react";
import { useDispatch} from "react-redux";
import { registerUser } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
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
    try {
      e.preventDefault();
      dispatch(registerUser(input))
      navigate("/home");
      Swal.fire({
        text: 'Usuario registrado con exito',
        icon: 'success',
        timer: 1500
      })  
      setInput({
        username: "",
        email: "",
        password: "",
        repeatpassword: "",
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'no se pudo registrar el usuario',
        icon: 'error',
        confirmButtonText: 'cerrar'
      })
    }
  };


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/881/857/non_2x/comic-lettering-speech-bubble-for-emotion-with-text-welcome-comic-style-vector.jpg"
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
              label="Nombre de usuario"
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
              label="Correo electronico"
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
              label="Contraseña"
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
              label="Verifica tu contraseña"
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
              Registro
            </Button>
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

// import React from "react";
// import { useState } from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
// } from "mdb-react-ui-kit";
// import "./Register.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch} from "react-redux";
// import { registerUser } from "../../redux/actions";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import Swal from 'sweetalert2'

// const validateFields = values=> {
//   const errors = {};

//   if (!values.username) {
//     errors.username = "El nombre de usuario es requerido";
//   } 
  
//   if (!values.email) {
//     errors.email = "El email es requerido";
//   } else if (
//     !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)) {
//     errors.email = "correo no valido";
//   } 
  
//   if (!values.password) {
//     errors.password = "contraseña es requerida";
//   } 

//   if (values.password !== values.repeatpassword) {
//     errors.repeatpassword = "Las contraseñas no coinciden";
//   }
//   return errors;
// }

// const initialValues ={
//   username: "",
//   email: "",
//   password: "",
//   repeatpassword: "",
// };

// function Register() {
// const dispatch = useDispatch()
//   const [registered, setRegistered] = useState(false)

//   if (registered) {
//     return <h4>
//       Congratulations ✅! You've been successfully registered!
//     </h4>
//   }

//   return (
//     <div>
//      <Formik
//         initialValues={initialValues}
//         validate={validateFields}
//         onSubmit={(values, { setFieldError }) => {
//           dispatch(registerUser(initialValues))
//           .then(() => {
//             setRegistered(true)
//           })
//           .catch(() => {
//             setFieldError("username", "This username is not valid");
//           });
//         }}
//       >
//           {({ errors, isSubmitting }) => (
//           <Form className="form">
//             <Field
//               className={errors.username ? 'error' : ''}
//               name="username"
//               placeholder="nombre de usuario"
//             />
//             <ErrorMessage className='form-error' name='username' component='small' />

//             <Field
//               className={errors.email ? 'error' : ''}
//               name="email"
//               placeholder="escribe el email"
//               type='email'
//             />
//             <ErrorMessage className='form-error' name='email' component='small' />

//             <Field
//               className={errors.password ? 'error' : ''}
//               name="password"
//               placeholder="escribe la contraseña"
//               type='password'
//             />
//             <ErrorMessage className='form-error' name='password' component='small' />


//             <Field
//               className={errors.repeatpassword ? 'error' : ''}
//               name="repeatpassword"
//               placeholder="verifica la contraseña"
//               type='password'
//             />
//             <ErrorMessage className='form-error' name='repeatpassword' component='small' />

//             <button className="btn" disabled={isSubmitting}>
//               Registrarse
//             </button>
//           </Form>
//         )}
//     </Formik>
//     </div>
//   );
// }

// export default Register;

