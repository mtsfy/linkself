"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
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
  if (user.user.image === null) {
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
  }

  if (user.user.image !== null) {
    return (
      <div className={twMerge("w-16 h-16 relative ", bgStyle)}>
        <Image
          fill
          unoptimized
          src={user.user.image}
          alt="avatar"
          className="absolute rounded-full object-cover"
        />
      </div>
    );
  }
};

export default Avatar;
