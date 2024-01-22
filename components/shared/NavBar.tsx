// @ts-nocheck

"use client";

import Link from "next/link";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "../Icons/Icons";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function NavBar() {
  return (
    <header className=" w-full  px-[10rem] py-8 font-medium flex items-center justify-between">
      <nav className=" flex gap-10 text-xl">
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
          className=" w-6"
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
          className=" w-6"
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

      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
}
