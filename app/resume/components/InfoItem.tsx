import React from "react";

interface InfoItemProps {
  info: string;
  link?: string;
  children: React.ReactElement
}

const InfoItem = ({ info, children, link }: InfoItemProps) => {
  const Content = () => (
    <div style={{ display: "flex", height: 25, alignItems: "center" }}>
      {children}
      <span style={{ marginLeft: 10, marginTop: 5, lineHeight: "20px" }}>{info}</span>
    </div>
  );

  return link ? <a href={link}><Content /></a> : <Content />
};

InfoItem.defaultProps = {
  link: ''
};

export default InfoItem;
