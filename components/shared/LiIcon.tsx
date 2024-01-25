import { useScroll } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export default function LiIcon({
  reference,
}: {
  reference: React.RefObject<HTMLLIElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: reference,
    //target's center accross the end of the viewport as a start time of animation
    //the center of the target accross the end of the viewport as a end time of animation
    offset: ["start end", "end center"],
  });

  return (
    <figure className=" absolute left-[-26.4%] max-lg:left-[-20.5%] dark:stroke-light stroke-dark">
      <svg className=" -rotate-90 max-lg:w-4/5 h-4/5" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className=" stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        ></circle>
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx={75}
          cy={50}
          r={20}
          className=" stroke-[5px] fill-light dark:fill-dark"
        ></motion.circle>
        <circle
          cx={75}
          cy={50}
          r={10}
          className=" animate-pulse stroke-1  fill-primary dark:fill-primaryDark"
        ></circle>
      </svg>
    </figure>
  );
}
