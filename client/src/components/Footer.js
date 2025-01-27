import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../assets/styles.css'; // Ensure you have the necessary styles

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, City, Country</li>
              <li>Phone: +91 1234567890</li>
              <li>Email: <a href="mailto:info.alexmedicare@example.com" className="text-white">info.alexmedicare@example.com</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="text-white"><FaLinkedin size={24} /></a>
            </div>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <h5>About Us</h5>
            <p>Alex Medicare is dedicated to providing the best healthcare products and services. Our mission is to improve the quality of life for our customers.</p>
          </Col>
        </Row>

        <hr className="bg-white" style={{ margin: '0px' }} />
        <Row className="align-items-center footer-last">
          <Col md={4} className="text-md-start text-center mb-3 mb-md-0">
            <img
              src={require('../assets/images/Alex-medicare logo.png')} // Replace with your logo path
              alt="Alex Medicare Logo"
              className="img-fluid footer-logo"
              style={{ maxHeight: '50px' }} // Adjust size as needed
            />
          </Col>
          <Col md={4} className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Alex Medicare. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <a href="/privacy-policy" className="text-white me-3">Privacy Policy</a>
            <a href="/terms-of-service" className="text-white">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;