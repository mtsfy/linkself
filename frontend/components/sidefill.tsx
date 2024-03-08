"use client";

import { twMerge } from "tailwind-merge";

interface SideFillProps {
  className: string;
}

const SideFill: React.FC<SideFillProps> = ({ className }) => {
  return <div className={twMerge(className, "h-full w-full")} />;
};

export default SideFill;
