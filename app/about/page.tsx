"use client";

import AnimateText from "@/components/shared/AnimateText";
import Head from "next/head";
import Image from "next/image";
import profileImg from "@/public/images/profile/developer-pic-2.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../../components/shared/Skills";
import Experience from "@/components/shared/Experience";
import Education from "@/components/shared/Education";
import Transition from "@/components/shared/Transition";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref: React.RefObject<HTMLSpanElement> = useRef(null);

  const motionValue = useMotionValue(0); //dynamic initial number
  const springValue = useSpring(motionValue, { duration: 3000 }); //animate value
  const isInview = useInView(ref, { once: true }); //detects when the provided element is whihin the viewport(only onece)

  useEffect(() => {
    if (isInview) motionValue.set(value);
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>ZSX | About Page</title>
        <meta name="zsx about page" content="zsx about page"></meta>
      </Head>
      <Transition></Transition>
      <main className=" dark:bg-dark relative z-10 xl:px-[10rem] px-[2rem] sm:px-[3rem] md:px-[6rem] pt-16 flex w-full flex-col items-center justify-center">
        <AnimateText
          text="Passion Fuels Purpose!"
          className=" 2xl:!text-[7.5rem] xl:!text-[6.5rem] lg:text-[5.5rem] md:text-[4.5rem] text-[3rem]"
        ></AnimateText>
        <div className="mt-16 max-md:mt-4 dark:text-light/75 grid w-full grid-cols-8 gap-16 max-sm:flex max-sm:flex-col max-sm:gap-8">
          <div className=" 2xl:col-span-3 col-span-4 max-lg:col-span-8 max-lg:order-2 flex flex-col items-start justify-start">
            <h2 className=" 2xl:mb-4  2xl:text-2xl xl:text-xl lg:text-lg md:text-base dark:text-light  text-dark/75 font-bold uppercase">
              Biography
            </h2>
            <p className=" 2xl:text-xl xl:text-lg lg:text-base md:text-sm font-medium">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className=" 2xl:text-xl xl:text-lg lg:text-base md:text-sm my-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className=" 2xl:text-xl xl:text-lg lg:text-base md:text-sm font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div className="bg-light max-sm:col-start-2 max-sm:col-span-6 max-lg:col-span-8 dark:bg-dark p-8 max-md:p-4 border-2 border-solid border-dark dark:border-white 2xl:col-span-3 col-span-4 relative h-max rounded-2xl">
            <div className=" absolute top-0 -right-3 bg-dark dark:bg-light -z-10 w-[102%] h-[103%] max-md:w-[104%] max-md:rounded-br-[1.5rem] rounded-[2rem] rounded-br-[1.9rem]"></div>
            <Image
              src={profileImg}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className=" w-full  h-auto rounded-2xl"
              alt="ZSX img"
            ></Image>
          </div>

          <div className=" max-lg:order-3 col-span-8 2xl:col-span-2 flex 2xl:flex-col  items-end justify-between">
            <div className="max-sm:text-center flex flex-col 2xl:items-end items-center justify-center">
              <span className=" inline-block 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold dark:text-light">
                <AnimatedNumbers value={50}></AnimatedNumbers>+
              </span>
              <h2 className=" 2xl:text-xl xl:text-lg lg:text-base text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                satisfied clients
              </h2>
            </div>
            <div className="max-sm:text-center flex flex-col 2xl:items-end items-center justify-center">
              <span className=" inline-block 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold dark:text-light">
                <AnimatedNumbers value={40}></AnimatedNumbers>+
              </span>
              <h2 className=" 2xl:text-xl xl:text-lg lg:text-base text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                projects completed
              </h2>
            </div>
            <div className="max-sm:text-center flex flex-col 2xl:items-end items-center justify-center">
              <span className=" inline-block 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold dark:text-light">
                <AnimatedNumbers value={4}></AnimatedNumbers>+
              </span>
              <h2 className=" 2xl:text-xl xl:text-lg lg:text-base text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                years experiences
              </h2>
            </div>
          </div>
        </div>
        <Skills></Skills>
        <Experience></Experience>
        <Education></Education>
      </main>
    </>
  );
}
