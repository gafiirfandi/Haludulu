import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function Navbar() {
  return (
    <div className="Navbar-Page container-fluid">
      <Row className="RowNavbar">
        <Col className="d-flex justify-content-start logo">
          <SearchRoundedIcon className="SearchIcon" />
        </Col>
        <Col lg={9} className="d-flex justify-content-center Brand">
          <Link to="/">
            <div className="NamaBrand">
              <p className="namaHalu">HALU</p>
              <p className="namaDulu">DULU</p>
            </div>
          </Link>
        </Col>
        <Col className="d-flex justify-content-end logo2">
          <Link to="/cart">
            <AiOutlineShopping />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="borderkiri"></Col>
        <Col className="borderkanan"></Col>
      </Row>
    </div>
  );
}

export default Navbar;
