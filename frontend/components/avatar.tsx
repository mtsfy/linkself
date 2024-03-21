import { twMerge } from "tailwind-merge";

interface AvatarProps {
  user: User | null;
  className?: string;
  textSize?: string;
}

const Avatar: React.FC<AvatarProps> = ({ user, className, textSize }) => {
  if (!user) {
    return null;
  }
  return (
    <div
      className={twMerge(
        "p-4 rounded-full bg-gray-500 flex items-center justify-center h-14 w-14",
        className
      )}
    >
      <h1 className={twMerge("font-bold text-lg text-white", textSize)}>
        {" "}
        {user.user.name[0]}
      </h1>
    </div>
  );
};

export default Avatar;
