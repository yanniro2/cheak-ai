import React from 'react'
import Image from "next/image";
import Title1 from "./mini/Title";
import Title2 from "./mini/Title2";
import realmData from "@/data/realmsData.json";

import { RiVoiceprintFill } from "react-icons/ri";
import MainSection from "./MainSection";
type Props = {};

const Services = (props: Props) => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="services">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] py-[4rem]">
        <Title1
          title={"Our Services"}
          subtitle={"Quick Solutions for Immediate Needs"}
        />

        <div className="w-full flex items-center justify-between gap-[1rem] flex-row-reverse">
          <div className="w-1/2 h-[60vh] flex relative">
            <Image
              src="/assets/img/service.png"
              width="1000"
              height="1000"
              alt="service img"
              className="object-contain"
            />

            <div className="w-[3rem] h-[3rem] rounded-full bg-white flex items-center justify-center text-xl text-primary absolute right-[3rem] font-bold  shadow-lg shadow-primary">
              <RiVoiceprintFill />
            </div>
          </div>
          <div className="w-1/2 h-[60vh] items-start  flex flex-col justify-between ">
            <div className="pl-5">
              <Title2
                title={"explore diverse realms"}
                subtitle={
                  "discover the multifaceded univerces with in our Metaverse"
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {realmData.map((service) => (
                <div
                  key={service.id}
                  className="service cursor-pointer hover:bg-lighDark p-5 rounded transition-all ease-linear hover:shadow hover:shadow-primary">
                  <h2 className="font-semibold font-poppins pb-[1rem]">
                    {service.title}
                  </h2>
                  <p className="text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MainSection />
    </section>
  );
};

export default Services