import React from "react";
import Title1 from "@/components/mini/Title";
import { Metadata } from "next";
import cookiePolicyContent from "@/data/cookiesData.json"; // Adjust the path according to your project structure
import { CookiePolicyContent } from "@/types"; // Adjust the path according to your project structure
import {
  AiOutlineFileText,
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineAppstore,
  AiOutlineControl,
  AiOutlineShareAlt,
  AiOutlineMail,
} from "react-icons/ai";
type Props = {};

export const metadata: Metadata = {
  title: "Cookies Policies",
};

const page = (props: Props) => {
  const { title, lastUpdated, address, email, phone, sections } =
    cookiePolicyContent as CookiePolicyContent;

  return (
    <section className="w-screen h-full flex flex-col items-center justify-center drop-shadow-md bg-gray-50">
      <div className="container mx-auto  flex items-center h-full flex-col gap-4 md:py-16 pt-24 p-3 lg:px-0">
        <Title1
          title={"Cookies Policies"}
          subtitle={"Learn how we protect your data."}
        />

        {sections.map((section, index) => (
          <div key={index} className="w-full step-box gap-[1rem] text ">
            <h2 className="font-semibold font-poppins text-primary flex items-center gap-[1rem] ">
              <div className="icons-1">{renderIcon(section.icon)}</div>
              {section.title}
            </h2>
            <p className="text">{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside mt-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>
                    {item.type && (
                      <>
                        <strong className="text-secondry">{item.type}</strong>:{" "}
                        {item.description}
                      </>
                    )}
                    {item.browser && (
                      <>
                        <strong className="text-secondry">
                          {item.browser}
                        </strong>
                        :{" "}
                        <a href={item.url} className="text-blue-600 underline">
                          {/* {item.url} */}
                        </a>
                      </>
                    )}
                    {item.name && (
                      <>
                        <strong className="text-secondry">{item.name}</strong>:{" "}
                        <a href={item.url} className="text-blue-600 underline">
                          {item.url}
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    AiOutlineFileText: AiOutlineFileText,
    AiOutlineQuestionCircle: AiOutlineQuestionCircle,
    AiOutlineSetting: AiOutlineSetting,
    AiOutlineAppstore: AiOutlineAppstore,
    AiOutlineControl: AiOutlineControl,
    AiOutlineShareAlt: AiOutlineShareAlt,
    AiOutlineMail: AiOutlineMail,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default page;
