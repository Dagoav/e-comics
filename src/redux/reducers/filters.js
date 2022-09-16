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


      ///-------------Filtros
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

    default: return state
  };
};

export default filters;