import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVolumes, setShoppingCart } from "../../redux/actions";

import NavBar from "../../components/navBar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import Sidebar from "../../components/sidebar/Sidebar";
import ComicCard from "../../components/card/Card";

import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import "./Home.css"

const Home = () => {
    const dispatch = useDispatch();
    let comics = useSelector((state) => state.comics);
    const [countProducts, setCountProducts] = useState(0)

    useEffect(() => {
        dispatch(setShoppingCart(countProducts))
        dispatch(getAllVolumes())
    }, [countProducts])


    let handleShopping = () => {
        setCountProducts(() => countProducts + 1)
    }


    return (
        <div className="home-container">
            <Row className="header">
                <NavBar searchbar={true} />
            </Row>
            <div className="wrapper">
                <main className="main">
                    <Row>
                        <Carrousel />
                    </Row>
                    <Row className="mt-5">
                        <Col md={2} className="container" >
                            <Sidebar />
                        </Col>
                        <Col md={9} className="container" >
                            {
                                comics.map(c => (
                                    <ComicCard key={c.id} data={c} />
                                ))
                            }
                        </Col>

                    </Row>

                    <Button variant="success" onClick={handleShopping}>Comprar</Button>
                    <Button className='ms-2' variant="danger" onClick={() => setCountProducts(0)}>reset</Button>
                </main>
                <div className="row">
                    <div className="col">
                        <footer className="footer">footer</footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;