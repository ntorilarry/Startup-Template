import React from "react";
import ReadMoreReact from "read-more-react";
import "../styles/features.css";
import PDimg from "../assets/Saly-27.png";
import BRimg from "../assets/Saly-10.png";
import CBimg from "../assets/Saly-13.png";
import OMimg from "../assets/Saly-43.png";

function Features() {
  return (
    <div className="dark:bg-[#0B0D39]" id="features">
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-once="true"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#F2FBFC] dark:bg-[#1A1C46] rounded-2xl"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
          <div className="mx-auto text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#FF9100] uppercase rounded-full bg-[#FF9100] bg-opacity-25">
              features
            </p>
          </div>
          <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-center text-gray-900 sm:text-4xl md:mx-auto dark:text-white">
            Your Dream Template
          </h2>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center mx-auto w-32 h-32 mb-4 rounded-full bg-white dark:bg-white dark:bg-opacity-[7%]">
                <img src={PDimg} alt="" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-center dark:text-white">
                Product Design
              </h6>
              <p className="mb-3 text-sm text-center text-gray-900 dark:text-white">
                <ReadMoreReact
                  text={
                    "Startups typically begin by a founder (solo-founder) or co-founders who have a way to solve a problem. The founder of a startup will begin market validation by problem interview, solution interview, and building a minimum viable product (MVP), i.e. a prototype, to develop and validate their business models. The startup process can take a long period of time (by some estimates, three years or longer), and hence sustaining effort is required. Over the long term, sustaining effort is especially challenging because of the high failure rates and uncertain outcomes."
                  }
                  min={80}
                  ideal={100}
                  max={200}
                  readMoreText={"Read more"}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 rounded shadow-sm">
            <div>
              <div className="flex items-center mx-auto justify-center w-32 h-32 mb-4 rounded-full bg-white dark:bg-white dark:bg-opacity-[7%]">
                <img src={BRimg} alt="" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-center dark:text-white">
                Branding
              </h6>
              <p className="mb-3 text-sm text-center text-gray-900 dark:text-white">
                <ReadMoreReact
                  text={
                    "Startups typically begin by a founder (solo-founder) or co-founders who have a way to solve a problem. The founder of a startup will begin market validation by problem interview, solution interview, and building a minimum viable product (MVP), i.e. a prototype, to develop and validate their business models. The startup process can take a long period of time (by some estimates, three years or longer), and hence sustaining effort is required. Over the long term, sustaining effort is especially challenging because of the high failure rates and uncertain outcomes."
                  }
                  min={80}
                  ideal={100}
                  max={200}
                  readMoreText={"Read more"}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 rounded shadow-sm">
            <div>
              <div className="flex items-center mx-auto justify-center w-32 h-32 mb-4 rounded-full bg-white dark:bg-white dark:bg-opacity-[7%]">
                <img src={CBimg} alt="" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-center dark:text-white">
                Coding & Programming
              </h6>
              <p className="mb-3 text-sm text-center text-gray-900 dark:text-white">
                <ReadMoreReact
                  text={
                    "Startups typically begin by a founder (solo-founder) or co-founders who have a way to solve a problem. The founder of a startup will begin market validation by problem interview, solution interview, and building a minimum viable product (MVP), i.e. a prototype, to develop and validate their business models. The startup process can take a long period of time (by some estimates, three years or longer), and hence sustaining effort is required. Over the long term, sustaining effort is especially challenging because of the high failure rates and uncertain outcomes."
                  }
                  min={80}
                  ideal={100}
                  max={200}
                  readMoreText={"Read more"}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 rounded shadow-sm">
            <div>
              <div className="flex items-center mx-auto justify-center w-32 h-32 mb-4 rounded-full bg-white dark:bg-white dark:bg-opacity-[7%]">
                <img src={OMimg} alt="" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-center dark:text-white">
                Online Marketing
              </h6>
              <p className="mb-3 text-sm text-center text-gray-900 dark:text-white">
                <ReadMoreReact
                  text={
                    "Startups typically begin by a founder (solo-founder) or co-founders who have a way to solve a problem. The founder of a startup will begin market validation by problem interview, solution interview, and building a minimum viable product (MVP), i.e. a prototype, to develop and validate their business models. The startup process can take a long period of time (by some estimates, three years or longer), and hence sustaining effort is required. Over the long term, sustaining effort is especially challenging because of the high failure rates and uncertain outcomes."
                  }
                  min={80}
                  ideal={100}
                  max={200}
                  readMoreText={"Read more"}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
