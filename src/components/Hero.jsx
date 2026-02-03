import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="info">
          <h1>Cosmetics Store</h1>
          <p>Quality skincare & beauty products for everyday confidence</p>
          <a href="">
            <button>Order On Whatsapp</button>
          </a>
        </div>
        <div className="hero-img"></div>
      </div>
    </>
  );
};

export default Hero;
