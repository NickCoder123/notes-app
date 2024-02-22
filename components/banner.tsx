"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

interface BannerProps {
  documentId: Id<"documents">;
}

const Banner: React.FC<BannerProps> = ({ documentId }) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  return <div>Hello Banner!</div>;
};

export default Banner;
