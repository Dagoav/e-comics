import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../../components/navBar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import Sidebars from "../../components/sidebar/Sidebar";
import CardsGallery from "../../components/cards-gallery/CardsGallery";
import Footer from "../../components/footer/Footer";
import { Col, Row } from "react-bootstrap";
import "./Home.css"
import { getAllVolumes,clear } from "../../redux/actions/comics";



const Home = () => {
  const dispatch = useDispatch()
  
  const isFilter = useSelector(state => state.comicsReducer.isFilter)

  useEffect(() => {
    if (isFilter) {
        dispatch(getAllVolumes())
       

    }
}, [dispatch])

  return (
    <div className="home-container">
      <Row className="header">
        <NavBar searchbar={true} />
      </Row>

      <div className="wrapper">
        <div className="bkg-home"></div>
        <main className="main">
          <Row>
            <Carrousel />

            <Sidebars />
          </Row>
          <Row className="mt-5">
            <Col md={9} className="container" >
              <CardsGallery />
            </Col>
          </Row>

        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home;

