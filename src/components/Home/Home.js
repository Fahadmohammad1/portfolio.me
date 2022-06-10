import React from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About id="about" />
      <Services />
    </div>
  );
};

export default Home;
