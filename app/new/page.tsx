"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }: any) => {
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
      className="w-screen h-screen flex items-center justify-center"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      whileInView="visible">
      <h1 className="p-[3rem] bg-[orange] rounded">Box {num} </h1>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
  );
}
