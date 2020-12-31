import React, { useState, useEffect } from "react";
import "./UpdateItempage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "../components/axios";

function UpdateItempage(props) {
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

  useEffect(() => {
    console.log(props.id);
    async function fetchData() {
      console.log(axios.defaults.baseURL + "/api");
      const request = await axios.get(
        axios.defaults.baseURL + "/api/" + props.id
      );
      console.log(request.data);
      setName(request.data[0].name);
      setPrice(request.data[0].price);
      setMinus(request.data[0].minus);
      setCondition(request.data[0].condition);
      setMainImg(request.data[0].main_img);
      setImg1(request.data[0].img1);
      setImg2(request.data[0].img2);
      setSizeSStock(request.data[0].size_s_stock);
      setSizeMStock(request.data[0].size_m_stock);
      setSizeLStock(request.data[0].size_l_stock);
      setSizeXLStock(request.data[0].size_xl_stock);
      // setStock(request.data[0].size_s_stock);
      // setMainImage(request.data[0].main_img);
      // console.log(request.data[0].sizeSStock, " stock s");
      // setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  const handleSubmit = () => {
    var formData = new FormData();
    formData.append("id", props.id);
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
    axios.post("/api/update_product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Succesfully update product");
  };

  return (
    <div className="UpdateItemContainer">
      <div className="JudulPageAdd">
        <p className="TitleUpdateItem">UPDATE ITEM</p>
      </div>
      <div className="DuaColumnUpdateItem">
        <Row>
          <Col lg="6" className="ColumnKiri">
            <div className="KiriFormUpdateItem">
              <Form.Group>
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
                      placeholder={name}
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
                      placeholder={price}
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
                      placeholder={minus}
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
                      placeholder={condition}
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
                        label="Main image"
                        custom
                        onChange={(ev) => {
                          // console.log(ev.target.value[]);
                          // setLabelMainImg(ev.target.value);
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
                        label=""
                        custom
                        onChange={(ev) => {
                          // setLabelImg1(ev.target.value);
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
                        label=""
                        custom
                        onChange={(ev) => {
                          // setLabelImg2(ev.target.value);
                          setImg2(ev.target.files[0]);
                        }}
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
          onClick={() => handleSubmit()}
          variant="success"
          className="Btn-AddItem">
          UPDATE
        </Button>{" "}
      </div>
    </div>
  );
}

export default UpdateItempage;
