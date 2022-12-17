import React from "react";
import BeneIMG from "../assets/beneIMG.png";

function About() {
  return (
    <div className="dark:bg-[#0B0D39]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl dark:text-white font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
                From design to code and back.
              </h2>
              <p className="text-sm text-gray-700 dark:text-white">
                Startups typically begin by a founder (solo-founder) or
                co-founders who have a way to solve a problem. The founder of a
                startup will begin market validation by problem interview,
                solution interview, and building a minimum viable product (MVP),
                i.e. a prototype, to develop and validate their business models.
                The startup process can take a long period of time (by some
                estimates, three years or longer), and hence sustaining effort
                is required. Over the long term, sustaining effort is especially
                challenging be cause of the high failure rates and uncertain
                outcomes.
              </p>
              <a
                href="#_"
                className="box-border relative mt-4 z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-[#356DFF] rounded-md cursor-pointer group border-2 border-[#356DFF]  hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  Let's discuss
                </span>
              </a>
            </div>
          </div>
          <div className="relative lg:w-[40%] bg-[#F2FBFC] dark:bg-[#1A1C46]">
            <img
              className="object-cover w-full h-56 rounded sm:h-96"
              src={BeneIMG}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
