import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, addFavorite, addToCart, removeFromCart } from "../../redux/actions";
// import Favorites from "../../pages/favorites/Favorites";

import { Col, Row } from 'react-bootstrap'

import "./ShoppingBar.css"

const ShoppingBar = ({ price, comic }) => {
  const favourite = useSelector((state) => state.favourite)
  const dispatch = useDispatch();
  //const cart_shopping = useSelector((state) => state.cart_shopping);
  const cart = useSelector(state => state.cart_shopping)
  const idUsuer = JSON.parse(localStorage.getItem("id"))
  
  /* ----------- Revisar si el comic ya está comprado ------- */
  
  const [countProducts, setCountProducts] = useState(cart.length);
  
  const [comprado, setComprado] = useState(
    cart.some(p => p.id === comic.id)
  )

  /* ----------- Botones agregar y quitar ------- */

  const addProducts = () => {
    setCountProducts(() => countProducts + 1);
    console.log("aaaaaaa")
    
    let carrito

    if((!localStorage.getItem('carrito'))){
      carrito = []
      carrito.push(comic)
      dispatch(addToCart(comic))
      setComprado(true)
    } else  {
      carrito = [...JSON.parse(localStorage.getItem('carrito'))]
      const inCart = carrito.some(c => c.id === comic.id)
      if(!inCart){
        carrito = [...carrito, comic]
        dispatch(addToCart(comic))
        setComprado(true)
      }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  const removeProducts = () => {
    console.log("boton borrar")
    setCountProducts(() => countProducts - 1)
    dispatch(removeFromCart(comic))
    console.log("dispatch")

    let carrito = [...JSON.parse(localStorage.getItem('carrito'))]
    carrito = carrito.filter(c => c.id !== comic.id)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    setComprado(false)
  }

  /* ---------------------------------------------------------- */

  const addFavhandler = async() => {
    dispatch(addFavorite(comic.id, idUsuer))
  }

  const remuveFavhandler = (e) => {
    e.preventDefault()
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
          <button className="remove-shopping-icon" onClick={removeProducts}>
            <span className="material-symbols-outlined danger">
              remove_shopping_cart
            </span>
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