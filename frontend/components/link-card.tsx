"use client";

import React from "react";
import { BsPencil } from "react-icons/bs";
import { GoGrabber } from "react-icons/go";

interface LinkCardProps {
  title: string;
  url: string;
  isEditable: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, isEditable }) => {
  return (
    <>
      {isEditable ? (
        <div className="bg-white rounded-xl flex">
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
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 duration-200 transition"
        >
          <div className="bg-white h-full flex rounded-sm shadow-md border-[1px]">
            <div className="p-4 space-y-1 w-full">
              <div className="flex items-center">
                <h1 className="w-full text-center text-sm">{title}</h1>
              </div>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default LinkCard;
