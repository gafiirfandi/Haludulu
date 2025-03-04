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
import AdminHome from "./pages/AdminHome";
import Detail from "../components/pages/Detail";
import Cart from "../components/pages/Cart";
import AdminLogin from "../components/pages/AdminLogin";
import NavbarPage from "../components/NavbarPage";
import { setCurrentCart } from "../redux/cart/cart.action";
import rootReducer from "../redux/root-reducer";

import axios from "./axios";

import "./App.css";
import Footer from "./Footer";
// import AdminLogin from "./pages/AdminLogin";

function App() {
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  // const dispatch = useDispatch(dispatch => )
  const [productsFixed, setProductsFixed] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("null");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      console.log(searchKeyword);
      if (searchKeyword == "null") {
        console.log("if");
        console.log(axios.defaults.baseURL + "/api");
        const request = await axios.get(axios.defaults.baseURL + "/api");
        console.log(request.data);
        setProducts(request.data);
        setProductsFixed(request.data);
        // setMovies(request.data.results);
        return request;
      } else if (searchKeyword == "") {
        console.log("else if");
        console.log(products);
        setProducts([...productsFixed]);
        return products;
      } else {
        console.log("else");
        const filterProduct = [...productsFixed];
        const filter = filterProduct.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(searchKeyword.toLowerCase());
        });
        console.log(filter, "- filter");
        setProducts([...filter]);
        return filter;
      }
    }
    fetchData();
  }, [searchKeyword]);

  return (
    <>
      {/* <div>
        <h1>Cart: {currentCart}</h1>
      </div> */}
      <Router>
        <Route
          path="/"
          render={(props) => (
            <NavbarPage
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              setSearchKeyword={setSearchKeyword}
              {...props}
            />
          )}
        />

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                setSearchKeyword={setSearchKeyword}
                products={products}
                setShowSearch={setShowSearch}
              />
            )}
          />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route
            path="/detail/:productId"
            exact
            render={(props) => <Detail {...props} />}
          />
          <Route
            path="/update_item/:productId"
            exact
            render={(props) => <UpdateItem {...props} />}
          />
          <Route path="/add_item" exact component={AddItem} />
          <Route path="/about_us" exact component={AboutUs} />
          <Route
            path="/admin_home"
            exact
            render={() => (
              <AdminHome products={products} setShowSearch={setShowSearch} />
            )}
          />
          <Route
            path="/login_admin"
            exact
            render={(props) => <AdminLogin {...props} />}
          />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
