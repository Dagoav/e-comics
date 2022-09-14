import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, addFavorite, addToCart, removeFromCart } from "../../redux/actions";
// import Favorites from "../../pages/favorites/Favorites";

import { Col, Row } from 'react-bootstrap'

import "./ShoppingBar.css"

const ShoppingBar = ({ price, comic }) => {
  const favourite = useSelector((state) => state.favourite)
  const dispatch = useDispatch();
  const cart_shopping = useSelector((state) => state.cart_shopping);
  const [countProducts, setCountProducts] = useState(cart_shopping.length);
  const [comprado, setComprado] = useState(
    cart_shopping.some( c => c.id === comic.id)
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

  const addFavhandler = async() => {
    // e.preventDefault()
    dispatch(addFavorite(comic.id, idUsuer))
    console.log(idUsuer, "id usuario 47")
  }

  const remuveFavhandler = (e) => {
    e.preventDefault()
    dispatch(removeFavorite(comic, ))
    // console.log(comic, "cuando elimina")
  }
  const rol = JSON.parse(localStorage.getItem("ROL"))
  return (                                                                  
    <div className="shopping-container">
      <Row>
        {favourite ?
        <Col md={1} >
          {
          rol==="USER"?
          <button className="fav-icon" onClick={addFavhandler}>
            <span className="material-symbols-outlined">
              heart_plus
            </span>
          </button> :
          null
          }
        </Col>
        :
          <button onClick={remuveFavhandler}>
            remuve_Fav
          </button>
        }

        {
          !comprado ?
          <Col md={1}  >
            { rol === "USER"?
            <button className="shopping-icon" onClick={addProducts}>
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
            </button>:
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