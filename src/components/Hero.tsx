import React, { useEffect } from "react";
import HeroImg from "../assets/Group 25.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="dark:bg-[#0B0D39]">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-once="true"
                  className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
                >
                  The <span className="text-[#356DFF]">template</span> your
                  startup needed
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-once="true"
                  className="mt-2 text-lg text-gray-600 dark:text-white dark:opacity-75 sm:mt-4 font-inter"
                >
                  A startup or start-up is a company or project undertaken by an
                  entrepreneur to seek, develop, and validate a scalable
                  business model.
                </p>

                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-once="true"
                  className="flex items-center justify-center mt-4 space-x-5 lg:justify-start"
                >
                  <a
                    href="#_"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-[#356DFF] rounded-md cursor-pointer group border-2 border-[#356DFF]  hover:ring-offset-indigo-500 ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                      Let's discuss
                    </span>
                  </a>

                  <a
                    href="#_"
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-[#356DFF] dark:text-white  transition-all duration-300 bg-none border-2 border-[#356DFF] rounded-md cursor-pointer group ring-offset-2  ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                      Learn more
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="true"
                className="w-full"
                src={HeroImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
