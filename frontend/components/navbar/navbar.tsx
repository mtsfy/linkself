import Logo from "./logo";
import MainNav from "./main-nav";
import NavActions from "./nav-actions";

interface NavbarProps {
  currentUser: CurrentUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="z-10 p-4 md:p-6 rounded-full border shadow-sm bg-white flex items-center justify-between m-6 fixed min-w-max top-0 right-0 left-0">
      <div className="flex items-center gap-2 w-1/2">
        <Logo currentUser={currentUser} />
        <MainNav currentUser={currentUser} />
      </div>
      <NavActions currentUser={currentUser} />
    </div>
  );
};

export default Navbar;
