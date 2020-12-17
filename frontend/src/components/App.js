import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
