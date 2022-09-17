import axios from "axios";

export function postReviews(payload) {
  return async function (dispatch) {
    const review = await axios.post("http://localhost:3000/ratings", payload)
    console.log(review)
  }
}