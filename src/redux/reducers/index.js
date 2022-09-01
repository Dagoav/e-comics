
const initialState = {
  comics: [],
  comic: {},
  cart_shopping: 0,
  theme: "light"
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMICS":
      return {
        ...state,
        comics: action.payload
      }

    case "SET_SHOPPING_CART":
      return {
        ...state,
        cart_shopping: action.payload,
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