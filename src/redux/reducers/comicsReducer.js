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
        isFilter:action.payload,
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

             
    default: return state
  };
};

export default comicsReducer;