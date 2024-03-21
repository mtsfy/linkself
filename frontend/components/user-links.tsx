"use client";

import LinkList from "./link-list";

interface UserLinksProps {
  links: linkType[];
}
const UserLinks: React.FC<UserLinksProps> = ({ links }) => {
  return <LinkList links={links} />;
};

export default UserLinks;
