// // theme context api
// const { createContext } = React;
// import React, { useCallback, useEffect, useState } from "react";

// export const themeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   useCallback(() => {
//     //detect if dark mode is enabled
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       setTheme("light");
//       localStorage.setItem("theme", "light");
//     }
//   };

//   return (
//     <themeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </themeContext.Provider>
//   );
// };

// export default ThemeProvider;
