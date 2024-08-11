"use client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const LoadingLink = ({ children, href, className }: LinkProps) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        setLoading(true);
      }}
    >
      {!loading ? (
        children
      ) : (
        <Button disabled className="w-full mt-4">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      )}
    </Link>
  );
};
