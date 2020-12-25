import React from "react";
import Cartpage from "../Cartpage";

function Detail(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Cartpage {...props} />
    </div>
  );
}

export default Detail;
