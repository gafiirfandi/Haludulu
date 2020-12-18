import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Container } from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
