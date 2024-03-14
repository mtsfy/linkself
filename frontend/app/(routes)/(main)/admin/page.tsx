import { getCurrentUser } from "@/actions/getCurrentUser";
import CopyLink from "@/components/copy-link";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }
  return (
    <div className="pt-36 lg:px-16 px-4 flex lg:flex-row flex-col h-screen">
      <div className="lg:w-2/3">
        <CopyLink currentUser={currentUser} />
        <hr className="my-4" />
        <div className="bg-violet-100 rounded-xl p-4 w-full lg:h-full h-screen">
          link control
        </div>
      </div>
      <div className="hidden lg:flex mx-4 lg:w-1/3 h-screen pb-2">
        <div className="mx-4 h-full w-[1px] bg-gray-200" />
        <div className="bg-sky-100 rounded-xl p-4 w-full h-full">Screen</div>
      </div>
    </div>
  );
};

export default AdminPage;
