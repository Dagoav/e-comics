const initialState = {
  comics: [],
  comic: {},
  cart_shopping: 0,
  characters: [],
  publishers: [],
  concepts: [],
  comicsFilter: [],
  theme_params: {
    theme: "light",
    state: false
  },
  favourite: []
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

    case "RESET_COMIC":
      return {
        ...state,
        comic: {}
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
      case 'ADD_FAVORITE':     
      console.log(action.payload, "hola reducers")            
      return{
          ...state,
          favourite: action.payload
          //Fouvorites: [...state.favourite, action.payload ]   
      }
  
      case 'REMUVE_FAVORITE':                
      return{
          ...state,
          // favourites: state.favourite.filter(movie => movie.id !== action.payload) 
          favourite: state.favourite.filter(e => e.id !== action.payload) 
      }

    default: return state
  };
};

export default rootReducer;