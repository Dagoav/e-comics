import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShoppingCart } from "../../redux/actions";

import "./ShoppingBar.css"

const ShoppingBar = ({ price }) => {
  const dispatch = useDispatch();
  const theme_params = useSelector((state) => state.theme_params);
  const cart_shopping = useSelector((state) => state.cart_shopping);
  const [countProducts, setCountProducts] = useState(cart_shopping);
  const [addProduct, setAddProduct] = useState(false);



  useEffect(() => {
    let containerShop = document.getElementById("shopping-container");
    let theme = theme_params.theme === "light" ? "shopping-container-light" : "shopping-container-dark";
    containerShop.className = theme;
  }, [theme_params])

  useEffect(() => {
    dispatch(setShoppingCart(countProducts))
  }, [countProducts, dispatch])


  let addProducts = () => {
    setCountProducts(() => countProducts + 1)
    setAddProduct(true)
  }


  let removeProducts = () => {
    setCountProducts(() => countProducts - 1)
    setAddProduct(false)
  }


  return (
    <div id="shopping-container">
      <Col md={2} className="d-flex justify-content-start align-items-center">
        <button className="shopping-icon">
          <span className="pt-1 material-symbols-outlined">
            heart_plus
          </span>
        </button>
      </Col>
      <Col md={6} className="d-flex justify-content-end align-items-center">
        {
          !addProduct ? (
            <button className="shopping-icon mx-4" onClick={addProducts}>
              <span className="pt-1 material-symbols-outlined shopping-add">
                add_shopping_cart
              </span>
            </button>
          ) :
            (
              <button className="shopping-icon mx-4" onClick={removeProducts}>
                <span className="pt-1 material-symbols-outlined shopping-remove">
                  remove_shopping_cart
                </span>
              </button>
            )
        }

        <div className="shopping-price mx-4">
          ${Number(price).toFixed(2)}
        </div>

        <Link to={"/shop"}>
          <Button variant="danger">Comprar!</Button>
        </Link>

      </Col>
    </div>
  )
}

export default ShoppingBar;