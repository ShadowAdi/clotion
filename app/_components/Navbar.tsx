"use client";
import { UseScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ThemeToggler";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = UseScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}>Get Clotion Free</Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button asChild variant={"ghost"} size={"sm"}>
              <Link href={"/documents"}>Enter Clotion</Link>
            </Button>
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
