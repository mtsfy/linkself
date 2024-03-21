"use client";

import React, { useState } from "react";
import AddLinkButton from "./add-link-button";
import InputBox from "./input-box";
import LinkList from "./link-list";

interface LinkControlProps {
  currentUser: User;
}

const LinkControl: React.FC<LinkControlProps> = ({ currentUser }) => {
  const [isInputBoxOpen, setIsInputBoxOpen] = useState(false);
  const { links } = currentUser;

  return (
    <div className="flex flex-col justify-items-center gap-4">
      <div className="self-center lg:w-1/2 w-full flex flex-col gap-8">
        <AddLinkButton
          onClick={() => setIsInputBoxOpen(true)}
          isOpen={isInputBoxOpen}
        />
        {isInputBoxOpen && (
          <InputBox
            onClick={() => setIsInputBoxOpen(false)}
            isOpen={isInputBoxOpen}
          />
        )}
        <LinkList links={links} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default LinkControl;
