import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faTruck, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles.css';
import { motion } from "framer-motion";

const Infrastructure = () => {
  return (
    <Container className="mt-5">
      
      {/* Header Section */}
      <Row className="d-flex justify-content-center align-items-center text-center p-5 rounded shadow-lg" style={{ background: "linear-gradient(135deg, #2E3192, #1BFFFF)" }}>
        <Col>
          <h1 className="display-3 fw-bold text-white text-uppercase">Infrastructure</h1>
          {/* <p className="text-light fs-5">
            Powering seamless operations with cutting-edge facilities for efficient surgical supply distribution.
          </p> */}
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mt-5 p-5 bg-white rounded shadow-lg d-flex align-items-center">
        <Col md={6} className="text-center">
          <div className="position-relative">
            <img
              src="/images/infrastructure.jpg"
              alt="Infrastructure Overview"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '350px', objectFit: 'cover', borderRadius: '15px' }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded"></div>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="mb-3 fw-bold" style={{ color: "#0d6efd" }}>Optimized Supply Chain</h2>
            <p className="text-muted lead">
              At <span className="fw-bold text-dark">Alex Medicare</span>, our advanced infrastructure ensures seamless inventory
              management, rigorous quality control, and fast, reliable distribution of surgical supplies
              to hospitals, clinics, and retailers.
            </p>
          </div>
        </Col>
      </Row>

      {/* Highlights Section */}
      <Row className="mt-5 g-4">
        <Col md={4}>
          <Card className="text-center shadow-lg border-0 h-100">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-center align-items-center mb-3 bg-primary rounded-circle p-3" style={{ width: "80px", height: "80px" }}>
                <FontAwesomeIcon icon={faWarehouse} size="2x" className="text-white" />
              </div>
              <Card.Title className="fw-bold text-primary">Advanced Warehousing</Card.Title>
              <Card.Text className="text-muted">
                Spacious, climate-controlled storage ensuring product integrity and safety.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg border-0 h-100">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-center align-items-center mb-3 bg-success rounded-circle p-3" style={{ width: "80px", height: "80px" }}>
                <FontAwesomeIcon icon={faTruck} size="2x" className="text-white" />
              </div>
              <Card.Title className="fw-bold text-success">Efficient Logistics</Card.Title>
              <Card.Text className="text-muted">
                A streamlined supply chain ensuring on-time deliveries, every time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg border-0 h-100">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-center align-items-center mb-3 bg-danger rounded-circle p-3" style={{ width: "80px", height: "80px" }}>
                <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-white" />
              </div>
              <Card.Title className="fw-bold text-danger">Quality Assurance</Card.Title>
              <Card.Text className="text-muted">
                Stringent quality control to deliver products meeting global standards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <motion.div
        className="mt-5 p-5 text-center rounded shadow-lg"
        style={{ background: "linear-gradient(135deg, #0077b6, #00b4d8)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row className="justify-content-center">
          <Col md={10}>
            <motion.h2
              className="display-4 fw-bold text-white mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Partner with <span className="text-warning">Alex Medicare</span>
            </motion.h2>

            <motion.p
              className="lead text-light px-lg-5 mx-lg-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elevate your business with <strong>reliable</strong>, <strong>high-quality</strong> surgical supplies.
              Experience <strong>unmatched service</strong> and a <strong>trusted partnership</strong> with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                href="/contact"
                variant="warning"
                size="lg"
                className="fw-bold px-4 py-2 shadow-lg mt-3"
                style={{
                  borderRadius: "30px",
                  letterSpacing: "1px",
                  transition: "0.3s ease-in-out"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                Contact Us Today
              </Button>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Infrastructure;