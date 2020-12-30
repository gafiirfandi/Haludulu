import React from "react";
import Homepage from "../Homepage";
import "./AdminHome.css";

import { useSelector, useDispatch } from "react-redux";

function Home({ products, setShowSearch }) {
  const isLoggedIn = useSelector((state) => state.auth.token);

  if (isLoggedIn != null)
    return (
      <div style={{ overflow: "hidden" }}>
        <Homepage
          products={products}
          admin={true}
          setShowSearch={setShowSearch}
        />
      </div>
    );
  else {
    return (
      <div className="AdminHomeContainer">
        <h1 className="IsiAdminHome">
          {" "}
          <b>You dont have access to this page</b>{" "}
        </h1>
      </div>
    );
  }
}

export default Home;
