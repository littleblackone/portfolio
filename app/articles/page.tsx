"use client";

import AnimateText from "@/components/shared/AnimateText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import article1 from "@/public/images/articles/pagination component in reactjs.jpg";
import article2 from "@/public/images/articles/create loading screen in react js.jpg";
import article3 from "@/public/images/articles/What is Redux with easy explanation.png";
import article4 from "@/public/images/articles/What is higher order component in React.jpg";
import article5 from "@/public/images/articles/create modal component in react using react portals.png";
import article6 from "@/public/images/articles/form validation in reactjs using custom react hook.png";
import article7 from "@/public/images/articles/smooth scrolling in reactjs.png";
import article8 from "@/public/images/articles/todo list app built using react redux and framer motion.png";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

interface IFeatureArticle {
  time?: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  date?: string;
}
const FramerImage = motion(Image);

const MoveImg = ({
  link,
  title,
  img,
}: {
  link: string;
  title: string;
  img: StaticImageData;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouseMove(event: MouseEvent) {
    //@ts-ignore
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-6);
  }

  function handleMouseLeave(event: MouseEvent) {
    //@ts-ignore
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      //@ts-ignore
      onMouseMove={handleMouseMove}
      //@ts-ignore
      onMouseLeave={handleMouseLeave}
    >
      <h2 className=" capitalize  max-lg:text-lg max-md:text-sm font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x, y }}
        ref={imgRef}
        src={img}
        alt="articles img"
        className=" z-10 w-96 h-auto absolute rounded-lg hidden max-md:!hidden"
      ></FramerImage>
    </Link>
  );
};

const FeaturedArticles = ({
  img,
  title,
  time,
  summary,
  link,
}: IFeatureArticle) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className=" inline-block w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className=" w-full h-auto"
        ></FramerImage>
      </Link>
      <div className=" absolute top-0 -right-5 bg-dark dark:bg-light -z-10 w-[102.5%] max-md:w-[105.8%] h-[103%] rounded-[2.2rem] max-md:rounded-br-[1.5rem] rounded-bl-[1.8rem]"></div>
      <Link href={link} target="_blank">
        <h2 className=" mt-4 hover:underline capitalize text-2xl font-bold my-2 dark:text-light">
          {title}
        </h2>
      </Link>
      <p className=" max-lg:text-sm text-lg font-medium mb-2 dark:text-light">
        {summary}
      </p>
      <span className=" text-primary text-2xl max-lg:text-lg font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Articles = ({ img, title, date, link }: IFeatureArticle) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className=" relative w-full dark:bg-dark p-4 py-6 my-4 rounded-xl flex max-sm:flex-col max-sm:gap-2 items-center justify-between bg-light dark:text-light text-dark first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4"
    >
      <MoveImg link={link} title={title} img={img}></MoveImg>
      <span className=" text-primary max-sm:self-start dark:text-primaryDark font-semibold sm:pl-4">
        {date}
      </span>
    </motion.li>
  );
};

export default function Article() {
  return (
    <>
      <Head>
        <title>ZSX | Articles Page</title>
        <meta name="zsx articles page" content="zsx articles page" />
      </Head>
      <main className=" relative z-10 xl:px-[10rem] px-[2rem] sm:px-[3rem] md:px-[6rem] pt-16 dark:bg-dark w-full pb-16 flex flex-col items-center justify-center overflow-hidden">
        <AnimateText
          text="Words can Change The World!"
          className=" mb-16 2xl:!text-[7.5rem] xl:!text-[6.5rem] lg:text-[5.5rem] md:text-[4.5rem] text-[3rem]"
        />
        <ul className=" grid grid-cols-2 gap-16 max-lg:flex max-lg:flex-col">
          <FeaturedArticles
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                     Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img={article1}
            title="Build A Custom Pagination Component In Reactjs From Scratch"
          ></FeaturedArticles>
          <FeaturedArticles
            summary="Build 3 Types Of Loading Screens
                     Learn how to create stunning loading screens in React with 3 different methods. 
                     Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                     Improve the user experience."
            time="10 min read"
            link="/"
            img={article2}
            title="Creating Stunning Loading Screens In React"
          ></FeaturedArticles>
        </ul>
        <h2 className=" font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
          All Articles
        </h2>
        <Articles
          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
          date="March 22,2023"
          link="/"
          img={article6}
        ></Articles>
        <Articles
          title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
          date="March 22,2023"
          link="/"
          img={article7}
        ></Articles>
        <Articles
          title="Creating An Efficient Modal Component In React Using Hooks And Portals"
          date="March 22,2023"
          link="/"
          img={article5}
        ></Articles>
        <Articles
          title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
          date="March 22,2023"
          link="/"
          img={article8}
        ></Articles>
        <Articles
          title="Redux Simplified: A Beginner's Guide For Web Developers"
          date="March 22,2023"
          link="/"
          img={article3}
        ></Articles>
        <Articles
          title="What Is Higher Order Component (Hoc) In React?"
          date="March 22,2023"
          link="/"
          img={article4}
        ></Articles>
      </main>
    </>
  );
}
