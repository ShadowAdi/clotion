"use client";

import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Link } from "lucide-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Plan Your Ideas, Drems, Procedure. With Help of{" "}
        <span className="underline">Clotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Clotion is Connected workspace where <br />
        better, faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button>Get Clotion</Button>
          </SignInButton>
        </>
      )}

      {isAuthenticated && !isLoading && (
        <>
           <button className="cursor-pointer px-3 py-2 "  >
            <span>Documents</span>
            <Link href={"/documents"}>
             documents
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Heading;
