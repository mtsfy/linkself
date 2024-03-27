"use client";

import useDeleteLink from "@/hooks/useDeleteLink";
import { GoTrash } from "react-icons/go";

interface DeleteButtonProps {
  linkId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ linkId }) => {
  const { deleteLink, isLoading } = useDeleteLink({ linkId: linkId });
  return (
    <div className="px-4 cursor-pointer transition hover:text-gray-900 text-gray-500">
      <div onClick={deleteLink}>
        <div>
          <GoTrash size={20} />
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
