// import dotenv from "dotenv"
// dotenv.config("../.env")

const backendURL = "http://127.0.0.1:3001";
// const backendURL = process.env.REACT_APP_API || "http://127.0.0.1:3001";

export const getAllComics = () => dispatch => {
    return fetch(`${backendURL}/comics`)
        .then(response => response.json())
        .then(comics => {
            dispatch({ type: "GET_ALL_COMICS", payload: comics })
        })
};

export const setShoppingCart = (products) => {
    return {
        type: "SET_SHOPPING_CART",
        payload: products
    }
}

export const setTheme = (theme) => {
    return {
        type: "SET_THEME",
        payload: theme
    }
}