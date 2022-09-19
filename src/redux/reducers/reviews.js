const initialState = {
  reviews: [],
  avg: [],
};


const reviews = (state = initialState, action) => {
  switch (action.type) {

    case "GET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      }

    case "GET_AVG":
      return {
        ...state,
        avg: action.payload,
      }

    case "POST_REVIEW":
      return {
        ...state,
      }

    default: return state
  };


};

export default reviews;