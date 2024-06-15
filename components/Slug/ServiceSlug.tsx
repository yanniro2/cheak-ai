import Link from "next/link";
import React from "react";
import Scroll from "../animation/Scroll";
import NextNavigation from "../mini/NextNavigation";
import Title from "../mini/Title";
import Image from "next/image";
import { ServiceSlugProps } from "@/types";

function ServiceSlug({
  title,
  subTitle,
  main,
  description,
  content,
  img,
  params,
  data,
}: ServiceSlugProps) {
  return (
    <section className="layout-1">
      <div className="container-layout">
        <Title title={title} subtitle={subTitle}></Title>
        <Scroll className="w-full">
          <Link
            href="/services"
            className="cursor-pointer hover:text-primary underline text transition-all">
            Back
          </Link>
        </Scroll>
        <Scroll className="flex w-full items-center justify-between md:gap-[3rem] bg-lighDark md:p-[2rem] rounded shadow-lg md:flex-row flex-col-reverse text-center md:text-left p-3 gap-3 ">
          <Scroll className="md:w-3/4 md:text-xl font-light font-open text-white w-full">
            {main}
          </Scroll>
          <Scroll className="md:w-1/4 text-primary font-poppins w-full">
            {description}
          </Scroll>
        </Scroll>
        <Scroll className="w-full flex items-center justify-between lg:flex-row-reverse flex-col gap-[1rem]">
          <Scroll className="lg:w-1/2 flex flex-col rounded gap-[1rem] bg-lighDark md:p-[3rem] p-5">
            <div className="flex flex-col">
              <Scroll className="text-xl font-open font-semibold uppercase text-primary">
                {subTitle}
              </Scroll>
              <Scroll className="text-white font-poppins text-[2rem] font-medium leading-none ">
                {content.main}
              </Scroll>
            </div>
            <Scroll className="flex flex-col gap-3">
              <Scroll className="text">{description}</Scroll>
              <Scroll className="text">{content.p1}</Scroll>
              <Scroll className="text">{content.p2}</Scroll>
            </Scroll>
          </Scroll>
          <Scroll className="lg:w-1/2">
            <Image
              src={img.src}
              width={"1000"}
              height={"1000"}
              alt={img.alt}
              className="rounded object-cover"
            />
          </Scroll>
        </Scroll>
        <NextNavigation slug={params.slug} data={data} service={"services"} />
      </div>
    </section>
  );
}

export default ServiceSlug;
