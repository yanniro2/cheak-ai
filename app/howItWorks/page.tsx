import Howit from "@/components/Howit";

import { Metadata } from "next";
import React from "react";
import {
  BiCalendarEvent,
  BiMessageSquareDetail,
  BiGroup,
  BiBrain,
  BiRocket,
} from "react-icons/bi";

import data from "@/data/howitData.json";
import Title1 from "@/components/mini/Title";
import Scroll from "@/components/animation/Scroll";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
};

function page() {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="howItWorks">
      {/* <Scroll> */}
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"How It Works"}
          subtitle={"Book a consulting appoitment with us and let us help you."}
        />
        <div className="w-full h-full flex flex-col gap-[6rem]">
          {data.howItWorksSteps.map((step, index) => (
            <Scroll
              key={index}
              id={step.id}
              className={`w-full h-[60vh] flex items-center justify-between steps-container gap-[3rem] ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}>
              <div className="w-1/2 h-full flex flex-col  justify-between">
                <div className="flex items-center gap-5 ">
                  <div className="text-primary font-poppins font-bold group-hover:text-white text-[3rem]">
                    0{step.stepNumber}
                  </div>
                  <div className="icons-2">{renderIcon(step.icon)}</div>
                  <div>
                    <h3 className="text-[1.2rem] font-open font-bold uppercase group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="capitalize  font-open text-secondry">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-poppins font-light group-hover:text-white">
                  {step.description}
                </p>

                {step.brief.map((brief, briefIndex) => (
                  <div key={briefIndex} className="flex gap-3 flex-col">
                    <p className="text">{brief.p1}</p>
                    <p className="text">{brief.p2}</p>
                    <p className="text">{brief.paragraph}</p>
                  </div>
                ))}
                <div className="flex items-center gap-5">
                  {step.subLinks.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      className="link-underline">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-1/2 h-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  width="500"
                  height="500"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Scroll>
          ))}
        </div>
      </div>
      {/* </Scroll> */}
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

export default page;
