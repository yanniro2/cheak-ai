import React from 'react'
import {
  BiCalendarEvent,
  BiMessageSquareDetail,
  BiGroup,
  BiBrain,
  BiRocket,
} from "react-icons/bi";

import data from "@/data/howitData.json";
import Title1 from "@/components/mini/Title";
import Scroll from "./animation/Scroll";
type Props = {};

function Howit({}: Props) {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="howItWorks">
      <Scroll>
        <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem]">
          <Title1
            title={"How It Works"}
            subtitle={
              "Book a consulting appoitment with us and let us help you."
            }
          />
          <div className="w-full h-full flex flex-col gap-[1rem]">
            {data.howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="w-full flex md:flex-row flex-col items-center md:p-[3rem] bg-lighDark rounded cursor-pointer md:gap-[1rem] gap-[.5rem] justify-between hover:scale-105 transition-all ease-linear hover:border-primary border-transparent border hover:shadow-md hover:shadow-primary group text-center md:text-left p-[1rem]">
                <div className="text-primary text-[3rem] font-poppins font-bold group-hover:text-white">
                  0{step.stepNumber}
                </div>
                <h3 className="text-[1.5rem] font-open font-bold md:w-2/5 uppercase group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="md:w-2/5 text font-poppins font-light group-hover:text-white">
                  {step.description}
                </p>
                <div className="icons-2">{renderIcon(step.icon)}</div>
              </div>
            ))}
          </div>
        </div>
      </Scroll>
    </section>
  );
}

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    BiCalendarEvent,
    BiMessageSquareDetail,
    BiGroup,
    BiBrain,
    BiRocket,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Howit