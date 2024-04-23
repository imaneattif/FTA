import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container fluid> {/* Optionally make it fluid */}
      <h1>Welcome to FitTrack!</h1>
      <p>This is a simple fitness tracker app to help you stay on top of your fitness goals.</p>
      <div className="mb-3"> {/* Added div for better button grouping and margin */}
        <Link to="/register">
          <Button variant="primary" className="me-2">Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">Log In</Button>
        </Link>
      </div>
      <Row className="featurette">
        <Col md={7}>
          <h2 className="featurette-heading">Track Your Workouts</h2>
          <p className="lead">Keep a personal log of your workouts and track your progress over time.</p>
        </Col>
        <Col md={5}>
          {/* Placeholder for a feature image */}
        </Col>
      </Row>
      <hr className="featurette-divider" />
      <Row className="featurette">
        <Col md={7} className="order-md-2">
          <h2 className="featurette-heading">Set Personal Goals</h2>
          <p className="lead">Create goals for yourself and work towards achieving them with guided workouts.</p>
        </Col>
        <Col md={5} className="order-md-1">
          {/* Placeholder for a feature image */}
        </Col>
      </Row>
      <hr className="featurette-divider" />
      {/* Additional sections like testimonials or featured workouts */}
    </Container>
  );
};

export default HomePage;
