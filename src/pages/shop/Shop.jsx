import React from "react";
import Navbar2 from "../../components/navBar/Navbar2";
import "./Shop.css"

const Shop = () => {
    return (
        <>
            <Navbar2 searchbar={false} />
            <div className="shop-container">Shop</div>
        </>
    )
}

export default Shop;