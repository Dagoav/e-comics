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

export const reset_comicState = (payload) => {
  return {
    type: "RESET_STATE",
    payload
  }
}



    export function clear(){
      return{
          type:"CLEAR",
      }
  }
  export function setPage(payload) {
    return {
        type: 'SET_PAGE',
        payload
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

export function creategame(data) {
  return async function () {
    const createUser = await axios.post(
      "http://localhost:3000/publishers",
      data
    );
    console.log(createUser)
  };
}


//77//77--------------------Filtros-----

export function filterPublishers(payload){
console.log(payload)
  return {
  type:"FILTER_COMIC_FOR_PUBLISHERS",
  payload
  }}

  export function FilterAD(payload){
    console.log(payload)
    return{
        type:"FILTER_A_D",
        payload
        }}


        export function FilterForRelease(payload){
          return{
              type:"FILTER_FOR_RELEASE",
              payload
          }
      
      }


   
    
    
   