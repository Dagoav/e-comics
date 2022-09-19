import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../../redux/actions";

import NavBar from "../../components/navBar/Navbar";
import "./Shop.css"
import { Link } from "react-router-dom";

const Shop = () => {

  const cart_shopping = useSelector(state => state.cart_shopping)
  console.log(cart_shopping, "cart shopping en redux")

  const dispatch = useDispatch()

  const removeProduct = (issue) => {
    var confirm = window.confirm(`¿Eliminar ${issue.name || 'esta issue'} del Carrito?`)
    if(confirm) {
      let carrito = cart_shopping.filter(c => c.id !== issue.id)
      if(carrito.length === 0) {
        localStorage.removeItem("carrito")
      } else{
        localStorage.setItem("carrito", JSON.stringify(carrito))
      } 
      dispatch(removeFromCart(issue))
    }
  }

  console.log(JSON.parse(localStorage.getItem("carrito")), "CARRITO LOCAL STORAGE")

  const removeAll = () => {
    var confirm = window.confirm(`¿Vaciar Carrito de Compras?`)
    if(confirm) {
      localStorage.removeItem("carrito")
      cart_shopping.map(p => dispatch(removeFromCart(p)))
    }
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
              <Link to='/user/shop/checkout'>
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