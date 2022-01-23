import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

const CustomSwitch = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (mounted) {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  if (!mounted) return null;
  return (
    <div className="flex">
      <div className="relative inline-block w-10 mr-2 align-middle select-none group">
        <input
          type="checkbox"
          name="toggle"
          id="purple"
          className="checked:bg-red-400 focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute inline w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onClick={toggleTheme}
        />
        <label
          htmlFor="purple"
          className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <span className="text-gray-400 font-medium">
        {theme === "dark" ? (
          <Sun color="orange" />
        ) : (
          <Moon color="black" fill="black" />
        )}
      </span>
    </div>
  );
};

export default CustomSwitch;
