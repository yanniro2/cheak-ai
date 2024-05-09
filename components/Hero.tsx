import React from 'react'
import Typing from "./mini/Typing";
import { IoMdArrowForward } from "react-icons/io";
import Particles from "@/components/mini/Particles.jsx";
import Image from "next/image";
type Props = {};

function Hero({}: Props) {
  return (
    <section className="w-screen h-screen flex items-center justify-center drop-shadow shadow">
      <div className="container mx-auto p-5 flex items-center h-full">
        <div className="w-1/2 h-full flex items-center flex-col justify-center gap-3">
          <div className="flex flex-col gap-1">
            <div className="px-4 py-1 border rounded-full w-fit backdrop-blur backdrop-brightness-50 font-open font-extralight text-[14px] bg-secondry ">
              Reimagine the World!
            </div>
            <h1 className="text-[3rem] font-poppins font-medium leading-tight">
              How Can Cutting-Edge Technology Help you
            </h1>
            <h2 className="text-primary text-xl font-semibold ">
              <Typing />
            </h2>
            <p className="text-gray font-open font-light">
              Check AI a next generation startup, artificial intelligence
              company, leverages advance architecture and distributed computing
              to bring AI to the masses while solving real world problems
            </p>
          </div>
          <div className="flex items-center gap-3 justify-start w-full">
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
          />
        </div>
      </div>
    </section>
  );
}

export default Hero