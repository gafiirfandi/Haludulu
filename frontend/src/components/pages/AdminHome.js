import React from "react";
import Homepage from "../Homepage";

function Home({ products }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Homepage products={products} admin={true} />
    </div>
  );
}

export default Home;
