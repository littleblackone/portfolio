import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface IDetailsParams {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}
const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: IDetailsParams) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize max-xl:text-[1.025rem] font-medium dark:text-light/75 text-dark/75">
          {time} | {address}
        </span>
        <p className="dark:text-light max-xl:text-[0.975rem] font-medium w-full">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className=" 2xl:my-64 my-32 w-min">
      <h2 className=" 2xl:text-8xl xl:text-6xl text-5xl font-bold text-center dark:text-light 2xl:mb-32 mb-16">
        Experience
      </h2>
      <div ref={ref} className=" mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute h-full w-[4px] max-lg:w-[3px] rounded-full bg-dark dark:bg-light origin-top 2xl:left-[-20%] max-lg:left-[-10.5%] max-xl:left-[-13.5%] xl:left-[-16.5%] top-0"
        ></motion.div>
        <ul className="flex flex-col 2xl:gap-8 gap-6 ">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
                  search engine, including improving the accuracy and relevance of search results and 
                  developing new tools for data analysis and visualization."
          ></Details>
          <Details
            position="Intern"
            company="Facebook"
            companyLink="https://www.facebook.com"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                  share short-form video content, including designing and implementing a new user interface and developing 
                  the backend infrastructure to support the feature."
          ></Details>
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://www.amazon.com"
            time="2020-2021"
            address="Seattle, WA."
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                  as product recommendations and user reviews, and optimizing the app's performance and reliability."
          ></Details>
          <Details
            position="Software Developer Intern"
            company="Microsoft"
            companyLink="https://www.microsoft.com"
            time="Summer 2019"
            address="Redmond, WA."
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                  including implementing a new user interface for a system settings panel and optimizing the performance of 
                  a core system component."
          ></Details>
          <Details
            position="Teaching Assistant"
            company="MIT"
            companyLink="https://web.mit.edu"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                  and graded exams and assignments."
          ></Details>
        </ul>
      </div>
    </div>
  );
}
