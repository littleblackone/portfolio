import Image from "next/image";
import portfolioImg from "@/public/images/profile/developer-pic-1.png";
import AnimateText from "@/components/shared/AnimateText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons/Icons";
import HireMe from "@/components/shared/HireMe";
import LightBulb from "@/public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <main className=" px-[10rem] flex items-center text-dark w-full min-h-screen">
      <div className=" flex justify-between items-center w-full">
        <div className=" w-1/2">
          <Image
            src={portfolioImg}
            alt="a developer"
            className=" w-full h-auto"
          ></Image>
        </div>
        <div className=" w-1/2 flex flex-col items-center self-center">
          <AnimateText
            className=" !text-6xl !text-left"
            text="Turning Vision Into Reality With Code And Design."
          ></AnimateText>
          <p className=" my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className=" flex items-center self-start mt-2">
            <Link
              href="/dummy.pdf"
              target={"_blank"}
              download={true}
              className="flex items-center text-light bg-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            >
              Resume <LinkArrow className="w-6 ml-1"></LinkArrow>
            </Link>

            <Link
              className=" ml-4 text-lg font-medium capitalize text-dark underline"
              href="mailto:zsx352020833@gmail.com"
              target={"_blank"}
            >
              Contact
            </Link>

            <HireMe></HireMe>

            <div className=" absolute right-8 bottom-8 inline-block w-24">
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
  );
}
