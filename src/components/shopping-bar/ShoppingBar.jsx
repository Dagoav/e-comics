import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, addFavorite, addToCart, removeFromCart } from "../../redux/actions/shop_favs_rating";
// import Favorites from "../../pages/favorites/Favorites";

import { Col, Row } from 'react-bootstrap'

import "./ShoppingBar.css"

const ShoppingBar = ({ price, comic }) => {
  const favourite = useSelector((state) => state.shop_fav_rating.favourite)
  const dispatch = useDispatch();
  const cart_shopping = useSelector((state) => state.shop_fav_rating.cart_shopping);
  const [countProducts, setCountProducts] = useState(cart_shopping.length);
  const [comprado, setComprado] = useState(
    cart_shopping.some(c => c.id === comic.id)
  )

  const idUsuer = JSON.parse(localStorage.getItem("id"))

  let addProducts = () => {
    dispatch(addToCart(comic, cart_shopping))   // axios.post(al carrito)
    setCountProducts(() => countProducts + 1)
    setComprado(true)
  }

  let removeProducts = () => {
    dispatch(removeFromCart(comic))
    setCountProducts(() => countProducts - 1)
    setComprado(false)
  }

  const addFavhandler = async () => {
    // e.preventDefault()
    dispatch(addFavorite(comic.id, idUsuer))
    // console.log(comic.id, "id usuario 47")
  }

  const remuveFavhandler = (e) => {
    e.preventDefault()
    dispatch(removeFavorite(comic.id,))
    // console.log(comic.id, "cuando elimina")
  }
  const rol = JSON.parse(localStorage.getItem("ROL"))
  return (
    <div className="shopping-container">
      <Row>
        {favourite ?
          <Col md={1} >
            {
              rol === "USER" ?
                <button  className="fav-icon" style={ favourite ? {backgroundColor:"red", color:"white", border:"white"} : {backgroundColor:"transparent"}} onClick={addFavhandler}>      
                  <span className="material-symbols-outlined">
                    heart_plus
                  </span>
                </button> :
                null
            }
          </Col>
          :
          <button  className="fav-icon" onClick={remuveFavhandler}>
            remuve_Fav
          </button>
        }

        {
          !comprado ?
            <Col md={1}  >
              {rol === "USER" ?
                <button className="shopping-icon" onClick={addProducts}>
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button> :
                null
              }

            </Col>
            :
            /* DANI NO SÉ DE BOOTSTRAP PERDÓN :( */

            <button onClick={removeProducts}>
              QUITAR DE CARRITO
            </button>
        }

        <Col >
          <span className="shopping-price">
            ${Number(price).toFixed(2)}
          </span>
        </Col>
      </Row>
    </div>
  )
}

export default ShoppingBar;