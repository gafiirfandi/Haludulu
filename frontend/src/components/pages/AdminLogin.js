import axios from "../axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/auth/auth.action";
// import { setLoggedIn } from "../../redux/admin/auth.action";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

function AdminLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  //   useEffect(() => {

  //   }, [isLoggedIn])

  const handleLogin = () => {
    // var formData = new FormData();
    // formData.append("username", username);
    // formData.append("password", password);
    // axios.post("/api/login", formData);
    dispatch(actions.authLogin(username, password));
    props.history.push("/admin_home");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
}

export default AdminLogin;
