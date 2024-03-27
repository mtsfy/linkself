import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface IUseDeleteLink {
  linkId: string;
}

const useDeleteLink = ({ linkId }: IUseDeleteLink) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const deleteLink = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      try {
        setIsLoading(true);
        await axios({
          method: "DELETE",
          url: process.env.NEXT_PUBLIC_BACKEND_URL + `/link/${linkId}/delete`,
          withCredentials: true,
        });
        router.refresh();
        setIsLoading(false);
        toast.success("Link successfully deleted.");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },

    [linkId, router]
  );

  return { isLoading, deleteLink };
};

export default useDeleteLink;
