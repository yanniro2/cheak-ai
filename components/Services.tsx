import React from 'react'
import Image from "next/image";
import Title1 from "./mini/Title";
import Title2 from "./mini/Title2";
import realmData from "@/data/realmsData.json";

import { RiVoiceprintFill } from "react-icons/ri";
import MainSection from "./MainSection";
import Scroll from "./animation/Scroll";
import Link from "next/link";
type Props = {};

const Services = (props: Props) => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center"
      id="services">
      {/* <Scroll> */}
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem]  pt-[6rem]">
        <Title1
          title={"Our Services"}
          subtitle={"Quick Solutions for Immediate Needs"}
        />

        <div className="w-full flex items-center justify-between gap-[1rem] flex-row-reverse">
          <Scroll className="w-1/2 h-[60vh] lg:flex relative hidden">
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
          </Scroll>
          <div className="lg:w-1/2 lg:h-[60vh] items-start  flex flex-col w-full h-full">
            <div className="pl-5">
              <Title2
                title={"explore diverse realms"}
                subtitle={
                  "discover the multifaceded univerces with in our Metaverse"
                }
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-3">
              {realmData.briefServices.map((service, index) => (
                <Link
                  href={service.url}
                  key={index}
                  className="service cursor-pointer hover:bg-lighDark p-5 rounded transition-all ease-linear hover:shadow hover:shadow-primary">
                  <Scroll className="font-semibold font-poppins pb-[1rem]">
                    {service.title}
                  </Scroll>
                  <Scroll className="text">{service.description}</Scroll>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </Scroll> */}
      <MainSection />
    </section>
  );
};

export default Services