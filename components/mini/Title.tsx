import React from "react";
import Scroll from "../animation/Scroll";
import { TitleProps } from "@/types";

const Title = (props: TitleProps) => {
  return (
    <Scroll className="flex w-full  flex-col items-center md:text-left text-center md:py-[3rem]">
      <h1 className="uppercase text-orange  text-4xl font-popins font-bold font-poppins">
        {props.title}
      </h1>
      <h2 className="capitalize  font-open text-primary">{props.subtitle}</h2>
    </Scroll>
  );
};

export default Title;
