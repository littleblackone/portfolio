"use client";

import AnimateText from "@/components/shared/AnimateText";
import Head from "next/head";
import Image from "next/image";
import profileImg from "@/public/images/profile/developer-pic-2.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

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
      <main className=" p-[10rem] pt-16 flex w-full flex-col items-center justify-center">
        <AnimateText
          text="Passion Fuels Purpose!"
          className=" text-[7.5rem]"
        ></AnimateText>
        <div className="mt-16 grid w-full grid-cols-8 gap-16">
          <div className=" col-span-3 flex flex-col items-start justify-start">
            <h2 className=" mb-4 text-2xl text-dark/75 font-bold uppercase">
              Biography
            </h2>
            <p className=" text-xl font-medium">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className=" text-xl my-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className=" text-xl font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div className=" bg-light p-8 border-2 border-solid border-dark col-span-3 relative h-max rounded-2xl">
            <div className=" absolute top-0 -right-3 bg-dark -z-10 w-[102%] h-[103%] rounded-[2rem]"></div>
            <Image
              src={profileImg}
              className=" w-full h-auto rounded-2xl"
              alt="ZSX img"
            ></Image>
          </div>

          <div className=" col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className=" inline-block text-7xl font-bold">
                <AnimatedNumbers value={50}></AnimatedNumbers>+
              </span>
              <h2 className=" text-xl font-medium capitalize text-dark/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className=" inline-block text-7xl font-bold">
                <AnimatedNumbers value={40}></AnimatedNumbers>+
              </span>
              <h2 className=" text-xl font-medium capitalize text-dark/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className=" inline-block text-7xl font-bold">
                <AnimatedNumbers value={4}></AnimatedNumbers>+
              </span>
              <h2 className=" text-xl font-medium capitalize text-dark/75">
                years experiences
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
