import { getUserByUsername } from "@/actions/getUserByUsername";
import Avatar from "@/components/avatar";
import LinkList from "@/components/link-list";
import Logo from "@/components/navbar/logo";
import { theme } from "@/lib/theme";
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
  // @ts-ignore
  const userTheme = theme[user?.user.theme];
  return (
    <>
      <div
        className={`min-h-screen h-full flex flex-col items-center justify-between p-4 pt-32 bg-center bg-cover ${userTheme.displayBgColor}`}
      >
        <div className="flex flex-col items-center lg:w-[650px] w-full mx-auto gap-4">
          <Avatar
            user={user}
            bgStyle={
              user.user.image
                ? "w-40 h-40"
                : `w-32 h-32 ${userTheme.avatarBgColor}`
            }
            nameStyle={`text-4xl ${userTheme.avatarTextColor}`}
          />
          <div>
            <h1
              className={`font-bold lg:text-2xl text-xl ${userTheme.displayTextColor}`}
            >
              @{user.user.username}
            </h1>
          </div>
          <div className="w-full mt-6">
            <LinkList user={user} currentUser={null} />
          </div>
        </div>
        <div className="lg:ml-12 lg:mr-8 mr-4 mb-4 mt-12">
          <Logo
            userPage
            displayTextColor={userTheme.displayTextColor}
            logoColor={userTheme.logoColor}
          />
        </div>
      </div>
    </>
  );
};

export default UserPage;
