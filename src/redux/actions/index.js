// import dotenv from "dotenv"
// dotenv.config("../.env")
import axios from "axios";

const backendURL = "http://127.0.0.1:3000";
// const apiURL = "https://comicvine.gamespot.com/api";
// const apiKey = "d1d5b2c8d71b25f222e620d4541b6ac672a05156"

// const backendURL = process.env.REACT_APP_API || "http://127.0.0.1:3001";


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

export const volumeDetail = (path) => {
  return async (dispatch) => {
    const volume = await axios({
      method: 'post',
      url: `${backendURL}/path-detail`,
      data: {
        path
      }
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


export const issueDetail = (path) => {
  return async (dispatch) => {
    const issue = await axios({
      method: 'post',
      url: `${backendURL}/path-detail`,
      data: {
        path
      }
    })

    return dispatch({
      type: "GET_ISSUE",
      payload: issue.data
    })
  }
}

export const searchComic = (volume_name) => {
  return async (dispatch) => {
    const comic = await axios({
      method: 'post',
      url: `${backendURL}/search`,
      data: {
        volume_name
      }
    })
    return dispatch({
      type: "SEARCH_COMICS",
      payload: comic.data
    })
  }
}

export function getCharacters() {
  return async function (dispatch) {
    var chars = await axios.get("http://127.0.0.1:3000/characters")
    return dispatch({
      type: "GET_CHARACTERS",
      payload: chars.data
    })
  }
}

export function getPublishers() {
  return async function (dispatch) {
    var publishers = await axios.get("http://127.0.0.1:3000/publishers")
    return dispatch({
      type: "GET_PUBLISHERS",
      payload: publishers.data
    })
  }
}

export function getConcepts() {
  return async function (dispatch) {
    var concepts = await axios.get("http://127.0.0.1:3000/concepts")
    return dispatch({
      type: "GET_CONCEPTS",
      payload: concepts.data
    })
  }
}

export const setShoppingCart = (products) => {
  return {
    type: "SET_SHOPPING_CART",
    payload: products
  }
}

export const setTheme = (obj) => {
  return {
    type: "SET_THEME",
    payload: obj
  }
}
