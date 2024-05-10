"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

const Hover = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1 }}
      initial={{ scale: 1 }}
      //   animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      className="flex items-center justify-center gap-2 hover:font-semibold">
      {isHovered && (
        <motion.div
          className="parent-hover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          [
        </motion.div>
      )}
      <motion.div
        className="child-box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        {props.name}
      </motion.div>
      {isHovered && (
        <motion.div
          className="parent-hover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          ]
        </motion.div>
      )}
    </motion.div>
  );
};

export default Hover;
