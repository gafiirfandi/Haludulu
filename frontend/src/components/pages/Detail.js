import React from "react";
import Detailpage from "../Detailpage";

function Detail(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Detailpage id={props.location.state.id} {...props}/>
    </div>
  );
}

export default Detail;
