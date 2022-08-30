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
<<<<<<< HEAD
                <main>main
                    <Carrousel />
=======
                <main>
                    <Carrousel2 />
>>>>>>> 9a35f36d04037c429501bbcf0cd7754eeb5dd36c
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