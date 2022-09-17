import axios from "axios";

const backendURL = process.env.REACT_APP_API;


export const setShoppingCart = (products) => {
  return {
    type: "SET_SHOPPING_CART",
    payload: products
  }
}

export const addToCart = (products, shopping_cart) => {
  // Verifica que el producto no esté en el carrito para no agregarlo de nuevo
  const inCart = shopping_cart.some(p => p.id === products.id)
  if (!inCart) {
    return {
      type: "ADD_TO_CART",
      payload: products,
    }
  } else {
    return {
      type: "NADA", //devuelve el estado, sino Redux llora
    }
  }
}

export const removeFromCart = (products) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: products,
  }
}


export function addFavorite(issuesId, userId) {
    // const token = JSON.parse(localStorage.getItem("token"))
    console.log(userId, "id usuario")
      return async (dispatch) => {
        await axios({                  
          method: 'POST',
          url: `${backendURL}/fav`,
          data: {issuesId, userId}
          // headers: {
          // "Authorization": `Bearer ${token.token}`
          // }
      })
      }
    }


export function removeFavorite(issuesId, userId) {
  // const token = JSON.parse(localStorage.getItem("token"))
    return async (dispatch) => {
      await axios({ 
        method: 'DELETE',
        url: `${backendURL}/fav`,
        data: {issuesId, userId}
      // headers: {
      // "Authorization": `Bearer ${token.token}`
      // }
    })
  }
}


export const getAllfavoritesDb = (userId) => {
  // const token = JSON.parse(localStorage.getItem("token"))
  return async (dispatch) => {
    const favorites = await axios({
      method: 'GET',
      url: `${backendURL}/fav/${userId}`,
      // const res = await axios.get('http://localhost:3000/fav', { params: { userId: userId } });
      // headers: {
      // "Authorization": `Bearer ${token.token}`
      // }
    })
    return dispatch({
      type: "GET_FAVORITE",
      payload: favorites.data[0].issues    //.data[0].issues,

    })
  }
}
