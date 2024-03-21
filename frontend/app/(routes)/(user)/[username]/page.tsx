import { getUserByUsername } from "@/actions/getUserByUsername";
import Avatar from "@/components/avatar";
import LinkList from "@/components/link-list";
import Logo from "@/components/navbar/logo";

interface UserPageProps {
  params: {
    username: string;
  };
}
const UserPage: React.FC<UserPageProps> = async ({ params }) => {
  const { username } = params;
  const user = await getUserByUsername(username);

  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">User not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-between p-4 pt-16 bg-gradient-to-b from-violet-200 to-gray-200">
      <div className="flex flex-col items-center lg:w-[650px] w-full mx-auto gap-4">
        <Avatar
          user={user}
          className="lg:w-28 lg:h-28 h-20 w-20 aspect-square"
          textSize="lg:text-3xl text-2xl"
        />
        <div>
          <h1 className="font-bold lg:text-2xl text-xl">
            @{user.user.username}
          </h1>
        </div>
        <div className="w-full mt-6">
          <LinkList links={user.links} currentUser={null} />
        </div>
      </div>
      <div className="lg:ml-12 lg:mr-8 mr-4 mb-4 mt-12">
        <Logo />
      </div>
    </div>
  );
};

export default UserPage;
