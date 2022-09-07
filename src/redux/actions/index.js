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


// export const getLogin = () => {
//   return async (dispatch) => {
//     const auth = await axios({
//       method: 'get',
//       url: `${backendURL}/sign-up`,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         // 'Authorization': key,
//         withCredentials: true,
//         mode: 'no-cors',
//       }
//     })
//     console.log(auth);
//     return dispatch({
//       type: "SET_AUTH",
//       payload: auth.data
//     })
//   }
// }


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
  console.log(volume_name);
  return async (dispatch) => {
    const comics = await axios({
      method: 'get',
      url: `${backendURL}/comics/name?name=${volume_name}`,
    })
    console.log(comics.data);
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
