import axios from "../axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn } from "../../redux/admin/admin.action";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

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
