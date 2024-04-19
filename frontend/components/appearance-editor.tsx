"use client";

import PhoneScreen from "./phone-screen";
import ProfileEditSection from "./profile-edit-section";
import ThemeEditSection from "./theme-edit-section";

interface AppearanceEditorProps {
  user: User;
}

const AppearanceEditor: React.FC<AppearanceEditorProps> = ({ user }) => {
  return (
    <div className="flex justify-between gap-6">
      <div className="flex lg:items-center flex-col gap-8 lg:w-3/4 w-full pb-32 pr-8 pl-8">
        <ProfileEditSection user={user} />
        <ThemeEditSection user={user} />
      </div>
      <div className="hidden lg:flex mx-4 lg:w-1/3 h-[82vh] fixed right-1">
        <div className="mx-4 h-full w-[1px] bg-gray-200" />
        <PhoneScreen currentUser={user} />
      </div>
    </div>
  );
};

export default AppearanceEditor;
