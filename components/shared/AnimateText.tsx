"use client";

import { motion } from "framer-motion";
interface TextParams {
  className?: string;
  text: string;
}

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AnimateText({ className, text = "" }: TextParams) {
  return (
    <div className=" w-full items-center flex justify-center text-center mx-auto py-2 overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize 2xl:text-7xl ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            className=" inline-block"
            key={word + "-" + index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
