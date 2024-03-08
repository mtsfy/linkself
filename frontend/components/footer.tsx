import React from "react";

const Footer = () => {
  return (
    <div className="border-t-[1px]  pt-16 pl-8 pr-8 pb-10 w-full z-50 flex flex-col gap-y-16">
      <div className="flex flex-col lg:flex-row justify-evenly gap-12 lg:gap-0">
        <div>
          <h1 className="font-bold text-2xl">Company</h1>
          <h4>Text</h4>
          <h4>Text</h4>
          <h4>Text</h4>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Community</h1>
          <h4>Text</h4>
          <h4>Text</h4>
          <h4>Text</h4>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Support</h1>
          <h4>Text</h4>
          <h4>Text</h4>
          <h4>Text</h4>
        </div>
      </div>
      <div>
        <h1 className="text-center text-sm">&copy; 2024 LinkSelf</h1>
      </div>
    </div>
  );
};

export default Footer;
