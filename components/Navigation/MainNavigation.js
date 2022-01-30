import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import { useRouter } from "next/router";
import CustomSwitch from "../CustomSwitch";
import { getStaticProps } from "../../pages/work/[pid]";
import { motion } from "framer-motion";

const MainNavigation = (props) => {
  const router = useRouter();
  const pathName = router.pathname;

  const ActiveIndex = () => {
    switch (pathName) {
      case "/":
        return 0;
      case "/about":
        return 1;
      case "/work":
        return 2;
      case "/contact":
        return 3;
      default:
        return 0;
    }
  };
  const [activeLink, setActiveLink] = useState(ActiveIndex());

  const MotionLink = motion(Link);

  //changing active link on click
  const handleClick = (index) => {
    setActiveLink(index);
  };

  //link container variant
  const linkContainerVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        //for children
        staggerChildren: 2,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
    },
  };
  //variants for each link element
  const linkVariants = {
    initial: {
      opacity: 0,
      y: "-100vw",
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vw",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <motion.nav
      className="justify-around hidden md:flex"
      variants={linkContainerVariants}
      initial="initial"
      animate={navLinks.length > 0 && "enter"}
      exit={navLinks.length > 0 && "exit"}
    >
      {/* navigation links */}
      {navLinks.map((link, index) => (
        <motion.div
          key={index}
          variants={linkVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link href={link.href}>
            <a
              className={`mx-3 px-4 text-violet-700 dark:text-gray-50 font-bold font-mono text-lg ${
                activeLink === index
                  ? "border-b-2 border-b-violet-500 dark:border-b-gray-50"
                  : ""
              }`}
            >
              {link.name}
            </a>
          </Link>
        </motion.div>
      ))}
      {/* theme toggle */}
      <CustomSwitch handleClick={props.toggleTheme} />
    </motion.nav>
  );
};

export default MainNavigation;
