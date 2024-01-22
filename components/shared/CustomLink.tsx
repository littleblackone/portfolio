"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkParams {
  href: string;
  title: string;
  className?: string;
}

export default function CustomLink({ href, title, className }: LinkParams) {
  const pathname = usePathname();

  return (
    <Link href={href} title={title} className={`${className} relative group`}>
      {title}
      <span
        className={`group-hover:w-full transition-[width] ease duration-300 h-[1px] inline-block bg-dark absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
