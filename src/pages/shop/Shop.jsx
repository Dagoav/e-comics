import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";

import NavBar from "../../components/navBar/Navbar";
import "./Shop.css"
import { Link } from "react-router-dom";

const Shop = () => {

  const cart_shopping = useSelector(state => state.cart_shopping)

  const dispatch = useDispatch()

  const removeProduct = (issue) => {
    dispatch(removeFromCart(issue))
  }

  const removeAll = () => {
    cart_shopping.map(p => removeProduct(p))
  }
  const rol = JSON.stringify(localStorage.getItem("ROL"))
  let totalPrice = 0;
  return (
    <>
      <NavBar searchbar={false} />
      <div className="shop-container">
        <ListGroup className="product-list">
          {
            cart_shopping.map(product => {
              totalPrice += product.price
              return (
                <div key={product.id} className="product-container">
                  <img src={product.image} alt={product.name} width='100px' />
                  <div>${Number(product.price).toFixed(2)}</div>
                  <button onClick={() => removeProduct(product)}>QUITAR</button>
                </div>
              )
            })
          }
        </ListGroup>
        {
          totalPrice > 0 ?
            <div className="checkout-box">
              PRECIO TOTAL: ${Number(totalPrice).toFixed(2)}
              <button onClick={removeAll}>Vaciar Carrito</button>
              <Link to='/user/checkout'>
              {/* <Link to= {rol === "USER" ? '/user/checkout' : '/admin/dashboard' }> */}
              <button>COMPRAR</button></Link>
            </div>
            : <div>No hay productos</div>
        }
      </div>
    </>
  )
}

export default Shop;