"use client";

import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";
import Link from "next/link";

interface MenuBoxProps {
  title: string;
  href: string;
  icon?: IconType;
  isActive: boolean;
}

const MenuBox: React.FC<MenuBoxProps> = ({
  title,
  href,
  icon: Icon,
  isActive,
}) => {
  return (
    <Button asChild variant={"ghost"} className="px-2 lg:text-base text-sm">
      <Link
        href={href}
        className={`flex gap-2 ${isActive ? "text-black" : "text-gray-600"}`}
      >
        {Icon && <Icon size={20} />}
        <h1 className={`${isActive ? "font-semibold" : "font-medium"}`}>
          {title}
        </h1>
      </Link>
    </Button>
  );
};

export default MenuBox;
