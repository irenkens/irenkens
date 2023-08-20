import React from "react";

interface TechItemProps {
  name: string;
  children: React.ReactNode
}

const TechItem = ({ name, children }: TechItemProps) => (
  <div className="flex items-center h-[30px] my-[5px] mx-0">
    {children}
    <span style={{ marginLeft: 10 }}>{name}</span>
  </div>
);

export default TechItem;
