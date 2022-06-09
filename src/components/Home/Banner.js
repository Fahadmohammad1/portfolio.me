import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-10">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-full shadow-2xl"
            alt=""
          />
          <div className="text-white">
            <p className="text-[#62F9D5] lg:pl-1">Hi, Iam Fahad</p>
            <h1 class="lg:text-7xl text-4xl font-bold">
              Iam a MERN Stack Web Developer
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
