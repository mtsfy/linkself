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
      </div>
    </div>
  );
};

export default AdminPage;
