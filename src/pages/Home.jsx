import React from "react";
import Carrousel from "../components/carrousel/Carrousel";
import Navbar from "../components/navBar/Navbar";
import "./Home.css"

const Home = () => {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col">
                    <Navbar />
                    <header>header</header>
                </div>
            </div>
            <div className="row">
                <main>main
                    <Carrousel />
                </main>
            </div>
            <div className="row">
                <div className="col">
                    <footer>footer</footer>
                </div>
            </div>
        </div>
    )
}

export default Home;