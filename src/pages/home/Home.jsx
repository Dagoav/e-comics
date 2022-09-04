import React from "react";

import NavBar from "../../components/navBar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import Sidebar from "../../components/sidebar/Sidebar";
import CardsGallery from "../../components/cards-gallery/CardsGallery";

import { Col, Row } from "react-bootstrap";
import "./Home.css"

const Home = () => {
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
              <CardsGallery />
            </Col>

          </Row>
        </main>
        <Row>
          <Col>
            <footer className="footer">footer</footer>
          </Col>
        </Row>
      </div>
    </div >
  )
}

export default Home;