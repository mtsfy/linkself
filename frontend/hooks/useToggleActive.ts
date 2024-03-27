import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";

interface IUseToggleActive {
  linkId: string;
  currentStatus: boolean;
}

const useToggleActive = ({ linkId, currentStatus }: IUseToggleActive) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(currentStatus);

  const toggleActive = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      try {
        setIsLoading(true);
        await axios({
          method: "PATCH",
          url: process.env.NEXT_PUBLIC_BACKEND_URL + `/link/${linkId}/toggle`,
          withCredentials: true,
        });
        setIsActive(!isActive);
        router.refresh();
        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },

    [linkId, router, isActive]
  );

  return { isLoading, toggleActive, isActive };
};

export default useToggleActive;
