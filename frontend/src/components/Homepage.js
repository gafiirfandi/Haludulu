import React, { useEffect, useState } from "react";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "./axios";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Homepage({ products, admin, setShowSearch, setSearchKeyword }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const getPrice = (price) => {
    let str_price = price.toString().split("").reverse().join("");
    let str_price_idr = "";
    let counter = 1;

    let len = str_price.length;
    for (let char in str_price) {
      str_price_idr += str_price[char];
      if (counter == 3 && char != len - 1) {
        counter = 0;
        str_price_idr += ".";
      }
      counter++;
    }

    return str_price_idr.split("").reverse().join("");
  };

  const handleDelete = (id) => {
    axios.post("/api/delete_product", id);
  };

  return (
    <div className="HomePageContainer">
      <Row>
        {products.map((product) => {
          return (
            <Col data-aos="fade-in" xs="6" sm="6" lg="3" className="ColumnBaju">
              <Link
                className="Link_BajuBox"
                to={{
                  pathname: "/detail/" + product.id,
                  state: { id: product.id },
                }}
              >
                <div
                  className="BajuBox"
                  onClick={() => {
                    console.log("yey");
                    setSearchKeyword("");
                    setShowSearch(false);
                  }}
                >
                  <img src={product.main_img} className="ImgBaju" alt="helo" />
                  {admin && (
                    <div className="ButtonAdmin">
                      <button type="button" className="ButtonUpdate">
                        <Link
                          className="LinkUpdate"
                          to={{
                            pathname: "/update_item/" + product.id,
                            state: { id: product.id },
                          }}
                        >
                          Update
                        </Link>
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        type="button"
                        className="ButtonDelete"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </Link>
              <div className="ProductHeader">
                <p className="ProductNameHomepage">
                  <b>{product.name}</b>
                </p>
                <p className="ProductPriceHomepage">
                  Rp{getPrice(product.price)}
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Homepage;
