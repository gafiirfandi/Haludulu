import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

function Navbar() {
  return (
    <div className="Navbar-Page">
      <Row className="RowNavbar">
        <Col className="d-flex justify-content-start logo">
          <BsSearch />
        </Col>
        <Col lg={9} className="d-flex justify-content-center Brand">
          <div className="NamaBrand">
            <p className="namaHalu">HALU</p>
            <p className="namaDulu">DULU</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-end logo2">
          <AiOutlineShopping />
        </Col>
      </Row>
      <Row>
        <Col className="DetailProdukkiri"></Col>
        <Col className="DetailProdukkanan"></Col>
      </Row>
    </div>
  );
}

export default Navbar;
