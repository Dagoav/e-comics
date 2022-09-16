


const initialState = {
  comics: [],
  issues: [],
  comic: {},
  comic_info: {},
  cart_shopping: [],
  favourite: [],
  users: [],
  characters: [],
  publishers: [],
  concepts: [],
  comicsFilter: [],
  loading: true,
  isFilter: true,
  currentPage: 1,
  theme_params: {
    theme: "light",
    state: false
  },
  datauser: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMICS":
      return {
        ...state,
        isFilter:action.payload,
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

    case "POST_COMIC":
      return {
        ...state,
        comic_info: action.payload
      }

    case "RESET_STATE":
      return {
        ...state,
        comic: {},
        issues: []
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
        cart_shopping: state.cart_shopping.filter(c => c.id !== action.payload.id)
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
              return{
                ...state,
                publishers:action.payload
              }


              case "FILTER_COMIS_FOR_PUBLISHERS":
                const allG = state.comicsFilter

                const filterByP = allG.filter(c => c.publisher?.find(c => c === action.payload) || c.publisher?.find(c=> c.name === action.payload))
                const statusFiltered = action.payload === "All" ? allG : filterByP

                return {
                    ...state,
                  comics:statusFiltered
                  }

                  case "FILTER_A_D":
                    const allGames2 = state.comicsFilter
                      let  sortedArray= action.payload === "asc" ?
                      allGames2.sort( function (a,b){
                        if(a.name > b.name ){
                            return 1;
                        }
                        if(b.name > a.name ){
                            return -1;
                        }
                        return 0;
                      }):
                      allGames2.sort(function (a,b){
                        if(a.name > b.name ){
                            return -1;
                        }
                        if(b.name > a.name ){
                            return 1;
                        }
                        return 0;
                      })
                      return{
                        ...state,
                      comics:sortedArray

                      }

                      case "FILTER_FOR_RELEASE":
                        const  allGames4= state.comicsFilter
                        // all[Countries2.sort(function (num1 = 1, num2= 2){
                          const  createdFilter = action.payload ==="release next 50`s" ? allGames4.filter(v=>v.release     >=  "1950-01-01"):allGames4.filter(v => v.release <= "1943-01-01")
                        //     if(num1.release > num2.release){
                        //         return -1;
                        //     }
                        //     if(num2.release > num1.release){
                        //         return 1;
                        //     }
                        //     return 0;
                        // })
                        return {
                            ...state,
                            comics:createdFilter
                        }




    case "GET_USERS":
      return {
        ...state,
        users: action.payload
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



      case 'SET_PAGE': {
        return {
            ...state,
            currentPage: action.payload
        }
    }
case "CLEAR": {
return {
    ...state,
    comic: {}
}
}








    default: return state
  };
};

export default rootReducer;