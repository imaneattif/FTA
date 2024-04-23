import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
const NotFoundPage = () => {
  return (
    <Container className="text-center" style={{ marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We can&apos;t seem to find the page you&apos;re looking for.</p> {/* Escaped apostrophes */}
      <Link to="/">
        <Button variant="primary">Go Home</Button>
      </Link>
      {' '}or{' '}
      <Button variant="secondary" onClick={() => window.history.back()}>Go Back</Button>
    </Container>
  );
};

export default NotFoundPage;

