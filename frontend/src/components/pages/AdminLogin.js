import axios from "../axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn } from "../../redux/admin/admin.action";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
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

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);

  //   useEffect(() => {

  //   }, [isLoggedIn])

  const handleLogin = () => {
    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    axios.post("/api/login", formData);
  };

  return (
    <div className="LoginContainerPage">
      <div className="LoginForm">
        <div className="InputDiv">
          <div className="BarisSatuLogin">
            <p className="DetailInput">
              <b>Email: </b>{" "}
            </p>
            <input
              className="InputJawab"
              type="text"
              placeholder="Username "
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
          <div className="BarisDuaLogin">
            <p className="DetailInput">
              <b>Passsword: </b>{" "}
            </p>
            <input
              className="InputJawab"
              type="password"
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
        </div>

        <button onClick={() => handleLogin()} className="ButtonLogin">
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
