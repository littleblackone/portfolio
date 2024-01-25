"use client";

import { GithubIcon } from "@/components/Icons/Icons";
import AnimateText from "@/components/shared/AnimateText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import project1 from "@/public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "@/public/images/projects/agency-website-cover-image.jpg";
import project3 from "@/public/images/projects/devdreaming.jpg";
import project4 from "@/public/images/projects/fashion-studio-website.jpg";
import project5 from "@/public/images/projects/nft-collection-website-cover-image.jpg";
import project6 from "@/public/images/projects/portfolio-cover-image.jpg";
import { motion } from "framer-motion";
import Transition from "@/components/shared/Transition";

interface IFeatureedParams {
  type: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
}
const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: IFeatureedParams) => {
  return (
    <article className="relative  p-12 w-full flex 2xl:flex-row max-lg:flex-col  items-center justify-between rounded-2xl border border-solid border-dark dark:border-light dark:bg-dark bg-light shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 max-lg:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className=" w-full h-auto "
        ></FramerImage>
      </Link>
      <div className=" absolute top-0 -right-3 bg-dark dark:bg-light -z-10 w-[100.5%] max-md:w-[102.8%] h-[103%] rounded-3xl"></div>
      <div className="w-1/2 max-lg:w-full max-2xl:gap-1  max-xl:gap-0.5 flex gap-6 flex-col items-start lg:pl-6">
        <span className=" text-primary dark:text-primaryDark font-medium 2xl:text-4xl xl:text-2xl text-xl max-lg:mt-4 ">
          {type}
        </span>
        <Link
          href={link}
          className=" dark:text-light hover:underline underline-offset-2"
          target="_blank"
        >
          <h2 className="dark:text-light w-full text-left 2xl:text-5xl xl:text-3xl lg:text-2xl text-xl font-bold">
            {title}
          </h2>
        </Link>

        <p className=" font-medium xl:text-lg 2xl:text-2xl lg:text-base text-sm text-dark dark:text-light">
          {summary}
        </p>
        <div className="flex items-center max-lg:mt-4">
          <Link
            href={github}
            className=" 2xl:w-[4rem] xl:w-[3rem] w-[2.5rem]"
            target="_blank"
          >
            <GithubIcon className=" active:scale-90 hover:translate-y-[-2px] transition-all dark:bg-light rounded-full"></GithubIcon>
          </Link>
          <Link
            className=" hover:scale-105 transition-all ml-4 rounded-lg dark:bg-light dark:text-dark bg-dark text-light p-2 px-6 max-lg:px-4  2xl:text-2xl xl:text-xl lg:text-lg text-base font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }: IFeatureedParams) => {
  return (
    <article className="dark:bg-dark shadow-2xl p-8 w-full flex flex-col items-center justify-center rounded-2xl border border-dark dark:border-light border-solid bg-light relative">
      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className=" w-full h-auto"
        ></FramerImage>
      </Link>
      <div className=" dark:bg-light absolute top-0 -right-3 bg-dark -z-10 w-[101.2%] max-md:w-[102.8%] h-[103%] rounded-3xl rounded-bl-[1.8rem]"></div>
      <div className=" w-full flex gap-4 flex-col items-start mt-4">
        <span className=" text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          className="dark:text-light hover:underline underline-offset-2"
          target="_blank"
        >
          <h2 className="dark:text-light w-full min-h-[72px] text-left text-3xl font-bold">
            {title}
          </h2>
        </Link>

        <div className=" w-full flex items-center justify-between dark:text-light">
          <Link
            className=" hover:scale-105 transition-all text-lg underline  font-semibold"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link href={github} className=" w-10" target="_blank">
            <GithubIcon className=" active:scale-90 hover:translate-y-[-2px] transition-all w-8 "></GithubIcon>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>ZSX | Projects Page</title>
        <meta name="zsx projects page" content="zsx projects page"></meta>
      </Head>
      <Transition></Transition>
      <main className="dark:bg-dark pb-16 xl:px-[10rem] px-[2rem] sm:px-[3rem] md:px-[6rem] w-full flex flex-col items-center justify-center relative z-10">
        <div className="pt-16">
          <AnimateText
            text="Imagination Trumps Knowledge!"
            className="2xl:!text-[7.5rem] xl:!text-[6.5rem] lg:text-[5.5rem] md:text-[4.5rem] text-[3rem]"
          ></AnimateText>
        </div>
        <div className=" mt-16 grid grid-cols-12 gap-32 max-2xl:gap-16 max-lg:flex max-lg:flex-col">
          <div className=" col-span-12 ">
            <FeaturedProject
              type="Feature Project"
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                      It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                      local currency."
              img={project1}
              link="/"
              github="https://github.com"
            ></FeaturedProject>
          </div>
          <div className=" col-span-6">
            <Project
              type="Feature Project"
              title="digital presence App"
              img={project2}
              link="/"
              github="https://github.com"
            ></Project>
          </div>
          <div className=" col-span-6">
            <Project
              type="Feature Project"
              title="Custom Form App"
              img={project3}
              link="/"
              github="https://github.com"
            ></Project>
          </div>
          <div className=" col-span-12">
            <FeaturedProject
              type="Fashion Project"
              title="Fashion studio Web"
              summary="a vibrant and trendy fashion studio website, designed specifically for young people who are passionate about fashion design and clothes design. Powered by a cutting-edge tech stack that includes React, Next.js, Tailwind CSS, Shadcn UI, and Clerk, our website offers an immersive and seamless user experience."
              img={project4}
              link="/"
              github="https://github.com"
            ></FeaturedProject>
          </div>
          <div className=" col-span-6">
            <Project
              type="Feature Project"
              title="Weirdos club App"
              img={project5}
              link="/"
              github="https://github.com"
            ></Project>
          </div>
          <div className=" col-span-6">
            <Project
              type="Feature Project"
              title="Design skills App"
              img={project6}
              link="/"
              github="https://github.com"
            ></Project>
          </div>
        </div>
      </main>
    </>
  );
}
