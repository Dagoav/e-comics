import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

// react-bootstrap
import Badge from 'react-bootstrap/Badge';

import "./ShoppingCart.css"

// Guardar el estado de la compra en local storage

const ShoppingCart = () => {
    const cart_shopping = useSelector((state) => state.cart_shopping.length);

    return (
        <>
            <Link to={"/shop"} style={{ textDecoration: 'none' }}>
                <div className='p-2 position-relative'>
                    <span className="material-symbols-outlined cart">
                        shopping_cart
                    </span>
                    {
                        cart_shopping > 0 && <Badge className='badge' bg="danger">{cart_shopping}</Badge>
                    }
                </div>
            </Link>
            {/* esto seria desde la card */}
            {/* <Button variant="success" onClick={handleShopping}>Comprar</Button>
            <Button className='ms-2' variant="danger" onClick={() => setCountProducts(0)}>reset</Button> */}
        </>
    )
}

export default ShoppingCart;