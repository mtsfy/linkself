import { getCurrentUser } from "@/actions/getCurrentUser";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div className="-z-40 absolute top-0 w-full">
      <Landing />
      <Footer />
    </div>
  );
}
