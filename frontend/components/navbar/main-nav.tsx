"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { LuGalleryVertical } from "react-icons/lu";
import { LuShapes } from "react-icons/lu";
import { BsBarChart } from "react-icons/bs";
import MenuBox from "./menu-box";
import { usePathname } from "next/navigation";

interface MainNavProps {
  currentUser: User | null;
}

const MainNav: React.FC<MainNavProps> = ({ currentUser }) => {
  const pathname = usePathname();
console.log(pathname.split("/"));

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
    <div className="ml-2 md:flex gap-3 w-full hidden ">
      {menu.map((item: any, index) => (
        <MenuBox
          key={index}
          title={item.title}
          href={item.href}
          icon={item.icon}
          isActive={item.href == pathname}
        />
      ))}
    </div>
  );
};

export default MainNav;
