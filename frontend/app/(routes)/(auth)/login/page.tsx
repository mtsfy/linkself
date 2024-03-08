import LoginForm from "@/components/auth/login-form";
import Logo from "@/components/navbar/logo";
import SideFill from "@/components/sidefill";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex lg:overflow-hidden">
      <div className="lg:w-4/6 w-full bg-white p-8">
        <Logo />
        <LoginForm />
      </div>
      <div className="lg:w-2/6 hidden lg:block">
        <SideFill className={"bg-violet-200"} />
      </div>
    </div>
  );
};

export default LoginPage;
