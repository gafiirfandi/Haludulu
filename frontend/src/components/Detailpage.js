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
  const [product, setProduct] = useState([]);
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState("");
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
      console.log(axios.defaults.baseURL + "/api");
      const request = await axios.get(
        axios.defaults.baseURL + "/api/" + props.id
      );
      console.log(request.data);
      setProduct(request.data[0]);
      setStock(request.data[0].size_s_stock);
      setMainImage(request.data[0].main_img);
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
                    <img src={mainImage} className="MainImage" alt="" />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="BajuDetail">
                    <div className="RincianDetail">
                      <img
                        src={product.main_img}
                        onClick={() => setMainImage(product.main_img)}
                        className="SubImage"
                        alt=""
                      />
                    </div>
                    <div className="RincianDetail">
                      <img
                        src={product.img1}
                        onClick={() => setMainImage(product.img1)}
                        className="SubImage"
                        alt=""
                      />
                    </div>
                    <div className="RincianDetail">
                      <img
                        src={product.img2}
                        onClick={() => setMainImage(product.img2)}
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
            <p className="TextDetail">Rp.{product.price}</p>
          </div>

          <Row>
            <Col sm="4" lg className="UkuranDabQuantityCol">
              <div className="UkurandanQuantity">
                <div className="Ukuran">
                  <p className="TextDetail">Size: </p>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="UkuranDropDown"
                    >
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
                      min={1}
                      max={stock}
                      onCountChange={(count) => console.log(count)}
                    />
                  </div>
                </div>
                <div className="DuaButton">
                  <Button
                    variant="success"
                    onClick={() => handleSubmit()}
                    className="Btn-addtocart"
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    onClick={() => console.log(listProductCart, " yey")}
                    variant="dark"
                    className="Btn-SoldOut"
                  >
                    SOLD OUT
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm="8" lg className="DeskripsidanKondisiCol">
              <div className="Description">
                <div className="JudulDescription">
                  <p className="TextDetail">Description</p>
                  <p>
                    Width {windowWidth} x Height {windowHeight}
                  </p>
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
