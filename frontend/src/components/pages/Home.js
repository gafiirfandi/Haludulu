import React from "react";
import Homepage from "../Homepage";

function Home({ products, setShowSearch, setSearchKeyword }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Homepage
        products={products}
        setShowSearch={setShowSearch}
        setSearchKeyword={setSearchKeyword}
      />
    </div>
  );
}

export default Home;
