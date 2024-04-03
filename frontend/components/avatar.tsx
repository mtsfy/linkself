import { twMerge } from "tailwind-merge";

interface AvatarProps {
  user: User | null;
  bgStyle?: string;
  nameStyle?: string;
}

const Avatar: React.FC<AvatarProps> = ({ user, bgStyle, nameStyle }) => {
  if (!user) {
    return null;
  }
  return (
    <div
      className={twMerge(
        "p-4 rounded-full flex items-center justify-center h-14 w-14",
        bgStyle
      )}
    >
      <h1 className={twMerge("font-bold text-lg text-white", nameStyle)}>
        {" "}
        {user.user.name[0]}
      </h1>
    </div>
  );
};

export default Avatar;
