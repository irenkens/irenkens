import React from "react";

interface HobbyItemProps {
  name: string;
  children: React.ReactElement
}

const HobbyItem = ({ children, name }: HobbyItemProps) => (
  <div className="hobby">
    {children}
    <span style={{ marginLeft: 10 }}>{name}</span>
  </div>
);

export default HobbyItem;
