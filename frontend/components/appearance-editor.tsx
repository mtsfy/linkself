"use client";

import PhoneScreen from "./phone-screen";
import ProfileEditSection from "./profile-edit-section";

interface AppearanceEditorProps {
  user: User;
}

const AppearanceEditor: React.FC<AppearanceEditorProps> = ({ user }) => {
  return (
    <div className="flex justify-between gap-6">
      <div className="flex 2xl:flex-row flex-col gap-8 w-full">
        <ProfileEditSection user={user} />
      </div>
      <div className="hidden lg:flex mx-4 lg:w-1/3 h-[82vh] fixed right-1">
        <div className="mx-4 h-full w-[1px] bg-gray-200" />
        <PhoneScreen currentUser={user} />
      </div>
    </div>
  );
};

export default AppearanceEditor;
