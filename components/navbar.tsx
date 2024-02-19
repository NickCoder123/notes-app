"use client";

import React from "react";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton, SignUpButton } from "@clerk/clerk-react";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import Spinner from "@/components/spinner";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <React.Fragment>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Jotion free</Button>
            </SignUpButton>
          </React.Fragment>
        )}
        {isAuthenticated && !isLoading && (
          <React.Fragment>
            <Button asChild variant="ghost" size="sm">
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </React.Fragment>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
