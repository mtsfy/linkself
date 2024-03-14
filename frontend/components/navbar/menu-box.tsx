"use client";

import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";
import Link from "next/link";

interface MenuBoxProps {
  title: string;
  href: string;
  icon?: IconType;
}

const MenuBox: React.FC<MenuBoxProps> = ({ title, href, icon: Icon }) => {
  return (
    <Button asChild variant={"ghost"} className="text-base text-neutral-600">
      <Link href={href} className="flex gap-2">
        {Icon && <Icon size={20} />}
        <span>{title}</span>
      </Link>
    </Button>
  );
};

export default MenuBox;
