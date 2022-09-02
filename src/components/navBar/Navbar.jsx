import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import logo from '../../assets/LogoRed2.png'

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col'

import Searchbar from '../searchbar/Searchbar2';
import Account from '../account/Account';
import Darkmode from '../dark-mode/Darkmode';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import "./Navbar.css"

function NavBar({ searchbar }) {
  const theme_params = useSelector((state) => state.theme_params);
  const { theme } = theme_params

  return (
    <>
      <Navbar className='navbar fixed-top' bg={theme} variant={theme} expand="md">
        <Container fluid>
          {/* logo */}
          <Col md={2} className="logo-box ms-3 d-md-flex justify-content-start align-items-center">
            <Navbar.Brand>
              <Link to={"/home"}>
                <img className='logo' src={logo} width={80} height={80} alt="logo" />
              </Link>
            </Navbar.Brand>
          </Col>


          {/* searchbar */}
          <Navbar.Toggle aria-controls="navbarScroll" className=' mb-4' />
          <Navbar.Collapse id="navbarScroll">
            <Col md={2} className='py-2'>
              <Darkmode />
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              {
                searchbar &&
                <Searchbar />
              }
            </Col>


            {/* links */}
            <Col className="links pt-1 d-md-flex justify-content-center align-items-center" md={6} >
              <Nav
                // className="me-auto my-2 my-lg-0"
                // className='pe-4'
                style={{ maxHeight: '450px' }}
                navbarScroll
              >
                <Nav.Link className='ms-2' href="#action1">Home</Nav.Link>
                <Nav.Link className='ms-2' href="#action2">About</Nav.Link>

                {/* Account */}
                <Account />

                {/* shopping cart */}
                <ShoppingCart />

              </Nav>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
}

export default NavBar;