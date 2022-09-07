import React  from 'react'
import { useEffect } from "react"
import {addFavorite, removeFavorite} from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function Favorites() {
    
    const dispatch = useDispatch()
    const favourite = useSelector((state) => state.favourite)
        // console.log(favourite, "hola fav desde componente ")

    // useEffect(() => {
    //     dispatch(addFavorite())
    // }, [dispatch])

    const removeHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(removeFavorite()) 
    }
    const buyHandler = (e) => {
        e.preventDefault()
        dispatch()
        
    }



    return (
    <div>
    <h1>FAVOURITES</h1>
    {/* <button onClick={e => addHandler(e)}>Add</button> 
     */}
        {
            favourite  ? 
            <div> 
                    <h1>{favourite.name }</h1>
                    <img src= {favourite.image} width="600px" height="340px" alt=""/> 
                    {/* <h4>Description: {favourite?.description}</h4> */}
                    <h4>Rating: {favourite.rating}</h4>
                    <h4>issues</h4>
         </div>: <p>Loading...</p>
        }
            <p>
            <button onClick={e => removeHandler(e)}>❌</button> 
            <button onClick={e => buyHandler(e)}>🛒</button> 
            </p>
        
        <Link to='/home'>
            <button>Volver⬅️</button>
        </Link> 
    </div>
    )


}
