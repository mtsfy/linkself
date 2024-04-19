import Link from "next/link";
import { TfiUnlink } from "react-icons/tfi";

interface LogoProps {
  currentUser?: User | null;
  userPage?: boolean;
  displayTextColor?: string;
  logoColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  currentUser,
  userPage,
  logoColor,
  displayTextColor,
}) => {
  if (userPage) {
    return (
      <Link href={currentUser ? "/admin" : "/"}>
        <div className="flex gap-2 items-center lg:ml-8 ml-4 lg:mr-12">
          <h1
            className={`font-semibold text-2xl lg:text-3xl hidden lg:block ${displayTextColor}`}
          >
            LinkSelf
          </h1>
          <TfiUnlink size={25} color={logoColor} />
        </div>
      </Link>
    );
  }

  return (
    <Link href={currentUser ? "/admin" : "/"}>
      <div className="flex gap-2 items-center lg:ml-8 ml-4 lg:mr-12">
        <h1 className={`font-semibold text-2xl lg:text-3xl hidden lg:block `}>
          LinkSelf
        </h1>
        <TfiUnlink size={25} />
      </div>
    </Link>
  );
};

export default Logo;
