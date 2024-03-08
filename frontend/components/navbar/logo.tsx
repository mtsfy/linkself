"use client";

import Link from "next/link";
import { TfiUnlink } from "react-icons/tfi";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex gap-2 items-center lg:ml-8 ml-4 lg:mr-12">
        <h1 className="font-semibold text-2xl lg:text-3xl hidden lg:block">
          LinkSelf
        </h1>
        <TfiUnlink size={25} />
      </div>
    </Link>
  );
};

export default Logo;
