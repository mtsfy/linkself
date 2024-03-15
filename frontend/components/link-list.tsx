"use client";

import React from "react";
import LinkCard from "./link-card";

interface LinkListProps {
  data: any[];
}

const LinkList: React.FC<LinkListProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6">
      {data.map((item, index) => (
        <LinkCard key={index} title={item.title} url={item.url} />
      ))}
    </div>
  );
};

export default LinkList;
