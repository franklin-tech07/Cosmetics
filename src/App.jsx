import { useState } from "react";

import "./App.css";

import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Howitworks from "./components/Howitworks";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Howitworks />
      <CTA />
    </>
  );
}

export default App;
