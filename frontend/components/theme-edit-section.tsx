"use client";

import { theme } from "@/lib/theme";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ThemeEditSectionProps {
  user: User;
}
const ThemeEditSection: React.FC<ThemeEditSectionProps> = ({ user }) => {
  const router = useRouter();

  const handleOnClick = async (key: string) => {
    console.log(key);

    const response = await axios({
      method: "PATCH",
      url: process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/edit-theme",
      data: {
        theme: key,
      },
      withCredentials: true,
    });

    if (response.status === 200) {
      toast.success("Theme updated successfully");
      router.refresh();
      return;
    } else {
      toast.error("Something went wrong.");
      return;
    }
  };
  return (
    <div className="p-4">
      <div className="p-4">
        <h1 className="font-semibold text-3xl">Themes</h1>
      </div>
      <div className="border-[1px] lg:w-[600px] w-full pl-8 pr-8 rounded-xl pt-10 min-h-[60vh] pb-8 flex flex-col gap-4 bg-white">
        <div className="grid grid-cols-4 gap-4 w-full">
          {Object.entries(theme).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col gap-2 hover:scale-105 transition duration-75 cursor-pointer"
              onClick={() => handleOnClick(key)}
            >
              <div
                className={`relative h-[200px] lg:col-span-1  ${value.displayBgColor} border-[0.5px] rounded-lg`}
              >
                <div className="flex flex-col gap-2  p-[4px] justify-center w-full h-full">
                  <div
                    className={`relative h-[20px] rounded-lg ${value.buttonBgColor}`}
                  />
                  <div
                    className={`relative h-[20px] rounded-lg ${value.buttonBgColor}`}
                  />
                  <div
                    className={`relative h-[20px] rounded-lg ${value.buttonBgColor}`}
                  />
                </div>
              </div>
              <h1 className="text-sm text-center p-[0.5px]">{value.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeEditSection;
