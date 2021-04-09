import React from "react";

interface InfoItemProps {
  icon: string;
  info: string;
}

const InfoItem = ({ icon, info }: InfoItemProps) => (
  <div style={{ display: "flex", height: 25, alignItems: "center" }}>
    <img src={icon} alt="img" style={{ width: 20, height: 20 }} />
    <span style={{ marginTop: 5, lineHeight: "20px" }}>{info}</span>
  </div>
);

export default InfoItem;
