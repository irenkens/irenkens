import React from "react";
import { ReactComponent as Calendar } from "../icons/calendar.svg";

interface ExperienceItemProps {
  title: string;
  date: string;
  children: string | any;
}

const ExperienceItem = ({ title, date, children }: ExperienceItemProps) => (
  <div className="experience-item">
    <span style={{ fontSize: 14, fontWeight: 600 }}>{title}</span>
    <span
      style={{
        height: 15,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        margin: "2px 0 7px 0",
      }}
    >
      <Calendar width="17px" height="17px" style={{ marginRight: 10, marginTop: -1 }} />
      <span style={{ marginTop: 3, lineHeight: "12px" }}>{date}</span>
    </span>
    <span style={{ fontSize: 14, textAlign: "justify" }}>{children}</span>
  </div>
);

export default ExperienceItem;
