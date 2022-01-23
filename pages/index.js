import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { words } from "../utils/data";
import Link from "next/link";

export default function Home() {
  //states for typing effect
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  //type effect with reverse logic
  useEffect(() => {
    // const interval = setInterval(() => {
    //   if (subIndex === words[index].length - 1) {
    //     setSubIndex(0);
    //     setReverse(!reverse);
    //   } else {
    //     setSubIndex(subIndex + 1);
    //   }
    // }, 100);
    // return () => clearInterval(interval);
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // //type effect with blink logic
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setBlink((prev) => !prev);
  //   }, 500);
  //   return () => clearTimeout(interval);
  // }, [blink]);

  return (
    <div className="py-0 px-4 bg-gray-50 dark:bg-gray-600">
      <Head>
        <title>Home:DKT</title>
        <meta name="description" content="Dileep Kumar T personal portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="flex min-h-screen w-full justify-between items-center relative font-mono tracking-tighter bg-gray-100 dark:bg-gray-700">
        <div className="w-full md:w-1/2 h-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-600 dark:text-gray-50">
            Hi, I&apos;m Dileep Kumar T
          </h1>
          {/* typing text  */}
          <h2 className="text-2xl lg:text-3xl my-4 font-bold text-center min-w-full m-auto px-2 relative">
            <span className="relative text-gray-500 dark:text-gray-100">
              I am{" "}
            </span>
            <span className="text-left text-violet-600 dark:text-violet-300">{`${words[
              index
            ].substring(0, subIndex)}${blink ? "|" : ""}`}</span>
          </h2>

          <p className=" text-lg flex items-baseline justify-center">
            {/* action buttons */}
            <Link href="/contact">
              <a className="bg-violet-600 border shadow-sm shadow-violet-400 hover:shadow-violet-500 border-violet-500 dark:shadow-slate-50 dark:shadow-sm hover:bg-violet-700 hover:shadow-md py-2 px-8 mx-2 rounded-md text-gray-100 font-bold hover:text-gray-50 dark:hover:shadow-white dark:hover:shadow-md">
                Contact Me
              </a>
            </Link>
            <Link href="/work">
              <a className="border border-violet-500 hover:border-violet-600 dark:shadow-slate-50 dark:shadow-sm hover:shadow-md shadow-violet-400 hover:shadow-violet-500 py-2 px-8 mx-3 rounded-md text-gray-500 dark:text-gray-50 font-bold hover:text-gray-600 dark:hover:shadow-white dark:hover:shadow-md">
                My Works
              </a>
            </Link>
          </p>
        </div>
        <div className="hidden h-full md:flex md:flex-shrink-0 md:flex-1 md:w-1/2 ">
          {/* div for background shape */}
          <div className="w-full h-5/6 flex-shrink-0 bg-contain bg-center bg-no-repeat bg-hero-blob md:py-10">
            <img
              src="/assets/dktPNG.png"
              alt="Dileep Kumar T"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1639881585">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className=" h-56 lg:h-36"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </main>

      <Footer />
    </div>
  );
}
