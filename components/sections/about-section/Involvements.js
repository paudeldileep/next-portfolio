import { motion } from "framer-motion";
import React from "react";
import { involvements } from "../../../utils/data";
import {
  leftEnterVariants,
  rightEnterVariants,
} from "../../../utils/motionVariants";
import { useScrollView } from "../../../utils/useScrollView";
import InvolvementCard from "./InvolvementCard";

const Involvements = () => {
  //title variants
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
        className=" text-2xl lg:text-4xl font-bold w-full h-[220] md:flex md:w-1/2 justify-center items-center text-center"
      >
        Currently involved in...
      </motion.h1>
      <div className="w-full md:w-1/2 h-full">
        {/* dynamic grid cards for showing involvements data */}
        <motion.div
          variants={rightEnterVariants}
          initial="initial"
          animate={animation}
          exit="exit"
          className="flex flex-wrap lg:flex-shrink-0 justify-center items-center h-full mt-20 md:mt-10 lg:mt-auto"
        >
          {involvements.map((involvement) => (
            <InvolvementCard key={involvement.id} {...involvement} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Involvements;
