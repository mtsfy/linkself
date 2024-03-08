"use client";

import { Element } from "react-scroll";
import { Button } from "./ui/button";

const Landing = () => {
  return (
    // TODO: Clean this up?
    <div>
      <Element
        name="section1"
        className=" bg-[#254f1a] h-[100vh] lg:pt-0 pt-36 lg:px-16 px-4 text-lime-300 flex lg:flex-row flex-col gap-4 items-center"
      >
        <section className="lg:w-1/2 w-full p-4 space-y-6 lg:space-y-8">
          <h1 className="font-extrabold lg:text-7xl text-4xl">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="lg:text-2xl text-xl">
            One link to help you share everything you create, curate and sell
            from your Instagram, TikTok, Twitter, YouTube and other social media
            profiles.
          </p>
        </section>
        <section className="lg:w-1/2 w-full bg-gray-200 h-3/6 lg:h-4/6 rounded-3xl"></section>
      </Element>
      <Element
        name="section2"
        className="bg-[#e9c0e9] h-[100vh] lg:px-16 px-4 pr-8 pl-8 pb-8 pt-12 text-purple-900 flex lg:flex-row flex-col gap-6 items-center"
      >
        <section className="lg:w-1/2 w-full p-4 space-y-4 lg:space-y-8 lg:order-2 order-1">
          <h1 className="font-extrabold lg:text-6xl text-4xl">
            Create and customize your link in minutes
          </h1>
          <p className="lg:text-2xl text-xl font-medium">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <div>
            <Button className="bg-purple-900 p-6 rounded-full hover:opacity-70 hover:bg-purple-900 transition text-base">
              Get started for free
            </Button>
          </div>
        </section>
        <section className="lg:w-1/2 w-full bg-gray-200 h-4/6 lg:order-1 order-2 rounded-3xl"></section>
      </Element>
      <Element
        name="section3"
        className=" bg-[#780016] h-[95vh] lg:px-16 px-4 pr-8 pl-8 pb-8 pt-12  text-purple-200 flex lg:flex-row flex-col gap-6 items-center"
      >
        <section className="lg:w-1/2 w-full p-4 space-y-4 lg:space-y-8">
          <h1 className="font-extrabold lg:text-6xl text-4xl">
            Share your LinkSelf from your Instagram, TikTok, Twitter and other
            bios
          </h1>
          <p className="lg:text-2xl text-xl font-medium">
            Add your unique LinkSelf URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </p>
          <div>
            <Button className="bg-purple-200 p-6 rounded-full hover:opacity-95 hover:bg-purple-200 transition text-md text-black">
              Get started for free
            </Button>
          </div>
        </section>
        <section className="lg:w-1/2 w-full bg-gray-200 h-4/6 rounded-3xl"></section>
      </Element>
      <Element
        name="section4"
        className=" bg-[#f3f3f1] h-[100vh] lg:px-16 px-4 pr-8 pl-8 pb-8 pt-12 text-slate-800 flex lg:flex-row flex-col gap-8 items-center"
      >
        <section className="lg:w-1/2 w-full p-4 space-y-4 lg:space-y-8 order-1 lg:order-2">
          <h1 className="font-extrabold lg:text-6xl text-4xl">
            Analyze your audience and keep your followers engaged
          </h1>
          <p className="lg:text-2xl text-xl font-medium">
            Track your engagement over time, monitor revenue and learn what's
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <div>
            <Button className="bg-purple-200 p-6 rounded-full hover:opacity-95 hover:bg-purple-200 transition text-md text-black">
              Get started for free
            </Button>
          </div>
        </section>
        <section className="lg:w-1/2 w-full bg-gray-200 h-4/6 rounded-3xl order-2 lg:order-1"></section>
      </Element>
      <Element
        name="section5"
        className=" bg-[#f3f3f1] h-[100vh]  lg:px-16 px-4 pr-8 pl-8 pb-8 text-slate-800"
      >
        <section className="w-full p-2 space-y-4 lg:space-y-8 h-5/6">
          <div className="grid gap-6 lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-3 h-full">
            <div className="h-full bg-violet-200 rounded-3xl px-8 py-4 flex flex-col justify-around">
              <h1 className="text-purple-900 underline font-semibold lg:text-2xl text-xl">
                All your links in one place.
              </h1>
            </div>
            <div className="h-full  bg-red-800 rounded-3xl px-8 py-4 flex flex-col justify-around lg:row-span-2">
              <h1 className="text-violet-200 underline font-semibold lg:text-2xl text-xl">
                Everything about you in one place. Helps engage your audience by
                unifying it in one link.
              </h1>
            </div>
            <div className="h-full  bg-yellow-300 rounded-3xl px-8 py-4 flex flex-col justify-around lg:row-span-2">
              <h1 className="text-slate-800 underline font-semibold lg:text-2xl text-xl">
                Organize the things you love and share it with others.
              </h1>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default Landing;
