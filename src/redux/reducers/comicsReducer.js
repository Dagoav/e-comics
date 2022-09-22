const initialState = {
  comics: [],
  comics_filter: [],
  issues: [],
  comic: {},
  issues_sorting: [],
  filters: false,
  loading: true,
  loading_issues: true,
  characters: [],
    publishers: [],
    
    isFilter: true,
    currentPage: 1,
    
};


const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMICS":
      return {
        ...state,
        comics: action.payload,
        comics_filter: action.payload,
        loading: false
      }

    case "GET_ISSUES":
      return {
        ...state,
        issues: action.payload,
        loading_issues: false,
        issues_sorting: action.payload
      }

    case "GET_COMIC":
      return {
        ...state,
        comic: action.payload
      }

    case "SEARCH_COMICS":
      return {
        ...state,
        comics_filter: action.payload,
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

    case "SORT_ISSUES":
      return{
        ...state,
        issues_sorting: action.payload
      }

    ///-------------Filtros
    case "FILTER_COMIC_FOR_PUBLISHERS":
      return{
        ...state,
        comics_filter: action.payload
      }

    case "ORDER_NAME":
      // console.log(state.comics_filter, "soy 70")
      // console.log(action.payload)
      return {
        ...state,
        comics_filter: [...action.payload]
      }

    case "FILTER_FOR_RELEASE":
      const filterR = state.comics_filter
      const filterRelease = action.payload === "1990"
      console.log(filterR)
      // comics.filter(v => v.release) : filterR.filter(v => v.release !== "1943-01-01")
  
      return {
        ...state,
        comics: filterRelease
      }


    default: return state
  };
};

export default comicsReducer;