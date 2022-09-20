import axios from "axios";

const backendURL = process.env.REACT_APP_API;


export function getCharacters() {
  return async function (dispatch) {
    var chars = await axios.get(`${backendURL}/characters`)
    // console.log("soy actions")
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

// export function filterPublishers(payload){
// console.log(payload)
//   return {
//   type:"FILTER_COMIC_FOR_PUBLISHERS",
//   payload
//   }}

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


