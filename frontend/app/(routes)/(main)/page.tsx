import Footer from "@/components/footer";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <div className="-z-40 absolute top-0 w-full">
      <Landing />
      <Footer />
    </div>
  );
}
