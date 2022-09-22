const initialState = {
  cart_shopping: [],
  favourite: [],
  purchases: []
};


const shop_fav_rating = (state = initialState, action) => {
  switch (action.type) {
 
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
        favourite: [...action.payload]
      }

    case "GET_PURCHASES":
      return{
        ...state,
        purchases: action.payload
      }
    default: return state
  };
};

export default shop_fav_rating;