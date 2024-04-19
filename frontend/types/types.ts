type userType = {
  _id: number;
  email: string;
  name: string;
  username: string;
  bio: string;
  title: string;
  image: string;
  theme: string;
  updatedAt: string;
  createdAt: string;
  _v: number;
};

type linkType = {
  _id: string;
  userId: string;
  url: string;
  title: string;
  isActive: boolean;
  updatedAt: string;
  createdAt: string;
  _v: number;
};

type User = {
  user: userType;
  links: linkType[];
};
