"use client";

import { twMerge } from "tailwind-merge";
import { TfiUnlink } from "react-icons/tfi";

interface SideFillProps {
  className: string;
}

const SideFill: React.FC<SideFillProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        className,
        "h-full w-full text-white flex flex-col items-center justify-center gap-10"
      )}
    >
      <TfiUnlink className="h-48 w-full ml-14" />
      <h1 className="font-semibold text-5xl">LinkSelf</h1>
    </div>
  );
};

export default SideFill;
