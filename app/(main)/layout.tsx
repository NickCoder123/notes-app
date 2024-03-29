"use client";

import { PropsWithChildren } from "react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import Spinner from "@/components/spinner";
import Navigation from "@/components/navigation";
import { SearchCommmand } from "@/components/search-command";

const MainLayout = ({ children }: PropsWithChildren) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommmand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
