import React from "react";
// import { useNavigate } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
