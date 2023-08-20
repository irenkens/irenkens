import React from "react";

interface BlockItemProps {
  title: string;
  children: Array<React.ReactNode> | React.ReactNode;
}

const BlockItem = ({ title, children }: BlockItemProps) => (
  <div className="flex flex-col">
    <div
      className="font-semibold"
      style={{
        fontSize: 16,
        borderBottom: "1px dashed #e0e0e0",
        marginBottom: 5,
      }}
    >
      {title}
    </div>
    <div className="flex flex-col">{children}</div>
  </div>
);

export default BlockItem;
