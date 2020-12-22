import React, { useEffect, useState } from "react";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
function Homepage() {

  // const [width, setWidth] = useState(0)
  
  // useEffect(() => {
  //   let bajuBox = document.getElementsByClassName("BajuBox");
  //   // width = bajuBox[0].clientWidth
  //   setWidth(bajuBox[0].clientWidth)
  //   // let bajuBox = document.getElementsByClassName("BajuBox");
  //   // let width = bajuBox[0].clientWidth
  //   // console.log(width)
  //   for(let i = 0; i < bajuBox.length; i++){
  //     bajuBox[i].style.height = width + "px"
  //     console.log(bajuBox[i].clientHeight)

  //   }  
  // })

  // let bajuBox = document.getElementsByClassName("BajuBox");
  // let width = bajuBox[0].width
  // bajuBox.forEach(element => {
  //   element.height = width + 'px'
  // });
  // $('.child').css({'height':cw+'px'});
  return (
    <div className="HomePageContainer">
      <Row>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        
      </Row>
      <Row>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
      </Row>
      <Row>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
        <Col xs="6" sm="6" lg className="ColumnBaju">
          <div className="BajuBox">Halo</div>
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
