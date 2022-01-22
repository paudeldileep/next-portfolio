import Link from "next/link";
import React from "react";
import { ExternalLink } from "react-feather";

const WorkCard = (props) => {
  const { project } = props;
  return (
    <div className="w-2/3 md:w-1/2 mx-auto lg:w-1/3 lg:mx-10 flex flex-col my-10 h-96 shadow-sm rounded-md shadow-violet-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-md hover:shadow-violet-600 overflow-hidden relative group">
      {/* overlay */}
      <div className="hidden group-hover:block w-full h-full bg-gray-100 opacity-75 absolute top-0 left-0 z-10"></div>
      {/* link button */}
      <div className="absolute top-5 right-5 z-10 rounded-full">
        <Link href={project.link}>
          <a>
            <ExternalLink className="text-violet-600 md:hidden md:group-hover:inline-block animate-bounce" />
          </a>
        </Link>
      </div>
      {/* image */}
      <img
        src={`/assets/${project.image}`}
        alt={project.title}
        className="w-full h-[80%] object-cover object-center rounded-md"
      />
      {/* title */}
      <div className="text-left h-[15%] flex items-center justify-center text-violet-500 text-xl font-bold uppercase tracking-wide ml-2 my-2">
        {project.title}
      </div>
    </div>
  );
};

export default WorkCard;
