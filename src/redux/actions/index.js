import axios from "axios";

const backendURL = process.env.REACT_APP_API;

export const getAllVolumes = () => {
  return async (dispatch) => {
    const volumes = await axios({
      method: 'get',
      url: `${backendURL}/comics`,
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
      url: `${backendURL}/comics/name?name=${volume_name}`,
    })
    return dispatch({
      type: "SEARCH_COMICS",
      payload: comics.data
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

export const addToCart = (products) => {
  return {
    type: "ADD_TO_CART",
    payload: products,
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

export function addFavorite(comic) {
  console.log(comic, "action.fav")
  return {
    type: "ADD_FAVORITE",
    payload: comic
  }
}

export function removeFavorite(comic) {
  console.log(comic, "quitando de fav")
  return {
    type: "REMOVE_FAVORITE",
    payload: comic
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



//-------------------login-------------------
export function loginUser(data){
  return async function(){
    const Login = await axios.post(
      "http://localhost:3000/user/login", data
    )
  }
}