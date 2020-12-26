import React from "react";
import Homepage from "../Homepage";

function Home({ products }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Homepage products={products} />
    </div>
  );
}

export default Home;
