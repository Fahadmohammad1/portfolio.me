import React from "react";
import perfume from "../../assets/images/perfume.png";

const Projects = () => {
  return (
    <div className="my-7">
      <h2 className="text-center text-primary text-2xl ">___Projects___</h2>
      <div>
        <div class="h-scree flex items-center justify-center">
          <div class="grid grid-cols-6 gap-2 px-16">
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={perfume}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="/"
                class="hover:text-purple-500 text-gray-200 font-semibold"
              >
                {" "}
                VALORANT{" "}
              </a>

              <a
                href="/"
                class="hover:text-purple-500 text-sm text-gray-400 -mt-1"
              >
                {" "}
                78.4K viewers{" "}
              </a>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="/"
                  class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  {" "}
                  Shooter{" "}
                </a>
                <a
                  href="/"
                  class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
                >
                  {" "}
                  FPS{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
