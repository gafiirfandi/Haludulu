import React from "react";
import UpdateItempage from "../UpdateItempage";

function UpdateItem(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <UpdateItempage id={props.location.state.id} {...props} />
    </div>
  );
}

export default UpdateItem;
