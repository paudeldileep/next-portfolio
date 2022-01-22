import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import { useRouter } from "next/router";

const MainNavigation = () => {
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

  //changing active link on click
  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="justify-around hidden md:flex">
      {/* navigation links */}
      {navLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a
            className={`mx-3 px-4 text-violet-700 font-bold font-mono text-lg ${
              activeLink === index ? "italic" : ""
            }`}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default MainNavigation;
