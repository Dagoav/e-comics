const initialState = {
  reviews: [],
};


const reviews = (state = initialState, action) => {
  switch (action.type) {

    case "GET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      }

    case "POST_REVIEW":
      return {
        ...state,
      }

    default: return state
  };


};

export default reviews;