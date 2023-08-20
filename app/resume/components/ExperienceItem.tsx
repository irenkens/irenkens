import React from "react";
// import { ReactComponent as Calendar } from "../icons/calendar.svg";
import Image from 'next/image';

interface ExperienceItemProps {
  title: string;
  date: string;
  children: string | any;
}

const ExperienceItem = ({ title, date, children }: ExperienceItemProps) => (
  <>
    <span style={{ fontSize: 14, fontWeight: 600, lineHeight: '18px' }}>{title}</span>
    <span
      style={{
        height: 15,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        margin: "2px 0 7px 0",
      }}
    >
      <Image priority src="/icons/calendar.svg" width={17} height={17} alt="Date" className="mr-[10px] -mt-[1px]" />
      <span style={{ marginTop: 3, lineHeight: "12px" }}>{date}</span>
    </span>
    <span style={{ fontSize: 14, textAlign: "justify" }}>{children}</span>
  </>
);

export default ExperienceItem;
