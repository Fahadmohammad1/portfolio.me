import React from "react";
import coding from "../../assets/images/coding.gif";

const Banner = () => {
  return (
    <div className="container mx-auto lg:px-10 px-3 lg:mb-0 mb-16">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={coding} class="w-50 lg:w-auto rounded-xl" alt="" />
          <div className="text-white lg:w-2/3">
            <p className="text-[#62F9D5] lg:pl-1">Hi, Iam Fahad</p>
            <h1 class="lg:text-7xl text-4xl font-bold py-2">
              MERN Stack Web Developer
            </h1>
            <p class="py-6">
              I have mid-level experience in developing full-stack dynamic
              websites. I gather knowledge in various parts of frontend
              development by myself and with the help of a web development
              course by Jhankar Mahbub. I did some full-stack projects with
              React js, Node js, Express js, and Mongo DB. My goal is to become
              an awesome full-stack developer.
            </p>
            <button class="btn btn-sm lg:btn-md btn-outline text-[#62F9D5] hover:bg-[#62F9D5] hover:text-[#0A192F]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
