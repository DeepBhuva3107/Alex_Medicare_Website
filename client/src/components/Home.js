import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faClipboardCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import Carouselphoto from './Carousel';
import { faHandshake, faHeartbeat, faAward } from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
    <>
      <div>
        <Carouselphoto />
      </div>

      {/* main container */}
      <Container className="mt-5">
        <Row
          className="align-items-center p-5 rounded shadow-lg"
          style={{ background: "linear-gradient(135deg, #e3f2fd, #b3e5fc)" }}
        >
          {/* Left Side: Content */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="fw-bold text-primary">
              Elevating Healthcare Standards
            </h1>
            <p className="lead text-dark">
              At <span className="fw-bold text-success">Alex Medicare</span>, we provide **top-tier medical supplies** to hospitals & clinics.
              From **IV sets** to **urine bags**, we ensure **safety, quality, and efficiency** in healthcare.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <Button
                href="/contact"
                variant="success"
                size="lg"
                className="fw-bold px-4 py-2 shadow-lg"
                style={{ borderRadius: "30px", letterSpacing: "1px" }}
              >
                Get in Touch
              </Button>
              <Button
                href="/products"
                variant="outline-primary"
                size="lg"
                className="fw-bold px-4 py-2 shadow-lg"
                style={{ borderRadius: "30px", letterSpacing: "1px" }}
              >
                Explore Products
              </Button>
            </div>
          </Col>

          {/* Right Side: Image & Icons */}
          <Col md={6} className="d-flex justify-content-center">
            <div className="position-relative">
              {/* <img
          src={require("../assets/images/hospital-solution.jpg").default}
          alt="Hospital Solutions"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "100%", borderRadius: "15px" }}
        /> */}

            </div>
          </Col>
        </Row>
      </Container>

      {/* Second section with 3 columns: About Us, QA, Infrastructure */}
      <Container className="my-5">
        <Row className="text-center">
          {/* About Us Column */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3 text-primary" />
            <h3 className="text-primary fw-bold">Who We Are</h3>
            <p className="text-muted">
              At <span className="fw-bold text-success">Alex Medicare</span>, we provide **trusted** medical & surgical supplies for hospitals and clinics.
            </p>
          </Col>

          {/* Quality Assurance Column */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faClipboardCheck} size="3x" className="mb-3 text-success" />
            <h3 className="text-success fw-bold">Quality First</h3>
            <p className="text-muted">
              We ensure **strict quality control** and compliance with **global healthcare standards**.
            </p>
          </Col>

          {/* Infrastructure Column */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faBuilding} size="3x" className="mb-3 text-warning" />
            <h3 className="text-warning fw-bold">Our Facilities</h3>
            <p className="text-muted">
              With **advanced infrastructure**, we guarantee **fast & reliable** medical product delivery.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why alexmedicare */}
      <div style={{ backgroundColor: '#e6e6fa' }}>
        <Container className="my-5">
          <Row className="text-center">
            {/* Why Alex Medicare */}
            <Col md={12} className="p-4">
              <h3>The Alex Medicare Advantage</h3>
              <p className="lead">
                With over a year of unparalleled expertise, Alex Medicare has emerged as a trusted leader in the medical industry. We are committed to delivering innovative, reliable, and cost-effective healthcare solutions tailored to meet the evolving needs of our clients.
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            {/* Uncompromising Quality */}
            <Col md={4} className="p-4 column-hover">
              <FontAwesomeIcon icon={faAward} size="3x" className="mb-3 text-primary" />
              <h4>Uncompromising Quality</h4>
              <p>
                We source and deliver only the highest quality medical products, ensuring safety, reliability, and excellence in every item.
              </p>
            </Col>

            {/* Comprehensive Healthcare Solutions */}
            <Col md={4} className="p-4 column-hover">
              <FontAwesomeIcon icon={faHeartbeat} size="3x" className="mb-3 text-success" />
              <h4>Comprehensive Healthcare Solutions</h4>
              <p>
                From advanced medical equipment to personalized care, we provide end-to-end solutions that prioritize your health and well-being.
              </p>
            </Col>

            {/* Trusted Industry Leader */}
            <Col md={4} className="p-4 column-hover">
              <FontAwesomeIcon icon={faHandshake} size="3x" className="mb-3 text-warning" />
              <h4>Trusted Industry Leader</h4>
              <p>
                Since our inception in 2023, we have built a reputation for integrity, innovation, and excellence, earning the trust of healthcare professionals nationwide.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;