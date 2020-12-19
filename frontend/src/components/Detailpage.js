import React from "react";
import "./Detailpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
function Detailpage() {
  return (
    <div className="DetailContainer">
      <Row>
        <Col lg="6" className="DetailKiri">
          <div className="KiriBaju">
            <Row>
              <Col sm={8}>
                <div className="BajuUtama"></div>
              </Col>
              <Col sm={4}>
                <div className="BajuDetail"></div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="6" className="DetailKanan">
          Vintage USA t-shirt
          <Row>
            <Col lg>sm=true</Col>
            <Col lg>sm=true</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Detailpage;
