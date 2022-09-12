import { AuthenticationError } from "@auth0/auth0-spa-js";

const initialState = {
  comics: [],
  comicEpisodes:[],
  comic: [],
  cart_shopping: 0,
  characters: [],
  publishers: [],
  concepts: [],
  comicsFilter: [],
  currentPage : 1,
  isFilter:true,
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
        isFilter:action.payload,
        comics: action.payload,
        comicsFilter: action.payload,
        comicEpisodes: action.payload
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
              return{
                ...state,
                publishers:action.payload
              }

    case "FILTER_COMIC_FOR_PUBLISHER":
      const allComic = state.comicsFilter
            const filterByPublishers = allComic.filter(c => c.publisher === action.payload)

      return {
        ...state,
        comics: filterByPublishers
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
      case "SET_PAGE":
                  return {
                    ...state,
                   currentPage: action.payload
                  }
                  case "CLEAR":
                    return{
                      ...state,
                      Comic:[]
                    }



                    case "FILTER_COMIC_FOR_AD":
                      const allComic2 = state.comicsFilter
                        let  sortedArray= action.payload === "asc" ?
                        allComic2.sort( function (a,b){
      
                          if(a.name > b.name ){
                              return 1;
                          }
                          if(b.name > a.name ){
                              return -1;
                          }
                          return 0;
                        }):
      
                        allComic2.sort(function (a,b){
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


                        case "FILTER_FOR_EPISODES":

                      const allGames3= state.comicEpisodes

                      let  sortedArray2 = action.payload === "episodesdown" ?

                      allGames3.sort( function (num1 = 1,num2 = 2){

                    if(num1.episodes > num2.episodes){
                        return 1;
                    }
                    if(num2.episodes > num1.episodes ){
                        return -1;
                    }
                    return 0;
                  }):

                  allGames3.sort(function (num1=1,num2=2){
                    if(num1.episodes > num2.episodes ){
                        return -1;
                    }
                    if(num2.episodes > num1.episodes ){
                        return 1;
                    }
                    return 0;
                  })
                  return{
                    ...state,
                  comicEpisodes:sortedArray2
}



case  "FILTER_CREATED": 
const  allComic4= state.comics
const  createdFilter = action.payload ==="man" ? allComic4.filter(v=>v.gender === "man"):allComic4.filter(v => !v.gender === " woman")

return {
    ...state,
    comics:createdFilter
} 











    default: return state
  };
};

export default rootReducer;