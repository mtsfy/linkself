import { getCurrentUser } from "@/actions/getCurrentUser";
import CopyLink from "@/components/copy-link";
import LinkControl from "@/components/link-control";
import PhoneScreen from "@/components/phone-screen";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }
  return (
    <div className="pt-36 lg:px-16 px-4 flex lg:flex-row flex-col h-screen py-4">
      <div className="lg:w-2/3 h-full flex flex-col p-2">
        <CopyLink currentUser={currentUser} />
        <div className="my-4 bg-gray-200 w-full h-[1px]" />
        <div className="rounded-xl p-4 w-full flex-grow">
          <LinkControl currentUser={currentUser} />
        </div>
      </div>
      <div className="hidden lg:flex mx-4 lg:w-1/3 h-[82vh] fixed right-1">
        <div className="mx-4 h-full w-[1px] bg-gray-200" />
        <PhoneScreen currentUser={currentUser} />

        {/* Preview */}
        {/* <div className=" pt-36 h-screen flex flex-col items-center w-full lg:gap-8 gap-3 p-6">
          <PhoneScreen username={currentUser.user.username} />
        </div> */}
        {/* <div className="mx-auto my-auto w-[352px] h-full rounded-[32px] border-[14px] border-black flex flex-col items-center justify-between overflow-x-hidden pt-14 p-4 gap-2 bg-gradient-to-b from-neutral-100 to-neutral-400">
          <div className="flex flex-col items-center w-full gap-2">
            <Avatar
              user={currentUser}
              className=" h-20 w-20 aspect-square"
              textSize="text-2xl"
            />
            <div>
              <h1 className="font-bold text-lg mb-4">
                @{currentUser.user.username}
              </h1>
            </div>
            <div className="w-full">
              <LinkList links={currentUser.links} currentUser={null} />
            </div>
          </div>
          <div className="mx-6 ml-12 mr-8 mb-4 mt-8">
            <Logo />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminPage;
