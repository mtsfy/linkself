"use client";

import Link from "next/link";
import { PiWarningCircleThin } from "react-icons/pi";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface CopyLinkProps {
  currentUser: CurrentUser;
}

const CopyLink: React.FC<CopyLinkProps> = ({ currentUser }) => {
  const link =
    process.env.NEXT_PUBLIC_FRONT_URL + "/" + currentUser.user.username;
  const onCopy = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link copied to clipboard.");
  };
  return (
    <div className="bg-blue-100 p-6 rounded-2xl  text-base flex justify-between lg:flex-row flex-col gap-4">
      <div className="flex items-center space-x-2 lg:flex-row flex-col">
        <PiWarningCircleThin size={20} />
        <span className="font-medium">Your LinkSelf is live:</span>
        <Link
          href={`/${currentUser.user.username}`}
          className="underline underline-offset-4"
        >
          {link}
        </Link>
      </div>
      <div className=" self-end">
        <Button
          variant={"outline"}
          className="rounded-full"
          onClick={() => onCopy()}
        >
          Copy URL
        </Button>
      </div>
    </div>
  );
};

export default CopyLink;
