import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //variants for pages
  const pageVariants = {
    initial: {
      opacity: 0,
      display: "none",
    },
    enter: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      key={router.route}
      initial={pageVariants.initial}
      animate={pageVariants.enter}
      exit={pageVariants.exit}
      variants={pageVariants}
      className="overflow-hidden"
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  );
}

export default MyApp;
