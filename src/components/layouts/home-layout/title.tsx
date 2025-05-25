"use client";

import { usePathname } from "next/navigation";
import { isStudio } from "@/lib/constants";
import Link from "next/link";

const Title = () => {
  const pathname = usePathname();

  return (
    <Link
      href={isStudio(pathname) ? "/studio" : "/"}
      className="flex items-center text-xl"
    >
      <Youtube />
      <span className="font-semibold tracking-tight">
        {isStudio(pathname) ? "Studio" : "NewTube"}
      </span>
    </Link>
  );
};

export default Title;

const Youtube = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-10"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill="white" />
    </svg>
  );
};
