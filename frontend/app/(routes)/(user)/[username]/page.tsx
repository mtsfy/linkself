import { getUserByUsername } from "@/actions/getUserByUsername";
import Avatar from "@/components/avatar";
import LinkList from "@/components/link-list";
import Logo from "@/components/navbar/logo";

interface UserPageProps {
  params: {
    username: string;
  };
}
export const theme = {
  "1": {
    name: "Basic",
    buttonBgColor: "bg-zinc-200",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-slate-900",
    avatarTextColor: "text-white",

    displayBgColor: "bg-white",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "2": {
    name: "Leaf",
    buttonBgColor: "bg-green-400",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-green-900",
    avatarTextColor: "text-white",

    displayBgColor: "bg-white",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "3": {
    name: "Moon",

    buttonBgColor: "bg-blue-600",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-blue-950",
    avatarTextColor: "text-white",

    displayBgColor: "bg-white",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "4": {
    name: "Snow",

    buttonBgColor: "bg-gray-700",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-gray-700",
    avatarTextColor: "text-white",

    displayBgColor: "bg-white",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "5": {
    name: "Grey",

    buttonBgColor: "bg-white",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-gray-800",
    avatarTextColor: "text-white",

    displayBgColor: "bg-gray-200",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "6": {
    name: "Earth",
    buttonBgColor: "bg-white",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-zinc-50",
    avatarTextColor: "text-zinc-900",

    displayBgColor: "bg-stone-600",
    displayTextColor: "text-white",

    logoColor: "white",
  },
  "7": {
    name: "Black",
    buttonBgColor: "bg-zinc-800/70",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-gray-100",
    avatarTextColor: "text-gray-900",

    displayBgColor: "bg-black",
    displayTextColor: "text-white",

    logoColor: "white",
  },
  "8": {
    name: "Mineral Blue",
    buttonBgColor: "bg-0 border-[0.9px] border-gray-400",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-blue-900",
    avatarTextColor: "text-white",

    displayBgColor: "bg-sky-200",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "9": {
    name: "Mineral Green",
    buttonBgColor: "bg-0 border-[0.9px] border-gray-400",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-green-900",
    avatarTextColor: "text-white",

    displayBgColor: "bg-green-200/70",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "10": {
    name: "Mineral Orange",
    buttonBgColor: "bg-0 border-[0.9px] border-gray-500",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-amber-900",
    avatarTextColor: "text-white",

    displayBgColor: "bg-orange-200",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "11": {
    name: "Mineral Yellow",
    buttonBgColor: "bg-0 border-[0.9px] border-gray-400",
    buttonTextColor: "text-black",

    avatarBgColor: "bg-yellow-200",
    avatarTextColor: "text-amber-900",

    displayBgColor: "bg-yellow-200/40",
    displayTextColor: "text-black",

    logoColor: "black",
  },
  "12": {
    name: "Noir",
    buttonBgColor: "bg-0 border-[0.9px] border-white",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-gray-200",
    avatarTextColor: "text-gray-900",

    displayBgColor: "bg-gradient-to-t from-gray-900 to-gray-800/50",
    displayTextColor: "text-white",

    logoColor: "white",
  },
  "13": {
    name: "Bloom",
    buttonBgColor: "bg-0 border-[0.9px] border-white",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-fuchsia-900",
    avatarTextColor: "text-white",

    displayBgColor:
      "bg-gradient-to-t from-fuchsia-900 via-5% to-fuchsia-600 to-95%",
    displayTextColor: "text-white",

    logoColor: "white",
  },
  "14": {
    name: "Miami",
    buttonBgColor: "bg-0 border-[0.9px] border-white",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-rose-950",
    avatarTextColor: "text-white",

    displayBgColor: "bg-gradient-to-t from-rose-900 via-5% bg-rose-700 to-95%",
    displayTextColor: "text-white",

    logoColor: "white",
  },
  "15": {
    name: "Spray Blue",
    buttonBgColor: "bg-0 border-[0.9px] border-white",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-blue-800",
    avatarTextColor: "text-white",

    displayBgColor: "bg-gradient-to-t from-blue-900 bg-sky-500 ",
    displayTextColor: "text-white",

    logoColor: "white",
  },
  "16": {
    name: "Mint",
    buttonBgColor: "bg-0 border-[0.9px] border-white",
    buttonTextColor: "text-white",

    avatarBgColor: "bg-green-900",
    avatarTextColor: "text-white",

    displayBgColor: "bg-gradient-to-t from-green-900 bg-green-500 ",
    displayTextColor: "text-white",

    logoColor: "white",
  },
};
export const userTheme = theme["1"];
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
      <div
        className={`min-h-screen h-full flex flex-col items-center justify-between p-4 pt-32 bg-center bg-cover ${userTheme.displayBgColor}`}
      >
        <div className="flex flex-col items-center lg:w-[650px] w-full mx-auto gap-4 bg-cre">
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
            <LinkList links={user.links} currentUser={null} />
          </div>
        </div>
        <div className="lg:ml-12 lg:mr-8 mr-4 mb-4 mt-12">
          <Logo userPage />
        </div>
      </div>
    </>
  );
};

export default UserPage;
