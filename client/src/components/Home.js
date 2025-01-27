// Home page 

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles.css'; // Import the global style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faClipboardCheck, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Carouselphoto from './Carousel';
import { faHandshake, faHeartbeat, faAward } from '@fortawesome/free-solid-svg-icons';



function Home() {
  return (
    <>
      <div>
        {/* Carousel */}
        <Carouselphoto />
      </div>
      {/* main container */}
      <Container className="mt-5">
        <Row className="align-items-center text-center text-md-start p-5 rounded bg-light">
          {/* Left side: Image */}
          <Col md={6}>
            {/* <img
              src={require('../assets/images/hospital-solution.jpg').default}
              alt="Hospital Solutions"
              className="img-fluid rounded"
            /> */}
          </Col>

          {/* Right side: Text and Button */}
          <Col md={6}>
            <h1>We Provide Solutions for Hospitals</h1>
            <p>
              At Alex Medicare, we are committed to offering high-quality medical and surgical supplies to hospitals and clinics. From urine bags to IV sets, we provide solutions that make healthcare delivery more efficient.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Second section with 3 columns: About Us, QA, Infrastructure */}
      <Container className="my-5">
        <Row className="text-center">
          {/* About Us Column */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3 text-primary" />
            <h3>About Us</h3>
            <p>
              Alex Medicare is a trusted supplier of surgical and medical supplies. Our mission is to improve healthcare by providing high-quality solutions.
            </p>
          </Col>

          {/* QA Column */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faClipboardCheck} size="3x" className="mb-3 text-success" />
            <h3>Quality Assurance</h3>
            <p>
              We adhere to the highest standards in quality assurance, ensuring that all products meet strict safety and compliance regulations.
            </p>
          </Col>

          {/* Infrastructure Column */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faBuilding} size="3x" className="mb-3 text-warning" />
            <h3>Infrastructure</h3>
            <p>
              Our state-of-the-art infrastructure allows us to deliver high-quality products on time, ensuring hospitals and clinics receive the best care.
            </p>
          </Col>
        </Row>
      </Container>
<div style={{backgroundColor:'#e6e6fa'}}>
      <Container className="my-5">
        <Row className="text-center">
          {/* Why Alex Medicare */}
          <Col md={12} className="p-4">
            <h3>Why Alex Medicare?</h3>
            <p>
              With over 1 year of expertise, Alex Medicare is quickly becoming a trusted name in the medical industry. We are dedicated to providing the best solutions for all your healthcare needs at competitive prices.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          {/* Best Quality Products */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faAward} size="3x" className="mb-3 text-primary" />
            <h4>Best Quality Products</h4>
            <p>Ensuring excellence in every product.</p>
          </Col>

          {/* Best Health Care */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faHeartbeat} size="3x" className="mb-3 text-success" />
            <h4>Best Health Care</h4>
            <p>Committed to superior healthcare solutions.</p>
          </Col>

          {/* Trusted Since */}
          <Col md={4} className="p-4 column-hover">
            <FontAwesomeIcon icon={faHandshake} size="3x" className="mb-3 text-warning" />
            <h4>Trusted Since 2023</h4>
            <p>Building trust from day one.</p>
          </Col>
        </Row>
      </Container>
      </div>

    </>
  );
}

export default Home;
