import React from "react";
import Header from "../../components/Header";
import { projects } from "../../utils/data";
import WorkCard from "../../components/sections/works-section/WorkCard";
import Footer from "../../components/Footer";

const Work = () => {
  return (
    <div className="py-0 px-4 font-mono tracking-tighter dark:bg-gray-700">
      <Header />
      <div className="min-h-screen w-full my-10 mx-5 py-4 px-2">
        <h2 className="text-center text-3xl mb-10">Projects Done So Far...</h2>
        <div className="block lg:flex lg:flex-wrap justify-center items-center">
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
