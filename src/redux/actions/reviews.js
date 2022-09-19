import axios from "axios";

export function getReviews(payload) {
  return async function (dispatch) {
    const review = await axios.post("http://localhost:3000/ratings/byIssue", payload)

    return dispatch({
      type: "GET_REVIEWS",
      payload: review.data
    })
  }
}

export function getAvg(payload) {
  return async function (dispatch) {
    const avg = await axios.post("http://localhost:3000/ratings/avg", payload)

    return dispatch({
      type: "GET_AVG",
      payload: avg.data
    })
  }
}

export function postReview(payload) {
  return async function (dispatch) {
    const postReview = await axios.post("http://localhost:3000/ratings", payload)

    return dispatch({
      type: "POST_REVIEW",
      payload: postReview.data
    })
  }
}



