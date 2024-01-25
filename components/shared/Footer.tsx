import Link from "next/link";

export default function Footer() {
  return (
    <div className=" dark:text-light dark:bg-dark dark:border-light xl:font-medium xl:text-lg font-normal text-base max-md:flex-col max-md:gap-2 border-t-2 border-dark border-solid xl:px-[10rem] mb-4 px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] py-8 flex justify-between items-center">
      <span>{new Date().getFullYear()} &copy; ALL Rights Reserved.</span>
      <div>
        <span>Build With 👉 by </span>
        <Link
          className=" underline underline-offset-2"
          href="https://github.com/littleblackone"
          target={"_blank"}
        >
          ZSX
        </Link>
      </div>

      <Link
        className=" underline underline-offset-2"
        href="https://github.com/littleblackone"
      >
        Say hello
      </Link>
    </div>
  );
}
