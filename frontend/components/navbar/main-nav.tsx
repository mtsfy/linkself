"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { IoSettingsOutline } from "react-icons/io5";
import { LuGalleryVertical } from "react-icons/lu";
import { LuShapes } from "react-icons/lu";
import { BsBarChart } from "react-icons/bs";
import MenuBox from "./menu-box";

interface MainNavProps {
  currentUser: CurrentUser | null;
}

const MainNav: React.FC<MainNavProps> = ({ currentUser }) => {
  const defaultOptions = [
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

  const mainOptions = [
    {
      title: "Links",
      href: "/admin",
      icon: LuGalleryVertical,
    },
    {
      title: "Appearance",
      href: "/admin/appearance",
      icon: LuShapes,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: BsBarChart,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: IoSettingsOutline,
    },
  ];
  const menu = currentUser ? mainOptions : defaultOptions;

  return (
    <div className="lg:flex hidden w-full justify-evenly">
      {menu.map((item: any, index) => (
        <MenuBox
          key={index}
          title={item.title}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default MainNav;
