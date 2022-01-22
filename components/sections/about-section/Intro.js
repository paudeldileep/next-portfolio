import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className="block md:flex md:flex-nowrap w-full my-20 py-10 font-mono tracking-tighter">
      <h1 className="text-4xl font-bold text-center w-full md:w-1/2 h-48 flex flex-nowrap justify-center items-center">
        Hello, I&apos;m <span className="text-violet-500 ml-4">Dileep</span>
      </h1>
      <p className=" text-justify text-xl lg:text-2xl w-full md:w-1/2 min-h-[48] flex flex-nowrap justify-center items-center relative px-4">
        A tech enthusiast who is keen on learning new technology. Currently
        working as a full time faculty member at Nepal College of Information
        Technology (Kathmandu,Nepal). As a side hustle, I love to play with web
        and mobile app development, primarily with JS.
      </p>
    </div>
  );
};

export default Intro;
