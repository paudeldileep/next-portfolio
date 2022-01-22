import Link from "next/link";
import React, { useState } from "react";
import { AlignRight } from "react-feather";

import MainNavigation from "./Navigation/MainNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";

const Header = () => {
  //toggle mobile menu
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header className="flex flex-wrap md:flex-nowrap w-full justify-between items-center bg-gray-50 px-2 py-1 sticky top-0 z-10 rounded-t-md filter backdrop-blur-md bg-opacity-20 border-b border-violet-100">
      {/* left side logo */}
      <div className="flex w-full md:w-max md:flex-shrink-0 justify-between items-center">
        <Link href="/">
          <a>
            <img
              src="/icon.png"
              alt="logo"
              className="h-10 rounded-full border-2 transition transform hover:scale-110 hover:border-violet-500"
            />
          </a>
        </Link>
        {/* mobile nav button */}
        <button
          className="justify-self-end md:hidden items-center justify-center text-violet-600 bg-gray-100 rounded-full p-1 transition transform hover:scale-110 hover:bg-violet-600 hover:text-gray-100 focus:outline-none focus:shadow-outline"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <AlignRight />
        </button>
      </div>
      {/* right side nav */}
      <div className="w-full block md:w-max py-2">
        <MainNavigation />
        {showMobileNav && <MobileNavigation />}
      </div>
    </header>
  );
};

export default Header;
