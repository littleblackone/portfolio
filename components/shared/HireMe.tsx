import { CircularText } from "@/components/Icons/Icons";
import { animate } from "framer-motion";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className=" fixed lg:left-0 lg:bottom-0 max-lg:right-0 max-lg:top-0 overflow-hidden">
      <div className=" xl:w-48 w-[8rem] h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark dark:fill-white animate-spin-slow"}
        ></CircularText>
        <Link
          href="mailto:zsx352020833@gmail.com"
          className=" dark:hover:border-white text-[0.6rem] xl:text-base dark:hover:border-2 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark xl:w-20 xl:h-20 w-[3.5rem] h-[3.5rem] rounded-full font-medium  dark:bg-light dark:hover:text-light dark:hover:bg-dark dark:text-dark hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
