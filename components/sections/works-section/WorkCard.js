import Link from "next/link";
import React from "react";
import { ExternalLink } from "react-feather";

const WorkCard = (props) => {
  const { project } = props;

  return (
    <>
      {/* overlay */}
      <div className="hidden group-hover:block w-full h-full bg-gray-100 dark:bg-violet-100 opacity-75 dark:opacity-50 absolute top-0 left-0 z-10"></div>
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
      <div className="text-left h-[15%] flex items-center justify-center text-violet-500 dark:text-violet-100  text-xl font-bold uppercase tracking-wide ml-2 my-2">
        {project.title}
      </div>
    </>
  );
};

export default WorkCard;
