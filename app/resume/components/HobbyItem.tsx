import React from "react";

interface HobbyItemProps {
  name: string;
  children: React.ReactElement
}

const HobbyItem = ({ children, name }: HobbyItemProps) => (
  <div className="flex items-center h-[30px] my-[5px] mx-0">
    {children}
    <span style={{ marginLeft: 10, marginTop: 5 }}>{name}</span>
  </div>
);

export default HobbyItem;
