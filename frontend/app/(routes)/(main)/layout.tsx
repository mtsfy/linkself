import { getCurrentUser } from "@/actions/getCurrentUser";
import Navbar from "@/components/navbar/navbar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="bg-zinc-100 overflow-x-hidden">
      <Navbar currentUser={currentUser} />
      {children}
    </div>
  );
};

export default MainLayout;
