"use client";

import { theme } from "@/app/(routes)/(user)/[username]/page";
import Avatar from "./avatar";
import LinkList from "./link-list";
import Logo from "./navbar/logo";

interface PhoneScreenProps {
  currentUser: User;
}
const PhoneScreen: React.FC<PhoneScreenProps> = ({ currentUser }) => {
  // @ts-ignore
  const userTheme = theme[currentUser.user.theme];

  return (
    <div
      className={`mx-auto my-auto w-[352px]  h-[724px] rounded-[32px] border-[14px] border-black  flex flex-col items-center justify-between overflow-x-hidden pt-14 p-4 gap-2 ${userTheme.displayBgColor}`}
    >
      <div className="flex flex-col items-center w-full gap-2">
        <Avatar
          user={currentUser}
          bgStyle={
            currentUser.user.image
              ? "w-24 h-24"
              : `w-24 h-24 ${userTheme.avatarBgColor}`
          }
          nameStyle={`text-xl ${userTheme.avatarTextColor}`}
        />
        <div>
          <h1
            className={`font-bold text-lg mb-4 ${userTheme.displayTextColor}`}
          >
            @{currentUser.user.username}
          </h1>
        </div>
        <div className="w-full">
          <LinkList user={currentUser} currentUser={null} />
        </div>
      </div>
      <div className="mx-6 ml-12 mr-8 mb-4 mt-8">
        <Logo
          userPage
          logoColor={userTheme.logoColor}
          displayTextColor={userTheme.displayTextColor}
        />
      </div>
    </div>
  );
};

export default PhoneScreen;
