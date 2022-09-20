import React, {useEffect} from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { gapi } from 'gapi-script';

export default function LoginAuth({login}) {
  
  const clientId = "73480857070-b1pmolqom7futp18ta7mjgf3naq9lk27.apps.googleusercontent.com"
  
  useEffect(() => {
    gapi.load("client: auth2", () =>{
        gapi.auth2.init({
            clientId: clientId       })
    } )
  }, [])
  
  const responsegoogle = async(response )=>{
    const respuesta = await axios({
        url: "http://localhost:3000/login/auth/google",
        method: "POST",
        data: {google: response.tokenId}
    })
    console.log(respuesta, "hola")

    localStorage.setItem('token', JSON.stringify(respuesta.data.token))
    localStorage.setItem("user", JSON.stringify(respuesta.data.name))
    localStorage.setItem("ROL", JSON.stringify(respuesta.data.Rol))
    localStorage.setItem("id", JSON.stringify(respuesta.data.id))

    login()
  }
    return (
    <div>
            <div>
                <GoogleLogin
                    clientId = "73480857070-b1pmolqom7futp18ta7mjgf3naq9lk27.apps.googleusercontent.com" 
                    buttonText="Log in with Google"
                    onSuccess={responsegoogle}
                    onFailure={responsegoogle}
                    cookiePolicy={'single_host_origin'}
                ></GoogleLogin>  
            </div>


    </div>
  )
}
