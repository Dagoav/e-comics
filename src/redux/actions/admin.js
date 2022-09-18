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

export const getAllReviews = () => {
  return async (dispatch) => {
    const reviews = await axios({
      method: 'get',
      url: `${backendURL}/admin/reviews`
    })
    return dispatch({
      type: "GET_REVIEWS",
      payload: reviews.data
    })
  }
}

export const deleteReview = (body) => {
  return async (dispatch) => {
    const reviews = await axios({
      method: 'delete',
      url: `${backendURL}/admin/reviews`,
      data: body
    })

    getAllReviews()
    return dispatch({
      type: "DELETE_REVIEW",
      payload: reviews.data
    })
  }
}

export const setUsersRol = (params) => {
  return async (dispatch) => {
    const users = await axios({
      method: 'put',
      url: `${backendURL}/admin/users/rol`,
      data: params
    })
    console.log(users.data[0]);
    return dispatch({
      type: "ROL_USERS",
      payload: users.data
    })
  }
}
export const setUsersActive = (params) => {
  return async (dispatch) => {
    const users = await axios({
      method: 'put',
      url: `${backendURL}/admin/users/active`,
      data: params
    })
    console.log(users.data[0]);
    return dispatch({
      type: "ACTIVE_USERS",
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

