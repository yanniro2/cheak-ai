import React from "react";
import termsData from "@/data/termsData.json";
import InfoBox from "./mini/InfoBox";
import { AiOutlineFileText, AiOutlineCheckCircle } from "react-icons/ai";
import { BiRocket, BiShield } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
interface TermsData {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    icon: string;
    content: string;
  }[];
}

const Terms = () => {
  const data: TermsData = termsData;
  return (
    <section className="main-section-2 text-darkBlue bg-color z-[50] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {data.sections.map((section) => (
          <InfoBox
            key={section.title}
            icon={renderIcon(section.icon)}
            title={section.title}
            text={section.content}
          />
        ))}
      </div>
    </section>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    AiOutlineFileText: AiOutlineFileText,
    AiOutlineCheckCircle: AiOutlineCheckCircle,
    BiRocket: BiRocket,
    BiShield: BiShield,
    FaLock: FaLock,
    FiAlertCircle: FiAlertCircle,
    GiMagnifyingGlass: GiMagnifyingGlass,
    IoMdSettings: IoMdSettings,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Terms;
