import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/auth/auth.action";
import "./AdminLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Spinner } from "react-bootstrap";

function AdminLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isSpinner, setIsSpinner] = useState(false);
  const [failedLogIn, setFailedLogin] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (isLoggedIn != null) props.history.push("/admin_home");
  }, [isLoggedIn]);

  useEffect(() => {
    if (error != null) {
      setIsSpinner(false);
      setFailedLogin(true);
    }
  }, [error]);

  const handleLogin = () => {
    setIsSpinner(true);
    try {
      dispatch(actions.authLogin(username, password));
    } catch (error) {
      console.log(error);
    }

    console.log(isLoggedIn);
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
              className="Input-Control"
              type="text"
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
              className="Input-Control"
              type="password"
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </Form.Group>
          <div className="text-center buttonandspinner">
            <Button
              className="ButtonLogin"
              variant="primary"
              type="button"
              onClick={() => handleLogin()}
            >
              <b>Login</b>
            </Button>
            <Spinner
              animation="border"
              role="status"
              className={`loadingSpinnerlogin ${
                isSpinner ? "showSpinner" : "hideSpinner"
              }`}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
          {failedLogIn && (
            <p className="failedLogin">
              Login failed, incorrect username and password
            </p>
          )}
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
