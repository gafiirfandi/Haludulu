import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import EmptyCart from "../components/pages/EmptyCart";
import AddItem from "../components/pages/AddItem";
import UpdateItem from "../components/pages/UpdateItem";
import AboutUs from "./pages/AboutUs";
import Detail from "../components/pages/Detail";
import Cart from "../components/pages/Cart";
import NavbarPage from "../components/NavbarPage";
import { setCurrentCart } from "../redux/cart/cart.action";
import rootReducer from "../redux/root-reducer";

import "./App.css";
import Footer from "./Footer";

function App() {
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  // const dispatch = useDispatch(dispatch => )

  useEffect(() => {
    localStorage.setItem("currentCart", [{ id: 1, size: "S" }]);
  }, []);

  return (
    <>
      {/* <div>
        <h1>Cart: {currentCart}</h1>
      </div> */}
      <Router>
        {/* <NavbarPage /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route
            path="/detail/:productId"
            exact
            render={(props) => <Detail {...props} />}
          />
          <Route path="/update_item" exact component={UpdateItem} />
          <Route path="/add_item" exact component={AddItem} />
          <Route path="/about_us" exact component={AboutUs} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
