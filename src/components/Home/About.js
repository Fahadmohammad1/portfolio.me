import React from "react";
import image from "../../assets/images/my-pic.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" class="relative py-16 bg-blueGray-200 lg:mt-54 mt-80">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-accent w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div>
                  <img
                    alt="..."
                    src={image}
                    class="h-auto rounded-lg align-middle border-none absolute -m-20 -ml-[98px] lg:-ml-[100px] w-48"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div class="py-6 px-3 mt-32 sm:mt-0 flex justify-center">
                  <button class="btn btn-sm lg:btn-md btn-outline text-primary hover:bg-primary hover:text-[#0A192F]">
                    Connect
                  </button>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Fahadmohammad1"
                    >
                      <FaGithub className="text-3xl text-primary hover:text-white" />
                    </a>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/fahad-bin-nur/"
                    >
                      <FaLinkedin className="text-3xl text-primary hover:text-white" />
                    </a>
                  </div>
                  <div class="lg:mr-4 p-3 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/fahad.mohammad.397501"
                    >
                      <FaFacebook className="text-3xl text-primary hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-12 text-white">
              <h3 class="text-4xl font-semibold leading-normal mb-2">
                Fahad Bin Nur
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-primary font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Chattagram, Bangladesh
              </div>
              <div class="mb-2 text-primary mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Learner - Programming Hero
              </div>
              <div class="mb-2 text-primary">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                Student - National University, Bangladesh
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-white">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
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
