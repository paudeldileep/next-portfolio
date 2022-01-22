import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ data }) => {
  //states for managing image carousel
  const [index, setIndex] = React.useState(0);

  //   function to handle arrow click
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev + data.length - 1) % data.length);
  };

  return (
    // image carousel container div
    <div className="w-full h-full shadow-md rounded-md px-4 py-1 relative flex flex-col justify-center items-center">
      {/* container for images */}
      <div className="transition-all duration-200 w-full h-5/6">
        {/* currently selected image based on index */}
        <img
          className="w-full h-full object-fill sm:object-cover object-center rounded-md"
          src={`/assets/${data[index]}`}
          alt="project"
        />
      </div>
      {/* conatiner for left and right chevron icons */}
      <div className="w-11/12 flex justify-between absolute text-violet-500">
        {/* left chevron icon */}
        <span className="bg-gray-100 rounded-full">
          <ChevronLeft onClick={handlePrev} />
        </span>
        {/* right chevron icon */}
        <span className="bg-gray-100 rounded-full">
          <ChevronRight onClick={handleNext} />
        </span>
      </div>
      {/* container for small buttons/dots on the buttom to indicate current image selection */}
      <div className="flex justify-center my-1  ">
        {/* small button for current image */}
        {data.map((item, i) => (
          <span
            key={i}
            className={`mx-1 h-4 w-4 bg-slate-300 rounded-full ${
              index === i ? "outline outline-violet-600" : ""
            }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
