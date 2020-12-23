import React, { useState } from "react";
import "./ItemAddpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "./axios";

function ItemAddpage() {
  const [name, handleName] = useState("");
  const [price, handlePrice] = useState("");
  const [minus, handleMinus] = useState("");
  const [condition, handleCondition] = useState("");
  const [mainImg, handleMainImg] = useState("");
  const [img1, handleImg1] = useState("");
  const [img2, handleImg2] = useState("");
  const [img3, handleImg3] = useState("");
  const [sizeSStock, handleSizeSStock] = useState(0);
  const [sizeMStock, handleSizeMStock] = useState(0);
  const [sizeLStock, handleSizeLStock] = useState(0);
  const [sizeXLStock, handleSizeXLStock] = useState(0);

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
    formData.append("img3", img3);
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
          <Col sm="6" lg>
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
                      onChange={(ev) => handleName(ev.target.value)}
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
                      onChange={(ev) => handlePrice(ev.target.value)}
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
                      onChange={(ev) => handleMinus(ev.target.value)}
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
                      onChange={(ev) => handleCondition(ev.target.value)}
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
                        label="Custom file input"
                        custom
                        onChange={(ev) => handleMainImg(ev.target.files[0])}
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
                        label="Custom file input"
                        custom
                        onChange={(ev) => handleImg1(ev.target.files[0])}
                      />
                    </Form>
                  </Col>
                </Form.Row>
              </Form.Group>
            </div>
          </Col>
          <Col sm="6" lg>
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
                        label="Custom file input"
                        custom
                        onChange={(ev) => handleImg2(ev.target.files[0])}
                      />
                    </Form>
                  </Col>
                </Form.Row>
                <br />
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
                        label="Custom file input"
                        custom
                        onChange={(ev) => handleImg3(ev.target.files[0])}
                      />
                    </Form>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row className="SebarisInput">
                  <Form.Label column lg={2}>
                    <p className="Label-Input">
                      <b>Size S Stock</b>
                    </p>
                  </Form.Label>
                  <Col>
                    <Form.Control
                      as="select"
                      size="sm"
                      custom
                      className="Input-Box-Size"
                      onChange={(ev) => handleSizeSStock(ev.target.value)}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
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
                      as="select"
                      size="sm"
                      custom
                      className="Input-Box-Size"
                      onChange={(ev) => handleSizeMStock(ev.target.value)}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
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
                      as="select"
                      size="sm"
                      custom
                      className="Input-Box-Size"
                      onChange={(ev) => handleSizeLStock(ev.target.value)}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
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
                      as="select"
                      size="sm"
                      custom
                      className="Input-Box-Size"
                      onChange={(ev) => handleSizeXLStock(ev.target.value)}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
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
