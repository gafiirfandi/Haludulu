import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Detailpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import axios from "./axios";
import { setCurrentCart } from "../redux/cart/cart.action";
// import CounterInput from "react-bootstrap-counter";
import CounterInput from "react-counter-input";
function Detailpage(props) {
  const [size, handleSize] = useState("Size");
  const [stock, setStock] = useState(1);
  const [product, setProduct] = useState([]);
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState("");
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
    // const data = JSON.parse(localStorage.getItem("currentCart"));
    // const data = localStorage.getItem("currentCart");
    // console.log(typeof data);
    // data.push({ id: id, size: size, stock: stock });
    // localStorage.set Item("currentCart", JSON.stringify(data));
    // const localStorageCart = localStorage.getItem("currentCart");
    // console.log(data);
    // localStorageCart.push({ id: id, size: size, stock: stock });
    // localStorage.setItem("currentCart", localStorageCart);
    // listProductCart.push({ id: id, size: size, stock: stock });
    // handleProductCart(listProductCart);
    // console.log(product);
  };

  // const findSize = () => {
  //   console.log(size);
  //   if (size == "S") {
  //     return product.sizeSStock;
  //   } else if (size == "M") {
  //     return product.sizeSStock;
  //   } else if (size == "L") {
  //     return product.sizeSStock;
  //   } else if (size == "XL") {
  //     return product.sizeSStock;
  //   }
  // };

  return (
    <div className="DetailContainer">
      <Row>
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
                    className="Btn-addtocart">
                    ADD TO CART
                  </Button>
                  <Button
                    onClick={() => console.log(listProductCart, " yey")}
                    variant="dark"
                    className="Btn-SoldOut">
                    SOLD OUT
                  </Button>
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

// const mapStateToProps = (state) = ({
//   currentCart: "tes",
// });

export default Detailpage;
