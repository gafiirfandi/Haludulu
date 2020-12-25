import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cartpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import CounterInput from "react-counter-input";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCart } from "../redux/cart/cart.action";
function Cartpage() {
  const currentCart = useSelector((state) => state.cart.currentCart);
  // const [localCart, setLocalCart] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(currentCart);
    // console.log(localStorage.getItem("currentCart"));
  };

  // useEffect(() => {
  //   setLocalCart(currentCart);
  // }, []);

  const handleRemove = (id) => {
    const cart = currentCart;
    delete cart[id];

    // setLocalCart(cart);

    dispatch(setCurrentCart({ ...cart }));
  };

  // const handleClear = () => {
  //   const cart = currentCart;

  //   dispatch(clearCurrentCart());
  // };

  // useEffect(() => {
  //   console.log(id);
  //   async function fetchData() {
  //     currentCart.map((productCart) => {
  //       const request = await axios.get(axios.defaults.baseURL + "/api/" + productCart.id);
  //       let product = request.data[0]
  //     })
  //     // console.log(request.data[0].sizeSStock, " stock s");
  //     // setMovies(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="CartContainer">
      <div className="JudulCart">
        <h1 className="TitleCart">CART</h1>
        <Link to="/">
          <p className="DetailJudul">Continue shopping</p>
        </Link>
      </div>
      {Object.keys(currentCart).map((key) => {
        return (
          <Row className="RowCard">
            <Col sm="2" className="ColProduk">
              <div className="GambarBaju"></div>
            </Col>
            <Col sm="4" className="ColProduk">
              <div className="DetailBaju">
                <p className="TitleBaju">
                  <b>{currentCart[key].name}</b>
                </p>
                <p className="Hapus" onClick={() => handleRemove(key)}>
                  Remove
                </p>
              </div>
            </Col>
            <Col sm="2" className="ColProduk">
              <div className="PriceHarga">
                <p className="JudulTable">
                  <b>Price</b>
                </p>
                <p className="HargaBaju">Rp.{currentCart[key].price}</p>
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
                    count={currentCart[key].stock}
                    max={currentCart[key].sizeSStock}
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
                <p className="HargaBaju">
                  Rp.{currentCart[key].price * currentCart[key].stock}
                </p>
              </div>
            </Col>
          </Row>
        );
      })}
      {/* <Row className="RowCard">
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
      </Row> */}
      {/* <Row className="RowCard">
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
      </Row> */}
      <Row className="RowCard">
        <Col sm="6" className="BlankKiri"></Col>
        <Col sm="6" className="ButtonKanan">
          <Button
            onClick={() => handleSubmit()}
            variant="success"
            className="Btn-AddtoCart">
            PURCHASE
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Cartpage;
