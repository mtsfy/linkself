"use client";

import React from "react";
import { GoGrabber } from "react-icons/go";
import StatusButton from "./status-button";
import DeleteButton from "./delete-button";
import LinkInfo from "./link-info";

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
  return (
    <>
      {isEditable ? (
        <div className="bg-white rounded-xl flex">
          <div className="hover:cursor-grab h-full flex items-center lg:p-3 p-2">
            <GoGrabber size={25} className="" />
          </div>
          <div className="w-full">
            <LinkInfo title={title} url={url} isActive={isActive} id={id} />
          </div>
          <div className="flex flex-col justify-evenly items-center">
            <StatusButton linkId={id} status={isActive} />
            <DeleteButton linkId={id} />
          </div>
        </div>
      ) : (
        isActive && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 duration-75 transition"
          >
            <div className="bg-white h-full flex rounded-lg shadow-md border-[1px]">
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
