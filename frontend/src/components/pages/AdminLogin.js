import axios from "../axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/auth/auth.action";
// import { setLoggedIn } from "../../redux/admin/auth.action";
import { Redirect } from "react-router-dom";

import "./AdminLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown,
  Button,
  Spinner,
} from "react-bootstrap";

function AdminLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.token);

  //   useEffect(() => {

  //   }, [isLoggedIn])
  useEffect(() => {
    if (isLoggedIn != null) props.history.push("/admin_home");
  }, [isLoggedIn]);

  const handleLogin = () => {
    // var formData = new FormData();
    // formData.append("username", username);
    // formData.append("password", password);
    // axios.post("/api/login", formData);
    dispatch(actions.authLogin(username, password));
    // console.log(value);
    // if (isLoggedIn != null) props.history.push("/admin_home");
  };

  return (
    <div className="LoginContainer">
      <div className="LoginBox">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="LabelText">
              <b>Username</b>{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Username"
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="LabelText">
              {" "}
              <b>Password</b>{" "}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <Button
              className="ButtonLogin"
              variant="primary"
              type="submit"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>

    // <div className="LoginContainerPage">
    //   <div className="LoginForm">
    //     <div className="InputDiv">
    //       <div className="BarisSatuLogin">
    //         <p className="DetailInput">
    //           <b>Email: </b>{" "}
    //         </p>
    //         <input
    //           className="InputJawab"
    //           type="text"
    //           placeholder="Username "
    //           onChange={(ev) => setUsername(ev.target.value)}
    //         />
    //       </div>
    //       <div className="BarisDuaLogin">
    //         <p className="DetailInput">
    //           <b>Passsword: </b>{" "}
    //         </p>
    //         <input
    //           className="InputJawab"
    //           type="password"
    //           placeholder="Password"
    //           onChange={(ev) => setPassword(ev.target.value)}
    //         />
    //       </div>
    //     </div>

    //     <button onClick={() => handleLogin()} className="ButtonLogin">
    //       Login
    //     </button>
    //   </div>
    // </div>
  );
}

export default AdminLogin;
