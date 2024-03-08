"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const MainNav = () => {
  const data = [
    {
      title: "Template",
      href: "/template",
    },
    {
      title: "Marketplace",
      href: "/marketplace",
    },
    {
      title: "Discover",
      href: "/discover",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ];
  return (
    <div className="lg:flex gap-2 hidden w-full">
      {data.map((link, index) => (
        <Button
          key={index}
          asChild
          variant={"ghost"}
          className="text-base text-neutral-600"
        >
          <Link href={link.href}>{link.title}</Link>
        </Button>
      ))}
    </div>
  );
};

export default MainNav;
