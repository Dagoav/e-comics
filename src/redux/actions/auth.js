import axios from "axios";

const backendURL = process.env.REACT_APP_API;

export const getLogin = () => {
  return async (dispatch) => {
    const auth = await axios({
      method: 'get',
      url: `${backendURL}/user/login`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // 'Authorization': key,
        withCredentials: true,
        mode: 'no-cors',
      }
    })
    console.log(auth);
    return dispatch({
      type: "SET_AUTH",
      payload: auth.data
    })
  }
}


export function registerUser(data) {
  return async function () {
    const register = await axios({
      url: (`${backendURL}/user/signup`),
      method: 'POST',
      data: data
    })
    console.log(register);
  }
}

