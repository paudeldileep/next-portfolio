import React from "react";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import CustomSwitch from "../CustomSwitch";

const MobileNavigation = (props) => {
  return (
    <div className="block w-full transition-all transform translate-y-2 md:hidden divide-y-2">
      {/* navigation links */}
      {navLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="mx-4 my-2 px-1 block py-2 text-violet-700 font-bold font-mono">
            {link.name}
          </a>
        </Link>
      ))}
      <div className="ml-4 my-2 pt-4">
        <CustomSwitch handleClick={props.toggleTheme} />
      </div>
    </div>
  );
};

export default MobileNavigation;
