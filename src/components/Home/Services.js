import React from "react";
import javascript from "../../assets/images/javascript.png";
import backend from "../../assets/images/backend.png";
import mern from "../../assets/images/mern (1).png";

const Services = () => {
  return (
    <div className="lg:px-7 px-5">
      <h2 className="text-primary text-2xl text-center my-7">
        ___What I do___
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div class="card max-w-sm mb-4 transition ease-in-out delay-100 bg-white hover:bg-primary hover:scale-90 shadow-xl mx-auto">
            <div class="card-body">
              <img className="w-2/3 mx-auto" src={javascript} alt="" />
              <h2 class="card-title text-xl">FrontEnd</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card max-w-sm mb-4 transition ease-in-out delay-150 bg-white hover:bg-primary hover:scale-90 shadow-xl mx-auto">
            <div class="card-body">
              <img className="w-2/3 mx-auto" src={backend} alt="" />
              <h2 class="card-title">BackEnd</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card max-w-sm  transition ease-in-out delay-150 bg-white hover:bg-primary hover:scale-90 shadow-xl mx-auto">
            <div class="card-body">
              <img className="w-2/3 mx-auto" src={mern} alt="" />
              <h2 class="card-title">MERN Stack</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
