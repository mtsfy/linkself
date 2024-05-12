"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { LuGalleryVertical } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";

import { LuShapes } from "react-icons/lu";
import MenuBox from "./menu-box";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

interface MainNavProps {
  currentUser: User | null;
}

const MainNav: React.FC<MainNavProps> = ({ currentUser }) => {
  const pathname = usePathname();
  console.log(pathname.split("/"));

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
      title: "Settings",
      href: "/admin/settings",
      icon: IoSettingsOutline,
    },
  ];
  const menu = currentUser ? mainOptions : [];

  return (
    <div>
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
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <CiMenuBurger className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menu.map((item: any, index) => (
              <DropdownMenuItem key={index}>
                <a
                  href={item.href}
                  className={`flex items-center gap-2 font-medium ${
                    item.href === pathname ? "text-black" : "text-gray-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MainNav;
