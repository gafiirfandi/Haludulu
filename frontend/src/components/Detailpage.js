import React, { useState, useEffect } from "react";
import "./Detailpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import axios from "./axios";
// import CounterInput from "react-bootstrap-counter";
import CounterInput from "react-counter-input";
function Detailpage({ id }) {
  const [size, handleSize] = useState("Size");
  const [product, setProduct] = useState([]);
  // const { id } = props.match.params;

  // const id = props.match;
  // console.log(id);
  useEffect(() => {
    console.log(id);
    async function fetchData() {
      console.log(axios.defaults.baseURL + "/api");
      const request = await axios.get(axios.defaults.baseURL + "/api/" + id);
      // console.log(request.data);
      setProduct(request.data[0]);
      // setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  const handleSubmit = () => {
    console.log(product);
  };

  return (
    <div className="DetailContainer">
      <Row>
        <Col lg="6" className="DetailKiri">
          <div className="KiriBaju">
            <Row>
              <Col sm={8}>
                <div className="BajuUtama">
                  <img src={product.main_img} className="MainImage" alt="" />
                </div>
              </Col>
              <Col sm={4}>
                <div className="BajuDetail">
                  <div className="RincianDetail">
                    <img src={product.img1} className="SubImage" alt="" />
                  </div>
                  <div className="RincianDetail">
                    <img src={product.img2} className="SubImage" alt="" />
                  </div>
                  <div className="RincianDetail">
                    <img src={product.img3} className="SubImage" alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="6" className="DetailKanan">
          <div className="JudulBaju">
            <p>
              <b className="JudulBajuBold">{product.name}</b>
            </p>
            <p className="TextDetail">Rp.{product.price}</p>
          </div>

          <Row>
            <Col sm="4" lg>
              <div className="UkurandanQuantity">
                <div className="Ukuran">
                  <p className="TextDetail">Size: </p>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="UkuranDropDown">
                      {size}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        onClick={() => handleSize("S")}>
                        S
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        onClick={() => handleSize("M")}>
                        M
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        onClick={() => handleSize("L")}>
                        L
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-4"
                        onClick={() => handleSize("XL")}>
                        XL
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="Quantity">
                  <p className="TextDetail">Quantity:</p>
                  <div className="ButtonQuantity">
                    <CounterInput
                      min={0}
                      max={10}
                      onCountChange={(count) => console.log(count)}
                    />
                  </div>
                </div>
                <div className="DuaButton">
                  <Button
                    variant="success"
                    onClick={() => handleSubmit()}
                    className="Btn-AddtoCart">
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
                  <p className="TextDetail">Description</p>
                </div>
                <div className="IsiDesctiption">
                  <p className="TextDetail">Minus : {product.minus}</p>
                  <p className="TextDetail">Condition: {product.condition}</p>
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
