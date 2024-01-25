"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Transition() {
  return (
    <>
      <motion.div
        className=" right-full w-screen h-screen fixed top-0 bottom-0 z-30 bg-primary"
        initial={{ x: "100%", width: "100%", opacity: 1 }}
        animate={{ x: "0%", width: "0%", opacity: 0 }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className=" right-full w-screen h-screen fixed top-0 bottom-0 z-20 bg-light"
        initial={{ x: "100%", width: "100%", opacity: 1 }}
        animate={{ x: "0%", width: "0%", opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}
