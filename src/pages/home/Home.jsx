import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart } from "../../redux/actions";
import Carrousel2 from "../../components/carrousel/Carrousel2";
import Sidebar from "../../components/sidebar/Sidebar";
import ComicCard from "../../components/card/Card";

import Button from 'react-bootstrap/Button';

import "./Home.css"

const Home = () => {
    const dispatch = useDispatch();
    let comics = useSelector((state) => state.comics);
    const [countProducts, setCountProducts] = useState(0)

    useEffect(() => {
        dispatch(setShoppingCart(countProducts))
    }, [countProducts])


    let handleShopping = () => {
        setCountProducts(() => countProducts + 1)
    }


    return (
        <div className="wrapper">
            <div className="row">
            </div>
            <div className="row">
                <main className="main">
                    <Carrousel2 />
                    {
                        comics.map(c => (
                            <ComicCard key={c.id} data={c} />
                        ))
                    }
                    <Sidebar />
                    <Button variant="success" onClick={handleShopping}>Comprar</Button>
                    <Button className='ms-2' variant="danger" onClick={() => setCountProducts(0)}>reset</Button>
                </main>
            </div>
            <div className="row">
                <div className="col">
                    <footer className="footer">footer</footer>
                </div>
            </div>
        </div>
    )
}

export default Home;