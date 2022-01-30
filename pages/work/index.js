import React from "react";
import Header from "../../components/Header";
import { projects } from "../../utils/data";
import WorkCard from "../../components/sections/works-section/WorkCard";
import Footer from "../../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Work = () => {
  //options for framer animation

  const workCardVariants = {
    initial: {
      opacity: 0,
      scale: 0.2,
    },
    enter: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: i * 0.1,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      scale: 0.2,
      transition: {
        type: "tween",
        duration: 1,
        delay: i * 0.1,
      },
    }),
  };
  return (
    <div className="py-0 px-4 font-mono tracking-tighter dark:bg-gray-700">
      <Header />
      <div className="min-h-screen w-full my-10 mx-5 py-4 px-2">
        <h2 className="text-center text-3xl mb-10">Projects Done So Far...</h2>
        <motion.div
          className="block lg:flex lg:flex-wrap justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <AnimatePresence>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={workCardVariants.initial}
                animate={() => workCardVariants.enter(i)}
                exit={() => workCardVariants.exit(i)}
                variants={workCardVariants}
                className="w-2/3 md:w-1/2 mx-auto lg:w-1/3 lg:mx-10 flex flex-col my-10 h-96 shadow-sm rounded-md shadow-violet-500 dark:shadow-gray-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-md dark:hover:shadow-sm hover:shadow-violet-600 dark:hover:shadow-slate-200 overflow-hidden relative group"
              >
                <WorkCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
