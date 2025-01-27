import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit, faHeartbeat, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles.css';

const AboutUs = () => {
  return (
    <>
      {/* Welcome Section */}
      <Container className="mt-5 bg-light p-5 rounded about-welcome">
        <Row className="align-items-start text-center">
          <Col md={12}>
            <h1 className="main-heading">Welcome to Alex Medicare</h1>
            <p className="lead">
              Alex Medicare, based in Ahmedabad, Gujarat (India), is a trusted supplier of hospital and medical supplies.
              We are committed to offering high-quality, durable, and reliable medical products to hospitals, clinics, and other healthcare institutions.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Our Mission Section */}
      <Container className="mt-5 bg-white p-5 rounded about-mission">
        <Row className="text-center">
          <Col md={12}>
            <h2 className="main-heading">Our Mission</h2>
            <p>
              Our mission is to improve healthcare by providing medical supplies that meet global standards in quality, safety, and innovation.
              We aim to empower hospitals and clinics with the best tools for patient care.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col md={4} className="p-4">
            <FontAwesomeIcon icon={faMedkit} size="3x" className="mb-3 text-primary" />
            <h4>High-Quality Supplies</h4>
            <p>Manufactured to withstand rigorous use with superior quality control.</p>
          </Col>
          <Col md={4} className="p-4">
            <FontAwesomeIcon icon={faHeartbeat} size="3x" className="mb-3 text-danger" />
            <h4>Innovative Healthcare</h4>
            <p>Focused on improving patient care through innovative solutions.</p>
          </Col>
          <Col md={4} className="p-4">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" className="mb-3 text-success" />
            <h4>Trusted Partner</h4>
            <p>Reliability and excellence have earned us the trust of the medical community.</p>
          </Col>
        </Row>
      </Container>

      {/* Core Values Section */}
      <Container className="mt-5 bg-light p-5 rounded about-values">
        <Row>
          <Col md={12}>
            <h2 className="main-heading text-center">Our Core Values</h2>
            <ul className="core-values-list">
              <li>Integrity and ethical standards, respecting all stakeholders.</li>
              <li>Commitment to health, safety, and quality in every aspect of our business.</li>
              <li>Excellence in every product and service we offer.</li>
              <li>Unwavering dedication to customer satisfaction.</li>
              <li>Strong belief in corporate social responsibility.</li>
              <li>Transparency and honesty in all interactions.</li>
              <li>Support for innovation, diversity, and individual growth.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Our Corporate Goal Section */}
      <Container className="mt-5 bg-light p-5 rounded about-goal">
        <Row className="text-center">
          <Col md={12}>
            <h2 className="main-heading">Our Corporate Goal</h2>
            <p>
              At Alex Medicare, our corporate goal is to be a leading provider of innovative and top-quality medical products that drive excellence in patient care.
              We aim to continually expand our product portfolio, maintain customer trust, and remain ahead of industry trends by leveraging cutting-edge technology and research.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container className="mt-5 bg-white p-5 rounded about-cta">
        <Row className="text-center">
          <Col md={12}>
            <h2 className="main-heading">Get in Touch</h2>
            <p>
              Whether you are a healthcare provider or a hospital looking for top-quality surgical supplies, Alex Medicare is here to help.
              Contact us to learn more about our products and services.
            </p>
            <Button href="/contact" variant="success" size="lg">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
