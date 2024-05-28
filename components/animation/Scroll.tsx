"use client";
import { easeIn, easeInOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Scrolls } from "@/types";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, easeInOut } },
  hidden: { opacity: 0, scale: 0.5 },
};

const Scroll: React.FC<Scrolls> = ({ children, className }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      whileInView="visible">
      {children}
    </motion.div>
  );
};

export default Scroll;
