import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Detail from "../components/pages/Detail";
import Cart from "../components/pages/Cart";
import Navbar from "../components/Navbar";

import "./App.css"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/detail" exact component={Detail} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
