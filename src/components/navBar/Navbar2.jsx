import { useState } from 'react';
import { useSelector } from "react-redux";
import logo from '../../assets/LogoRed2.png'

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import Searchbar from '../searchbar/Searchbar2';
import Account from '../account/Account';
import Darkmode from '../dark-mode/Darkmode';
import "./Navbar.css"

function Navbar2() {
  const theme = useSelector((state) => state.theme);

  const [countProducts, setCountProducts] = useState(0)

  let logo_X = 80
  let logo_y = 80

  return (
    <>
      <Navbar bg={theme} variant={theme} expand="md">
        <Container fluid>
          {/* logo */}
          <Col md={2} className="logo-box ms-3 d-md-flex justify-content-start align-items-center">
            <Navbar.Brand href="#">
              <img className='logo' src={logo} width={logo_X} height={logo_y} alt="logo" />
            </Navbar.Brand>
          </Col>


          {/* searchbar */}
          <Navbar.Toggle aria-controls="navbarScroll" className=' mb-4' />
          <Navbar.Collapse id="navbarScroll">
            <Col md={2} className='py-2 me-3'>
              <Darkmode />
            </Col>
            <Col md={4} className="">
              <Searchbar />
            </Col>


            {/* links */}
            <Col className="links pt-1 d-md-flex justify-content-center align-items-center" md={6} >
              <Nav
                // className="me-auto my-2 my-lg-0"
                className='pe-4'
                style={{ maxHeight: '350px' }}
                navbarScroll
              >
                <Nav.Link className='ms-2' href="#action1">Home</Nav.Link>
                <Nav.Link className='ms-2' href="#action2">About</Nav.Link>

                {/* Account */}
                <Account />

                {/* shopping cart */}
                <Nav.Link className='ms-2 position-relative' href="#action3">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  {
                    countProducts > 0 && <Badge className='badge' bg="danger">{countProducts}</Badge>
                  }
                </Nav.Link>
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <Button variant="success" onClick={() => setCountProducts(countProducts + 1)}>Comprar</Button>
      <Button className='ms-2' variant="danger" onClick={() => setCountProducts(0)}>reset</Button>
    </>
  );
}

export default Navbar2;