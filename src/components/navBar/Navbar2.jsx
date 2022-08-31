import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbar from '../searchbar/Searchbar2';
import logo from '../../assets/LogoRed2.png'

import "./Navbar.css"

function Navbar2({ theme = "light" }) {
  let x_logo = 80
  let y_logo = 80

  return (
    <Navbar bg={theme} variant={theme} expand="md">
      <Container fluid>

        {/* logo */}
        <Col md={3} className="logo-box ms-3 d-md-flex justify-content-start align-items-center">
          <Navbar.Brand href="#">
            <img className='logo' src={logo} width={x_logo} height={y_logo} alt="logo" />
          </Navbar.Brand>
        </Col>

        {/* searchbar */}
        <Navbar.Toggle aria-controls="navbarScroll" className=' mb-4' />
        <Navbar.Collapse id="navbarScroll">
          <Col md={6} className="ps-4 mt-xs-5">
            <Searchbar />
          </Col>

          {/* links */}
          <Col className="links pt-1 d-md-flex justify-content-center align-items-center" md={6} >
            <Nav
              // className="me-auto my-2 my-lg-0"
              className='ms-auto me-4'
              style={{ maxHeight: '350px' }}
              navbarScroll
            >
              <Nav.Link className='ms-2' href="#action1">Home</Nav.Link>
              <Nav.Link className='ms-2' href="#action2">About</Nav.Link>


              {/* Account */}
              <NavDropdown className='mx-2' title="Cuenta" id="navbarScrollingDropdown">
                <div className='me-4'>
                  <NavDropdown.Item href="#action4" className='d-flex'>
                    <span className="material-symbols-outlined" >
                      account_circle
                    </span>
                    <span className='ms-2'>
                      Login
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5" className='d-flex'>
                    <span className="material-symbols-outlined">
                      book
                    </span>
                    <span className='ms-2'>
                      Favoritos
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6" className='d-flex'>
                    <span className="material-symbols-outlined">
                      upload_file
                    </span>
                    <span className='ms-2'>
                      Subir Comic
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action7" className='d-flex'>
                    <span className="material-symbols-outlined">
                      logout
                    </span>
                    <span className='ms-2'>
                      Salir
                    </span>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link className='ms-2' href="#action3">
                <span className="material-symbols-outlined">
                  shopping_cart
                </span>
              </Nav.Link>
            </Nav>


          </Col>
        </Navbar.Collapse>

      </Container>
    </Navbar >
  );
}

export default Navbar2;