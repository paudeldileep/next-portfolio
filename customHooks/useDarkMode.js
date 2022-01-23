// import { useEffect, useState } from "react";

// export default function useDarkMode() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
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
//   return [theme, toggleTheme];
// }
