import React from "react";
import "./Emptycartpage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Emptycartpage() {
  return (
    <div className="EmptyContainer">
      <div className="JudulEmptyCart">
        <h1 className="TitleEmptyCart">CART</h1>
        <p className="DetailCartJudul">Continue shopping</p>
      </div>
      <div className="InformationEmptyCart">
        <h1 className="CartEmptyTitle">
          {" "}
          <b>YOUR CART IS CURRENTLY EMPTY</b>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Emptycartpage;
