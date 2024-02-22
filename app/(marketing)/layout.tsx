import { PropsWithChildren } from "react";

import MarketingNavbar from "@/components/marketing-navbar";

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <MarketingNavbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
