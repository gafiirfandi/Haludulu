import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import EmptyCart from "../components/pages/EmptyCart";
import AddItem from "../components/pages/AddItem";
import UpdateItem from "../components/pages/UpdateItem";
import AboutUs from "./pages/AboutUs";
import Detail from "../components/pages/Detail";
import Cart from "../components/pages/Cart";
import Navbar from "../components/Navbar";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/detail/:productId" exact component={Detail} />
          <Route path="/update_item" exact component={UpdateItem} />
          <Route path="/add_item" exact component={AddItem} />
          <Route path="/about_us" exact component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
