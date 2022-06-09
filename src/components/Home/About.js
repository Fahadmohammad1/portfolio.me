import React from "react";
import image from "../../assets/images/my-pic.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section class="relative py-16 bg-blueGray-200 lg:mt-48 mt-72">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-[#2E3B52] w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div>
                  <img
                    alt="..."
                    src={image}
                    class="h-auto rounded-lg align-middle border-none absolute -m-20 -ml-20 lg:-ml-24 w-48"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div class="py-6 px-3 mt-32 sm:mt-0">
                  <button class="btn btn-sm lg:btn-md btn-outline text-[#62F9D5] hover:bg-[#62F9D5] hover:text-[#0A192F]">
                    Connect
                  </button>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <h2>
                      <FaGithub className="text-3xl text-[#62F9D5]" />
                    </h2>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <h2>
                      <FaLinkedin className="text-3xl text-[#62F9D5]" />
                    </h2>
                  </div>
                  <div class="lg:mr-4 p-3 text-center">
                    <h2>
                      <FaFacebook className="text-3xl text-[#62F9D5]" />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-12">
              <h3 class="text-4xl font-semibold leading-normal mb-2 text-white">
                Fahad Bin Nur
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Chattagram, Bangladesh
              </div>
              <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                National University, Bangladesh
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a href="#pablo" class="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
