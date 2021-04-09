import React from "react";

interface BlockItemProps {
  title: string;
  children: Array<React.ReactNode> | React.ReactNode;
}

const BlockItem = ({ title, children }: BlockItemProps) => (
  <div className="block-item">
    <div
      className="block-title"
      style={{
        fontSize: 16,
        borderBottom: "1px dashed #e0e0e0",
        marginBottom: 5,
      }}
    >
      {title}
    </div>
    <div className="block-content">{children}</div>
  </div>
);

export default BlockItem;
