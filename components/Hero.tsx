"use client";
import React from "react";
import Typing from "./mini/Typing";
import { IoMdArrowForward } from "react-icons/io";
import Tilty from "react-tilty";
import Image from "next/image";
import Scroll from "./animation/Scroll";
import Link from "next/link";
import HeroBanner from "./HeroBanner";

function Hero() {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center drop-shadow shadow  lg:pt-[6rem] lg:p-0"
      id="home">
      <div className="container mx-auto p-5 flex items-center h-full flex-col lg:flex-row">
        <Scroll className="lg:w-1/2 w-full h-full flex items-center flex-col justify-center gap-3 pt-[4rem] lg:p-0 ">
          <div className="flex flex-col gap-1 relative ">
            <div className="px-4 py-1 border rounded-full w-fit backdrop-blur backdrop-brightness-50 font-open font-extralight text-[14px] bg-secondry shadow-md shadow-secondry z-[5] ">
              Reimagine the World!
            </div>
            <h1 className="md:text-[3rem] font-poppins font-bold leading-tight drop-shadow-lg drop-shadow-primary z-[5] text-3xl">
              How Can Cutting-Edge Technology Help you
            </h1>
            <h2 className="text-primary text-xl font-semibold z-[5] shadow-text">
              <Typing />
            </h2>
            <p className="text-gray font-open font-light z-[5] lg:text-[14px] text-[1rem] hidden md:flex md:w-3/4">
              Check AI a next generation startup, artificial intelligence
              company, leverages advance architecture and distributed computing
              to bring AI to the masses while solving real world problems
            </p>
            <div className="w-[20rem] h-[20rem]   rounded-full   absolute -top-[50%] lg:-left-[2rem] -z-1  shadow-box bg-primary/5 left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/4 lg:translate-y-0"></div>
          </div>
          <div className="lg:flex lg:items-center gap-3 justify-start w-full flex-col lg:flex-row items-start hidden">
            <Link href="#services" className="btn btn-1" aria-label={"service"}>
              start Exploring
            </Link>
            <Link
              href="#benefits"
              className="btn btn-2 group"
              aria-label={"benifits"}>
              learn more <IoMdArrowForward className="group-hover:ml-3" />
            </Link>
          </div>
        </Scroll>

        <Scroll className="lg:w-1/2  w-full h-full  lg:items-center flex-col justify-center gap-3 overflow-hidden relative object-contain shadow-box-hero  hidden md:flex lg:flex">
          {/* <Tilty
            scale={1.2}
            reverse
            axis="X"
            easing="cubic-bezier(0.03,0.98,0.52,0.99)">
            <Image
              src="/assets/img/hero.png"
              width="1000"
              height="1000"
              alt="img"
              className="object-contain  lg:block w-full h-full"
            />
          </Tilty> */}
          <HeroBanner />
        </Scroll>
        <Image
          src="/assets/img/hero.png"
          width="1000"
          height="1000"
          alt="img"
          className="object-contain   md:hidden lg:hidden  w-full h-full"
        />

        <div className="lg:hidden flex lg:items-center gap-3 justify-start w-full flex-col md:flex-row items-start">
          <Link href="#services" className="btn btn-1" aria-label={"services"}>
            start Exploring
          </Link>
          <Link
            href="#benefits"
            className="btn btn-2 group"
            aria-label={"benifits"}>
            learn more <IoMdArrowForward className="group-hover:ml-3" />
          </Link>
        </div>
      </div>
      {/* </Scroll> */}
    </section>
  );
}

export default Hero;
