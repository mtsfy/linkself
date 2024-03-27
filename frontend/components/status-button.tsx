"use client";

import useToggleActive from "@/hooks/useToggleActive";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

interface StatusButtonProps {
  linkId: string;
  status: boolean;
}

const StatusButton: React.FC<StatusButtonProps> = ({ linkId, status }) => {
  const { isActive, toggleActive, isLoading } = useToggleActive({
    linkId: linkId,
    currentStatus: status,
  });
  return (
    <div className="px-4 cursor-pointer transition hover:opacity-80">
      <div onClick={toggleActive}>
        <div>
          {isActive ? (
            <FaToggleOn size={30} color="green" />
          ) : (
            <FaToggleOff size={30} color="grey" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusButton;
