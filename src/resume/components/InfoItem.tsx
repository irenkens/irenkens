import React from "react";

interface InfoItemProps {
  info: string;
  children: React.ReactElement
}

const InfoItem = ({ info, children }: InfoItemProps) => (
  <div style={{ display: "flex", height: 25, alignItems: "center" }}>
    {children}
    <span style={{ marginLeft: 10, marginTop: 5, lineHeight: "20px" }}>{info}</span>
  </div>
);

export default InfoItem;
