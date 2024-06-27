import React from 'react'
import Title1 from "@/components/mini/Title";
import Title2 from "./mini/Title2";
import { FaRegSmile, FaAward, FaTasks, FaUsers } from "react-icons/fa";
import statsData from "@/data/funData.json";
import Scroll from "./animation/Scroll";
import Link from "next/link";

const Why = () => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="whyChooseUs">
      {/* <Scroll> */}
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1 title={"Why Choose Us"} subtitle={"Core Features"} />
        <div className="w-full h-full flex items-center justify-between gap-[3rem] lg:flex-row-reverse flex-col">
          <Scroll className="lg:w-1/2  flex flex-col  rounded gap-[1rem]">
            <Scroll className="flex flex-col">
              <Scroll className="text-xl font-open font-semibold uppercase text-primary">
                Dedicated Artificial Intelligence
              </Scroll>
              <Scroll className="text-white font-poppins text-[2rem]  font-medium leading-none ">
                Reap the Benefits of using the latest Artificial Intelligence
                Technologies.
              </Scroll>
            </Scroll>
            <Scroll className="flex flex-col gap-3">
              <p className="text">
                Driven by a passion for innovation and excellence, our dedicated
                team of experts harnesses the power of cutting-edge artificial
                intelligence technologies to deliver unparalleled solutions
                tailored to meet your unique needs. With a steadfast commitment
                to quality and a track record of success, we strive to exceed
                expectations and drive transformative results for our clients.
              </p>
              <p className="text">
                At the heart of our approach lies a collaborative spirit, where
                every project is approached with creativity, precision, and a
                relentless pursuit of excellence. As we continue to push the
                boundaries of what&apos;s possible in the realm of AI, we invite
                you to join us on this journey towards a future defined by
                innovation and possibility
              </p>
            </Scroll>
            <Scroll>
              <Scroll className="grid md:grid-cols-2  gap-[1rem]">
                {statsData.stats.map((stat, index) => (
                  <Scroll
                    key={index}
                    className="flex  items-center justify-between text-center bg-primary p-[1rem] rounded">
                    <div className="w-1/4">
                      <div className="icons-1">{renderIcon(stat.icon)}</div>
                    </div>
                    <div className="w-3/4">
                      <div className="text-3xl font-bold font-poppins">
                        {stat.number}
                      </div>
                      <div className="uppercase font-open text-dark font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  </Scroll>
                ))}
              </Scroll>
            </Scroll>
          </Scroll>
          <Scroll className="lg:w-1/2  items-start  flex flex-col justify-between gap-[1rem]">
            <div>
              <Title2
                title={"Empower Your Vision with Us"}
                subtitle={"Where Innovation Meets Implementation"}
              />
            </div>

            <Scroll className="grid md:grid-cols-2 gap-3 ">
              {/* 1 */}
              <Link
                className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex justify-between flex-col p-5 "
                aria-label={"step 1"}
                href={"/whyChooseUs/step-1"}>
                <div className="flex flex-col">
                  <h2 className="step-h1 ">Why Choose Us</h2>
                  <h3 className="step-h3">step 1</h3>
                  <p className="text pt-3 w-3/4">
                    {/* {service.description} */}
                    Simplify your workflows and increase efficiency with
                    streamlined processes.
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 object-contain  text-[8rem] text-dark quarter-circle-div-1 -rotate-90"></div>
              </Link>

              {/* 2 */}
              <Link
                className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex  flex-col p-5 md:items-end md:justify-end md:text-right text-left"
                aria-label={"step 2"}
                href={"/whyChooseUs/step-2"}>
                <div className="flex flex-col md:items-end">
                  <h2 className="step-h1">Enhanced Security</h2>
                  <h3 className="step-h3">step 2</h3>
                  <p className="text pt-3 w-3/4">
                    Protect your digital assets and sensitive information with
                    robust cybersecurity measures.
                  </p>
                </div>

                <div className="absolute md:bottom-0 md:left-0 object-contain  text-[8rem] text-dark md:quarter-circle-div-2 quarter-circle-div-3 right-0 top-0 md:top-auto -rotate-180 md:rotate-0"></div>
              </Link>

              {/* 3 */}
              <Link
                className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex  flex-col p-5 items-start justify-end text-left"
                aria-label={"step 3"}
                href={"/whyChooseUs/step-3"}>
                <div className="flex flex-col">
                  <h2 className="step-h1">Scalability & Flexibility</h2>
                  <h3 className="step-h3">step 3</h3>
                  <p className="text pt-3 w-3/4">
                    Scale your operations seamlessly and adapt to changing
                    business needs with flexible cloud integration.
                  </p>
                </div>

                <div className="absolute md:top-0 right-0 object-contain  text-[8rem] text-dark md:quarter-circle-div-3 quarter-circle-div-1 md:-rotate-180 -rotate-90 bottom-0 top-auto"></div>
              </Link>

              {/* 4 */}
              <Link
                className="service cursor-pointer   rounded transition-all ease-linear hover:shadow hover:shadow-primary relative    p-5 text-right flex items-end  group md:bg-gradient-to-l from-primary to-lighDark bg-gradient-to-r"
                href={"/whyChooseUs/startNow"}
                aria-label={"start Now"}>
                <h3 className="text-4xl  font-poppins md:text-right w-full text-white text-left">
                  Start Now!
                </h3>

                <div className="absolute top-0 md:left-0 object-contain  text-[8rem] text-dark  quarter-circle-div-4 md:rotate-90 shadow-xl right-0 -rotate-180"></div>
              </Link>
            </Scroll>
          </Scroll>
        </div>
      </div>
      {/* </Scroll> */}
    </section>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    FaRegSmile,
    FaAward,
    FaTasks,
    FaUsers,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Why