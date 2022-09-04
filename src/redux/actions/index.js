// import dotenv from "dotenv"
// dotenv.config("../.env")
import axios from "axios";

const backendURL = "http://127.0.0.1:8000";
// const apiURL = "https://comicvine.gamespot.com/api";
// const apiKey = "d1d5b2c8d71b25f222e620d4541b6ac672a05156"

// const backendURL = process.env.REACT_APP_API || "http://127.0.0.1:3001";


export const getAllVolumes = () => {
    return async (dispatch) => {
        const volumes = await axios({
            method: 'get',
            url: `${backendURL}/comics`,
        })
        return dispatch({
            type: "GET_ALL_COMICS",
            payload: volumes.data
        })
    }
}

export const volumeDetail = (path) => {
    return async (dispatch) => {
        const volume = await axios({
            method: 'post',
            url: `${backendURL}/path-detail`,
            data: {
                path
            }
        })

        return dispatch({
            type: "GET_COMIC",
            payload: volume.data
        })
    }
}

export const issueDetail = (path) => {
    return async (dispatch) => {
        const issue = await axios({
            method: 'post',
            url: `${backendURL}/path-detail`,
            data: {
                path
            }
        })

        return dispatch({
            type: "GET_ISSUE",
            payload: issue.data
        })
    }
}

export const searchComic = (volume_name) => {
    return async (dispatch) => {
        const comic = await axios({
            method: 'post',
            url: `${backendURL}/search`,
            data: {
                volume_name
            }
        })
        return dispatch({
            type: "SEARCH_COMICS",
            payload: comic.data
        })
    }
}

export const setShoppingCart = (products) => {
    return {
        type: "SET_SHOPPING_CART",
        payload: products
    }
}

export const setTheme = (obj) => {
    return {
        type: "SET_THEME",
        payload: obj
    }
}