import Header from "../../../components/Header";
import { projects } from "../../../utils/data";
import { ChevronLeft } from "react-feather";
import Carousel from "../../../components/Carousel";
import Link from "next/link";

const Project = (props) => {
  const { project } = props;
  console.log(project);
  const { id, title, image, images, description, keywords } = project;

  console.log(images);
  return (
    <div className="py-0 px-4 font-mono tracking-tighter min-h-screen dark:bg-gray-700">
      <header className="h-12 flex w-full justify-start items-center border-b border-violet-100">
        <Link href="/work">
          <a className="flex items-center text-lg font-bold">
            <ChevronLeft className="h-10 text-violet-600 dark:text-violet-100" />
            Works
          </a>
        </Link>
      </header>

      <h2 className="text-center my-4 text-violet-500 dark:text-violet-200 text-2xl md:text-4xl">
        {title}
      </h2>
      {/* for carousel */}
      <div className="h-[50vh] w-11/12 mx-auto sm:w-4/5 md:w-3/5">
        <Carousel data={images} />
      </div>

      <div className="w-11/12 mx-auto sm:w-4/5 md:w-3/5 my-4 pl-2 flex flex-wrap justify-center items-center">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="inline-block text-violet-600 dark:text-violet-100 px-2 py-1 mr-2"
          >
            #{keyword}
          </span>
        ))}
      </div>

      <div className="w-11/12 mx-auto sm:w-4/5 md:w-3/5 my-4">
        <p className="text-gray-600 dark:text-gray-50 text-sm sm:text-base md:text-lg text-justify px-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({
      params: { pid: project.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {
      project: projects.find((project) => project.id === Number(params.pid)),
    },
  };
}
