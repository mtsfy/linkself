"use client";

import { Button } from "./ui/button";
import { BsPlus } from "react-icons/bs";

interface AddLinkButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const AddLinkButton: React.FC<AddLinkButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) {
    return null;
  }
  return (
    <Button
      className="w-full rounded-full p-6 text-md flex items-center space-x-2 bg-purple-700"
      onClick={onClick}
    >
      <BsPlus size={20} />
      <span>Add Link</span>
    </Button>
  );
};

export default AddLinkButton;
