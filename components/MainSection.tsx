"use client";
import React, { useRef, useEffect } from "react";
import mainServicesData from "@/data/mainServiceData.json";
import Title1 from "./mini/Title";
import Link from "next/link";
import {
  RiVideoLine,
  RiSearchLine,
  RiLightbulbLine,
  RiFileTextLine,
  RiSettings5Line,
  RiUserSettingsLine,
} from "react-icons/ri";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Scroll from "./animation/Scroll";

const MainSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollStep = 400; // Adjust scroll step as needed
  let scrollLeft = 0;

  useEffect(() => {
    const intervalId = setInterval(scroll, 3000); // Adjust the interval as needed (5000ms = 5 seconds)

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  const scroll = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const maxScroll = containerWidth - containerRef.current.clientWidth;

      if (scrollLeft >= maxScroll) {
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        scrollLeft = 0;
      } else {
        containerRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
        scrollLeft += scrollStep;
      }
    }
  };

  const scrollForward = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
      scrollLeft += scrollStep;
    }
  };

  const scrollBackward = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      });
      scrollLeft -= scrollStep;
    }
  };

  return (
    // <Scroll>
    <section className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] relative">
      <Title1
        title={"Our Main Services"}
        subtitle={"Comprehensive Solutions Tailored to Your Needs"}
      />
      <div className="w-full h-full flex items-center justify-between overflow-hidden gap-[1rem] ">
        <div
          ref={containerRef}
          className="w-screen overflow-y-auto grid md:grid-flow-col justify-start items-center gap-[1rem] transition-all h-full py-[1rem]">
          {mainServicesData.mainServices.map((service, index) => (
            <Scroll
              key={index}
              className="lg:w-[25vw] md:w-[30vw]  w-full  h-full bg-lighDark lg:p-[2rem] rounded cursor-pointer hover:bg-white md:hover:scale-105 lg:m-[1rem] transition-all ease-linear shadow shadow-primary hover:shadow-lg hover:drop-shadow-lg flex flex-col justify-between text-center items-center group overscroll-contain gap-[1rem] lg:gap-0 p-[1rem] lg:hover:scale-105">
              <div className="icons-1">{renderIcon(service.icon)}</div>
              <h3 className="text-xl font-poppins font-semibold group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text font-open">{service.description}</p>
              <Link href={service.url} className="btn btn-1">
                Read more
              </Link>
            </Scroll>
          ))}
        </div>
      </div>
      <div className="md:flex items-center justify-center gap-3 hidden">
        <button className="btn-next" onClick={scrollBackward}>
          <MdNavigateBefore />
        </button>
        <button className="btn-next" onClick={scrollForward}>
          <MdNavigateNext />
        </button>
      </div>
    </section>
    // </Scroll>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    RiVideoLine: RiVideoLine,
    RiSearchLine: RiSearchLine,
    RiLightbulbLine: RiLightbulbLine,
    RiFileTextLine: RiFileTextLine,
    RiSettings5Line: RiSettings5Line,
    RiUserSettingsLine: RiUserSettingsLine,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default MainSection;
