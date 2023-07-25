import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-solid border-black w-full ">
      <Layout className="flex justify-between items-center p-9 px-[120px] font-medium text-lg">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
       <div>
       <Link href="/">Built with <span className="flex-row justify-center items-center text-red-500">&#9825; </span>by Chathurka</Link>
       </div>
       <div className="underline underline-offset-2"> <Link href="/">Say hello</Link></div>
      </Layout>
    </footer>
  );
};

export default Footer;
