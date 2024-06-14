import React from "react";
import Title1 from "@/components/mini/Title";
import { Metadata } from "next";
import Terms from "@/components/Terms";
type Props = {};

export const metadata: Metadata = {
  title: "Terms and Conditions",
};
const page = (props: Props) => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"Terms and Conditions"}
          subtitle={"Learn our policies and guidelines."}
        />
        <Terms />
      </div>
    </section>
  );
};

export default page;
