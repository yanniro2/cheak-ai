import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const Title = (props: Props) => {
  return (
    <div className="flex w-full  flex-col items-start md:text-left text-left pb-[1rem]">
      <h1 className="uppercase text-orange  text-4xl font-popins font-bold font-poppins text-primary">
        {props.title}
      </h1>
      <h2 className="capitalize  font-open text">{props.subtitle}</h2>
    </div>
  );
};

export default Title;
