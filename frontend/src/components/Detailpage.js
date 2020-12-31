import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Detailpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import Slider from "react-slick";
import axios from "./axios";
import { setCurrentCart } from "../redux/cart/cart.action";
import CounterInput from "react-counter-input";
import Aos from "aos";
import "aos/dist/aos.css";
import { FcCheckmark } from "react-icons/fc";
function useWindowSize() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Detailpage(props) {
  const [windowWidth, windowHeight] = useWindowSize();
  const [size, handleSize] = useState("Size");
  const [stock, setStock] = useState(1);
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [fade, setFade] = useState(false);
  const settingsCarousel = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false,
  };
  // const { id } = props.match.params;

  // const id = props.match;
  // console.log(id);

  useEffect(() => {
    console.log(props.id);
    async function fetchData() {
      console.log(axios.defaults.baseURL + "/api/" + props.id);
      const request = await axios.get(
        axios.defaults.baseURL + "/api/" + props.id
      );
      console.log(request.data);
      setProduct(request.data[0]);
      setStock(request.data[0].size_s_stock);
      setMainImage(request.data[0].main_img);
      setPrice(getPrice(request.data[0].price));
      // console.log(request.data[0].sizeSStock, " stock s");
      // setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (size == "S") {
      setStock(product.size_s_stock);
    } else if (size == "M") {
      setStock(product.size_m_stock);
    } else if (size == "L") {
      setStock(product.size_l_stock);
    } else if (size == "XL") {
      setStock(product.size_xl_stock);
    }
  }, [size]);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
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

  const handleSubmit = () => {
    const cart = currentCart;
    console.log(currentCart);
    if (size == "S") {
      cart[props.id] = {
        stock: stock,
        stock_max: product.size_s_stock,
        size: size,
        ...product,
      };
    } else if (size == "M") {
      cart[props.id] = {
        stock: stock,
        stock_max: product.size_m_stock,
        size: size,
        ...product,
      };
    } else if (size == "L") {
      cart[props.id] = {
        stock: stock,
        stock_max: product.size_l_stock,
        size: size,
        ...product,
      };
    } else if (size == "XL") {
      cart[props.id] = {
        stock: stock,
        stock_max: product.size_xl_stock,
        size: size,
        ...product,
      };
    }

    console.log(currentCart, " new Cart");
    dispatch(setCurrentCart(cart));
    setIsChecked(true);
  };

  return (
    <div className="DetailContainer">
      <Row data-aos="fade">
        {windowWidth <= 600 ? (
          <div className="container-fluid">
            <Slider {...settingsCarousel} className="slider1">
              <div className="GambarCorousal">
                <img
                  src={product.main_img}
                  onClick={() => setMainImage(product.main_img)}
                  className="SubImageCorousal"
                  alt=""
                />
              </div>
              <div className="GambarCorousal">
                <img
                  src={product.img1}
                  onClick={() => setMainImage(product.img1)}
                  className="SubImageCorousal"
                  alt=""
                />
              </div>
              <div className="GambarCorousal">
                <img
                  src={product.img2}
                  onClick={() => setMainImage(product.img2)}
                  className="SubImageCorousal"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        ) : (
          <Col lg="6" className="DetailKiri">
            <div className="KiriBaju">
              <Row>
                <Col sm={8}>
                  <div className="BajuUtama">
                    <img
                      src={mainImage}
                      className={`MainImage ${
                        fade ? "ImageFade" : "ImageNoFade"
                      }`}
                      id="RefreshMainImage"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="BajuDetail">
                    <div className="RincianDetail">
                      <img
                        data-aos="fade-in"
                        src={product.main_img}
                        onClick={async () => {
                          setMainImage(product.main_img);
                          setFade(true);
                          await sleep(500);
                          setFade(false);
                        }}
                        className="SubImage"
                        alt=""
                      />
                    </div>
                    <div className="RincianDetail">
                      <img
                        data-aos="fade-in"
                        src={product.img1}
                        onClick={async () => {
                          setMainImage(product.img1);
                          setFade(true);
                          await sleep(500);
                          setFade(false);
                        }}
                        className="SubImage"
                        alt=""
                      />
                    </div>
                    <div className="RincianDetail">
                      <img
                        data-aos="fade-in"
                        src={product.img2}
                        onClick={async () => {
                          setMainImage(product.img2);
                          setFade(true);
                          await sleep(500);
                          setFade(false);
                        }}
                        className="SubImage"
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        )}

        <Col lg="6" className="DetailKanan">
          <div className="JudulBaju">
            <p>
              <b className="JudulBajuBold">{product.name}</b>
            </p>
            <p className="TextDetail">Rp{price}</p>
          </div>

          <Row>
            <Col sm="4" lg className="UkuranDanQuantityCol">
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
                      <Dropdown.Item onClick={() => handleSize("S")}>
                        S
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSize("M")}>
                        M
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSize("L")}>
                        L
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSize("XL")}>
                        XL
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="Quantity">
                  <p className="TextDetail">Quantity:</p>
                  <div className="ButtonQuantity">
                    <CounterInput
                      className="CounterInputStock"
                      wrapperStyle={{
                        width: "min-content",
                      }}
                      btnStyle={{
                        fontSize: "14px",
                        width: "10px",
                        padding: 0,
                      }}
                      inputStyle={{
                        width: 24,
                        fontSize: "14px",
                      }}
                      min={1}
                      max={stock}
                      onCountChange={(count) => console.log(count)}
                    />
                  </div>
                </div>
                <div className="DuaButton">
                  {(product.size_s_stock != 0 ||
                    product.size_m_stock != 0 ||
                    product.size_l_stock != 0 ||
                    product.size_xl_stock != 0) && (
                    <Button
                      variant="success"
                      onClick={() => handleSubmit()}
                      className="Btn-addtocart">
                      ADD TO CART
                    </Button>
                  )}

                  <FcCheckmark
                    className={`${isChecked ? "showChecked" : "hideChecked"}`}
                  />
                  {product.size_s_stock == 0 &&
                    product.size_m_stock == 0 &&
                    product.size_l_stock == 0 &&
                    product.size_xl_stock == 0 && (
                      <Button
                        onClick={() => alert("Sorry it's sold out")}
                        variant="dark"
                        className="Btn-SoldOut">
                        SOLD OUT
                      </Button>
                    )}
                </div>
              </div>
            </Col>
            <Col sm="8" lg className="DeskripsidanKondisiCol">
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

// const mapStateToProps = (state) = ({
//   currentCart: "tes",
// });

export default Detailpage;
