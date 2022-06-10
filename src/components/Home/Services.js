import React from "react";
import javascript from "../../assets/images/javascript-logo.gif";
import node from "../../assets/images/node.gif";

const Services = () => {
  return (
    <div className="px-5">
      <h2 className="text-primary text-2xl text-center my-7">
        <span className="text-primary">___</span>
        What I do<span className="text-primary">___</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div class="card w-96 transition ease-in-out delay-100 bg-accent hover:bg-primary shadow-xl mx-auto">
            <div class="card-body">
              <img className="w-2/3 mx-auto" src={javascript} alt="" />
              <h2 class="text-white text-xl">FrontEnd</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 transition ease-in-out delay-150 bg-accent hover:bg-primary shadow-xl mx-auto">
            <div class="card-body">
              <img className="w-2/3 mx-auto" src={node} alt="" />
              <h2 class="card-title">FrontEnd</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 transition ease-in-out delay-150 bg-secondary hover:bg-primary shadow-xl mx-auto">
            <div class="card-body">
              <img className="w-2/3 mx-auto" src={javascript} alt="" />
              <h2 class="card-title">FrontEnd</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
