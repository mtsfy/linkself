"use client";

import { Element } from "react-scroll";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { TfiUnlink } from "react-icons/tfi";

const Landing = () => {
  const router = useRouter();

  return (
    <div>
      <Element
        name="section1"
        className=" bg-[#254f1a] h-[100vh] lg:pt-0 pt-36 lg:px-16 px-4 text-lime-300 flex lg:flex-row flex-col gap-16 items-center "
      >
        <section className="lg:order-1 order-2 lg:w-1/2 w-full p-4 space-y-6 lg:space-y-8">
          <h1 className="font-extrabold lg:text-7xl text-4xl">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="lg:text-2xl text-xl">
            One link to help you share everything you create, curate and sell
            from your Instagram, TikTok, Twitter, YouTube and other social media
            profiles.
          </p>
          <div>
            <Button
              onClick={() => router.push("/register")}
              className="bg-lime-300 p-6 rounded-full hover:opacity-95 hover:bg-lime-300 transition text-md text-black"
            >
              Get started for free
            </Button>
          </div>
        </section>
        <section className="lg:order-2 order-1 lg:w-1/2 w-full h-2/6 lg:h-4/6 rounded-3xl flex flex-col items-center justify-center gap-8">
          <TfiUnlink className="lg:w-96 md:h-96 h-48 w-48 ml-12" />
        </section>
      </Element>
    </div>
  );
};

export default Landing;
