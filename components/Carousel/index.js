import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { CSSTransition } from "react-transition-group";
import { AnimatePresence, motion } from "framer-motion";

const Carousel = ({ data }) => {
  //states for managing image carousel
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState("right");

  //   function to handle arrow click
  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setIndex((prev) => (prev + data.length - 1) % data.length);
  };

  //variants for carousel's images
  const imageVariants = {
    initial: {
      opacity: 0,
      x: direction === "right" ? "-400" : "400",
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? "400" : "-400",
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  };

  return (
    // image carousel container div
    <div className="w-full h-full shadow-md rounded-md px-4 py-1 relative flex flex-col justify-center items-center overflow-hidden">
      {/* container for images */}
      <div className="w-full h-5/6 relative overflow-hidden">
        {/* currently selected image based on index */}
        <AnimatePresence>
          <motion.img
            className="w-full h-full object-fill sm:object-cover object-center rounded-md absolute left-0"
            src={`/assets/${data[index]}`}
            alt="project"
            key={index}
            variants={imageVariants}
            initial={imageVariants.initial}
            animate={imageVariants.enter}
            exit={imageVariants.exit}
          />
        </AnimatePresence>
      </div>
      {/* conatiner for left and right chevron icons */}
      <div className="w-11/12 flex justify-between absolute text-violet-500">
        {/* left chevron icon */}
        <span className="bg-gray-100 rounded-full">
          <ChevronLeft onClick={handlePrev} />
        </span>
        {/* right chevron icon */}
        <span className="bg-gray-100 rounded-full">
          <ChevronRight onClick={handleNext} />
        </span>
      </div>
      {/* container for small buttons/dots on the buttom to indicate current image selection */}
      <div className="flex justify-center my-1  ">
        {/* small button for current image */}
        {data.map((item, i) => (
          <span
            key={i}
            className={`mx-1 h-4 w-4 bg-slate-300 rounded-full ${
              index === i ? "outline outline-violet-600" : ""
            }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
