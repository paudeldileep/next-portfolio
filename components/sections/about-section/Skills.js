import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { skills } from "../../../utils/data";
import {
  leftEnterVariants,
  rightEnterVariants,
} from "../../../utils/motionVariants";
import { useScrollView } from "../../../utils/useScrollView";
import SkillCard from "./SkillCard";

const Skills = () => {
  const MotionSkillCard = motion(SkillCard);
  const [element, animation] = useScrollView();

  //variants for child div
  const childVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    enter: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 1.5,
        delay: i * 0.2,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      scale: 0.5,
      transition: {
        ease: "linear",
        duration: 1,
        delay: 0.2,
      },
    }),
  };

  return (
    <div className="py-10 my-20 font-mono tracking-tighter" ref={element}>
      <AnimatePresence>
        <motion.h1
          className="text-4xl font-bold text-center w-full h-32 "
          variants={{
            initial: {
              opacity: 0,
              x: "-100vw",
            },
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            },
            exit: {
              opacity: 0,
              x: "-100vw",
              transition: {
                duration: 1,
              },
            },
          }}
          initial="initial"
          animate={animation}
          exit="exit"
        >
          I&apos;m confident with...
        </motion.h1>

        <motion.div
          ref={element}
          variants={rightEnterVariants}
          initial="initial"
          animate={animation}
          exit="exit"
          className="w-full mx-10 flex flex-wrap px-4 py-2 justify-center items-center"
        >
          {/* dynamic grid cards for showing skills data */}
          {skills.length > 0 &&
            skills.map((skill, i) => (
              <MotionSkillCard
                variants={childVariants}
                initial="initial"
                animate={() => childVariants.enter(i)}
                exit={() => childVariants.exit(i)}
                key={skill.id}
                {...skill}
              ></MotionSkillCard>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Skills;
