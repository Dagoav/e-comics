
const initialState = {
  comics: [],
  issues: [],
  comic: {},
  cart_shopping: [],
  favourite: [],
  characters: [],
  publishers: [],
  concepts: [],
  comicsFilter: [],
  loading: true,
  theme_params: {
    theme: "light",
    state: false
  },
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMICS":
      return {
        ...state,
        comics: action.payload,
        comicsFilter: action.payload,
        loading: false
      }

    case "GET_ISSUES":
      return {
        ...state,
        issues: action.payload,
      }

    case "GET_COMIC":
      return {
        ...state,
        comic: action.payload
      }

    case "RESET_COMIC":
      return {
        ...state,
        comic: {}
      }

    case "SEARCH_COMICS":
      return {
        ...state,
        comics: action.payload,
        loading: false
      }

    case "SET_SHOPPING_CART":
      return {
        ...state,
        cart_shopping: action.payload,
      }
    
    case "ADD_TO_CART":
      return {
        ...state,
        cart_shopping: [...state.cart_shopping, action.payload]
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart_shopping: state.cart_shopping.filter( c => c.id !== action.payload.id)
      }

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      }

    case "SET_THEME":
      return {
        ...state,
        theme_params: action.payload,
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
    case "ADD_FAVORITE":
      return {
        ...state,
        favourite: [...state.favourite, action.payload]  
      }
    case "REMUVE_FAVORITE":
      return {
        ...state,
        favourite: state.favourite.filter(e => e.id !== action.payload.id)
      }
      case "GET_FAVORITE":
        return {
          ...state, 
          favourite: [...state.favourite, action.payload]
        }

    default: return state
  };
};

export default rootReducer;