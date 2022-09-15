import axios from "axios";

const backendURL = process.env.REACT_APP_API;


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



