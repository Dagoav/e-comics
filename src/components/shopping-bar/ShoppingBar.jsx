import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart, addFavorite } from "../../redux/actions";

import { Col, Row } from 'react-bootstrap'

import "./ShoppingBar.css"



const ShoppingBar = ({ price, comic }) => {
  const dispatch = useDispatch();
  const cart_shopping = useSelector((state) => state.cart_shopping);
  const [countProducts, setCountProducts] = useState(cart_shopping);


  useEffect(() => {
    dispatch(setShoppingCart(countProducts))
  }, [countProducts, dispatch])


  let addProducts = () => {
    setCountProducts(() => countProducts + 1)
  }


  const addFavhandler = (e) => {
    e.preventDefault()
    dispatch(addFavorite(comic))
  }

  return (                                                                      //line 51
    <div className="shopping-container">
      <Row>
        <Col md={1} >
          <button className="fav-icon" onClick={addFavhandler}>
            <span className="material-symbols-outlined">
              heart_plus
            </span>
          </button>
        </Col>
        <Col md={1}  >
          <button className="shopping-icon" onClick={addProducts}>
            <span className="material-symbols-outlined">
              add_shopping_cart
            </span>
          </button>
        </Col>

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