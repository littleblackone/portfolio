import Image from "next/image";
import portfolioImg from "@/public/images/profile/developer-pic-1.png";
import AnimateText from "@/components/shared/AnimateText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons/Icons";
import HireMe from "@/components/shared/HireMe";
import LightBulb from "@/public/images/svgs/miscellaneous_icons_1.svg";
import Transition from "@/components/shared/Transition";

export default function Home() {
  return (
    <>
      <Transition></Transition>
      <main className=" xl:px-[10rem] max-sm:mb-0 max-sm:mt-0 px-[1rem] sm:px-[2rem] md:px-[6rem] flex items-center text-dark dark:text-light dark:bg-dark w-full min-h-screen">
        <div className=" flex justify-between items-center w-full flex-col lg:flex-row">
          <div className=" w-full mt-4 xl:w-1/2">
            <Image
              src={portfolioImg}
              alt="a developer"
              className=" w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            ></Image>
          </div>
          <div className=" xl:w-1/2 w-full flex flex-col items-center self-center">
            <AnimateText
              className=" xl:text-6xl lg:text-[2.5rem] md:text-4xl text-2xl text-left "
              text="Turning Vision Into Reality With Code And Design."
            ></AnimateText>
            <p className=" my-4 2xl:text-xl xl:text-lg lg:text-base text-sm font-medium ">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className=" flex items-center xl:self-start mt-2 ">
              <Link
                href="/dummy.pdf"
                target={"_blank"}
                download={true}
                className="flex items-center text-light bg-dark dark:bg-light p-2.5 px-6 lg:px-4 lg:py-1.5 rounded-lg 2xl:text-xl xl:text-lg lg:text-base font-semibold hover:bg-light dark:hover:bg-dark dark:text-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light"
              >
                Resume <LinkArrow className="w-6 ml-1"></LinkArrow>
              </Link>

              <Link
                className=" ml-4 xl:text-lg text-base  font-medium capitalize text-dark dark:text-light underline"
                href="mailto:zsx352020833@gmail.com"
                target={"_blank"}
              >
                Contact
              </Link>

              <HireMe></HireMe>

              <div className=" absolute hidden right-8 bottom-8 xl:inline-block w-24">
                <Image
                  src={LightBulb}
                  alt="light bulb"
                  className=" w-full h-auto"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
