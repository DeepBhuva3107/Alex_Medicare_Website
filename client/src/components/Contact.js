import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image, Card, Toast, ToastContainer } from 'react-bootstrap';
import logo from '../assets/images/Alex-medicare logo.png';
import '../assets/styles.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend API
    fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setToast({
            show: true,
            message: 'Email sent successfully!',
            variant: 'success',
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || 'Failed to send email');
          });
        }
      })
      .catch((error) => {
        setToast({
          show: true,
          message: `Error: ${error.message}`,
          variant: 'danger',
        });
      });
  };

  return (
    <Container className="my-5 contact-container">
      <ToastContainer className="p-3" position="top-end">
        <Toast
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          delay={3000}
          autohide
          bg={toast.variant}
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Two-Column Layout */}
      <Row className="align-items-center">

        {/* Left Column - Contact Info */}
        <Col md={6} className="contact-info">
          <div className="text-center">
            <Image src={logo} alt="Alex Medicare Logo" fluid className="logo" />
            <h1 className="text-primary mt-3">Alex Medicare</h1>
            <p className="text-muted tagline">
              Embracing Wellness, Caring for Life
            </p>
          </div>
          <Card className="bg-light p-4 shadow-sm contact-card">
            <Card.Body>
              <h4 className="text-primary">Contact Information</h4>
              <p className="text-muted">
                Reach out to us for inquiries, feedback, or support.
              </p>
              <hr />
              <p>
                <strong>Email:</strong> info@alexmedicare.com<br />
                <strong>Phone:</strong> +91 98765 43210<br />
                <strong>Address:</strong> 123, Healthcare Street, Ahmedabad, Gujarat, India
              </p>
              <div className="d-flex justify-content-start">
                <Button variant="primary" href="mailto:info@alexmedicare.com" className="me-3">
                  Email Us
                </Button>
                <Button variant="outline-primary" href="tel:+919876543210">
                  Call Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column - Contact Form */}
        <Col md={6} className="contact-form">
          <Card className="shadow-lg p-4 form-card">
            <Card.Body>
              <h4 className="text-primary text-center mb-4">Send Us a Message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 input-field"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 input-field"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 input-field"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary" size="lg" className="submit-button">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Contact;