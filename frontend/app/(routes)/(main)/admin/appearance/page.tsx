import { getCurrentUser } from "@/actions/getCurrentUser";
import AppearanceEditor from "@/components/appearance-editor";
import { redirect } from "next/navigation";

const AppearancePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }
  return (
    <div className="pt-36 lg:px-16 px-4 flex flex-col gap-2 h-screen py-4">
      <AppearanceEditor user={currentUser} />
    </div>
  );
};

export default AppearancePage;
