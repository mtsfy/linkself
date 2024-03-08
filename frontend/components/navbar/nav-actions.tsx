"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const NavActions = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Button asChild variant={"secondary"} className="text-md">
          <Link href={"/login"}> Log in</Link>
        </Button>
      </div>
      <div>
        <Button asChild variant={"default"} className="text-md rounded-full">
          <Link href={"/register"}>Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavActions;
