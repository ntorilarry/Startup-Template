import React from "react";
import StartupImg from "../assets/startupImg.png";
import ReadMoreReact from "read-more-react";

function Banner() {
  return (
    <div className="dark:bg-[#0B0D39]">
      <section>
        <div className="relative py-12 overflow-hidden sm:py-16 lg:py-20">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-[#F2FBFC] dark:bg-[#1A1C46] rounded-2xl">
            <div className="max-w-6xl mx-auto ">
              <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 xl:gap-x-24 ">
                <div className="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:order-2 lg:text-left">
                  <h1
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-once="true"
                    className="mt-5 text-3xl font-bold text-gray-900 lg:mt-8 sm:text-4xl xl:text-5xl xl:leading-tight dark:text-white"
                  >
                    Fire up your Rocket
                  </h1>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="text-base font-light text-gray-600 dark:text-white"
                  >
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
                  <div className="mt-10 lg:mt-14">
                    <form action="#" className="mt-4 lg:mt-5">
                      <div className="mt-3 dark:text-white">
                        <button
                          data-aos="fade-left"
                          data-aos-delay="400"
                          type="submit"
                          className="
                                            inline-flex
                                            w-full
                                            lg:w-auto
                                            items-center
                                            justify-center
                                            px-6
                                            py-3
                                            text-base
                                            font-bold
                                            leading-7
                                            text-white
                                            transition-all
                                            duration-200
                                            bg-[#356DFF]
                                            border border-transparent
                                            rounded-md
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                            hover:bg-gray-600
                                            focus:ring-offset-[#356DFF]
                                        "
                        >
                          Let's Discuss
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="relative lg:order-1">
                  <div className="relative">
                    <img
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="w-full max-w-xs mx-auto xl:max-w-sm"
                      src={StartupImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
