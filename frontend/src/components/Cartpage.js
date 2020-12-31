import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cartpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown,
  Button,
  Spinner,
} from "react-bootstrap";
import CounterInput from "react-counter-input";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCart } from "../redux/cart/cart.action";
import { FcCheckmark } from "react-icons/fc";
import axios from "./axios";

function Cartpage() {
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handlePurchase = () => {
    setIsLoading(true);
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
    setIsLoading(false);
    setIsFinished(true);
    dispatch(setCurrentCart({}));

    alert("Succesfully add product");
  };

  const getPrice = (price) => {
    // console.log(price, "- price");
    let str_price = price.toString().split("").reverse().join("");
    let str_price_idr = "";
    let counter = 1;
    // console.log(str_price, "- str price");
    let len = str_price.length;
    for (let char in str_price) {
      str_price_idr += str_price[char];
      if (counter == 3 && char != len - 1) {
        counter = 0;
        str_price_idr += ".";
      }
      counter++;
    }
    // console.log(str_price_idr.split().reverse().join(""));
    return str_price_idr.split("").reverse().join("");
  };

  const getSubTotal = () => {
    let subtotal = 0;
    Object.keys(currentCart).map((key) => {
      subtotal += currentCart[key].price * currentCart[key].stock;
    });

    return subtotal;
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
                    <b>{currentCart[key].name}</b> (Size {currentCart[key].size}
                    )
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
                  <p className="HargaBaju">
                    Rp{getPrice(currentCart[key].price)}
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
              <Col xs={12} sm={12} md={2} xl={2} className="ColProduk ColTotal">
                <div className="PriceHarga">
                  <p className="JudulTable">
                    <b>Total</b>
                  </p>
                  <p className="HargaBaju">
                    Rp
                    {getPrice(currentCart[key].price * currentCart[key].stock)}
                  </p>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      {/* <div className="SubTotal"></div> */}
      {currentCart.length > 0 ? (
        <>
          <Row>
            <Col xs={6} sm={4} md={4} xl={3} className="ColSubtotal"></Col>
            <Col xs={6} sm={2} md={2} xl={3} className="ColSubtotal"></Col>
            <Col xs={6} sm={3} md={2} xl={2} className="ColSubtotal"></Col>
            <Col xs={6} sm={3} md={1} xl={2} className="ColSubtotal"></Col>
            <Col xs={12} sm={12} md={3} xl={2} className="ColSubtotal">
              <p align="center">
                <b>Subtotal</b>: Rp{getPrice(getSubTotal())}
              </p>
            </Col>
          </Row>
          <div className="ButtonDanEmail">
            <br />
            <p className="IsiEmail">
              <b>
                Please input your email for further detail about the payment
              </b>
            </p>
            <Form.Control
              className="Input-Email"
              type="text"
              placeholder="Email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <div className="ButtonandSpinner">
              <Button
                onClick={() => handlePurchase()}
                variant="success"
                className="Btn-Purchase">
                PURCHASE
              </Button>
              {/* <Spinner
            animation="border"
            role="status"
            className={`loadingSpinner ${
              isLoading ? "showItemCart" : "hideItemCart"
            }`}>
            <span className="sr-only">Loading...</span>
          </Spinner> */}
              <div className="Checklist">
                <FcCheckmark
                  className={`${isFinished ? "showItemCart" : "hideItemCart"}`}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="InformationEmptyCart">
          <h1 className="CartEmptyTitle">
            <b>YOUR CART IS CURRENTLY EMPTY</b>{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
