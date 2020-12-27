import React, { useEffect } from "react";
import Detailpage from "../Detailpage";

function Detail(props) {
  useEffect(() => {
    console.log(
      props.location.pathname[props.location.pathname.length - 1],
      "pathname"
    );
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Detailpage
        id={props.location.pathname[props.location.pathname.length - 1]}
        {...props}
      />
    </div>
  );
}

export default Detail;
