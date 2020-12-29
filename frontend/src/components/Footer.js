import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="FooterContainer container-fluid ">
      <Row>
        <Col xs="12" lg="2">
          <img
            src="http://localhost:8000/media/Logo_HaluDulu.jpg"
            alt=""
            className="Logo_Baru "
          />
        </Col>
        <Col xs="12" lg="3">
          <div className="SosmedFooter">
            <p className="JudulContactUs">CONTACT US</p>
            <div className="SatubarisSosmed">
              <IoLogoInstagram className="Logo_instagram" />
              <p className="DetailSosmed">haludulu.co</p>
            </div>
            <div className="SatubarisSosmed">
              <AiOutlineMail className="Logo_email" />
              <p className="DetailSosmed">haludulu.id@gmail.com</p>
            </div>
            <div className="SatubarisSosmed">
              <img
                src="http://localhost:8000/media/Line_Icon_2.png"
                alt=""
                className="logo_line"
              />
              <p className="DetailSosmed">@794cztid</p>
            </div>
          </div>
        </Col>
        <Col xs="0" lg="7"></Col>
      </Row>
    </div>
  );
}

export default Footer;

{
  /* <div className="FooterContainer">
      <Row>
        <Col sm="3">
          <div className="ImageFooter">
            <img
              src="http://localhost:8000/media/logoFooter.png"
              alt=""
              className="LogoFooter"
            />
          </div>
        </Col>
        <Col sm="9">
          <div className="SosmedFooter">
            <p className="JudulContactUs">CONTACT US</p>
            <div className="SatubarisSosmed">
              <IoLogoInstagram className="Logo_instagram" />
              <p className="DetailSosmed">haludulu.co</p>
            </div>
            <div className="SatubarisSosmed">
              <AiOutlineMail className="Logo_email" />
              <p className="DetailSosmed">haludulu.id@gmail.com</p>
            </div>
            <div className="SatubarisSosmed">
              <img
                src="http://localhost:8000/media/Line_Icon_2.png"
                alt=""
                className="logo_line"
              />
              <p className="DetailSosmed">@794cztid</p>
            </div>
          </div>
        </Col>
      </Row>
    </div> */
}
