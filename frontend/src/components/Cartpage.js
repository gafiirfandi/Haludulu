import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cartpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Form, Dropdown, Button } from "react-bootstrap";
import CounterInput from "react-counter-input";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCart } from "../redux/cart/cart.action";
import { BsConeStriped } from "react-icons/bs";
import axios from "./axios";

function Cartpage() {
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handlePurchase = () => {
    console.log(currentCart);
    const cart = { ...currentCart };
    // cart["email"] = email;
    const str_email = JSON.stringify(email);
    const json_cart = JSON.stringify(cart);
    console.log(cart, " diz is cart");
    console.log(json_cart, " diz is json_cart");
    var formData = new FormData();
    formData.append("cart", json_cart);
    formData.append("email", email);
    axios.post("/purchase", formData).then(console.log("berhasil"));
    console.log("hello");

    alert("Succesfully add product");
  };

  const handleRemove = (id) => {
    const cart = currentCart;
    delete cart[id];
    dispatch(setCurrentCart({ ...cart }));
  };

  const handleStock = (id, stock) => {
    console.log(currentCart[id].stock_max, "- stock max");
    const cart = currentCart;
    cart[id].stock = stock;
    dispatch(setCurrentCart({ ...cart }));
  };

  return (
    <div className="CartContainer">
      <div className="JudulCart">
        <h1 className="TitleCart">CART</h1>
        <Link to="/">
          <p className="DetailJudul">Continue shopping</p>
        </Link>
      </div>
      <Row className="RowCard">
        {Object.keys(currentCart).map((key) => {
          return (
            <>
              <Col xs={6} sm={4} md={4} xl={3} className="ColProduk">
                <div className="GambarBaju">
                  <img
                    src={currentCart[key].main_img}
                    className="ProductImage"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={6} sm={2} md={2} xl={3} className="ColProduk">
                <div className="DetailBaju">
                  <p className="TitleBaju">
                    <b>{currentCart[key].name}</b>
                  </p>
                  <p className="Hapus" onClick={() => handleRemove(key)}>
                    Remove
                  </p>
                </div>
              </Col>
              <Col
                xs={6}
                sm={3}
                md={2}
                xl={2}
                className="ColProduk ColHargaQuantity">
                <div className="PriceHarga">
                  <p className="JudulTable">
                    <b>Price</b>
                  </p>
                  <p className="HargaBaju">Rp.{currentCart[key].price}</p>
                </div>
              </Col>
              <Col
                xs={6}
                sm={3}
                md={2}
                xl={2}
                className="ColProduk ColHargaQuantity">
                <div className="PriceHarga">
                  <p className="JudulTable">
                    <b>Quantity</b>
                  </p>
                  <p className="QuantityBaju ">
                    <CounterInput
                      className="QuantityCounter"
                      min={0}
                      count={currentCart[key].stock}
                      max={currentCart[key].stock_max}
                      onCountChange={(count) => handleStock(key, count)}
                    />
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={2} xl={2} className="ColProduk">
                <div className="PriceHarga">
                  <p className="JudulTable">
                    <b>Total</b>
                  </p>
                  <p className="HargaBaju">
                    Rp.{currentCart[key].price * currentCart[key].stock}
                  </p>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      <div className="ButtonDanEmail">
        <p className="IsiEmail">
          <b>Please input your email for further detail about the payment</b>
        </p>
        <Form.Control
          className="Input-Email"
          type="text"
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <Button
          onClick={() => handlePurchase()}
          variant="success"
          className="Btn-Purchase">
          PURCHASE
        </Button>
      </div>
    </div>
  );
}

export default Cartpage;
