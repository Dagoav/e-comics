
const initialState = {
  comics: [],
  comic: {},
  issue: {},
  cart_shopping: 0,
  theme: "light",
  characters: [],
  publishers: [],
  concepts: [],
  comicsFilter: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMICS":
      return {
        ...state,
        comics: action.payload,
        comicsFilter: action.payload
      }
    case "GET_COMIC":
      return {
        ...state,
        comic: action.payload
      }
    case "GET_ISSUE":
      return {
        ...state,
        issue: action.payload
      }

    case "SEARCH_COMICS":
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

    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload
      }

    case "GET_PUBLISHERS":
      return {
        ...state,
        publishers: action.payload
      }

    case "GET_CONCEPTS":
      return {
        ...state,
        concepts: action.payload
      }

    default: return state
  };
};

export default rootReducer;