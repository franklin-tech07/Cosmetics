import React from "react";

const Products = () => {
  return (
    <>
      <h1 className="P-heading">Featured Products</h1>
      <div className="products">
        <div className="cards">
          <div id="p1"></div>
          <div className="price">100Le</div>
          <button>Order Now</button>
        </div>
        <div className="cards">
          <div id="p2"></div>
          <div className="price">100Le</div>
          <button>Order Now</button>
        </div>
        <div className="cards">
          <div id="p3"></div>
          <div className="price">100Le</div>
          <button>Order Now</button>
        </div>
        <div className="cards">
          <div id="p4"></div>
          <div className="price">100Le</div>
          <button>Order Now</button>
        </div>
      </div>
      <p className="seeMore">See More...</p>
    </>
  );
};

export default Products;
