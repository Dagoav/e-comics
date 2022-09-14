import React from "react";

import NavBar from "../../components/navBar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import Sidebar from "../../components/sidebar/Sidebar";
import CardsGallery from "../../components/cards-gallery/CardsGallery";
import Footer from "../../components/footer/Footer";
import { useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Home.css"
import { useDispatch,useSelector } from "react-redux";
import { getAllVolumes,FilterForEpisodes,clear } from "../../redux/actions";
import Filters from "../../components/filter";

const Home = () => {
  const dispatch =useDispatch()
  const {comics}=useSelector(state =>state.comics)
  const isFilter = useSelector(state => state.isFilter)


  useEffect(() => {
    if(isFilter){}
     
    
    
}, [isFilter])




  return (
    <div className="home-container">


      <Row className="header">
        <NavBar searchbar={true} />
      </Row>
        <Filters/>
      <div className="wrapper">
        <div className="bkg-home"></div>
        <main className="main">
          <Row>
            <Carrousel />
          </Row>
          <Row className="mt-5">
            <Col md={2} className="container" >
              <Sidebar />
            </Col>
            <Col md={9} className="container" >
              <CardsGallery comics={comics}/>
            </Col>
          </Row>
        </main>
        <Footer />

      </div>
      
    
    </div>
  )
}

export default Home;

