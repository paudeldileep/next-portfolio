import React from "react";

const InvolvementCard = (props) => {
  return (
    <div className="w-3/5 md:w-44 lg:w-48 p-4 lg:mx-5 xl:mx-auto lg:my-10 shadow-md shadow-violet-400 rounded-md h-52 mx-10 my-10 flex flex-col md:flex-shrink-0 md:flex-nowrap relative group transition-all duration-300 transform hover:scale-110 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent group-hover:via-violet-500 to-violet-600"></div>
      <div className="w-full h-full">
        <img
          src={`/assets/${props.image}`}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 group-hover:hidden">
        <h2 className="text-xl lg:text-base px-1 font-bold text-center text-gray-50 transition-all duration-300">
          {props.title}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0 w-full transition-all duration-300 group-hover:h-auto group-hover:bottom-10">
        <p className="text-lg lg:text-base px-1 text-center text-gray-50">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default InvolvementCard;
