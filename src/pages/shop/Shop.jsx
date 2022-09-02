import React from "react";

import NavBar from "../../components/navBar/Navbar";
import "./Shop.css"

const Shop = () => {
    return (
        <>
            <NavBar searchbar={true} />
            <div className="shop-container">Shop</div>
        </>
    )
}

export default Shop;