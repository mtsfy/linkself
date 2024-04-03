"use client";

import ProfileEditSection from "./profile-edit-section";

interface AppearanceEditorProps {
  user: User;
}

const AppearanceEditor: React.FC<AppearanceEditorProps> = ({ user }) => {
  return (
    <div>
      <ProfileEditSection user={user} />
    </div>
  );
};

export default AppearanceEditor;
