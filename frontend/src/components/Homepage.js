import React, { useEffect, useState } from "react";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "./axios";
import { Link } from "react-router-dom";

function Homepage({ products, admin, setShowSearch }) {
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

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     console.log(axios.defaults.baseURL + "/api");
  //     const request = await axios.get(axios.defaults.baseURL + "/api");
  //     console.log(request.data);
  //     setProducts(request.data);
  //     // setMovies(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, []);

  const handleDelete = (id) => {
    axios.post("/api/delete_product", id);
  };

  return (
    <div className="HomePageContainer">
      <Row>
        {products.map((product) => {
          return (
            <Col xs="6" sm="6" lg className="ColumnBaju">
              <Link
                to={{
                  pathname: "/detail/" + product.id,
                  state: { id: product.id },
                }}>
                {/* <Link
                to={{
                  pathname: "/detail/" + product.id,
                  // search: "?sort=name",
                  // hash: "#the-hash",
                  state: { fromDashboard: true },
                }}> */}
                <div
                  className="BajuBox"
                  onClick={() => {
                    console.log("yey");
                    setShowSearch(false);
                  }}>
                  <img src={product.main_img} className="ImgBaju" alt="helo" />
                  {admin && (
                    <div className="ButtonAdmin">
                      <Link
                        to={{
                          pathname: "/update_item/" + product.id,
                          state: { id: product.id },
                        }}>
                        <button type="button" className="ButtonUpdate">
                          Update
                        </button>
                      </Link>
                      <Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          type="button"
                          className="ButtonDelete">
                          Delete
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </Link>
            </Col>
          );
        })}
        {/* <Col xs="6" sm="6" lg className="ColumnBaju">
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
        </Col> */}
      </Row>
    </div>
  );
}

export default Homepage;
