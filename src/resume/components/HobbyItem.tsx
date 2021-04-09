import React from "react";

interface HobbyItemProps {
  icon: string;
  name: string;
}

const HobbyItem = ({ icon, name }: HobbyItemProps) => (
  <div className="hobby">
    <img src={icon} alt="img" />
    <span>{name}</span>
  </div>
);

export default HobbyItem;
