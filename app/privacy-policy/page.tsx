import React from "react";
import Title1 from "@/components/mini/Title";
import { Metadata } from "next";
import Terms from "@/components/Terms";
import Banner from "@/components/Banner";
import Privacy from "@/components/Privacy";


export const metadata: Metadata = {
  title: "Privacy Policy",
};
const page = () => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow">
      <div className="container mx-auto p-3 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"Privacy Policy"}
          subtitle={"How we protect your data."}
        />
        <Privacy />
      </div>
      <Banner />
    </section>
  );
};

export default page;
