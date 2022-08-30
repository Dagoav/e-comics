import React from "react";
import Carrousel2 from "../components/carrousel/Carrousel2";
import Navbar2 from "../components/navBar/Navbar2";
// import Navbar from "../components/navBar/Navbar2";
import "./Home.css"

const Home = () => {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col">
                    <Navbar2 theme="dark" />
                </div>
            </div>
            <div className="row">
                <main>
                    <Carrousel2 />
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