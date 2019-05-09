import React from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'

const LoadingSpinner = (props) => {
  if (props.loading) {
    return (
      <Row id="spinner-row">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    );
  }
  return <Row id="spinner-row"></Row>
}

export default LoadingSpinner;
