import React from 'react'
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#2c3e5070' }} className="navbar">
      <Container>
        <Navbar.Brand href="#home">Cosmic Explorer🌌</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/*ms-auto if u want at top right corner */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#planets">Planets</Nav.Link>
            <Nav.Link href="#asteroids">Asteroids</Nav.Link>
            <Nav.Link href="#comets">Comets</Nav.Link>

            {/* add extra links here*/}

            <NavDropdown title="🔍Search " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav className="ms-auto"> 
            <Nav.Link href="#login">Login/SignUp</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header