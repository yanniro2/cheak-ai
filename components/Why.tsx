import React from 'react'
import Title1 from "@/components/mini/Title";
type Props = {};

const Why = (props: Props) => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="why-choose-us">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] py-[4rem]">
        <Title1 title={"Why Choose Us"} subtitle={"Core Features"} />
      </div>
    </section>
  );
};

export default Why