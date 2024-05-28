import React from 'react'
import Title1 from "./mini/Title";
import {
  AiOutlineRobot,
  AiOutlineMobile,
  AiOutlineLayout,
  AiOutlineSmile,
} from "react-icons/ai";

import data from "@/data/benifitsData.json";
import Scroll from "./animation/Scroll";

const Benifits = () => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="benefits">
      {/* <Scroll> */}
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"Dedicated Artificial Intelligence"}
          subtitle={"Some Benefits of using the Check-AI."}
        />
        {/* Tab */}
        <div className="lg:hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
            {data.benefits.slice(0, 4).map((step, index) => (
              <Scroll
                key={index}
                className="bg-lighDark p-[2rem] rounded flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:scale-105 transition-all ease-linear group hover:shadow-md hover:shadow-primary border border-primary">
                <div className="icons-1">{renderIcon(step.icon)}</div>
                <h3 className="text-xl font-semibold font-poppins">
                  {step.title}
                </h3>
                <p className="text font-open">{step.description}</p>
              </Scroll>
            ))}
          </div>
          <div className="grid  gap-[1.5rem] mt-[1.5rem]">
            {data.benefits.slice(4, 5).map((step, index) => (
              <Scroll
                key={index}
                className="bg-lighDark p-[2rem] rounded flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:scale-105 transition-all ease-linear group hover:shadow-md hover:shadow-primary border border-primary">
                <div className="icons-1">{renderIcon(step.icon)}</div>
                <h3 className="text-xl font-semibold font-poppins">
                  {step.title}
                </h3>
                <p className="text font-open">{step.description}</p>
              </Scroll>
            ))}
          </div>
        </div>
        {/* default */}
        <div className="hidden lg:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
            {data.benefits.slice(0, 3).map((step, index) => (
              <Scroll
                key={index}
                className="bg-lighDark p-[2rem] rounded flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:scale-105 transition-all ease-linear group hover:shadow-md hover:shadow-primary border border-primary">
                <div className="icons-1">{renderIcon(step.icon)}</div>
                <h3 className="text-xl font-semibold font-poppins">
                  {step.title}
                </h3>
                <p className="text font-open">{step.description}</p>
              </Scroll>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[1.5rem] mt-[1.5rem]">
            {data.benefits.slice(3, 5).map((step, index) => (
              <Scroll
                key={index}
                className="bg-lighDark p-[2rem] rounded flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:scale-105 transition-all ease-linear group hover:shadow-md hover:shadow-primary border border-primary">
                <div className="icons-1">{renderIcon(step.icon)}</div>
                <h3 className="text-xl font-semibold font-poppins">
                  {step.title}
                </h3>
                <p className="text font-open">{step.description}</p>
              </Scroll>
            ))}
          </div>
        </div>
      </div>
      {/* </Scroll> */}
    </section>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    AiOutlineRobot,
    AiOutlineMobile,
    AiOutlineLayout,
    AiOutlineSmile,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Benifits