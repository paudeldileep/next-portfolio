import React from "react";
import { involvements } from "../../../utils/data";
import InvolvementCard from "./InvolvementCard";

const Involvements = () => {
  return (
    <div className="block md:flex md:flex-nowrap w-full my-20 py-10 font-mono tracking-tighter">
      <h1 className=" text-2xl lg:text-4xl font-bold w-full h-[220] md:flex md:w-1/2 justify-center items-center text-center">
        Currently involved in...
      </h1>
      <div className="w-full md:w-1/2 h-full">
        {/* dynamic grid cards for showing involvements data */}
        <div className="flex flex-wrap lg:flex-shrink-0 justify-center items-center h-full mt-20 md:mt-10 lg:mt-auto">
          {involvements.map((involvement) => (
            <InvolvementCard key={involvement.id} {...involvement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Involvements;
