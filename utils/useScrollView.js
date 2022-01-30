import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScrollView = (thresh = 0.6) => {
  const animation = useAnimation();
  const [element, isInView] = useInView({ threshold: thresh });

  if (isInView) {
    animation.start("enter");
  } else {
    animation.start("exit");
  }

  return [element, animation];
};
