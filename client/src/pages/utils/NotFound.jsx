import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import notFound from '/404.png';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <img 
            src={notFound} 
            alt="404 Not Found" 
            className="img-fluid" 
          />
          <h1 className="mt-4">Page Not Found</h1>
          <p className="text-muted">
            Oops! The page you are looking for does not exist.
          </p>
          <Button 
            href="/" 
            variant="primary" 
            className="mt-3"
          >
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
