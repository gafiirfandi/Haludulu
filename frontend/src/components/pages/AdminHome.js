import React from "react";
import Homepage from "../Homepage";

function Home({ products, setShowSearch }) {
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
