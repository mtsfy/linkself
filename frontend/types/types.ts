type User = {
  _id: number;
  email: string;
  name: string;
  username: string;
  updatedAt: string;
  createdAt: string;
  _v: number;
};

type Link = {
  _id: string;
  userId: string;
  url: string;
  title: string;
  isActive: boolean;
  updatedAt: string;
  createdAt: string;
  _v: number;
};

type CurrentUser = {
  user: User;
  links: Link[];
};
