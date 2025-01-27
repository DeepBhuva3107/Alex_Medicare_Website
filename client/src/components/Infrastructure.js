import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faTruck, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles.css';

const Infrastructure = () => {
  return (
    <Container className="mt-5">
      {/* Header Section */}
      <Row className="align-items-center text-center bg-gradient p-5 rounded shadow-lg">
  <Col>
    <h1 className="display-4 text-primary">Our Infrastructure</h1>
    <p className="text-dark lead">
      Enabling seamless operations for efficient surgical supplies distribution.
    </p>
  </Col>
</Row>

      {/* Description Section */}
      <Row className="mt-5 p-4 bg-light rounded shadow-sm">
        <Col md={6} className="text-center d-flex align-items-center justify-content-center">
          <img
            src="/images/infrastructure.jpg"
            alt="Infrastructure Overview"
            className="img-fluid rounded"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="mb-4 text-primary">Streamlined Operations</h2>
            <p>
              At Alex Medicare, we are committed to excellence in every aspect of our operations. 
              With dedicated departments for inventory, quality checks, and logistics, we ensure that 
              surgical supplies are delivered promptly and efficiently to hospitals, clinics, and retailers.
            </p>
          </div>
        </Col>
      </Row>

      {/* Highlights Section */}
      <Row className="mt-5">
        <Col md={4}>
          <Card className="text-center shadow-sm h-100">
            <Card.Body>
              <FontAwesomeIcon icon={faWarehouse} size="3x" className="text-primary mb-3" />
              <Card.Title className="fw-bold">Advanced Warehousing</Card.Title>
              <Card.Text>
                Spacious facilities with controlled environments to ensure product quality and safety.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm h-100">
            <Card.Body>
              <FontAwesomeIcon icon={faTruck} size="3x" className="text-success mb-3" />
              <Card.Title className="fw-bold">Efficient Logistics</Card.Title>
              <Card.Text>
                A robust supply chain ensuring timely deliveries across regions, no matter the volume.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm h-100">
            <Card.Body>
              <FontAwesomeIcon icon={faShieldAlt} size="3x" className="text-danger mb-3" />
              <Card.Title className="fw-bold">Quality Assurance</Card.Title>
              <Card.Text>
                Rigorous quality control processes to deliver surgical supplies that meet global standards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="mt-5 bg-gradient text-white p-5 rounded shadow-lg">
        <Col className="text-center">
          <h2 className="display-5">Partner with Alex Medicare</h2>
          <p className="lead" style={{ color: 'black' }}>
            Experience unmatched service, reliability, and product quality. Let us be your trusted wholesale partner for surgical supplies.
          </p>
          <Button href="/contact" variant="light" size="lg" className="text-primary fw-bold shadow">
            Contact Us Today
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Infrastructure;