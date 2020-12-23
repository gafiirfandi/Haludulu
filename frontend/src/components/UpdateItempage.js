import React from "react";
import "./UpdateItempage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Button } from "react-bootstrap";

function UpdateItempage() {
  return (
    <div className="UpdateItemContainer">
      <div className="JudulPageAdd">
        <p className="TitleUpdateItem">UPDATE ITEM</p>
      </div>
      <div className="DuaColumnUpdateItem">
        <Row>
          <Col sm="6" lg>
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
                      placeholder="Normal text"
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
                      placeholder="Normal text"
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
                      placeholder="Normal text"
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
                      placeholder="Normal text"
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
                    <Form.Control
                      className="Input-Box"
                      type="text"
                      placeholder="Normal text"
                    />
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
                        id="custom-file"
                        label="Custom file input"
                        custom
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
                        id="custom-file"
                        label="Custom file input"
                        custom
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
                        id="custom-file"
                        label="Custom file input"
                        custom
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
                    >
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
                    >
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
                    >
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
                    >
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
        <Button variant="success" className="Btn-AddItem">
          UPDATE
        </Button>{" "}
      </div>
    </div>
  );
}

export default UpdateItempage;
