import React from "react";
import data from "@/data/privacyData.json";

// Importing necessary icons from react-icons
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineFile,
  AiOutlinePieChart,
  AiOutlineLink,
  AiOutlineDatabase,
  AiOutlineSafetyCertificate,
  AiOutlineUnlock,
  AiOutlineSync,
  AiOutlineMail,
  AiFillInfoCircle,
  AiFillDatabase,
} from "react-icons/ai";

// Defining the Props type
type Props = {};

// Define PrivacyPolicyData type
interface PrivacyPolicySection {
  id: string;
  title: string;
  icon: keyof typeof iconComponents; // Changed type to keyof typeof iconComponents
  format: string;
  content: string | string[];
}

interface PrivacyPolicyData {
  company_name: string;
  company_address: string;
  contact_email: string;
  contact_phone: string;
  privacy_policy: {
    sections: PrivacyPolicySection[];
  };
}

// Mapping icon names to actual icon components
const iconComponents = {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineFile,
  AiOutlinePieChart,
  AiOutlineLink,
  AiOutlineDatabase,
  AiOutlineSafetyCertificate,
  AiOutlineUnlock,
  AiOutlineSync,
  AiOutlineMail,
  AiFillInfoCircle,
  AiFillDatabase,
};

// Component definition
const Privacy: React.FC<Props> = () => {
  // Destructuring the data
  const {
    company_name,
    company_address,
    contact_email,
    contact_phone,
    privacy_policy: { sections },
  } = data as PrivacyPolicyData;

  // Helper function to render icons
  const renderIcon = (iconName: keyof typeof iconComponents) => {
    const IconComponent = iconComponents[iconName];
    if (IconComponent) {
      return <IconComponent />;
    } else {
      console.error(`Icon component "${iconName}" not found.`);
      return null;
    }
  };

  // Mapping over sections and rendering the content
  return (
    <section className="main-section-2 bg-color text-darkBlue relative z-[50]">
      <div className="container mx-auto p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[2.5rem] py-[1rem] gap-5">
          {sections.map((section) => (
            <div key={section.id} className="step-box gap-[1rem]">
              <div className="flex items-center gap-[1rem]">
                <div className="icons-1">{renderIcon(section.icon)}</div>
                <h1 className="font-semibold font-poppins text-primary">
                  {section.title}
                </h1>
              </div>

              {section.format === "main_section" ||
              section.format === "sub_section" ? (
                <p className="text">
                  {typeof section.content === "string"
                    ? section.content
                    : section.content.join("\n")}
                </p>
              ) : section.format === "bulleted" ? (
                <ul className="p-5">
                  {(section.content as string[]).map((item, index) => (
                    <li key={index} className="list-disc text">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : section.format === "list" ? (
                <ol className="p-5">
                  {(section.content as string[]).map((item, index) => (
                    <li key={index} className="list-decimal text">
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;
