"use client";

import { useState } from "react";
import AddLinkButton from "./add-link-button";
import InputBox from "./input-box";
import LinkList from "./link-list";

const LinkControl = () => {
  const [isInputBoxOpen, setIsInputBoxOpen] = useState(false);
  const links = [
    {
      title: "TikTok",
      url: "https://www.tiktok.com",
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com",
    },
    {
      title: "Google",
      url: "https://www.google.com",
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com",
    },
    {
      title: "Twitter",
      url: "https://www.x.com",
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com",
    },
  ];

  return (
    <div className="flex flex-col justify-items-center gap-4">
      <div className="self-center lg:w-1/2 w-full flex flex-col gap-8">
        <AddLinkButton
          onClick={() => setIsInputBoxOpen(true)}
          isOpen={isInputBoxOpen}
        />
        <InputBox
          onClick={() => setIsInputBoxOpen(false)}
          isOpen={isInputBoxOpen}
        />
        <LinkList data={links} />
      </div>
    </div>
  );
};

export default LinkControl;
