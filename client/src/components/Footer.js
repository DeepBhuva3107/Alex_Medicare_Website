import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../assets/styles.css'; 
import logo from '../assets/images/Alex-medicare logo.png'; // Ensure the correct path

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          {/* Left Section - Contact Info */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled footer-text">
              <li>📍 123, Healthcare Street, Ahmedabad, Gujarat</li>
              <li>📞 <a href="tel:+911234567890" className="footer-link">+91 1234567890</a></li>
              <li>📧 <a href="mailto:info.alexmedicare@gmail.com" className="footer-link">info.alexmedicare@gmail.com</a></li>
            </ul>
          </Col>

          {/* Center Section - Social Media */}
          <Col md={4} className="text-center">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
              <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
              <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
            </div>
          </Col>

          {/* Right Section - About Us */}
          <Col md={4} className="text-md-end text-center">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">
              Alex Medicare provides high-quality surgical & healthcare products, ensuring better patient care and safety.
            </p>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <Row className="align-items-center">
          <Col md={4} className="text-md-start text-center mb-3 mb-md-0">
            <img src={logo} alt="Alex Medicare Logo" className="footer-logo" />
          </Col>
          <Col md={4} className="text-center">
            <p className="mb-0 footer-text">&copy; {new Date().getFullYear()} Alex Medicare. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <span className="mx-2 text-white">|</span>
            <a href="/terms-of-service" className="footer-link">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
