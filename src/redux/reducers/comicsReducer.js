const initialState = {
  comics: [],
  issues: [],
  comic: {},
  comicsFilter: [],
  loading: true,
  loading_issues: true,
};


const comicsReducer = (state = initialState, action) => {
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
        loading_issues: false
      }

    case "GET_COMIC":
      return {
        ...state,
        comic: action.payload
      }

    case "SEARCH_COMICS":
      return {
        ...state,
        comics: action.payload,
        loading: false
      }

    case "RESET_STATE":
      return {
        ...state,
        comic: {},
        issues: []
      }

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
        loading_issues: action.payload
      }

    default: return state
  };
};

export default comicsReducer;