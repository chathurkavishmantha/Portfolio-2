import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 w-[15%] flex justify-center items-center overflow-hidden">
      <div className="flex justify-center items-center relative">
        <CircularText className={" fill-dark animate-spin-slow"} />
        <Link
          href="mailto:chathurkavish@gmail.com"
          className="absolute flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark w-20 h-20 rounded-full shadow-md border-solid font-bold border-dark text-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
