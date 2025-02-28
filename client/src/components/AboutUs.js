import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit, faHeartbeat, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles.css';
import { motion } from "framer-motion";


const AboutUs = () => {
  return (
    <>
      {/* Welcome Section */}
      <Container className="mt-5 p-5 rounded shadow-lg text-center position-relative" style={{ background: "linear-gradient(135deg, #e3f2fd, #bbdefb)", color: "#084298" }}>
        <Row className="align-items-center">
          <Col md={12}>
            <motion.h1
              className="display-4 fw-bold mb-3 text-primary"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to <span className="text-success">Alex Medicare</span>
            </motion.h1>

            <motion.p
              className="lead px-lg-5 mx-lg-5 text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Based in **Ahmedabad, Gujarat (India)**, Alex Medicare specializes in **high-quality hospital disposable products**,
              ensuring safety, hygiene, and reliability for **hospitals, clinics, and healthcare institutions**.
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                href="/contact"
                variant="success"
                size="lg"
                className="fw-bold px-4 py-2 shadow-lg mt-3"
                style={{ borderRadius: "30px", letterSpacing: "1px" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Our Mission Section */}
      <Container className="mt-5 p-5 rounded shadow-lg text-center position-relative" style={{ background: "linear-gradient(135deg, #e3f2fd, #bbdefb)", color: "#084298" }}>
        <Row className="align-items-center">
          {/* Left Side - Mission Statement */}
          <Col md={6} className="text-start">
            <motion.h2
              className="display-5 fw-bold text-primary mb-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.h2>

            <motion.p
              className="lead text-dark"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our mission is to enhance healthcare by delivering **premium-quality** medical supplies that meet **global standards**
              in **safety, hygiene, and innovation**. We empower **hospitals & clinics** with the best tools for superior patient care.
            </motion.p>
          </Col>

          {/* Right Side - Features with Icons */}
          <Col md={6} className="d-flex flex-column">
            {[
              { icon: faMedkit, title: "High-Quality Supplies", text: "Manufactured to withstand rigorous use with superior quality control.", color: "text-primary" },
              { icon: faHeartbeat, title: "Innovative Healthcare", text: "Focused on improving patient care through cutting-edge solutions.", color: "text-danger" },
              { icon: faCheckCircle, title: "Trusted Partner", text: "Reliability and excellence have earned us the trust of the medical community.", color: "text-success" }
            ].map((item, index) => (
              <motion.div
                className="d-flex align-items-center mb-4 p-3 rounded shadow-sm bg-white"
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="d-flex justify-content-center align-items-center bg-light rounded-circle p-3 me-3 shadow" style={{ width: "70px", height: "70px" }}>
                  <FontAwesomeIcon icon={item.icon} size="2x" className={item.color} />
                </div>
                <div>
                  <h5 className={`fw-bold mb-1 ${item.color}`}>{item.title}</h5>
                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Core Values Section */}
      <Container className="mt-5 p-5 rounded about-values" style={{ background: "linear-gradient(135deg, #e3f2fd, #b3e5fc)" }}>
        <Row>
          <Col md={12}>
            <h2 className="main-heading text-center text-primary">Our Core Values</h2>
            <ul className="core-values-list text-dark">
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
      <Container className="mt-5 p-5 rounded about-goal" style={{ background: "linear-gradient(135deg, #e3f2fd, #b3e5fc)" }}>
        <Row className="text-center">
          <Col md={12}>
            <h2 className="main-heading text-primary fw-bold">Our Corporate Goal</h2>
            <p className="lead text-dark px-lg-5 mx-lg-5">
              At <span className="fw-bold text-success">Alex Medicare</span>, our goal is to be a leading provider of innovative and top-quality medical products that enhance patient care.
              We strive to expand our portfolio, build lasting customer trust, and stay ahead of industry trends through cutting-edge technology and research.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container className="mt-5 p-5 rounded shadow-lg about-cta" style={{ background: "linear-gradient(135deg, #ffffff, #e3f2fd)" }}>
        <Row className="text-center">
          <Col md={12}>
            <h2 className="main-heading text-success fw-bold">Get in Touch</h2>
            <p className="lead text-muted px-lg-5 mx-lg-5">
              Are you a healthcare provider or hospital in need of top-quality surgical supplies?
              <span className="fw-bold text-primary"> Alex Medicare </span> is your trusted partner for reliable medical products and exceptional service.
            </p>
            <Button
              href="/contact"
              variant="success"
              size="lg"
              className="fw-bold px-4 py-2 shadow-lg mt-3"
              style={{ borderRadius: "30px", letterSpacing: "1px" }}
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
