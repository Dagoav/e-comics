import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVolumes, setShoppingCart } from "../../redux/actions";
import Navbar2 from "../../components/navBar/Navbar2";
import Carrousel2 from "../../components/carrousel/Carrousel2";
import Sidebar from "../../components/sidebar/Sidebar";
import ComicCard from "../../components/card/Card";
import Paginado from '../../components/paginado/paginado.jsx'
import Footer from "../../components/footer/Footer";

import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import "./Home.css"


const Home = () => {
  const dispatch = useDispatch();
  const [countProducts, setCountProducts] = useState(0)

  let allComics = useSelector(state => state.comics)

  let [currentPage, setCurrentPage] = useState(1);
  let [comicPerPage, setComicPerPage] = useState(12)
  let indexOfLastComic = currentPage * comicPerPage;
  let indexOfFirstComic = indexOfLastComic - comicPerPage;
  let currentComic = allComics.slice(indexOfFirstComic, indexOfLastComic)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [allComics.length, setCurrentPage]);

  useEffect(() => {
    dispatch(setShoppingCart(countProducts))
    dispatch(getAllVolumes())
  }, [countProducts])


  let handleShopping = () => {
    setCountProducts(() => countProducts + 1)
  }


  return (
    <div className="wrapper">
      <div div className="row" >
        <Navbar2 searchbar={true} />
      </div >
      <main className="main">
        <Row>
          <Carrousel2 />
        </Row>
        <Row className="mt-5">
          <Paginado
            comicPerPage={comicPerPage}
            allComics={allComics.length}
            paginado={paginado}
            page={currentPage}
          />
          <Col md={2} className="container" >
            <Sidebar />
          </Col>
          <Col md={9} className="container" >
            {
              currentComic.map(c => (
                <ComicCard key={c.id} data={c} />
              ))
            }
          </Col>

        </Row>

        <Button variant="success" onClick={handleShopping}>Comprar</Button>
        <Button className='ms-2' variant="danger" onClick={() => setCountProducts(0)}>reset</Button>
      </main>

      <Footer />
    </div >
  )
}

export default Home;