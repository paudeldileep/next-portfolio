export const leftEnterVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 1,
    },
  },
};

export const rightEnterVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 1,
    },
  },
};

export const topEnterVariants = {
  initial: {
    opacity: 0,
    y: "-100vw",
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vw",
    transition: {
      duration: 1,
    },
  },
};
