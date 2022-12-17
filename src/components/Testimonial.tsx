import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonial.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
    return (
      <div className="dark:bg-[#0B0D39]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#F2FBFC] dark:bg-[#1A1C46] rounded-2xl">
          <section className="text-gray-600 ">
            <div className="container px-5 mx-auto">
              <div className="mx-auto text-center">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#FF9100] uppercase rounded-full bg-[#FF9100] bg-opacity-25">
                  Testimonials
                </p>
              </div>
              <h2 className="max-w-lg mb-6 text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-white">
                Trusted by 100's <br /> of clients{" "}
                <div className="flex flex-col items-center justify-center">
                  <div className="flex -space-x-4">
                    <img
                      alt=""
                      className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?1"
                    />
                    <img
                      alt=""
                      className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?2"
                    />
                    <img
                      alt=""
                      className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?3"
                    />
                    <img
                      alt=""
                      className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?4"
                    />
                    <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full bg-gray-900 text-gray-100 border-gray-700">
                      +3
                    </span>
                  </div>
                </div>
              </h2>
              <div className="flex flex-wrap -m-4">
                <div className="p-4  w-full">
                  <Slider {...settings}>
                    <div className=" bg-white dark:bg-[#2B2D5B] dark:text-white p-8 mx-4 rounded-2xl test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/106x106"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900 dark:text-white">
                            Holden Caulfield
                          </span>
                          <span className="text-gray-500 text-sm dark:text-white">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="bg-white dark:bg-[#2B2D5B] dark:text-white mx-4 p-8 rounded-2xl test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6 dark:text-white">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/106x106"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900 dark:text-white">
                            Holden Caulfield
                          </span>
                          <span className="text-gray-500 text-sm dark:text-white">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className=" bg-white dark:bg-[#2B2D5B] dark:text-white mx-4 p-8 rounded-2xl test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/106x106"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900 dark:text-white">
                            Holden Caulfield
                          </span>
                          <span className="text-gray-500 text-sm dark:text-white">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className=" bg-white dark:bg-[#2B2D5B] dark:text-white mx-4 p-8 rounded-2xl test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/106x106"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900 dark:text-white">
                            Holden Caulfield
                          </span>
                          <span className="text-gray-500 text-sm dark:text-white">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className=" bg-white dark:bg-[#2B2D5B] dark:text-white mx-4 p-8 rounded-2xl test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/106x106"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900 dark:text-white">
                            Holden Caulfield
                          </span>
                          <span className="text-gray-500 text-sm dark:text-white">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className=" bg-white dark:bg-[#2B2D5B] dark:text-white mx-4 p-8 rounded-2xl test">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/106x106"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900 dark:text-white">
                            Holden Caulfield
                          </span>
                          <span className="text-gray-500 text-sm dark:text-white">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
