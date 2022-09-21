import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { gapi } from 'gapi-script';
import './Login.css'
export default function LoginAuth({ login }) {

  const clientId = "73480857070-b1pmolqom7futp18ta7mjgf3naq9lk27.apps.googleusercontent.com"
  const backendURL = process.env.REACT_APP_API;
  useEffect(() => {
    gapi.load("client: auth2", () => {
      gapi.auth2.init({
        clientId: clientId
      })
    })
  }, [])

  const responsegoogle = async (res) => {
    const response = await axios({
      url: `${backendURL}/login/auth/google`,
      method: "POST",
      data: { google: res.tokenId }
    })
    console.log("from Google");
    localStorage.setItem('token', JSON.stringify(response.data.token))
    localStorage.setItem("user", JSON.stringify(response.data.name))
    localStorage.setItem("ROL", JSON.stringify(response.data.Rol))
    localStorage.setItem("id", JSON.stringify(response.data.id))
    localStorage.setItem("email", JSON.stringify(response.data.email))

    login()
  }
  return (
    <div>
      <div>
        <GoogleLogin className='boton'
          clientId="73480857070-b1pmolqom7futp18ta7mjgf3naq9lk27.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={responsegoogle}
          onFailure={responsegoogle}
          cookiePolicy={'single_host_origin'}
        ></GoogleLogin>
      </div>


    </div>
  )
}
