"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="h-full flex items-center flex-col justify-center space-y-4 ">
      <Image
        src={"/Coffee.jpg"}
        height={"300"}
        width={"300"}
        alt="Error"
        className="dark:invert"
      />
      <h2 className="text-xl font-medium ">Something Went Wrong</h2>
      <Button asChild>
        <Link href={"/documents"}>Go Back</Link>
      </Button>
    </div>
  );
};

export default Error;
