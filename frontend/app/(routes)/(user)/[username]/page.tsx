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
    <>
      <div className="min-h-screen h-full flex flex-col items-center justify-between p-4 pt-32 bg-center bg-cover bg-slate-200">
        <div className="flex flex-col items-center lg:w-[650px] w-full mx-auto gap-4 bg-cre">
          <Avatar
            user={user}
            bgStyle="w-24 h-24 aspect-square bg-gray-900"
            nameStyle="text-3xl text-white"
          />
          <div>
            <h1 className="font-bold lg:text-2xl text-xl text-gray-900">
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
    </>
  );
};

export default UserPage;
