import React from 'react'
import Typing from "./mini/Typing";
import { IoMdArrowForward } from "react-icons/io";
import Particles from "@/components/mini/Particles.jsx";
import Image from "next/image";
type Props = {};

function Hero({}: Props) {
  return (
    <section
      className="w-screen lg:h-screen flex items-center justify-center drop-shadow shadow h-full pt-[6rem] lg:p-0"
      id="home">
      <div className="container mx-auto p-5 flex items-center h-full ">
        <div className="lg:w-1/2 h-full flex items-center flex-col justify-center gap-3 w-full">
          <div className="flex flex-col gap-1 relative">
            <div className="px-4 py-1 border rounded-full w-fit backdrop-blur backdrop-brightness-50 font-open font-extralight text-[14px] bg-secondry shadow-md shadow-secondry z-[5]">
              Reimagine the World!
            </div>
            <h1 className="text-[3rem] font-poppins font-bold leading-tight drop-shadow-lg drop-shadow-primary z-[5]">
              How Can Cutting-Edge Technology Help you
            </h1>
            <h2 className="text-primary text-xl font-semibold z-[5] shadow-text">
              <Typing />
            </h2>
            <p className="text-gray font-open font-light z-[5]">
              Check AI a next generation startup, artificial intelligence
              company, leverages advance architecture and distributed computing
              to bring AI to the masses while solving real world problems
            </p>
            <div className="w-[20rem] h-[20rem]   rounded-full   absolute top-0 -left-[2rem] -z-1  shadow-box bg-primary/5"></div>
          </div>
          <div className="flex lg:items-center gap-3 justify-start w-full flex-col lg:flex-row items-start">
            <button className="btn btn-1">start Exploring</button>
            <button className="btn btn-2 group">
              learn more <IoMdArrowForward className="group-hover:ml-3" />
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center flex-col justify-center gap-3 overflow-hidden relative object-contain">
          <div>{/* <Particles /> */}</div>
          <Image
            src="/assets/img/hero.png"
            width="1000"
            height="1000"
            alt="img"
            className="shadow-box hidden lg:visible"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero