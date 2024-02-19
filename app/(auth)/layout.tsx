import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return <div className="bg-rose-500 text-white h-full">{children}</div>;
};

export default RootLayout;
