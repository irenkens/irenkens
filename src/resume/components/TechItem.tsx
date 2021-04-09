import React from "react";

interface TechItemProps {
  icon: string;
  name: string;
}

const TechItem = ({ icon, name }: TechItemProps) => (
  <div className="tech">
    <img src={icon} alt="img" />
    <span>{name}</span>
  </div>
);

export default TechItem;
