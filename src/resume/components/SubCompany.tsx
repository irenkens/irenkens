import React from "react";

interface SubCompanyProps {
  company: string;
  description: string;
  style?: React.CSSProperties;
}

const SubCompany = ({ company, description, style }: SubCompanyProps) => (
  <div style={{ display: "flex", marginBottom: 10, ...style }}>
    <div style={{ marginRight: 5 }}>&#11049;</div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: 14 }}>
        <span style={{ fontWeight: 400 }}>
          {company}
          :&nbsp;
        </span>
        <span>{description}</span>
      </span>
    </div>
  </div>
);

SubCompany.defaultProps = {
  style: ""
}

export default SubCompany;
