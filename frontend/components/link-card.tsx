"use client";

import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { GoGrabber, GoTrash } from "react-icons/go";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";
import { Button } from "./ui/button";
import StatusButton from "./status-button";

interface LinkCardProps {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
  isEditable: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  url,
  isEditable,
  isActive,
  id,
}) => {
  const [active, setActive] = useState(true);
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
          <div className="flex flex-col justify-evenly items-center">
            <div className="px-4 cursor-pointer transition">
              <StatusButton linkId={id} status={isActive} />
            </div>
            <div className="px-4 cursor-pointer transition">
              <div onClick={() => {}}>
                <div>
                  <GoTrash size={20} color="grey" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        isActive && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 duration-200 transition"
          >
            <div className="bg-white h-full flex rounded-sm shadow-md border-[1px]">
              <div className="p-4 space-y-1 w-full">
                <div className="flex items-center">
                  <h1 className="w-full text-center font-medium text-sm">
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </a>
        )
      )}
    </>
  );
};

export default LinkCard;
