import React from "react";
import { motion } from "framer-motion";
import {
  leftEnterVariants,
  rightEnterVariants,
} from "../../../utils/motionVariants";
import { useScrollView } from "../../../utils/useScrollView";

const Intro = () => {
  const [element, animation] = useScrollView();
  return (
    <div
      className="block md:flex md:flex-nowrap w-full my-20 py-10 font-mono tracking-tighter"
      ref={element}
    >
      <motion.h1
        variants={leftEnterVariants}
        initial="initial"
        animate={animation}
        exit="exit"
        className="text-4xl font-bold text-center w-full md:w-1/2 h-48 flex flex-nowrap justify-center items-center"
      >
        Hello, I&apos;m <span className="text-violet-500 ml-4">Dileep</span>
      </motion.h1>
      <motion.p
        variants={rightEnterVariants}
        initial="initial"
        animate={animation}
        exit="exit"
        className=" text-justify text-xl lg:text-2xl w-full md:w-1/2 min-h-[48] flex flex-nowrap justify-center items-center relative px-4"
      >
        A tech enthusiast who is keen on learning new technology. Currently
        working as a full time faculty member at Nepal College of Information
        Technology (Kathmandu,Nepal). As a side hustle, I love to play with web
        and mobile app development, primarily with JS.
      </motion.p>
    </div>
  );
};

export default Intro;
