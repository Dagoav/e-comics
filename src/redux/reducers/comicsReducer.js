const initialState = {
  comics: [],
  issues: [],
  comic: {},
  comicsFilter: [],
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
        isFilter:action.filter,
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



       ///-------------Filtros
      case "FILTER_COMIC_FOR_PUBLISHERS":
        const allG = state.comicsFilter
        console.log("holaaaaaaaaaa",allG)

          const filterByP = allG.filter(c =>{
            if(!c.publisher) return undefined
            return c.publisher.includes(action.payload)
          })
    

        // const filterByP = allG.filter(c => c.publisher === action.payload)
        // const statusFiltered = action.payload === "All" ? allG : filterByP

        return {
            ...state,
          comics:filterByP
          }

          case "FILTER_A_D":
            const allComic = state.comicsFilter
          
              let  sortedArray= action.payload === "asc" ?
              allComic.sort( function (a,b){
                if(a.name > b.name ){
                    return 1;
                }
                if(b.name > a.name ){
                    return -1;
                }
                return 0;
              }):
              allComic.sort(function (a,b){
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
              comicsFilter:sortedArray

              }

              case "FILTER_FOR_RELEASE":
                const  allComic2= state.comicsFilter
                // all[Countries2.sort(function (num1 = 1, num2= 2){
                  const  createdFilter = action.payload ==="release next 50`s" ? allComic2.filter(v=>v.release     >=  "1950-01-01"):allComic2.filter(v => v.release <= "1943-01-01")
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

export default comicsReducer;