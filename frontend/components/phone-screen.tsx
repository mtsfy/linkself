"use client";

import Avatar from "./avatar";
import LinkList from "./link-list";
import Logo from "./navbar/logo";

interface PhoneScreenProps {
  currentUser: User;
}
const PhoneScreen: React.FC<PhoneScreenProps> = ({ currentUser }) => {
  return (
    <div className="mx-auto my-auto w-[352px]  h-[724px] rounded-[32px] border-[14px] border-black flex flex-col items-center justify-between overflow-x-hidden pt-14 p-4 gap-2 bg-gradient-to-b from-neutral-100 to-neutral-400">
      <div className="flex flex-col items-center w-full gap-2">
        <Avatar
          user={currentUser}
          bgStyle=" h-20 w-20 aspect-square bg-gray-400"
          nameStyle="text-2xl"
        />
        <div>
          <h1 className="font-bold text-lg mb-4">
            @{currentUser.user.username}
          </h1>
        </div>
        <div className="w-full">
          <LinkList links={currentUser.links} currentUser={null} />
        </div>
      </div>
      <div className="mx-6 ml-12 mr-8 mb-4 mt-8">
        <Logo />
      </div>
    </div>
  );
};

export default PhoneScreen;
