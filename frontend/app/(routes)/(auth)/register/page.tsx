import RegisterForm from "@/components/auth/register-form";
import Logo from "@/components/navbar/logo";
import SideFill from "@/components/sidefill";

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen flex lg:overflow-hidden">
      <div className="lg:w-4/6 w-full bg-white p-8">
        <Logo />
        <RegisterForm />
      </div>
      <div className="lg:w-2/6 hidden lg:block">
        <SideFill className={"bg-yellow-500"} />
      </div>
    </div>
  );
};

export default RegisterPage;
