import React, { useState } from "react";
import "./ItemAddpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "./axios";

function ItemAddpage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [minus, setMinus] = useState("");
  const [condition, setCondition] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [sizeSStock, setSizeSStock] = useState(0);
  const [sizeMStock, setSizeMStock] = useState(0);
  const [sizeLStock, setSizeLStock] = useState(0);
  const [sizeXLStock, setSizeXLStock] = useState(0);

  const [labelMainImg, setLabelMainImg] = useState("");
  const [labelImg1, setLabelImg1] = useState("");
  const [labelImg2, setLabelImg2] = useState("");
  const [labelImg3, setLabelImg3] = useState("");

  const handleSubmit = () => {
    // console.log(name);
    // console.log(price);
    // console.log(minus);
    // console.log(condition);
    // console.log(mainImg);
    // console.log(img1);
    // console.log(img2);
    // console.log(img3);
    // console.log(sizeSStock);
    // console.log(sizeMStock);
    // console.log(sizeLStock);
    // console.log(sizeXLStock);

    var formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("minus", minus);
    formData.append("condition", condition);
    formData.append("mainImg", mainImg);
    formData.append("img1", img1);
    formData.append("img2", img2);
    formData.append("sizeSStock", sizeSStock);
    formData.append("sizeMStock", sizeMStock);
    formData.append("sizeLStock", sizeLStock);
    formData.append("sizeXLStock", sizeXLStock);
    // var imagefile = document.querySelector("#file");
    // formData.append("image", imagefile.files[0]);
    console.log(formData);
    axios
      .post("/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(console.log("berhasil"));
    console.log("hello");

    alert("Succesfully add product");
  };

  return (
    <div className="AddItemContainer">
      <div className="JudulPageAdd">
        <p className="TitleAddItem">ADD ITEM</p>
      </div>

      <div className="DuaColumnAddItem">
        <Row>
          <Col lg="6" className="ColumnKiri">
            <div className="KiriFormAddItem">
              <Form.Group method="POST">
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Product Name</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="text"
                      placeholder="Name"
                      onChange={(ev) => setName(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Price</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="text"
                      placeholder="Price"
                      onChange={(ev) => setPrice(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Minus</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="text"
                      placeholder="Minus"
                      onChange={(ev) => setMinus(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Condition</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="text"
                      placeholder="Condition"
                      onChange={(ev) => setCondition(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Main Image</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form>
                      <Form.File
                        className="Input-FileAddItem"
                        label={labelMainImg}
                        custom
                        onChange={(ev) => {
                          // console.log(ev.target.value[]);
                          setLabelMainImg(ev.target.value);
                          setMainImg(ev.target.files[0]);
                        }}
                      />
                    </Form>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>1st Demo Image</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form>
                      <Form.File
                        className="Input-FileAddItem"
                        label={labelImg1}
                        custom
                        onChange={(ev) => {
                          setLabelImg1(ev.target.value);
                          setImg1(ev.target.files[0]);
                        }}
                      />
                    </Form>
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
          </Col>
          <Col lg="6" className="ColumnKanan">
            <div className="KananFormAddItem">
              <Form.Group>
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>2nd Demo Image</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form>
                      <Form.File
                        className="Input-FileAddItem"
                        label={labelImg2}
                        custom
                        onChange={(ev) => {
                          setLabelImg2(ev.target.value);
                          setImg2(ev.target.files[0]);
                        }}
                      />
                    </Form>
                  </Col>
                </Form.Row>
                {/* <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>3rd Demo Image</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form>
                      <Form.File
                        className="Input-FileAddItem"
                        label={labelImg3}
                        custom
                        onChange={(ev) => {
                          setLabelImg3(ev.target.value);
                          setImg3(ev.target.files[0]);
                        }}
                      />
                    </Form>
                  </Col>
                </Form.Row>
                <br /> */}
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Size S Stock</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="number"
                      placeholder="Size S"
                      min="0"
                      onChange={(ev) => setSizeSStock(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Size M Stock</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="number"
                      placeholder="Size M"
                      min="0"
                      onChange={(ev) => setSizeMStock(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Size L Stock</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="number"
                      placeholder="Size L"
                      min="0"
                      onChange={(ev) => setSizeLStock(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Size XL Stock</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      className="Input-Box"
                      type="number"
                      placeholder="Size XL"
                      min="0"
                      onChange={(ev) => setSizeXLStock(ev.target.value)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </div>
      <div className="ButtonAddItem">
        <Button
          type="submit"
          variant="success"
          onClick={() => handleSubmit()}
          className="Btn-AddItem">
          ADD ITEM
        </Button>
      </div>
    </div>
  );
}

export default ItemAddpage;
