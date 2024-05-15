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
                  <p className="text pt-3 w-3/4">
                    {/* {service.description} */}
                    Simplify your workflows and increase efficiency with
                    streamlined processes.
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 object-contain  text-[8rem] text-dark quarter-circle-div-1 -rotate-90"></div>
              </div>

              {/* 2 */}
              <div className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex  flex-col p-5 items-end justify-end text-right">
                <div className="flex flex-col items-end">
                  <h2 className="step-h1">Enhanced Security</h2>
                  <h3 className="step-h3">step 2</h3>
                  <p className="text pt-3 w-3/4">
                    Protect your digital assets and sensitive information with
                    robust cybersecurity measures.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 object-contain  text-[8rem] text-dark quarter-circle-div-2"></div>
              </div>

              {/* 3 */}
              <div className="service cursor-pointer hover:bg-lighDark  rounded transition-all ease-linear hover:shadow hover:shadow-primary bg-lighDark relative flex  flex-col p-5 items-start justify-end text-left">
                <div className="flex flex-col">
                  <h2 className="step-h1">Scalability & Flexibility</h2>
                  <h3 className="step-h3">step 3</h3>
                  <p className="text pt-3 w-3/4">
                    Scale your operations seamlessly and adapt to changing
                    business needs with flexible cloud integration.
                  </p>
                </div>

                <div className="absolute top-0 right-0 object-contain  text-[8rem] text-dark quarter-circle-div-3 -rotate-180"></div>
              </div>

              {/* 4 */}
              <div className="service cursor-pointer   rounded transition-all ease-linear hover:shadow hover:shadow-primary relative    p-5 text-right flex items-end  group bg-gradient-to-l from-primary to-lighDark">
                <h3 className="text-4xl  font-poppins text-right w-full text-white">
                  Start Now!
                </h3>

                <div className="absolute top-0 left-0 object-contain  text-[8rem] text-dark quarter-circle-div-4 rotate-90 shadow-xl "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why