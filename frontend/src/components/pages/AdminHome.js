import React from "react";
import Homepage from "../Homepage";

import { useSelector, useDispatch } from "react-redux";

function Home({ products, setShowSearch }) {
  const auth = useSelector((state) => state.auth.token);

  return (
    <div style={{ overflow: "hidden" }}>
      <Homepage
        products={products}
        admin={true}
        setShowSearch={setShowSearch}
      />
    </div>
  );
}

export default Home;
