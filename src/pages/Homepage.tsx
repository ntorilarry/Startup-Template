import React from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Blog/>
    </div>
  );
}

export default Home;
