"use client";

import Toolbar from "@/app/(main)/_components/Toolbar";
import Cover from "@/components/Cover";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const PublishPage = ({ params }: DocumentIdPageProps) => {
  const update = useMutation(api.documents.update);
  const onChange = (content: string) => {
    update({ id: params.documentId, content: content });
  };
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/app/(main)/_components/Editor"), { ssr: false }),
    []
  );

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />{" "}
            <Skeleton className="h-4 w-[40%]" />{" "}
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }
  if (document === null) {
    return <div>Not Found</div>;
  }
  return (
    <div className="pb-40">
      <Cover preview url={document?.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar preview initialData={document} />
        <Editor
          editable={false}
          onChange={onChange}
          initialContent={document.content}
        />
      </div>
    </div>
  );
};

export default PublishPage;
