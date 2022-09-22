import React, { useEffect } from 'react'
import { removeFavorite, addToCart, getAllfavoritesDb} from '../../redux/actions/shop_favs_rating'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from "../../components/navBar/Navbar";
import "./Favorites.css"

export default function Favorites(comic) {
    
    const cart = useSelector((state) => state.shop_fav_rating.cart_shopping)
    const dispatch = useDispatch()
    const favourite = useSelector((state) => state.shop_fav_rating.favourite)
        console.log(favourite)
    
    const userId = JSON.parse(localStorage.getItem("id"))

    useEffect(() => {
      dispatch(getAllfavoritesDb(userId))
    }, [dispatch, userId])

    
    const removeHandler = (comic) => {
        dispatch(removeFavorite(comic.id, userId)) 
        dispatch(getAllfavoritesDb(userId))
        // console.log(comic)
    }
    const buyHandler = (comic) => {
        dispatch(addToCart(comic, cart)) 
    }

    return (
    <div className='test'>
    <NavBar searchbar={true} />
            <div className="shop-container"></div>
    <h1>MY FAVOURITES</h1>
        {
            favourite.map((comics, i) => {
                return (
                    <div className='center' key={i} > 
                    <h1 >{comics.name }</h1>
                        <img src= {comics.image} width="200px" height="140px" alt=""/> 
                        <h4   >volume: {comics.volume_id}</h4>
                        <h4>issues: {comics.issue_number}</h4>
                        <h4>price: {(comics.price).toFixed(2)}</h4> 
                    <button onClick={() => removeHandler(comics)}>❌</button> 
                    <p>
                    <button onClick={e => buyHandler(comics)}>🛒</button> 
                    </p>
                </div> 
                
                )
            }) 
        }
        <Link to='/home'>
            <button>Volver⬅️</button>
        </Link> 
    </div>
    )
}


