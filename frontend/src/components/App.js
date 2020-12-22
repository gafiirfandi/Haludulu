import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import EmptyCart from "../components/pages/EmptyCart";
import AddItem from "../components/pages/AddItem";
import UpdateItem from "../components/pages/UpdateItem";
import Usabout from "../components/pages/Usabout";
import Detail from "../components/pages/Detail";
import Cart from "../components/pages/Cart";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={UpdateItem} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
