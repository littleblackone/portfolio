import Link from "next/link";

export default function Fotter() {
  return (
    <div className=" font-medium text-lg border-t-2 border-dark border-solid p-[10rem] py-8 flex justify-between items-center">
      <span>{new Date().getFullYear()} &copy; ALL Right Reserved.</span>
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
