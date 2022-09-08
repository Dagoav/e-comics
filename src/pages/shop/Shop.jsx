import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";

import NavBar from "../../components/navBar/Navbar";
import "./Shop.css"

const Shop = () => {

    const cart_shopping = useSelector(state => state.cart_shopping)

    const dispatch = useDispatch()

    const removeProduct = (issue) => {
        dispatch(removeFromCart(issue))
    }

    let totalPrice = 0;
    return (
        <>
            <NavBar searchbar={true} />
            <div className="shop-container">
                <ListGroup>
                    {
                        cart_shopping.map( product =>{ 
                            totalPrice += product.price
                            return(
                                <div key={product.id}>
                                    <img src={product.image} alt={product.name} width='100px'/>
                                    <div>${Number(product.price).toFixed(2)}</div>
                                    <button onClick={() => removeProduct(product)}>QUITAR</button>
                                </div>
                            )
                        })
                    }
                </ListGroup>
                {
                    totalPrice > 0 ?
                    <div>PRECIO TOTAL: ${Number(totalPrice).toFixed(2)}</div>
                    : <div>No hay productos</div>
                }
            </div>
        </>
    )
}

export default Shop;