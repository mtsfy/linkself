import { useState } from "react";
import EditableField from "./editable-field";
import { urlFormatter } from "./input-box";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface LinkInfoProps {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
}

const LinkInfo: React.FC<LinkInfoProps> = ({ title, url, isActive, id }) => {
  const [isEditTitleActive, setIsEditTitleActive] = useState(false);
  const [isEditUrlActive, setIsEditUrlActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedUrl, setUpdatedUrl] = useState(url);
  const router = useRouter();
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      setIsEditTitleActive(false);
      setIsEditUrlActive(false);

      const { formattedUrl } = urlFormatter(updatedUrl);
      setUpdatedUrl(formattedUrl);

      if (updatedTitle === title && updatedUrl === url) {
        setIsLoading(false);
        return;
      }

      if (updatedTitle.length === 0 || updatedUrl.length === 0) {
        setIsLoading(false);
        setUpdatedTitle(title);
        setUpdatedUrl(url);
        return toast.error("URL or Title cannot be empty.");
      }

      const response = await axios({
        method: "PUT",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + `/link/${id}/edit`,
        data: {
          isActive: isActive,
          url: formattedUrl,
          title: updatedTitle,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        router.refresh();
        toast.success("Link updated successfully.");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsEditTitleActive(false);
      setIsEditUrlActive(false);
      toast.error("Something went wrong.");
      console.log(error);
    }
  };
  return (
    <div className="p-6 w-full space-y-2">
      {/* TITLE */}
      <EditableField
        value={updatedTitle}
        placeholder="Title"
        valueStyle="font-semibold"
        disabled={isLoading}
        isEditing={isEditTitleActive}
        onOpen={() => setIsEditTitleActive(true)}
        onClose={() => onSubmit()}
        onChange={(e: any) => setUpdatedTitle(e.target.value)}
      />
      {/* URL */}
      <EditableField
        value={updatedUrl}
        placeholder="URL"
        disabled={isLoading}
        isEditing={isEditUrlActive}
        onOpen={() => setIsEditUrlActive(true)}
        onClose={() => onSubmit()}
        onChange={(e: any) => setUpdatedUrl(e.target.value)}
      />
    </div>
  );
};

export default LinkInfo;
