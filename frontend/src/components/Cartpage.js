import React from "react";
import "./Cartpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import CounterInput from "react-counter-input";
function Cartpage() {
  return (
    <div className="CartContainer">
      <div className="JudulCart">
        <h1 className="TitleCart">CART</h1>
        <p className="DetailJudul">Continue shopping</p>
      </div>

      <Row className="RowCard">
        <Col sm="2" className="ColProduk">
          <div className="GambarBaju"></div>
        </Col>
        <Col sm="4" className="ColProduk">
          <div className="DetailBaju">
            <p className="TitleBaju">
              <b>Vintage USA t-shirt</b>
            </p>
            <p className="Hapus">Remove</p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Price</b>
            </p>
            <p className="HargaBaju">Rp.100.000,00</p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Quantity</b>
            </p>
            <p className="QuantityBaju ">
              <CounterInput
                className="QuantityCounter"
                min={0}
                max={10}
                onCountChange={(count) => console.log(count)}
              />
            </p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Total</b>
            </p>
            <p className="HargaBaju">Rp.300.000,00</p>
          </div>
        </Col>
      </Row>
      <Row className="RowCard">
        <Col sm="2" className="ColProduk">
          <div className="GambarBaju"></div>
        </Col>
        <Col sm="4" className="ColProduk">
          <div className="DetailBaju">
            <p className="TitleBaju">
              <b>Vintage USA t-shirt</b>
            </p>
            <p className="Hapus">Remove</p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Price</b>
            </p>
            <p className="HargaBaju">Rp.100.000,00</p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Quantity</b>
            </p>
            <p className="QuantityBaju ">
              <CounterInput
                className="QuantityCounter"
                min={0}
                max={10}
                onCountChange={(count) => console.log(count)}
              />
            </p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Total</b>
            </p>
            <p className="HargaBaju">Rp.300.000,00</p>
          </div>
        </Col>
      </Row>
      <Row className="RowCardLast">
        <Col sm="2" className="ColProduk">
          <div className="GambarBaju"></div>
        </Col>
        <Col sm="4" className="ColProduk">
          <div className="DetailBaju">
            <p className="TitleBaju">
              <b>Vintage USA t-shirt</b>
            </p>
            <p className="Hapus">Remove</p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Price</b>
            </p>
            <p className="HargaBaju">Rp.100.000,00</p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Quantity</b>
            </p>
            <p className="QuantityBaju ">
              <CounterInput
                className="QuantityCounter"
                min={0}
                max={10}
                onCountChange={(count) => console.log(count)}
              />
            </p>
          </div>
        </Col>
        <Col sm="2" className="ColProduk">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Total</b>
            </p>
            <p className="HargaBaju">Rp.300.000,00</p>
          </div>
        </Col>
      </Row>
      <Row className="SubtotalCard">
        <Col sm="2" className="SubTotalDetail"></Col>
        <Col sm="4" className="SubTotalDetail"></Col>
        <Col sm="2" className="SubTotalDetail">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>SubTotal</b>
            </p>
          </div>
        </Col>
        <Col sm="2" className="SubTotalDetail"></Col>
        <Col sm="2" className="SubTotalDetail">
          <div className="PriceHarga">
            <p className="JudulTable">
              <b>Rp.1000.000.000,00</b>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="RowCard">
        <Col sm="6" className="BlankKiri"></Col>
        <Col sm="6" className="ButtonKanan">
          <Button variant="success" className="Btn-AddtoCart">
            PURCHASE
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default Cartpage;
