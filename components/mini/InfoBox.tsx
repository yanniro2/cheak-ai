import React, { ReactNode } from "react";
import Scroll from "../animation/Scroll";

interface InfoBoxProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, text }) => {
  return (
    <Scroll className="step-box gap-[1rem]">
      <div className="flex items-center gap-[1rem]">
        <div className="icons-1"> {icon}</div>
        <div className="font-semibold font-poppins text-primary">{title}</div>
      </div>
      <p className="text">{text}</p>
    </Scroll>
  );
};

export default InfoBox;
