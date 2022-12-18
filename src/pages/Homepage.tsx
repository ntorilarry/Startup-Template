import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Features from "../components/Features";
import Footer from "../components/Footer";
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
      <Blog />
      <Banner />
      <Footer/>
    </div>
  );
}

export default Home;
