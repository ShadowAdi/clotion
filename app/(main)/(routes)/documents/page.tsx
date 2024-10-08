"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
const Documents = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );
    toast.promise(promise, {
      loading: "Creating A New Note...",
      success: "New Note Created",
      error: "Note Creation Failed",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 ">
      <Image
        src={"/box.jpg"}
        height={"300"}
        width={"300"}
        alt="Empty"
        className=""
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Clotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2 " />
        Create A Note
      </Button>
    </div>
  );
};

export default Documents;
