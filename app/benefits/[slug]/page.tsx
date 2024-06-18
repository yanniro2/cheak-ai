import React from "react";
import data from "@/data/benifitsData.json";
import Image from "next/image";
import Title from "@/components/mini/Title";
import Scroll from "@/components/animation/Scroll";
import {
  AiOutlineRobot,
  AiOutlineMobile,
  AiOutlineLayout,
  AiOutlineSmile,
  AiOutlineTool,
  AiOutlineSafety,
  AiOutlineBulb,
  AiOutlineAppstoreAdd,
  AiOutlinePicture,
  AiOutlineColumnWidth,
  AiOutlineFontSize,
  AiOutlineBgColors,
  AiOutlineInteraction,
  AiOutlineGlobal,
  AiOutlineTablet,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineRocket,
  AiOutlineComment,
} from "react-icons/ai";
import NextNavigation from "@/components/mini/NextNavigation";
import Link from "next/link";
import { generateMetadata } from "@/components/meta/generateMetadata";

export function generateStaticParams() {
  return [
    { slug: "dedicated-artificial-intelligence" },
    { slug: "fully-responsive-mobile-friendly" },
    { slug: "clean-modern-design-layout" },
    { slug: "multi-device-testing-system" },
    { slug: "great-user-experience" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const { benefits } = data;
  const serviceToRender = benefits.find(
    (service) => service.url === `/benefits/${params.slug}`
  );

  if (!serviceToRender) return <div>Service not found</div>;

  return (
    <section className="layout-1">
      <div className="container-layout">
        <Title
          title={serviceToRender.title}
          subtitle={serviceToRender.subTitle}
        />
        <Scroll className="w-full">
          <Link
            href="/benefits"
            className="cursor-pointer hover:text-primary underline text transition-all"
            aria-label={"benifits"}>
            Back
          </Link>
        </Scroll>
        <Scroll className="w-full h-full">
          <Image
            src={serviceToRender.img.src}
            alt={serviceToRender.img.alt}
            width={1000}
            height={800}
            className="w-full h-full object-cover"
          />
        </Scroll>

        <Scroll className="w-full py-[2rem]">
          <h1 className="h1">Overview</h1>
          <div className="flex text flex-col gap-[1rem]">
            <p>{serviceToRender.description}</p>
            <p>{serviceToRender.overview}</p>
          </div>
        </Scroll>

        <Scroll className="w-full py-[2rem]">
          <Scroll className="h1">Key Features</Scroll>

          <Scroll className="grid lg:grid-cols-2 gap-3">
            {serviceToRender.key_features.map((feature, index) => (
              <Scroll
                key={index}
                className="cursor-pointer hover:bg-lighDark p-5 rounded transition-all ease-linear hover:shadow hover:shadow-primar bg-lighDark">
                <Scroll className="font-semibold font-poppins pb-[1rem]">
                  {feature.title}
                </Scroll>
                <p className="text">{feature.description}</p>
              </Scroll>
            ))}
          </Scroll>
        </Scroll>

        <Scroll className="flex  justify-between gap-[1rem] lg:flex-row flex-col">
          {serviceToRender.sub_sections.map((subSection, index) => (
            <Scroll
              key={index}
              className="p-3 rounded flex flex-col  gap-3  cursor-pointer hover:scale-105 transition-all ease-linear group hover:shadow-md hover:shadow-primary border border-primary hover:bg-primary group">
              <div className="icons-1">{renderIcon(subSection.icon)}</div>
              <h2 className="text-xl font-poppins font-semibold ">
                {subSection.title}
              </h2>
              <p className="text font-open group-hover:text-white">
                {subSection.brief}
              </p>
              <div className="flex flex-wrap gap-1">
                {subSection.examples.map((example, idx) => (
                  <p
                    key={idx}
                    className="btn btn-1 group-hover:bg-white group-hover:text-primary transition-all">
                    {example}
                  </p>
                ))}
              </div>
            </Scroll>
          ))}
        </Scroll>
        <NextNavigation
          slug={params.slug}
          data={benefits}
          service={"benefits"}
        />
      </div>
    </section>
  );
}
const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    AiOutlineRobot,
    AiOutlineMobile,
    AiOutlineLayout,
    AiOutlineSmile,
    AiOutlineTool,
    AiOutlineSafety,
    AiOutlineBulb,
    AiOutlinePicture,
    AiOutlineAppstoreAdd,
    AiOutlineColumnWidth,
    AiOutlineFontSize,
    AiOutlineBgColors,
    AiOutlineInteraction,
    AiOutlineGlobal,
    AiOutlineTablet,
    AiOutlineUser,
    AiOutlineEye,
    AiOutlineRocket,
    AiOutlineComment,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export { generateMetadata };
