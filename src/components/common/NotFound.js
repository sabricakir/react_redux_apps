import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ size: 6, offset: 3 }} className="text-center">
          <img
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="1000px"
            height="1000px"
            alt="Illustration"
            className="img-fluid mb-4 rounded"
          />
          <h1 className="display-4">Page Not Found</h1>
          <p className="lead">
            The page you're looking for could not be found. Please check again
            or return to the home page.
          </p>
          <Link to="/" className="btn btn-info text-white">
            Return to Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
