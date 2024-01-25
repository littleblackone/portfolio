// @ts-nocheck

"use client";

import Link from "next/link";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const MotionLink = motion(Link);

interface LinkParams {
  href: string;
  title: string;
  className?: string;
}

function CustomMobileLink({ href, title, className, toggle }: LinkParams) {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={() => handleClick()}
      title={title}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`group-hover:w-full transition-[width] ease duration-300 h-[1px] inline-block bg-light  dark:bg-dark absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
}

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [IsOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <header className=" relative w-full  xl:px-[10rem]  md:px-[6rem] sm:px-[4rem]  px-[2rem] py-6 font-medium  dark:bg-dark flex items-center justify-between">
      <button
        onClick={() => handleClick()}
        className="  xl:hidden flex  flex-col gap-1 itemc justify-center"
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            IsOpen && "rotate-45 translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            IsOpen && "hidden"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            IsOpen && "-rotate-45 -translate-y-1"
          }`}
        ></span>
      </button>

      <div className=" w-full xl:flex hidden items-center justify-between">
        <nav className=" flex gap-10 text-xl dark:text-light">
          <CustomLink href="/" title="Home"></CustomLink>
          <CustomLink href="/about" title="About"></CustomLink>
          <CustomLink href="/projects" title="Projects"></CustomLink>
          <CustomLink href="/articles" title="Articles"></CustomLink>
        </nav>
        <nav className="flex gap-3">
          <MotionLink
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://twitter.com/"
            target={"_blank"}
            className=" w-6"
          >
            <TwitterIcon></TwitterIcon>
          </MotionLink>
          <MotionLink
            href="https://github.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 h-6 bg-light rounded-full"
          >
            <GithubIcon></GithubIcon>
          </MotionLink>
          <MotionLink
            href="https://www.linkedin.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6"
          >
            <LinkedInIcon></LinkedInIcon>
          </MotionLink>
          <MotionLink
            href="https://www.pinterest.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 bg-light h-6 rounded-full "
          >
            <PinterestIcon></PinterestIcon>
          </MotionLink>
          <MotionLink
            href="https://dribbble.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6"
          >
            <DribbbleIcon></DribbbleIcon>
          </MotionLink>

          <button
            className=" ml-6  bg-light rounded-full p-1 translate-y-[-0.25rem]"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <MoonIcon className={" fill-dark"}></MoonIcon>
            ) : (
              <SunIcon className={" fill-light dark:fill-light"}></SunIcon>
            )}
          </button>
        </nav>
      </div>

      {IsOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className=" min-w-[70vw] flex flex-col items-center justify-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className=" flex gap-6 text-xl dark:text-dark flex-col text-light">
            <CustomMobileLink
              href="/"
              title="Home"
              toggle={handleClick}
            ></CustomMobileLink>
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            ></CustomMobileLink>
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            ></CustomMobileLink>
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            ></CustomMobileLink>
          </nav>
          <nav className="flex gap-3 mt-8 flex-wrap">
            <MotionLink
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com/"
              target={"_blank"}
              className=" w-6"
            >
              <TwitterIcon></TwitterIcon>
            </MotionLink>
            <MotionLink
              href="https://github.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6 h-6 bg-light rounded-full"
            >
              <GithubIcon></GithubIcon>
            </MotionLink>
            <MotionLink
              href="https://www.linkedin.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6"
            >
              <LinkedInIcon></LinkedInIcon>
            </MotionLink>
            <MotionLink
              href="https://www.pinterest.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6 bg-light h-6 rounded-full "
            >
              <PinterestIcon></PinterestIcon>
            </MotionLink>
            <MotionLink
              href="https://dribbble.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6"
            >
              <DribbbleIcon></DribbbleIcon>
            </MotionLink>
          </nav>
          <button
            className=" mt-8 bg-light rounded-full p-1 translate-y-[-0.25rem]"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <MoonIcon className={" fill-dark"}></MoonIcon>
            ) : (
              <SunIcon className={" fill-light dark:fill-light"}></SunIcon>
            )}
          </button>
        </motion.div>
      ) : null}
      <div className=" absolute left-[50%] z-30  top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
}
