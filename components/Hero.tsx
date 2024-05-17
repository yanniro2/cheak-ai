import React from 'react'
import Typing from "./mini/Typing";
import { IoMdArrowForward } from "react-icons/io";
import Particles from "@/components/mini/Particles.jsx";
import Image from "next/image";
type Props = {};

function Hero({}: Props) {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center drop-shadow shadow  md:pt-[6rem] md:p-0"
      id="home">
      <div className="container mx-auto p-5 flex items-center h-full flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-full flex items-center flex-col justify-center gap-3 pt-[4rem] md:p-0">
          <div className="flex flex-col gap-1 relative">
            <div className="px-4 py-1 border rounded-full w-fit backdrop-blur backdrop-brightness-50 font-open font-extralight text-[14px] bg-secondry shadow-md shadow-secondry z-[5] ">
              Reimagine the World!
            </div>
            <h1 className="md:text-[3rem] font-poppins font-bold leading-tight drop-shadow-lg drop-shadow-primary z-[5] text-3xl">
              How Can Cutting-Edge Technology Help you
            </h1>
            <h2 className="text-primary text-xl font-semibold z-[5] shadow-text">
              <Typing />
            </h2>
            <p className="text-gray font-open font-light z-[5] text-[14px] md:text-[1rem] hidden md:flex">
              Check AI a next generation startup, artificial intelligence
              company, leverages advance architecture and distributed computing
              to bring AI to the masses while solving real world problems
            </p>
            <div className="w-[20rem] h-[20rem]   rounded-full   absolute -top-[50%] md:-left-[2rem] -z-1  shadow-box bg-primary/5 left-0 "></div>
          </div>
          <div className="md:flex md:items-center gap-3 justify-start w-full flex-col md:flex-row items-start hidden">
            <button className="btn btn-1">start Exploring</button>
            <button className="btn btn-2 group">
              learn more <IoMdArrowForward className="group-hover:ml-3" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2  w-full h-full flex items-center flex-col justify-center gap-3 overflow-hidden relative object-contain">
          <Image
            src="/assets/img/hero.png"
            width="1000"
            height="1000"
            alt="img"
            className="md:shadow-box  "
          />
        </div>
        <div className="md:hidden flex md:items-center gap-3 justify-start w-full flex-col md:flex-row items-start">
          <button className="btn btn-1">start Exploring</button>
          <button className="btn btn-2 group">
            learn more <IoMdArrowForward className="group-hover:ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero