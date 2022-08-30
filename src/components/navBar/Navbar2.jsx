import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
        <Navbar.Brand href="#">
          <img className='logo' src={logo} width={x_logo} height={y_logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          {/* searchbar */}
          <Searchbar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;