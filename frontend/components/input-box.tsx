"use client";

import React from "react";
import { Button } from "./ui/button";
import { BsX } from "react-icons/bs";
import { Input } from "./ui/input";

interface InputBoxProps {
  onClick: () => void;
  isOpen: boolean;
}
const InputBox: React.FC<InputBoxProps> = ({ onClick, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="z-0 relative bg-white p-4 h-[65vh] rounded-2xl">
      <div className="absolute right-4 top-5">
        <Button
          variant={"ghost"}
          className="rounded-full px-2 py-4"
          onClick={onClick}
        >
          <BsX size={25} />
        </Button>
      </div>
      <div className="px-4 mt-6">
        <h1 className="font-bold text-xl">Enter URL</h1>
        <div className="flex items-center gap-8 pt-3">
          <Input />
          <Button className="rounded-full p-6" variant={"secondary"}>
            Add
          </Button>
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-gray-200 rounded-full" />
      <div className="px-4">
        <h1 className="text-sm font-semibold text-gray-500">
          Inspired by your interests
        </h1>
      </div>
      <div className="mt-48 my-6 w-full" />
      <div className="px-4">
        <h1 className="text-sm font-semibold text-gray-500">New to try</h1>
      </div>
    </div>
  );
};

export default InputBox;
