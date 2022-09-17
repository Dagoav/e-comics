const initialState = {
  characters: [],
  publishers: [],
  
  isFilter: true,
  currentPage: 1,
  comicsFilter: [],
};


const filters = (state = initialState, action) => {
  switch (action.type) {

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
      case 'SET_PAGE': {
        return {
            ...state,
            currentPage: action.payload
        }
    }


     

    default: return state
  };
};

export default filters;