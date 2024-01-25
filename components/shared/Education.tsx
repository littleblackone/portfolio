import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface IEduParams {
  type: string;
  time: string;
  place: string;
  info: string;
}
const Details = ({ type, time, place, info }: IEduParams) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" relative flex flex-col items-center justify-between mx-auto "
    >
      <LiIcon reference={ref}></LiIcon>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="dark:text-light capitalize font-bold 2xl:text-2xl xl:text-xl text-lg">
          {type}&nbsp;
        </h3>
        <span className="dark:text-light/75 max-xl:text-[1.025rem] capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="dark:text-light max-xl:text-[0.975rem] font-medium w-full">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="2xl:my-64 my-32  w-min">
      <h2 className=" dark:text-light font-bold 2xl:text-8xl xl:text-6xl text-5xl text-center 2xl:mb-32 mb-16">
        Education&nbsp;&nbsp;
      </h2>
      <div ref={ref} className=" mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute h-full w-[4px] max-lg:w-[3px] rounded-full bg-dark dark:bg-light origin-top 2xl:left-[-20%] max-lg:left-[-10.5%] max-xl:left-[-13.5%] xl:left-[-16.5%] top-0"
        ></motion.div>
        <ul className="flex flex-col gap-8 ">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                  Intelligence."
          ></Details>
          <Details
            type="Master Of Computer Science"
            time="2020-2022 "
            place="Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                  language understanding."
          ></Details>
          <Details
            type="Online Coursework"
            time="2016-2020 "
            place="Coursera And EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                  Learning Engineering."
          ></Details>
        </ul>
      </div>
    </div>
  );
}
