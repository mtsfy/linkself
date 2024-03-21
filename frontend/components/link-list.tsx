import LinkCard from "./link-card";

interface LinkListProps {
  links: linkType[];
  currentUser?: User | null;
}

const LinkList: React.FC<LinkListProps> = ({ links, currentUser }) => {
  const isEditable = currentUser ? true : false;

  return (
    <div className="flex flex-col gap-4">
      {links.map((link: linkType) => (
        <LinkCard
          key={link._id}
          title={link.title}
          url={link.url}
          isEditable={isEditable}
        />
      ))}
    </div>
  );
};

export default LinkList;
