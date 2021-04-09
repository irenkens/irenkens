import React from "react";

interface TechItemProps {
  name: string;
  children: React.ReactNode
}

const TechItem = ({ name, children }: TechItemProps) => (
  <div className="tech">
    {children}
    <span style={{ marginLeft: 10 }}>{name}</span>
  </div>
);

export default TechItem;
