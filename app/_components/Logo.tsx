import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <>
      <div className="hidden md:flex  text-black items-center gap-x-2 ">
        <Image
          src={"/white/favicon.ico"}
          height={"40"}
          width={"40"}
          alt="Logo"
          className="dark:hidden"
        />
          <Image
          src={"/dark/favicon.ico"}
          height={"40"}
          width={"40"}
          alt="Logo"
          className="hidden dark:block"
        />
        <p className={cn("font-semibold dark:text-white text-black", font.className)}>Clotion</p>
      </div>
    </>
  );
};

export default Logo;
