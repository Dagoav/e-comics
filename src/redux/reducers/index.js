
const initialState = {
  comics: [],
  comic: {},
  theme: "light"
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMICS":
      return {
        ...state,
        comics: action.payload
      }

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      }


    default: return state
  };
};

export default rootReducer;