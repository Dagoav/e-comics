import axios from "axios";

const backendURL = process.env.REACT_APP_API;

export const getAllVolumes = () => {
  // const token = JSON.parse(localStorage.getItem("token"))
  return async (dispatch) => {
    const volumes = await axios({
      method: 'GET',
      url: `${backendURL}/comics`,
      // headers: {
      // "Authorization": `Bearer ${token.token}`
      // }
    })
    return dispatch({
      type: "GET_ALL_COMICS",
      payload: volumes.data
    })
  }
}

export const volumeDetail = (id) => {
  return async (dispatch) => {
    const volume = await axios({
      method: 'get',
      url: `${backendURL}/comics/${String(id)}`,
    })
    return dispatch({
      type: "GET_COMIC",
      payload: volume.data
    })
  }
}


export const getLogin = () => {
  return async (dispatch) => {
    const auth = await axios({
      method: 'get',
      url: `${backendURL}/sign-up`,
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


export const getIssues = (id) => {
  return async (dispatch) => {
    const issues = await axios({
      method: 'get',
      url: `${backendURL}/comics/issues/${id}`,
    })

    return dispatch({
      type: "GET_ISSUES",
      payload: issues.data
    })
  }
}

export const searchComic = (volume_name) => {
  return async (dispatch) => {
    const comics = await axios({
      method: 'get',
      url: `${backendURL}/comics/search?name=${volume_name}`
    })
    return dispatch({
      type: "SEARCH_COMICS",
      payload: comics.data
    })
  }
}


export const getUsers = () => {
  return async (dispatch) => {
    const users = await axios({
      method: 'get',
      url: `${backendURL}/admin/users`
    })
    return dispatch({
      type: "GET_USERS",
      payload: users.data
    })
  }
}

export function getCharacters() {
  return async function (dispatch) {
    var chars = await axios.get(`${backendURL}/characters`)
    return dispatch({
      type: "GET_CHARACTERS",
      payload: chars.data
    })
  }
}

export function getPublishers() {
  return async function (dispatch) {
    var publishers = await axios.get(`${backendURL}/publishers`)
    return dispatch({
      type: "GET_PUBLISHERS",
      payload: publishers.data
    })
  }
}

export function getConcepts() {
  return async function (dispatch) {
    var concepts = await axios.get(`${backendURL}/concepts`)
    return dispatch({
      type: "GET_CONCEPTS",
      payload: concepts.data
    })
  }
}

export const reset_comicState = (payload) => {
  return {
    type: "RESET_COMIC",
    payload
  }
}
export const setShoppingCart = (products) => {
  return {
    type: "SET_SHOPPING_CART",
    payload: products
  }
}

export const addToCart = (products, shopping_cart) => {

  // Verifica que el producto no esté en el carrito para no agregarlo de nuevo
  const inCart = shopping_cart.some(p => p.id === products.id)

  if (!inCart) {
    return {
      type: "ADD_TO_CART",
      payload: products,
    }
  } else {
    return {
      type: "NADA", //devuelve el estado, sino Redux llora
    }
  }
}

export const removeFromCart = (products) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: products,
  }
}

export const setLoading = (bool) => {
  return {
    type: "SET_LOADING",
    payload: bool
  }
}
export const setTheme = (obj) => {
  return {
    type: "SET_THEME",
    payload: obj
  }
}

export function creategame(data) {
  return async function () {
    const createUser = await axios.post(
      "http://localhost:3000/publishers",
      data
    );
    console.log(createUser)
  };
}
export function addFavorite(comic) {

  return {
    type: "ADD_FAVORITE",
    payload: comic
  }
}

export function removeFavorite(comic) {
  return {
    type: "REMUVE_FAVORITE",
    payload: comic
  }
}

//-----------------login usuario-------------------------

// export function loginUser(data){
//   return async function(){
//     const response = await axios({
//       url: "http://localhost:3000/user/login",
//       method: 'POST',
//       data: data
//     })
//   }
// }

export function registerUser(data){
    return async function(){
      const register = await axios({
        url: (`${backendURL}/user/singup`),
        method: 'POST',
        data: data
      })
    }
  }

