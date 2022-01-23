import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Intro from "../../components/sections/about-section/Intro";
import Involvements from "../../components/sections/about-section/Involvements";
import Skills from "../../components/sections/about-section/Skills";

const About = () => {
  return (
    <div className="py-0 px-4 dark:bg-gray-700">
      <Header />
      <div className="min-h-screen w-full dark:bg-gray-700">
        <Intro />
        <Involvements />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default About;
