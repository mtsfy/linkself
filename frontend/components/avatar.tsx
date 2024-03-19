interface AvatarProps {
  currentUser: CurrentUser | null;
}

const Avatar: React.FC<AvatarProps> = ({ currentUser }) => {
  if (!currentUser) {
    return null;
  }
  return (
    <div className="p-4 rounded-full bg-gray-500 h-14 w-14 flex items-center justify-center">
      <h1 className="font-bold text-lg text-white">
        {" "}
        {currentUser.user.name[0]}
      </h1>
    </div>
  );
};

export default Avatar;
