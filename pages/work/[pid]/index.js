import Header from "../../../components/Header";
import { projects } from "../../../utils/data";
import { ChevronLeft } from "react-feather";
import Carousel from "../../../components/Carousel";
import Link from "next/link";

const Project = (props) => {
  const { project } = props;
  console.log(project);
  const { id, title, image, images, description } = project;

  console.log(images);
  return (
    <div className="py-0 px-4 font-mono tracking-tighter min-h-screen">
      <header className="h-12 flex w-full justify-start items-center border-b border-violet-100">
        <Link href="/work">
          <a className="flex items-center">
            <ChevronLeft className="h-10 text-violet-600" />
            Works
          </a>
        </Link>
      </header>

      <h2 className="text-center">{project.title}</h2>
      <p className="text-center"> Details coming soon....</p>
      {/* for carousel */}
      <div className="h-[50vh] w-11/12 mx-auto sm:w-4/5 md:w-3/5">
        <Carousel data={images} />
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
