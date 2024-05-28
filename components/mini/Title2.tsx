import React from "react";
import Scroll from "../animation/Scroll";
import { TitleProps } from "@/types";

const Title = (props: TitleProps) => {
  return (
    <Scroll className="flex w-full  flex-col items-start md:text-left text-left pb-[1rem]">
      <h1 className="uppercase text-orange  text-4xl font-popins font-bold font-poppins text-primary">
        {props.title}
      </h1>
      <h2 className="capitalize  font-open text">{props.subtitle}</h2>
    </Scroll>
  );
};

export default Title;
