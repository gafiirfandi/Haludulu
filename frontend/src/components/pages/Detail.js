import React, { useEffect } from "react";
import Detailpage from "../Detailpage";

function Detail(props) {
  useEffect(() => {
    console.log(
      props.location.pathname.slice(8, props.location.pathname.length),
      "pathname"
    );
    console.log(props.location.pathname);
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Detailpage
        id={props.location.pathname.slice(8, props.location.pathname.length)}
        {...props}
      />
    </div>
  );
}

export default Detail;
