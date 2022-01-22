import React from "react";

const BasicLoader = () => {
  return (
    <div className="w-full bg-gray-100 animate-pulse dark:bg-gray-700 z-50">
      <div className="bg-violet-600 text-xs font-medium text-gray-100 text-center p-0.5 leading-none w-full">
        {" "}
        100%
      </div>
    </div>
  );
};

export default BasicLoader;
