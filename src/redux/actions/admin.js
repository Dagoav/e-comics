import axios from "axios";

const backendURL = process.env.REACT_APP_API;

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

export const addComic = (body) => {
  return async (dispatch) => {
    const comic_info = await axios({
      method: 'post',
      url: `${backendURL}/comics`,
      data: body
    })
    return dispatch({
      type: "POST_COMIC",
      payload: comic_info.data
    })
  }
}

