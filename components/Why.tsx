import React from 'react'
import Title1 from "@/components/mini/Title";
import { RiVoiceprintFill } from "react-icons/ri";
import Title2 from "./mini/Title2";
import Image from "next/image";
import whyData from "@/data/whyData.json";
import { BiSolidCircleQuarter } from "react-icons/bi";
type Props = {};

const Why = (props: Props) => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="why-choose-us">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] py-[4rem]">
        <Title1 title={"Why Choose Us"} subtitle={"Core Features"} />
        <div className="w-full flex items-center justify-between gap-[1rem] flex-row-reverse">
          <div className="w-1/2 h-[60vh] flex relative">right</div>
          <div className="w-1/2 h-[60vh] items-start  flex flex-col ">
            <div className="pl-5">
              <Title2
                title={"Empower Your Vision with Us"}
                subtitle={"Where Innovation Meets Implementation"}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pl-5">
              {/* 1 */}
              <div className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex justify-between flex-col p-5 ">
                <div className="flex flex-col">
                  <h2 className="step-h1 ">Why Choose Us</h2>
                  <h3 className="step-h3">step 1</h3>
                  <p className="text pt-3">
                    {/* {service.description} */}
                    Simplify your workflows and increase efficiency with
                    streamlined processes.
                  </p>
                </div>

                <div className="w-full h-[4rem] relative ">
                  <BiSolidCircleQuarter className="absolute right-0 bottom-0 object-contain translate-x-1/2 translate-y-1/2 text-[8rem] -rotate-90 text-dark" />
                </div>
              </div>

              {/* 2 */}
              <div className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex  flex-col p-5 items-end justify-end text-right">
                <div className="flex flex-col">
                  <h2 className="step-h1">Enhanced Security</h2>
                  <h3 className="step-h3">step 2</h3>
                  <p className="text pt-3">
                    Protect your digital assets and sensitive information with
                    robust cybersecurity measures.
                  </p>
                </div>

                <div className="w-[4rem] h-[4rem] relative">
                  <div className="quarter-circle-div absolute left-0 bottom-0 object-contain -translate-x-1/2 translate-y-1/2 text-[8rem] bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent fill-transparent"></div>
                </div>
              </div>

              {/* 3 */}
              <div className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex  flex-col p-5 items-start justify-end text-left">
                <div className="flex flex-col">
                  <h2 className="step-h1">Scalability & Flexibility</h2>
                  <h3 className="step-h3">step 3</h3>
                  <p className="text pt-3">
                    Scale your operations seamlessly and adapt to changing
                    business needs with flexible cloud integration.
                  </p>
                </div>

                <BiSolidCircleQuarter className="absolute right-5 top-5 object-contain  translate-x-1/2 text-[8rem]  text-dark -rotate-180 -translate-y-1/2" />
              </div>

              {/* 4 */}
              <div className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary relative    p-5 bg-primary text-right flex items-end ">
                <h3 className="text-4xl text-white font-poppins text-right w-full">
                  Start Now!
                </h3>

                <BiSolidCircleQuarter className="absolute top-5 left-5 object-contain -translate-x-1/2 -translate-y-1/2 text-[8rem] rotate-90 text-dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why