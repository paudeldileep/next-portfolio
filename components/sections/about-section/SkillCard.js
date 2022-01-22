import React from "react";

const SkillCard = (props) => {
  return (
    <div className="w-24 flex flex-nowrap flex-shrink-0 h-24 mx-5 my-4 rounded-md overflow-hidden relative transition-all transform group">
      <div className="w-full h-full absolute bg-gradient-to-b from-transparent group-hover:via-violet-500 to-transparent"></div>
      <img
        src={`/assets/${props.image}`}
        className="h-full w-full object-contain p-1"
      />
      <p className="text-lg text-center text-transparent self-center absolute w-full group-hover:text-gray-50 tracking-normal">
        {props.title}
      </p>
    </div>
  );
};

export default SkillCard;
