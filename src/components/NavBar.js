import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, PinterestIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className="absolute left-0 -bottom-0.5 h-[2px] bg-dark inline-block w-0 group-hover:w-full transition-[width] ease duration-500">
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className="flex justify-between w-full px-32 py-8 font-normal">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <div className="absolute left-[2%] translate-y-[-40%]">
        <Logo />
      </div>
      <nav className="flex justify-center items-center ">
        <motion.a href="https://www.linkedin.com/in/chathurka-vishmantha-0428a7204/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://github.com/chathurkavishmantha" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
          <GithubIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
          <PinterestIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
          <DribbbleIcon />
        </motion.a>
      </nav>
    </div>
  );
};

export default NavBar;
