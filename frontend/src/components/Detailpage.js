import React from "react";
import "./Detailpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
// import CounterInput from "react-bootstrap-counter";
import CounterInput from "react-counter-input";
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
                <div className="BajuDetail">
                  <div className="RincianDetail"></div>
                  <div className="RincianDetail"></div>
                  <div className="RincianDetail"></div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="6" className="DetailKanan">
          <div className="JudulBaju">
            <p>
              <b>Vintage USA t-shirt</b>
            </p>
            <p>Rp. 100.000</p>
          </div>

          <Row>
            <Col sm="4" lg>
              <div className="UkurandanQuantity">
                <div className="Ukuran">
                  <p>Size: </p>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="UkuranDropDown"
                    >
                      Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">XL</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="Quantity">
                  <p>Quantity:</p>
                  <div className="ButtonQuantity">
                    <CounterInput
                      min={0}
                      max={10}
                      onCountChange={(count) => console.log(count)}
                    />
                  </div>
                </div>
                <div className="DuaButton">
                  <Button variant="success" className="Btn-AddtoCart">
                    ADD TO CART
                  </Button>{" "}
                  <Button variant="dark" className="Btn-SoldOut">
                    SOLD OUT
                  </Button>{" "}
                </div>
              </div>
            </Col>
            <Col sm="8" lg>
              <div className="Description">
                <div className="JudulDescription">
                  <p>Description</p>
                </div>
                <div className="IsiDesctiption">
                  <p>Minus : nono</p>
                  <p>Condition: 10/10</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Detailpage;
