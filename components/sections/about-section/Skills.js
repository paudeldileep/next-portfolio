import React from "react";
import { skills } from "../../../utils/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="py-10 my-20 font-mono tracking-tighter">
      <h1 className="text-4xl font-bold text-center w-full h-32 ">
        I&apos;m confident with...
      </h1>
      <div className="w-full mx-10 flex flex-wrap px-4 py-2 justify-center items-center">
        {/* dynamic grid cards for showing skills data */}
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
