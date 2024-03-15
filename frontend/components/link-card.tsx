"use client";

import React from "react";
import { BsPencil } from "react-icons/bs";
import { GoGrabber } from "react-icons/go";

interface LinkCardProps {
  title: string;
  url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url }) => {
  return (
    <div className="h-32 bg-white rounded-xl flex">
      <div className="hover:cursor-grab h-full flex items-center lg:p-3 p-2">
        <GoGrabber size={25} className="" />
      </div>
      <div className="p-6 w-full space-y-1">
        <div className="flex items-center gap-x-3">
          <h1>{title}</h1>
          <BsPencil />
        </div>
        <div className="flex items-center gap-x-3">
          <h4>{url}</h4>
          <BsPencil />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
