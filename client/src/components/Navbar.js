import React from 'react';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles.css'; 


function Navbar() {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand">
          Alex Medicare
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link">Company Profile</Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link">Products</Nav.Link>
            <Nav.Link as={Link} to="/infrastructure" className="nav-link">Infrastructure</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;