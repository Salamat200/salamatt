import React from 'react';
import { Container, Row, Col, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HospitalLandingPage() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to Hospital Name</h1>
        <p>We provide high-quality healthcare services.</p>
        <Button variant="light">Learn More</Button>
      </header>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="primary">Read More</Button>
            </Col>
            <Col md={6}>
              <img src="/path/to/image" alt="About" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2><Link to="/Register">Register</Link></h2>
              <Form>
                {/* Register form fields */}
              </Form>
            </Col>
            <Col md={6}>
              <h2><Link to="/login">Login</Link> </h2>
              <Form>
                {/* Login form fields */}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Hospital Name. All rights reserved.
      </footer>
    </div>
  );
}

export default HospitalLandingPage;
