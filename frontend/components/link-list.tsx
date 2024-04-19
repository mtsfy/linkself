import LinkCard from "./link-card";

interface LinkListProps {
  user: User;
  currentUser?: User | null;
}

const LinkList: React.FC<LinkListProps> = ({ user, currentUser }) => {
  const isEditable = currentUser ? true : false;

  return (
    <div className="flex flex-col gap-4">
      {user.links.map((link: linkType) => (
        <LinkCard
          themeId={user.user.theme}
          key={link._id}
          id={link._id}
          isActive={link.isActive}
          title={link.title}
          url={link.url}
          isEditable={isEditable}
        />
      ))}
    </div>
  );
};

export default LinkList;
