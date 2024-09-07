import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex dark:bg-[#1f1f1f] items-center w-full p-6 bg-background z-50 ">
      <Logo />
      <div className="w-full md:ml-auto md:justify-end  justify-between flex items-center gap-x-2 text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
