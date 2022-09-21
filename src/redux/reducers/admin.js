const initialState = {
  users: [],
  reviews: [],
  delete_reviews: false,
  comic_info: {},
};


const admin = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      }

    case "GET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
        delete_review: false
      }


    case "DELETE_REVIEW":
      return {
        ...state,
        delete_review: true
      }


    case "POST_COMIC":
      return {
        ...state,
        comic_info: action.payload
      }


    default: return state
  };
};

export default admin;