import Link from "next/link";
import { Button } from "../ui/button";
import { logout } from "@/lib";
import Avatar from "../avatar";

interface NavActionsProps {
  currentUser: CurrentUser | null;
}

const NavActions: React.FC<NavActionsProps> = ({ currentUser }) => {
  const defaultActions = (
    <>
      <div>
        <Button asChild variant={"secondary"} className="text-md">
          <Link href={"/login"}> Log in</Link>
        </Button>
      </div>
      <div>
        <Button asChild variant={"default"} className="text-md rounded-full">
          <Link href={"/register"}>Sign up</Link>
        </Button>
      </div>
    </>
  );
  const mainActions = (
    <>
      <form
        action={async () => {
          "use server";
          await logout();
        }}
      >
        <Button variant={"destructive"} className="text-md rounded-full">
          Log out
        </Button>
      </form>
      <Avatar currentUser={currentUser} />
    </>
  );
  const actions = currentUser ? mainActions : defaultActions;

  return <div className="flex items-center gap-4">{actions}</div>;
};

export default NavActions;
