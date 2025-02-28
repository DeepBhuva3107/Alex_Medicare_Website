import React, { useEffect, useState } from 'react';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles.css';

function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // Track Navbar state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Function to close Navbar after clicking a link
  const handleNavClick = () => setExpanded(false);

  return (
    <BootstrapNavbar 
      expand="lg" 
      className="custom-navbar"
      expanded={expanded} // Control state of Navbar
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="custom-brand">
          Alex Medicare
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="custom-toggler" 
          onClick={() => setExpanded(expanded ? false : true)} // Toggle Navbar
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="custom-nav-link" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="custom-nav-link" onClick={handleNavClick}>Company Profile</Nav.Link>
            <Nav.Link as={Link} to="/products" className="custom-nav-link" onClick={handleNavClick}>Products</Nav.Link>
            <Nav.Link as={Link} to="/infrastructure" className="custom-nav-link" onClick={handleNavClick}>Infrastructure</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="custom-nav-link" onClick={handleNavClick}>Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
