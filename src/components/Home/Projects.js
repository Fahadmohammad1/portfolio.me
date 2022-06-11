import React from "react";
import perfume from "../../assets/images/perfume.png";
import mars from "../../assets/images/mars.png";
import photographer from "../../assets/images/photographer.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="my-7">
      <h2 className="text-center text-primary text-2xl my-10 ">
        ___Projects___
      </h2>
      <div>
        <div class=" flex items-center justify-center">
          <div class="grid lg:grid-cols-3 gap-8 px-12">
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={perfume}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="https://perfumes-warhouse.web.app/"
                class="hover:text-primary text-gray-200 font-semibold"
              >
                {" "}
                PERFUME STOCKPILE
              </a>

              <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
                Warehouse Management Website
              </span>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="https://github.com/Fahadmohammad1/perfume-stockpile-client"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Client
                </a>
                <a
                  href="https://github.com/Fahadmohammad1/perfume-stockpile-server"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Server
                </a>
                <span class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={mars}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="https://mars-technology-630b3.web.app/"
                class="hover:text-primary text-gray-200 font-semibold"
              >
                MARS TECHNOLOGY
              </a>

              <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
                Manufacturer Company Website
              </span>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="https://github.com/Fahadmohammad1/manufacturer-website-client"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Client
                </a>
                <a
                  href="https://github.com/Fahadmohammad1/manufacturer-website-server"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Server
                </a>
                <span class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={photographer}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="https://personal-wedding-photographer.web.app/"
                class="hover:text-primary text-gray-200 font-semibold"
              >
                SINDID'S PHOTOGRAPHY
              </a>

              <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
                Photgrapher Website
              </span>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="https://github.com/Fahadmohammad1/personal-photographer"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Client
                </a>
                <span class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
