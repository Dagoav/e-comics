// import axios from "axios";

// const backendURL = process.env.REACT_APP_API;


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